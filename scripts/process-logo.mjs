import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC = path.resolve(__dirname, "..", "public", "greta-orto-logo.png");
const OUT_TRANSPARENT = path.resolve(__dirname, "..", "public", "greta-orto-logo-trim.png");
const OUT_HEADER = path.resolve(__dirname, "..", "public", "greta-orto-logo-header.png");
const OUT_HEADER_2X = path.resolve(__dirname, "..", "public", "greta-orto-logo-header@2x.png");
const OUT_FAVICON = path.resolve(__dirname, "..", "public", "greta-orto-mark.png");

const WHITE_THRESHOLD = 245;

async function whiteToTransparent(buffer) {
	const img = sharp(buffer).ensureAlpha();
	const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
	const { width, height, channels } = info;
	const out = Buffer.from(data);
	for (let i = 0; i < out.length; i += channels) {
		const r = out[i];
		const g = out[i + 1];
		const b = out[i + 2];
		if (r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD) {
			out[i + 3] = 0;
		}
	}
	return sharp(out, { raw: { width, height, channels } }).png();
}

async function main() {
	const trimmed = await (await whiteToTransparent(SRC))
		.trim({ background: { r: 255, g: 255, b: 255, alpha: 0 }, threshold: 1 })
		.toBuffer();
	await sharp(trimmed).png({ compressionLevel: 9 }).toFile(OUT_TRANSPARENT);

	const meta = await sharp(trimmed).metadata();
	console.log("Trimmed size:", meta.width, "x", meta.height);

	await sharp(trimmed)
		.resize({ height: 120, fit: "inside", withoutEnlargement: false })
		.png({ compressionLevel: 9 })
		.toFile(OUT_HEADER);

	await sharp(trimmed)
		.resize({ height: 240, fit: "inside", withoutEnlargement: false })
		.png({ compressionLevel: 9 })
		.toFile(OUT_HEADER_2X);

	const meta2 = await sharp(OUT_HEADER).metadata();
	console.log("Header logo:", meta2.width, "x", meta2.height);

	const markHeightInTrim = Math.floor(meta.height * 0.5);
	const topHalf = await sharp(trimmed)
		.extract({ left: 0, top: 0, width: meta.width, height: markHeightInTrim })
		.toBuffer();

	const { data: alphaData, info: alphaInfo } = await sharp(topHalf)
		.ensureAlpha()
		.raw()
		.toBuffer({ resolveWithObject: true });
	let minX = alphaInfo.width;
	let maxX = 0;
	let minY = alphaInfo.height;
	let maxY = 0;
	for (let y = 0; y < alphaInfo.height; y++) {
		for (let x = 0; x < alphaInfo.width; x++) {
			const a = alphaData[(y * alphaInfo.width + x) * alphaInfo.channels + 3];
			if (a > 20) {
				if (x < minX) minX = x;
				if (x > maxX) maxX = x;
				if (y < minY) minY = y;
				if (y > maxY) maxY = y;
			}
		}
	}
	const markFromTrim = await sharp(topHalf)
		.extract({
			left: minX,
			top: minY,
			width: maxX - minX + 1,
			height: maxY - minY + 1,
		})
		.toBuffer();

	const markMeta = await sharp(markFromTrim).metadata();
	console.log("Mark size:", markMeta.width, "x", markMeta.height);

	const padded = await sharp(markFromTrim)
		.extend({
			top: Math.floor(markMeta.height * 0.05),
			bottom: Math.floor(markMeta.height * 0.05),
			left: Math.floor(markMeta.height * 0.05),
			right: Math.floor(markMeta.height * 0.05),
			background: { r: 0, g: 0, b: 0, alpha: 0 },
		})
		.toBuffer();

	await sharp(padded)
		.resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
		.png({ compressionLevel: 9 })
		.toFile(OUT_FAVICON);

	const MARK_HEADER = path.resolve(__dirname, "..", "public", "greta-orto-mark-header.png");
	const MARK_HEADER_2X = path.resolve(__dirname, "..", "public", "greta-orto-mark-header@2x.png");
	await sharp(padded)
		.resize({ height: 96, fit: "inside" })
		.png({ compressionLevel: 9 })
		.toFile(MARK_HEADER);
	await sharp(padded)
		.resize({ height: 192, fit: "inside" })
		.png({ compressionLevel: 9 })
		.toFile(MARK_HEADER_2X);

	console.log("Done.");
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});

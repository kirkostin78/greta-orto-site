/**
 * Копирует и оптимизирует фото из Мастер_Сайт/04_Визуал в public/media/home/
 * Запуск из корня greta-orto-site: node scripts/import-home-photos.mjs
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.join(__dirname, "..");

const ROOT = path.join(
	SITE_ROOT,
	"..",
	"Грета_Орто",
	"04_Интернет-маркетинг",
	"Мастер_Сайт",
	"04_Визуал",
	"01_Фото",
);

const OUT = path.join(SITE_ROOT, "public", "media", "home");

const JOBS = [
	{ out: "hero.jpg", from: path.join("04_Услуги_процессы", "CR6_2039.jpg") },
	{ out: "how-1-consultation.jpg", from: path.join("04_Услуги_процессы", "CR6_2356.jpg") },
	{ out: "how-2-diagnostics.jpg", from: path.join("04_Услуги_процессы", "CR6_2370.jpg") },
	{ out: "how-3-plan.jpg", from: path.join("04_Услуги_процессы", "CR6_1961.jpg"), cropBottomRatio: 0.08 },
	{ out: "how-4-treatment.jpg", from: path.join("04_Услуги_процессы", "CR6_2017.jpg") },
	{ out: "doctor-kostina-ds.jpg", from: path.join("01_Врачи", "CR6_2130.jpg") },
	{ out: "doctor-kostin-ka.jpg", from: path.join("01_Врачи", "CR6_2210.jpg") },
	{ out: "doctor-borisova.jpg", from: path.join("01_Врачи", "CR6_2118.jpg") },
	{ out: "doctor-davydova.jpg", from: path.join("01_Врачи", "CR6_2125.jpg") },
	{ out: "tech-klkt.jpg", from: path.join("02_Интерьер_клиники", "CR6_1928.jpg") },
	{ out: "tech-scanner.jpg", from: path.join("04_Услуги_процессы", "CR6_2411.jpg") },
	{ out: "tech-ortocheck.jpg", from: path.join("04_Услуги_процессы", "CR6_2018.jpg") },
	{ out: "tech-micro.jpg", from: path.join("04_Услуги_процессы", "CR6_1920.jpg") },
	{ out: "gallery-1.jpg", from: path.join("02_Интерьер_клиники", "CR6_2011.jpg") },
	{ out: "gallery-2.jpg", from: path.join("02_Интерьер_клиники", "CR6_1978.jpg") },
	{ out: "gallery-3.jpg", from: path.join("02_Интерьер_клиники", "CR6_1914.jpg") },
	{ out: "gallery-4.jpg", from: path.join("02_Интерьер_клиники", "8F7A0106.jpg") },
	{ out: "gallery-5.jpg", from: path.join("02_Интерьер_клиники", "8F7A0119.jpg") },
];

async function processOne(job) {
	const { out, from, cropBottomRatio = 0 } = job;
	const src = path.resolve(ROOT, from);
	const dest = path.join(OUT, out);
	const raw = sharp(src);
	const meta = await raw.metadata();
	let pipeline = sharp(src).rotate();

	if (cropBottomRatio > 0 && meta.width && meta.height) {
		const h = Math.floor(meta.height * (1 - cropBottomRatio));
		pipeline = sharp(src)
			.rotate()
			.extract({ left: 0, top: 0, width: meta.width, height: h });
	}

	await pipeline
		.resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
		.jpeg({ quality: 84, mozjpeg: true })
		.toFile(dest);

	console.log("OK", out);
}

const main = async () => {
	await mkdir(OUT, { recursive: true });
	console.log("From:", path.resolve(ROOT));
	console.log("To:", path.resolve(OUT));
	for (const j of JOBS) {
		await processOne(j);
	}
};

main().catch((e) => {
	console.error(e);
	process.exit(1);
});

/**
 * Подбор viewBox по контуру path: `node scripts/svg-trim-bbox.mjs public/greta-orto-logo.svg`
 * Требуется devDependency `svg-path-bounds`.
 */
import fs from "node:fs";
import pathBounds from "svg-path-bounds";

const file = process.argv[2] || "public/greta-orto-logo.svg";
const xml = fs.readFileSync(file, "utf8");
const paths = [...xml.matchAll(/<path[^>]+d="([^"]+)"/g)].map((m) => m[1]);
let minX = Infinity;
let minY = Infinity;
let maxX = -Infinity;
let maxY = -Infinity;
for (const d of paths) {
	const [x0, y0, x1, y1] = pathBounds(d);
	minX = Math.min(minX, x0);
	minY = Math.min(minY, y0);
	maxX = Math.max(maxX, x1);
	maxY = Math.max(maxY, y1);
}
const pad = 4;
minX -= pad;
minY -= pad;
maxX += pad;
maxY += pad;
const w = maxX - minX;
const h = maxY - minY;
console.log(JSON.stringify({ minX, minY, maxX, maxY, w, h, viewBox: `${minX} ${minY} ${w} ${h}` }, null, 2));

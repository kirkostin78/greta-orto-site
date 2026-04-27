/**
 * Пути к оптимизированным фото главной (генерируются scripts/import-home-photos.mjs).
 * Исходники: Грета_Орто/.../04_Визуал/01_Фото/
 */
export const homeHero = {
	src: "/media/home/hero.jpg",
	alt: "Основатели клиники: Костин Кирилл Александрович и Костина Дария Сергеевна — Грета Орто, Санкт‑Петербург",
} as const;

export const howSteps = [
	{
		src: "/media/home/how-1-consultation.jpg",
		alt: "Врач и пациентка в кабинете клиники: приём и цифровой план на экране",
	},
	{
		src: "/media/home/how-2-diagnostics.jpg",
		alt: "3D-сканирование зубов интраоральным сканером",
	},
	{
		src: "/media/home/how-3-plan.jpg",
		alt: "План лечения на экране: цифровая модель зубов",
	},
	{
		src: "/media/home/how-4-treatment.jpg",
		alt: "Прозрачные элайнеры в руках врача",
	},
] as const;

export const doctorPhotos = [
	{
		id: "kostina-ds",
		src: "/media/home/doctor-kostina-ds.jpg",
		alt: "Костина Дария Сергеевна — главный врач, ортодонт, клиника Грета Орто",
	},
	{
		id: "kostin-ka",
		src: "/media/home/doctor-kostin-ka.jpg",
		alt: "Костин Кирилл Александрович — главный врач клиники, стоматолог-ортопед",
	},
	{
		id: "borisova",
		src: "/media/home/doctor-borisova.jpg",
		alt: "Борисова Анастасия Сергеевна — врач-ортодонт, гигиенист",
	},
	{
		id: "davydova",
		src: "/media/home/doctor-davydova.jpg",
		alt: "Давыдова Юлия Радиевна — врач-ортодонт, гигиенист",
	},
] as const;

export const techPhotos = [
	{
		src: "/media/home/tech-klkt.jpg",
		alt: "Современный кабинет: диагностика и лечение в клинике Грета Орто",
	},
	{
		src: "/media/home/tech-scanner.jpg",
		alt: "Интраоральное 3D-сканирование зубов",
	},
	{
		src: "/media/home/tech-ortocheck.jpg",
		alt: "Прозрачные элайнеры в руках врача — наглядно на этапе планирования",
	},
	{
		src: "/media/home/tech-micro.jpg",
		alt: "Стоматологический микроскоп Zumax в клинике",
	},
] as const;

export const galleryPhotos = [
	{ src: "/media/home/gallery-1.jpg", alt: "Навигация по кабинетам клиники Грета Орто" },
	{ src: "/media/home/gallery-2.jpg", alt: "Микроскоп и оборудование в кабинете" },
	{ src: "/media/home/gallery-3.jpg", alt: "Деталь микроскопа Zumax" },
	{ src: "/media/home/gallery-4.jpg", alt: "Интерьер клиники, зона ожидания" },
	{ src: "/media/home/gallery-5.jpg", alt: "Клиника Грета Орто, современные интерьеры" },
] as const;

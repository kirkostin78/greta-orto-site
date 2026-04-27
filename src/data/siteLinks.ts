/** Мобильный клиники (+7 994 416-85-68) — для ссылки Telegram */
const mobilePhone11 = "79944168568";

/**
 * Внешние URL: при смене номеров / карточки в Яндексе / страницы записи правьте здесь.
 */
export const siteLinks = {
	/** Карточка организации (рейтинг и отзывы) */
	yandexOrg: "https://yandex.ru/profile/162217355551?lang=ru",
	/** Онлайн-запись с выбором врача (виджет Dental Pro на gretaorto.ru) */
	onlineBooking: "https://gretaorto.ru/zapis-na-priem",
	/** Telegram: тот же мобильный номер клиники */
	telegram: `https://t.me/+${mobilePhone11}`,
	/** Профиль в MAX (чат с клиникой / врачом) */
	max: "https://max.ru/u/f9LHodD0cOKJzR6soGSaG3Lvm5bA_evitan48DWBxSu28vDRUeZy4fuMpQ8",
} as const;

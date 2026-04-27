/**
 * Мобильный клиники (+7 994 416-85-68) — тот же номер в Telegram и Max.
 * Для Max: параметр `phone` без плюса, 11 цифр, начиная с 7.
 */
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
	/** Max: по тому же номеру (официальный формат max.ru) */
	max: `https://max.ru/?phone=${mobilePhone11}`,
} as const;

/**
 * Внешние URL: при смене мессенджеров / карточки в Яндексе / страницы записи правьте здесь.
 */
export const siteLinks = {
	/** Карточка организации (рейтинг и отзывы) */
	yandexOrg: "https://yandex.ru/profile/162217355551?lang=ru",
	/** Онлайн-запись с выбором врача (виджет Dental Pro на gretaorto.ru) */
	onlineBooking: "https://gretaorto.ru/zapis-na-priem",
	/** Telegram: номер клиники в формате t.me */
	telegram: "https://t.me/+79944168568",
	/**
	 * Мессенджер Max: подставьте ссылку вида https://max.ru/ник из приложения Max
	 * (Профиль → ник → копировать ссылку). До вставки реального URL иконка ведёт в каталог max.ru
	 */
	max: "https://max.ru",
} as const;

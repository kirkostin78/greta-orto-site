# Greta Orto Site

Многостраничный сайт центра прозрачной ортодонтии «Грета Орто» (Санкт-Петербург).

Цель: ТОП-1 в Яндекс СПб по ключевой семантике (`элайнеры спб` и связанные).

## Стек

- **Astro 6** + **MDX** + **Astro Sitemap**
- **TypeScript** для конфигурации и content collections
- Хостинг: **Cloudflare Pages** (auto-deploy на push в `main`)
- Домен: `greta-orto.ru`
- Текущий статус: разработка, весь сайт под `noindex,nofollow`

## Архитектура

### Pillar-cluster модель

10 опорных pillar-страниц + ~38 кластерных + ~12 брендовых = ~60 страниц на старте.

Карта сайта v1: см. `Грета_Орто/04_Интернет-маркетинг/Мастер_Сайт/02_Архитектура_Сайта/Карта_сайта_v1.md` в основном репозитории клиники.

### Структура папок

```
src/
  components/        — переиспользуемые UI: SiteHeader, SiteFooter, CTA, FAQ, Breadcrumbs
  layouts/           — BaseLayout, PillarLayout, ClusterLayout, BrandLayout
  pages/             — pillar-страницы как .astro (index.astro в каждой папке)
  content/
    cluster/         — Tier-2 кластерные страницы как .mdx (планируется)
    brand/           — Tier-3 брендовые страницы как .mdx (планируется)
  content.config.ts  — schema для content collections
public/
  _redirects         — Cloudflare Pages редиректы со старых URL
  robots.txt         — закрыто от индексации (этап разработки)
```

### URL-конвенция

Slug'и URL — транслит русских слов (`/elajnery/`, `/brekety/`, `/prikus/distalnyj/`).
Все URL заканчиваются слешем (`trailingSlash: "always"` в `astro.config.mjs`).

## Команды

```bash
npm install     # установить зависимости
npm run dev     # запустить локальный dev-сервер
npm run build   # production-сборка в ./dist
npm run preview # запуск превью production-сборки
```

## Деплой

Любой push в `main` запускает Cloudflare Pages билд и публикацию.

Конфигурация Cloudflare Pages:
- Framework: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION=22`

## Что будет в следующих итерациях

1. Контент Tier-1 pillar-страниц (полные лонгриды по ТЗ)
2. Tier-2 кластерные страницы через content collections (MDX)
3. Tier-3 брендовые страницы (MDX)
4. Снятие `noindex` после первой волны индексабельного контента
5. Виджет онлайн-записи (Dental Pro / альтернатива)
6. Калькулятор стоимости лечения

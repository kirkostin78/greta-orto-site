# greta-orto-site

Сайт клиники ортодонтии **Грета Орто** (Санкт-Петербург).

- **Стек:** Astro + MDX + Cloudflare Pages
- **Staging (dev) домен:** `greta-orto.ru`
- **Production домен (после запуска):** `gretaorto.ru`
- **Статус:** в активной разработке (неделя 1 из 12)

Полный план, семантика, дизайн-система и контент-стратегия хранятся в рабочем воркспейсе `Грета_Орто/04_Интернет-маркетинг/Мастер_Сайт/`.

---

## Разработка

Требуется Node.js **≥ 22.12.0** (см. `.nvmrc`).

```sh
npm install
npm run dev      # локальный сервер http://localhost:4321
npm run build    # production-билд в ./dist
npm run preview  # предпросмотр production-билда
```

---

## Структура

```text
greta-orto-site/
├─ public/            # статика (favicon, изображения, robots.txt)
├─ src/
│  ├─ content/        # MDX-контент (статьи, страницы услуг) — появится со 2-й недели
│  ├─ components/     # Astro-компоненты — появятся с 4-й недели
│  ├─ layouts/        # шаблоны страниц — появятся с 4-й недели
│  └─ pages/          # маршруты сайта
├─ astro.config.mjs
├─ package.json
└─ tsconfig.json
```

---

## Деплой

Любой `git push` в ветку `main` → автоматический билд и деплой через Cloudflare Pages (настраивается в четверг недели 1).

---

## Лицензия

Proprietary. Все права защищены.

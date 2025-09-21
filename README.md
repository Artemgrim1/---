# Arbat — MVP доска объявлений

Готовый стартовый проект (Next.js + Tailwind + Prisma + PostgreSQL). Если база не настроена — страница покажет демо‑данные, чтобы сразу видеть сетку карточек.

## Быстрый старт

```bash
# 1) Установи зависимости
npm i

# 2) (Опционально) Подними локальную БД в Docker
docker compose up -d
cp .env.example .env

# 3) Миграции и сиды
npm run prisma:generate
npm run db:migrate
npm run db:seed

# 4) Запуск
npm run dev
```
Открой http://localhost:3000

## Коммиты
```bash
git add .
git commit -m "feat: bootstrap Arbat MVP"
git push origin main
```

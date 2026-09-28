# SKILLUP — Auth + Cloud

Готовая статическая версия для GitHub Pages с Supabase Auth и облачным сохранением прогресса.

## 1. Supabase

Открой Supabase → SQL Editor и запусти `supabase_schema.sql`.

В коде уже указан publishable key. Secret key сюда не добавляется.

## 2. Email confirmation

Если в Supabase включено подтверждение email, после регистрации пользователь должен подтвердить почту и затем войти.

## 3. GitHub Pages

Загрузи файлы из этой папки в корень репозитория:

- index.html
- app.js
- styles.css
- manifest.json
- sw.js
- supabase_schema.sql
- README.md

Затем GitHub → Settings → Pages → Deploy from a branch → main → /(root).

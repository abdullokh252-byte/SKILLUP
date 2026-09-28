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


## Автоматический вход после подтверждения email

В Supabase открой **Authentication → URL Configuration** и добавь Redirect URL:

`https://abdullokh252-byte.github.io/SKILLUP/`

Эту же ссылку можно поставить как Site URL. После регистрации пользователь получает письмо. После нажатия ссылки подтверждения Supabase возвращает его на SKILLUP, а приложение автоматически открывает аккаунт — отдельно нажимать «Войти» не нужно.

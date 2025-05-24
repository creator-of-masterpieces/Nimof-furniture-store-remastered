# Nimof — интернет-магазин мебели

Проект представляет собой рабочий интернет-магазин мебели, разработанный на чистом HTML, CSS и JavaScript. Основная цель — создать адаптивный, современный и удобный сайт, в котором пользователи могут просматривать каталог товаров, открывать страницы с описанием продукции и получать контактную информацию компании. Реализация без использования фреймворков.

## 📌 Цель проекта

Создание полноценного и функционального интернет-магазина мебели с чистым кодом и хорошей архитектурой. Без корзины, но с полной навигацией и фильтрацией.

## 🚀 Стек технологий

- HTML5, CSS3, JavaScript (vanilla)
- Сборка: Vite
- Редактор: WebStorm
- Данные: JSON
- API: Яндекс.Карты (для страницы Контакты)


## 📂 Структура проекта

```
nimof/
├── src/
│   ├── index.html
│   ├── catalog.html
│   ├── product.html
│   ├── about.html
│   ├── contacts.html
│
│   ├── css/
│   │   ├── style.css
│   │   └── variables.css
│
│   ├── js/
│   │   ├── main.js
│   │   ├── catalog.js
│   │   ├── product.js
│   │   ├── map.js
│   │   └── utils.js
│
│   ├── data/
│   │   └── products.json
│
│   ├── images/
│   │   └── furniture/
│
│   └── blocks/
│       ├── header/
│       │   ├── header.html
│       │   └── header.css
│       ├── hero/
│       │   ├── hero.html
│       │   └── hero.css
│       └── footer/
│           ├── footer.html
│           └── footer.css
│
├── package.json
├── vite.config.js
└── .gitignore
```

## 📄 Страницы

- **Главная** (`index.html`) — баннер, хиты продаж
- **Каталог** (`catalog.html`) — список товаров, фильтрация
- **Страница товара** (`product.html`) — описание и характеристики
- **О нас** (`about.html`) — информация о компании
- **Контакты** (`contacts.html`) — адрес, контактная форма, Яндекс.Карта

## 📱 Адаптивность

Сайт разработан по стратегии Mobile First и оптимизирован под следующие разрешения:

| Устройство               | Ширина экрана     |
|--------------------------|-------------------|
| 📱 Малые смартфоны       | 320px – 479px     |
| 📱 Обычные смартфоны     | 480px – 767px     |
| 📲 Планшеты              | 768px – 1023px    |
| 💻 Ноутбуки              | 1024px – 1439px   |
| 🖥 Десктопы и мониторы    | 1440px и выше     |

Применяются медиазапросы:

```css
@media (min-width: 768px) { ... }     /* Планшеты */
@media (min-width: 1024px) { ... }    /* Ноутбуки */
@media (min-width: 1440px) { ... }    /* Десктопы */
```

## 🧾 Лицензия

Этот проект распространяется под лицензией [MIT](LICENSE).

## ☁️ Деплой на GitHub Pages

Так как проект собран с помощью Vite, рекомендуется деплоить через отдельную ветку `gh-pages`.

### Шаги:

1. Установить `gh-pages`:

```bash
npm install gh-pages --save-dev
```

2. Добавить в `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Запустить:

```bash
npm run deploy
```

После этого сайт будет доступен по адресу:
`https://<username>.github.io/Nimof-furniture-store-remastered/`

## 📛 Бейджи

![HTML](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)

// Импортирую иконки
import { createIcons, icons } from 'lucide';
// Импортируем нашу функцию, чтобы можно было вызвать её позже
import { initYandexMap } from './map';
// Импортируем скрипт загрузки спрайта
import { loadSprite } from './loadSprite.js';

    document.addEventListener('DOMContentLoaded', () => {
        createIcons({
            icons, // подключает все иконки
            attrs: {
                stroke: 'currentColor',
                width: 32,
                height: 32
            }
        });
    });

document.addEventListener('DOMContentLoaded', () => {
    // Проверяем: есть ли на странице элемент с id="yandex-map"
    const mapBlock = document.getElementById('yandex-map');

    // Если карта на странице есть — подключаем скрипт Яндекс. Карт
    if (mapBlock) {
        // Создаём новый тег <script>
        const script = document.createElement('script');

        // Указываем ссылку на Яндекс. Карту и передаём API-ключ
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=bea634ec-05c1-4206-8fa2-01792f8d3df1';

        // Когда карта загрузится — вызываем нашу функцию
        script.onload = initYandexMap;

        // Добавляем <script> в <body>, чтобы он выполнился
        document.body.appendChild(script);
    }
});

// загрузка спрайта при старте
loadSprite().catch((error)=>{
    console.error('Ошибка при загрузке спрайта:', error);
});


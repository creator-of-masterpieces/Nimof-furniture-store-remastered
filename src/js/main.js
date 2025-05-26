// src/js/main.js
import { createIcons, icons } from 'lucide';

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

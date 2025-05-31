// Загружает спрайт и вставляет в <body>
export async function loadSprite() {
    try {
        const response = await fetch('/sprite.svg'); // Vite подставит абсолютный путь
        const spriteText = await response.text();

        const div = document.createElement('div');
        div.style.display = 'none'; // не отображаем спрайт
        div.innerHTML = spriteText;

        document.body.prepend(div); // вставляем перед всем контентом
    } catch (error) {
        console.error('Ошибка при загрузке SVG спрайта:', error);
    }
}
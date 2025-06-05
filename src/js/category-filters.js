// Функция инициализирует фильтрацию карточек товаров по категориям
export function initCategoryFilters() {
    // Находим все чекбоксы внутри блока фильтров (с классом .category-filters__input)
    const checkboxes = document.querySelectorAll('.category-filters__input');

    // Находим все карточки товаров (с классом .product-card)
    const productCards = document.querySelectorAll('.product-card');

    // Навешиваем обработчик события на каждый чекбокс
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            // Получаем список выбранных категорий, исключая "Все категории"
            const selected = [...checkboxes]
                .filter(cb => cb.checked && cb.value !== 'all') // фильтруем по состоянию checked и исключаем "all"
                .map(cb => cb.value); // получаем массив значений выбранных чекбоксов

            // Если ничего не выбрано ИЛИ выбран "Все категории"
            if (selected.length === 0 || document.querySelector('input[value="all"]').checked) {
                // Показываем все карточки (удаляем класс .hidden)
                productCards.forEach(card => card.classList.remove('hidden'));
                return; // Прерываем выполнение функции
            }

            // Иначе — скрываем все карточки, которые не соответствуют выбранным категориям
            productCards.forEach(card => {
                const category = card.dataset.category; // получаем категорию карточки из атрибута data-category
                // если категория карточки НЕ входит в список выбранных — добавляем класс .hidden
                card.classList.toggle('hidden', !selected.includes(category));
            });
        });
    });
}

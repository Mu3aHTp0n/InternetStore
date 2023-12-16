const data = [
    {
        title: "Такт Опус. Судьба",
        desc: "タクトオーパス",
        img: 'https://animego.org/media/cache/thumbs_300x420/upload/anime/images/615c878c1eddb981173771.jpg',
        link: 'https://animego.org/anime/takt-opus-destini-1897',
    },
    {
        title: "Дневник будущего",
        desc: "未来日記",
        img: '	https://animego.org/media/cache/thumbs_300x420/upload/anime/images/5a85b72ba7fb3722238063.jpg',
        link: 'https://animego.org/anime/dnevnik-buduschego-ova-339',
    },
    {
        title: "Форма голоса",
        desc: "聲の形",
        img: 'https://animego.org/media/cache/thumbs_300x420/upload/anime/images/5c523c3e5f241184659117.jpg',
        link: 'https://animego.org/anime/forma-golosa-267',
    },
    {
        title: "За гранью",
        desc: "境界の彼方",
        img: 'https://animego.org/media/cache/thumbs_300x420/upload/anime/images/5cd998abc34d6942780067.jpg',
        link: 'https://animego.org/manga/za-granyu-769',
    },
]

// Находим контейнер со всеми карточками
const container = document.querySelector('.catalog');

data.forEach(item => {
    // Создаём элемент а с классом book__link
    const link = document.createElement('a');
    link.classList.add('book__link');
    
    // Создаём элемент а с классом book__link
    const card = document.createElement('div');
    card.classList.add('book')

    // Создаём элемент img с классом book__image
    const img = document.createElement('img');
    img.classList.add('book__image');

    // Создаём элемент div с классом book__about
    const about = document.createElement('div');
    about.classList.add('book__about');

    // Создаём элемент h3 с классом book__title
    const title = document.createElement('h3');
    title.classList.add('book__title');

    // Создаём элемент р с классом book__description
    const description = document.createElement('p');
    description.classList.add('book__description');

    // Изменяем содержимое для созданных заголовка и описания
    title.textContent = item.title;
    description.textContent = item.desc;

    // Добавление и присвоение значения для атрибутов
    link.href =  item.link;
    img.src = item.img;

    // Добавляем дочерние элементы
    link.appendChild(card);
    card.appendChild(img);
    card.appendChild(about);
    about.appendChild(title);
    about.appendChild(description);

    container.appendChild(link);
})
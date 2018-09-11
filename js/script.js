/*
 Реализовать возможность смены цветовой темы сайта пользователем.

 Технические требования:
 - Взять любое готовое домашнее задание по HTML/CSS.
 - Добавить на макете кнопку "Сменить тему".
 - При нажатии на кнопку - менять цветовую гамму сайта (цвета кнопок, фона и т.д.) на ваше усмотрение.
 При повтором нажатии - возвращать все как было изначально - как будто для страницы доступны две цветовых темы.
 - Выбранная тема должна сохраняться и после перезагрузки страницы
*/

let theme = localStorage.getItem('theme');

let loadTheme = (clazz, backgroundColor, color, cursor) => {
    Array.from(document.getElementsByClassName(clazz)).forEach((item) => {
        item.style.backgroundColor = backgroundColor;
        item.style.color = color;
        item.style.cursor = cursor;
        let style = document.createElement('style');
        let rules = document.createTextNode('.' + clazz + ':hover{color:' + backgroundColor + ' !important; background-color:' + color + ' !important}');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssRules = rules.nodeValue;
        } else {
            style.appendChild(rules);
        }
        item.appendChild(style);
    });
};

switch (theme) {
    case "1": {
        document.addEventListener("DOMContentLoaded", loadTheme("btn", "#16a085", "#ffffff", "pointer"));
        break;
    }
    case "2": {
        document.addEventListener("DOMContentLoaded", loadTheme("btn", "#ffffff", "#16a085", "pointer"));
        break;
    }
    default: {
        let theme = 1;
        localStorage.setItem('theme', String(theme));
        document.addEventListener("DOMContentLoaded", loadTheme("btn", "#16a085", "#ffffff", "pointer"));
    }
}

let changeTheme = () => {
    if (theme === "1") {
        loadTheme("btn", "#ffffff", "#16a085", "pointer");
        theme = "2";
    } else if (theme === "2") {
        loadTheme("btn", "#16a085", "#ffffff", "pointer");
        theme = "1";
    }
    localStorage.setItem('theme', theme);
};
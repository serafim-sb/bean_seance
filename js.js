const track = document.querySelector('.slider_track');
const nextBtn = document.querySelector('.feedback_next');
const backBtn = document.querySelector('.feedback_back');
const slides = document.querySelectorAll('.slider_item');
const sliderWindow = document.querySelector('.slider'); // Находим само окно слайдера

let index = 0;

// Функция для обновления позиции слайдера
function updateSliderPosition() {
    // Браузер сам скажет нам текущую ширину окна в пикселях (хоть 980px, хоть 320px)
    const currentWidth = sliderWindow.clientWidth; 
    track.style.transform = `translateX(-${index * currentWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    if (index < slides.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateSliderPosition();
});

backBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = slides.length - 1;
    }
    updateSliderPosition();
});

// Дополнительно: если пользователь перевернет телефон, слайдер не сломается
window.addEventListener('resize', updateSliderPosition);

const email_input = document.querySelector('.email_input');
const email_btn = document.querySelector('.email_btn');

email_btn.addEventListener('click', () =>{
    const email_text = email_input.value.trim();

    if(email_text === ''){
        alert("Введите email")
        return
    }
    console.log(`Почта: ${email_text}`);
    email_input.value = '';
    alert('Спасибо за подписку!');
})

const burgerBtn = document.querySelector('.burger_menu_btn');
    const closeBtn = document.querySelector('.close_menu_btn');
    const mobileMenu = document.querySelector('.mobile_menu');
    const mobileLinks = document.querySelectorAll('.mobile_link');

    // Открыть меню при клике на бургер
    burgerBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем скролл сайта под меню
    });

    // Закрыть меню при клике на крестик
    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Возвращаем скролл
    });

    // Закрывать меню при клике на любую ссылку (чтобы страница скроллилась к секции)
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    const orderModal = document.getElementById('orderModal');
const closeModalBtn = document.querySelector('.modal_order_close');
// Ищем вообще все кнопки «Заказать» на странице
const allOrderButtons = document.querySelectorAll('.btn_order');
const submitOrderBtn = document.querySelector('.modal_order_submit_btn');

// 1. Открываем модалку при клике на ЛЮБУЮ кнопку «Заказать»
allOrderButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Проверяем, чтобы это была не кнопка отправки внутри самой формы
        if (!button.classList.contains('modal_order_submit_btn')) {
            orderModal.classList.add('is_open');
            document.body.style.overflow = 'hidden'; // Блокируем скролл сайта
        }
    });
});

// 2. Закрываем модалку при клике на крестик
closeModalBtn.addEventListener('click', () => {
    orderModal.classList.remove('is_open');
    document.body.style.overflow = ''; // Возвращаем скролл
});

// 3. Закрываем модалку при клике на темный фон вокруг окна
orderModal.addEventListener('click', (event) => {
    if (event.target === orderModal) {
        orderModal.classList.remove('is_open');
        document.body.style.overflow = '';
    }
});

// 4. Реагируем на кнопку «Отправить заказ» (выводим пустышку в консоль)
submitOrderBtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.modal_order_input');
    // Простая проверка, заполнил ли пользователь обязательные поля
    if (inputs[0].value.trim() !== '' && inputs[1].value.trim() !== '') {
        console.log(`Заказ оформлен! Клиент: ${inputs[0].value}, Телефон: ${inputs[1].value}, Выбрал: ${inputs[2].value}`);
        alert('Спасибо за заказ! Наш бариста уже прогревает кофемашину.');
        
        // Очищаем форму и закрываем окно
        inputs[0].value = '';
        inputs[1].value = '';
        orderModal.classList.remove('is_open');
        document.body.style.overflow = '';
    }
});
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Возвращаем скролл документу
    });
});
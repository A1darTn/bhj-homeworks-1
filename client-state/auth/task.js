const signinForm = document.getElementById('signin__form');
const signinBlock = document.getElementById('signin');
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');
const logoutBtn = document.getElementById('logout__btn');
const errorMessage = document.getElementById('error_message');
const successMessage = document.getElementById('success_message');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');

function showMessage(element, text) {
    element.textContent = text;
    element.style.display = 'block';
    setTimeout(() => {
        element.style.display = 'none';
    }, 5000);
}

const savedUserId = localStorage.getItem('user_id');
if (savedUserId) {
    userIdSpan.textContent = savedUserId;
    signinBlock.classList.remove('signin_active');
    welcomeBlock.classList.add('welcome_active');
} else {
    signinBlock.classList.add('signin_active');
    welcomeBlock.classList.remove('welcome_active');
}

signinForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(signinForm);

    fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const userId = data.user_id;

                localStorage.setItem('user_id', userId);

                userIdSpan.textContent = userId;

                signinBlock.classList.remove('signin_active');
                welcomeBlock.classList.add('welcome_active');

                signinForm.reset();

                showMessage(successMessage, 'Авторизация прошла успешно!');
            } else {
                showMessage(errorMessage, 'Неверный логин/пароль');

                signinForm.reset();
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            showMessage(errorMessage, 'Произошла ошибка при авторизации');
        });
});

logoutBtn.addEventListener('click', function () {
    localStorage.removeItem('user_id');

    welcomeBlock.classList.remove('welcome_active');
    signinBlock.classList.add('signin_active');

    showMessage(successMessage, 'Вы вышли из системы');
});
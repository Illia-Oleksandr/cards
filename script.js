const questions = [
    "Питання 1: Що таке JavaScript?",
    "Питання 2: Що таке змінна?",
    "Питання 3: Що таке функція?",
    "Питання 4: Що таке об'єкт?",
    "Питання 5: Що таке масив?",
    "Питання 6: Що таке DOM?",
    "Питання 7: Що таке подія?",
    "Питання 8: Що таке проміс?",
    "Питання 9: Що таке callback?",
    "Питання 10: Що таке синтаксичний цукор?"
];

const cardContainer = document.getElementById('card-container');
const questionContainer = document.getElementById('question-container');

// Функція для відображення вибраного питання
function showQuestion(index) {
    questionContainer.textContent = questions[index];
}

// Створюємо картки та додаємо їх до контейнера
questions.forEach((question, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = `Картка ${index + 1}`;
    card.addEventListener('click', () => showQuestion(index));
    cardContainer.appendChild(card);
});

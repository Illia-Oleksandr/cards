
const questions = [
    "What are you going to do at the next weekend?",
    "Do you ride a bicycle?",
    "What kind of food do you like?",
    "How often do you drink coffee and tea?",
    "What do you usually do in your free time?",
    "How often do you warm up?",
    "What is your favorite song?",
    "Do you often reed news?",
    "What is your favorite book?",
    "What kind of activities do you like?",
    "Do you want have pets?",
    "What countries you didn't visit in the past, but want visit in the future?",
    "What is your favorite place in this city, this country and in the world?",
    "What is your favorite season and why?",
    "Do you have hobbies?",
    "What is your perfect boyfriend?",
    "What are your goals for the end of this year?",
    "Do you collect any things?",
    "What skill would you like to aquire?",
    "How do you usually start your morning?"
];

const cardContainer = document.getElementById('card-container');
const questionContainer = document.getElementById('question-container');

// Функція для відображення вибраного питання
function showQuestion(index) {
    questionContainer.textContent = questions[index];
}

// Функція для обробки кліку на картці
function handleCardClick(event) {
    const selectedCard = event.target;
    // Додаємо клас 'clicked' до картки, яка була клікнута
    selectedCard.classList.add('clicked');
    // Викликаємо функцію для відображення питання
    const index = Array.from(cardContainer.children).indexOf(selectedCard);
    showQuestion(index);
    // Відключаємо обробник події після кліку, щоб картка залишалась зеленою
    selectedCard.removeEventListener('click', handleCardClick);
}

// Створюємо картки та додаємо їх до контейнера
questions.forEach((question, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = `Картка ${index + 1}`;
    card.addEventListener('click', handleCardClick);
    cardContainer.appendChild(card);
});

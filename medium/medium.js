const questions = [
    { 
        image: 'medium afbeeldingen/1.png', 
        question: 'Wat is de belangrijkste spier in het menselijk lichaam?', 
        answers: ['De biceps', 'De hartspier', 'De buikspieren', 'De hamstrings'], 
        correct: 1 
    },
    { 
        image: 'medium afbeeldingen/2.png', 
        question: 'Wat is de aanbevolen dagelijkse hoeveelheid slaap voor volwassenen?', 
        answers: ['4-5 uur', '6-7 uur', '7-9 uur', '10-12 uur'], 
        correct: 2 
    },
    { 
        image: 'medium afbeeldingen/3.png', 
        question: 'Welk orgaan filtert gifstoffen uit het bloed?', 
        answers: ['De maag', 'De lever', 'De longen', 'De darmen'], 
        correct: 1 
    },
    { 
        image: 'medium afbeeldingen/4.png', 
        question: 'Wat is een belangrijk effect van vezelrijke voeding?', 
        answers: ['Betere spijsvertering', 'Meer energie', 'Gewichtstoename', 'Meer dorst'], 
        correct: 0 
    },
    { 
        image: 'medium afbeeldingen/5.png', 
        question: 'Welke drank bevat de meeste cafeïne?', 
        answers: ['Cola', 'Thee', 'Koffie', 'Melk'], 
        correct: 2 
    },
    { 
        image: 'medium afbeeldingen/6.png', 
        question: 'Wat is de belangrijkste oorzaak van huidkanker?', 
        answers: ['Te veel vet eten', 'Overmatige blootstelling aan UV-straling', 'Niet genoeg water drinken', 'Te weinig slapen'], 
        correct: 1 
    },
    { 
        image: 'medium afbeeldingen/7.png', 
        question: 'Wat gebeurt er als je te weinig ijzer binnenkrijgt?', 
        answers: ['Je botten worden zwakker', 'Je krijgt bloedarmoede', 'Je krijgt meer honger', 'Je wordt hyperactief'], 
        correct: 1 
    },
    { 
        image: 'medium afbeeldingen/8.png', 
        question: 'Welke stof in sigaretten is verslavend?', 
        answers: ['Nicotine', 'Teer', 'Koolstofmonoxide', 'Ammoniak'], 
        correct: 0 
    },
    { 
        image: 'medium afbeeldingen/9.png', 
        question: 'Wat is een gezonde manier om af te vallen?', 
        answers: ['Crashdiëten', 'Regelmatig sporten en gezond eten', 'Geen koolhydraten eten', 'Alleen sap drinken'], 
        correct: 1 
    },
    { 
        image: 'medium afbeeldingen/10.png', 
        question: 'Hoeveel minuten per dag wordt aangeraden om matig intensief te bewegen?', 
        answers: ['10 minuten', '30 minuten', '60 minuten', '90 minuten'], 
        correct: 1 
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionImage = document.getElementById('question-image');
const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.answer-btn');
const scoreContainer = document.getElementById('score-container');
const scoreText = document.getElementById('score');
const questionContainer = document.getElementById('question-container');

function loadQuestion() {
    let q = questions[currentQuestionIndex];
    questionImage.src = q.image;
    questionText.textContent = q.question;
    answerButtons.forEach((btn, i) => {
        btn.textContent = q.answers[i];
        btn.onclick = () => checkAnswer(i);
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestionIndex].correct) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showScore();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function showScore() {
    questionContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreText.textContent = score;
}

document.getElementById('next-question').addEventListener('click', nextQuestion);
document.getElementById('prev-question').addEventListener('click', previousQuestion);
document.getElementById('restart-quiz').addEventListener('click', () => location.reload());

loadQuestion();

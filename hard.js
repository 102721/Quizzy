const questions = [
    { image: 'vragen/bewegen.jpg', question: 'Hoeveel minuten per dag wordt aangeraden om matig intensief te bewegen?', answers: ['10 minuten', '30 minuten', '60 minuten', '90 minuten'], correct: 1 },
    { image: 'vragen/stress.jpeg', question: 'Wat gebeurt er in je lichaam als je stress hebt?', answers: ['Je lichaam maakt meer adrenaline en cortisol aan', 'Je bloeddruk daalt', 'Je voelt je altijd slaperig', 'Je krijgt automatisch meer energie'], correct: 0 },
    { image: 'vragen/ziekte.jpeg', question: 'Welke ziekte wordt veroorzaakt door een tekort aan insuline?', answers: ['Astma', 'Diabetes', 'Hoge bloeddruk', 'Griep'], correct: 1 },
    { image: 'vragen/ontbijt.jpeg', question: 'Wat is een goed ontbijt voor een gezonde start van de dag?', answers: ['Croissant met chocolade', 'Havermout met fruit', 'Alleen een kop koffie', 'Friet met mayo'], correct: 1 },
    { image: 'vragen/rugpijn.webp', question: 'Wat is een veelvoorkomende oorzaak van rugklachten?', answers: ['Te veel slapen', 'Slechte houding', 'Te weinig suiker eten', 'Te veel fruit eten'], correct: 1 },
    { image: 'vragen/brains.jpg', question: 'Waarom is sporten goed voor je hersenen?', answers: ['Het vermindert stress en verbetert het geheugen', 'Het maakt je slimmer', 'Het geeft je direct meer spiermassa', 'Het voorkomt griep'], correct: 0 },
    { image: 'vragen/zon.jpeg', question: 'Welke vitamine krijg je van zonlicht?', answers: ['Vitamine A', 'Vitamine B12', 'Vitamine C', 'Vitamine D'], correct: 3 },
    { image: 'vragen/droog.jpeg', question: 'Wat is een symptoom van uitdroging?', answers: ['Vermoeidheid', 'Bleke huid', 'Overmatige speekselproductie', 'Hoge bloeddruk'], correct: 0 },
    { image: 'vragen/water.jpg', question: 'Wat is de aanbevolen dagelijkse hoeveelheid water voor een volwassene?', answers: ['1 liter', '1,5 liter', '2 liter', '3 liter'], correct: 2 },
    { image: 'vragen/vezels.jpg', question: 'Welk voedingsmiddel bevat veel vezels?', answers: ['Witte rijst', 'Volkoren brood', 'Roomkaas', 'Frisdrank'], correct: 1 }
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


const dropdown = document.getElementById('dropdown');
const dropdownContent = document.getElementById('dropdown-content');
const dropbtn = document.getElementById('dropbtn');


dropbtn.addEventListener('click', () => {
    dropdown.classList.toggle('show'); 
});
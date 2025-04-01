const questions = [
    { image: 'foto/water.jpeg', question: 'Wat is de aanbevolen dagelijkse hoeveelheid water voor een volwassene?', answers: ['1 liter', '2 liter', '3 liter', '4 liter'], correct: 1 },
    { image: 'foto/zon.png', question: 'Welke vitamine krijg je binnen door zonlicht?', answers: ['Vitamine A', 'Vitamine C','Vitamine B12 ', 'Vitamine D'], correct: 3 },
    { image: 'foto/eiwitten.jpg', question: 'Welke van de volgende voedingsmiddelen bevat de meeste eiwitten?', answers: ['Rijst', 'Kip', 'Banaan', 'Broccoli'], correct: 1 },
    { image: 'foto/Hartslag.png', question: 'Wat is een gezonde hartslag in rust voor een volwassene?', answers: ['40-60 slagen per minuut', '60-100 slagen per minuut', '100-140 slagen per minuut', '140-180 slagen per minuut'], correct: 2 },
    { image: 'foto/ijzer.jpeg', question: 'Wat is een veelvoorkomend symptoom van ijzertekort?', answers: ['Hoofdpijn', 'Vermoeidheid', 'Gewichtstoename', 'Wazig zicht'], correct: 1 },
    { image: 'foto/conditie.jpeg', question: '. Welke van deze sporten is het beste voor je conditie?', answers: ['Yoga', 'Hardlopen', 'Gewichtheffen', 'Schaken'], correct: 1 },
    { image: 'foto/longen.avif', question: 'Wat is de belangrijkste functie van de longen?', answers: ['Voedsel verteren', 'Zuurstof opnemen', 'Bloed pompen', 'Spieren aansturen'], correct: 1 },
    { image: 'foto/slaap.jpeg', question: 'Wat gebeurt er als je te weinig slaap krijgt?', answers: ['Je wordt productiever', 'Je krijgt meer energie', 'Je concentratie verslechtert', 'Je immuunsysteem wordt sterker'], correct: 2 },
    { image: 'foto/stress.jpeg', question: 'Wat is een goede manier om stress te verminderen?', answers: ['Meer koffie drinken', 'Diep ademhalen en ontspannen', 'Junkfood eten', 'Tot laat opblijven'], correct: 1 },
    { image: 'foto/gezond.jpg', question: 'Welke van deze gewoonten draagt bij aan een gezonde levensstijl?', answers: ['Elke dag fastfood eten', 'Regelmatig bewegen', 'Roken', 'Te veel suiker consumeren'], correct: 1 }
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
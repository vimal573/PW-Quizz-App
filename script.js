const quizData = [
  {
    question:
      'Which built-in method calls a function for each element in the array?',
    a: 'while()',
    b: 'loop()',
    c: 'forEach()',
    d: 'None of the above',
    correct: 'c',
  },
  {
    question:
      'Which built-in method reverses the order of the elements of an array?',
    a: 'changeOrder(order)',
    b: 'reverse()',
    c: 'sort(order)',
    d: 'None of the above',
    correct: 'b',
  },
  {
    question:
      'Which of the following is a valid type of function javascript supports?',
    a: 'named function',
    b: 'anonymous function',
    c: 'Both the above',
    d: 'None of the above',
    correct: 'c',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const quizContainerEl = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.qus_text');
const answerEL = document.querySelector('.answer');
const aOptionEl = document.querySelector('.a_option');
const bOptionEl = document.querySelector('.b_option');
const cOptionEl = document.querySelector('.c_option');
const dOptionEl = document.querySelector('.d_option');
const statusEl = document.querySelector('.status-box');
const statusTextEl = document.querySelector('.status-text');
const btnEL = document.querySelector('.btn');

let currentQuiz = 0;
let rightAnswers = 0;
let wrongAnswers = 0;

const loadQuiz = function () {
  const qusOs = quizData[currentQuiz];
  questionEl.textContent = `Q. ${currentQuiz + 1} ${qusOs.question}`;
  aOptionEl.textContent = qusOs.a;
  bOptionEl.textContent = qusOs.b;
  cOptionEl.textContent = qusOs.c;
  dOptionEl.textContent = qusOs.d;
};

const checkAnswer = function () {
  if (answerEL.value === quizData[currentQuiz].correct) {
    rightAnswers++;
    statusEl.style.opacity = '1';
    statusTextEl.textContent = 'Status: Right Answer';
  } else {
    wrongAnswers++;
    statusEl.style.opacity = '1';
    statusTextEl.textContent = 'Status: Wrong Answer';
  }

  currentQuiz++;
};

loadQuiz();

btnEL.addEventListener('click', () => {
  checkAnswer();

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    statusEl.style.opacity = '0';
    quizContainerEl.innerHTML = `
    <div class="score-box">
    <div class="score">
    <p>Score</p>
    </div>
    <div><p>Total Right Answer: ${rightAnswers}</p></div>
    <div><p>Total Worng Answer: ${wrongAnswers}</p></div>
    <div class="final-result">
    <p>Final Result: ${rightAnswers < wrongAnswers ? 'Fail' : 'Pass'}</p>
    </div>
    </div>`;
  }
});

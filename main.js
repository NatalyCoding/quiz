/* All answer options */
const option1 = document.querySelector('.option1'),
    option2 = document.querySelector('.option2'),
    option3 = document.querySelector('.option3'),
    option4 = document.querySelector('.option4');

/* All our options */
const optionElements = document.querySelectorAll('/option');

const question = document.getElementById('question'),
    numberOfQuestion = document.getElementById('number-of-question'),
    numberOfAllQuestions = document.getElementById('number-of-all-question');

let indexOfQuestion,
    indexOfPage = 0;

const answersTracker = document.getElementById('answers-tracker');

const btnNext = document.getElementById('btn-next');

let score = 0;

const correctAnswer = document.getElementById('correct-answer'),
    numberOfAllQuestion2 = document.getElementById('number-of-all-questions-2'),
    btnTryAgain = document.getElementById('btn-try-again');

const questions = [{
        question: 'JavaScript is ECMAScript',
        options: [
            'False',
            'True',
            'Maybe',
            'All of the above',
        ],
        rightAnswer: 1
    },
    {
        question: 'JavaScript written under which of the following tag',
        options: [
            '<JavaScript></JavaScript>',
            '<code></code>',
            '<script></script>',
            '<head></head>',
        ],
        rightAnswer: 2
    },
    {
        question: 'Variable in JavaScript declared with which of the following keyword?',
        options: [
            'new',
            'int',
            'string',
            'let',
        ],
        rightAnswer: 3
    },
];
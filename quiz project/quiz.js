const questionElement = document.getElementById('question');
const answer = document.getElementById('answer');
const next = document.getElementById('next');

let currentQuestionIndex = 0;
let score = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const questions = [
    {
        question: "Where is the capital capital city of France?",
        answers: [
            { text: "Madrid", correct: false },
            { text: "Rome", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false }
        ]
    },
    {
        question: "When did World War II end?",
        answers: [
            { text: "1939", correct: false },
            { text: "1940", correct: false },
            { text: "1945", correct: true },
            { text: "1942", correct: false }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "William Wordsworth", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'H'?",
        answers: [
            { text: "Helium", correct: false },
            { text: "Carbon", correct: false },
            { text: "Oxygen", correct: false },
            { text: "Hydrogen", correct: true }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Vincent van Gogh", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Yen", correct: true },
            { text: "Won", correct: false },
            { text: "Ringgit", correct: false },
            { text: "Baht", correct: false }
        ]
    },
    {
        question: "How many continents are there in the world?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Which ocean is the largest?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Southern Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "What is the square root of 144?",
        answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "14", correct: false },
            { text: "16", correct: false }
        ]
    },
    {
        question: "What is the world's largest ocean?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Southern Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "F. Scott Fitzgerald", correct: false },
            { text: "Harper Lee", correct: true },
            { text: "J.K. Rowling", correct: false },
            { text: "Ernest Hemingway", correct: false }
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false }
        ]
    },
    {
        question: "Who developed the theory of general relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Stephen Hawking", correct: false },
            { text: "Niels Bohr", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the currency of China?",
        answers: [
            { text: "Yuan", correct: true },
            { text: "Yen", correct: false },
            { text: "Ringgit", correct: false },
            { text: "Baht", correct: false }
        ]
    },
    {
        question: "Who painted 'Starry Night'?",
        answers: [
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent van Gogh", correct: true },
            { text: "Claude Monet", correct: false },
            { text: "Leonardo da Vinci", correct: false }
        ]
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "In what year did the Titanic sink?",
        answers: [
            { text: "1905", correct: false },
            { text: "1912", correct: true },
            { text: "1920", correct: false },
            { text: "1931", correct: false }
        ]
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        answers: [
            { text: "F. Scott Fitzgerald", correct: true },
            { text: "Ernest Hemingway", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Charles Dickens", correct: false }
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            { text: "Amazon River", correct: false },
            { text: "Nile River", correct: true },
            { text: "Yangtze River", correct: false },
            { text: "Mississippi River", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Father of Computer Science'?",
        answers: [
            { text: "Bill Gates", correct: false },
            { text: "Alan Turing", correct: true },
            { text: "Steve Jobs", correct: false },
            { text: "Mark Zuckerberg", correct: false }
        ]
    },
    {
        question: "What is the largest mammal on Earth?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Dolphin", correct: false }
        ]
    },
    {
        question: "In which country is the Great Barrier Reef located?",
        answers: [
            { text: "Brazil", correct: false },
            { text: "Australia", correct: true },
            { text: "Mexico", correct: false },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        answers: [
            { text: "Marie Curie", correct: true },
            { text: "Rosalind Franklin", correct: false },
            { text: "Jane Goodall", correct: false },
            { text: "Mother Teresa", correct: false }
        ]
    }
];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    next.innerHTML = "Next";

   
    const shuffledQuestions = shuffleArray(questions).slice(0, 10);

   
    questions.length = 0; 
    Array.prototype.push.apply(questions, shuffledQuestions);

    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answerChoice => {
        const button = document.createElement("button");
        button.innerHTML = answerChoice.text;
        button.classList.add("btn");
        answer.appendChild(button);
        if (answerChoice.correct) {
            button.dataset.correct = answerChoice.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    next.style.display = 'none';
    while (answer.firstChild) {
        answer.removeChild(answer.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    next.style.display = "block";
}

function playAgain() {
   
    currentQuestionIndex = 0;
    score = 0;

  
    const shuffledQuestions = shuffleArray(questions).slice(0, 10);

   
    questions.length = 0;
    questions.push(...shuffledQuestions);

   
    showQuestion();

  
    next.removeEventListener("click", playAgain);
    next.addEventListener("click", handlenext);
}


function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    next.innerHTML = "Play Again";
    next.style.display = "block";
    
    
    next.removeEventListener("click", handlenext);
    next.addEventListener("click", playAgain);
}



function handlenext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

next.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handlenext();
    }
});


startQuiz();


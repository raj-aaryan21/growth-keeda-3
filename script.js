```javascript
/* =====================================================
   GROWTH KEEDA
   WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});


/* Close mobile menu after clicking a link */

const navigationLinks =
    document.querySelectorAll("nav a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

    });

});


/* =====================================================
   NAVIGATION ACTIVE LINK
===================================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   DAILY FACT
===================================================== */

const facts = [

    "The world's largest desert is Antarctica, not the Sahara.",

    "A day on Venus is longer than a year on Venus.",

    "Honey can remain edible for an extremely long time when properly stored.",

    "The human brain uses a significant amount of the body's energy.",

    "India is home to one of the world's oldest continuously living civilizations.",

    "The Pacific Ocean is the largest ocean on Earth.",

    "Octopuses have three hearts.",

    "Lightning can heat the air around it to extremely high temperatures."

];


const factText =
    document.getElementById("factText");

const newFact =
    document.getElementById("newFact");


let currentFact = 0;


newFact.addEventListener("click", function () {

    currentFact++;

    if (currentFact >= facts.length) {

        currentFact = 0;

    }

    factText.style.opacity = "0";


    setTimeout(function () {

        factText.textContent =
            facts[currentFact];

        factText.style.opacity = "1";

    }, 200);

});


/* =====================================================
   QUIZ DATA
===================================================== */

const quizQuestions = [

    {
        question:
            "Which planet is known as the Red Planet?",

        answers: [
            ["Venus", false],
            ["Mars", true],
            ["Jupiter", false],
            ["Mercury", false]
        ]
    },


    {
        question:
            "How many continents are there?",

        answers: [
            ["5", false],
            ["6", false],
            ["7", true],
            ["8", false]
        ]
    },


    {
        question:
            "Which is the largest ocean on Earth?",

        answers: [
            ["Atlantic Ocean", false],
            ["Indian Ocean", false],
            ["Pacific Ocean", true],
            ["Arctic Ocean", false]
        ]
    },


    {
        question:
            "Which country is famous for the Great Wall?",

        answers: [
            ["India", false],
            ["China", true],
            ["Japan", false],
            ["Brazil", false]
        ]
    },


    {
        question:
            "Which device is commonly used to play video games?",

        answers: [
            ["Console", true],
            ["Printer", false],
            ["Scanner", false],
            ["Projector", false]
        ]
    }

];


let questionIndex = 0;

let score = 0;

let answered = false;


const question =
    document.getElementById("question");

const answers =
    document.getElementById("answers");

const questionNumber =
    document.getElementById("questionNumber");

const progressBar =
    document.getElementById("progressBar");

const quizResult =
    document.getElementById("quizResult");

const nextQuestion =
    document.getElementById("nextQuestion");


/* =====================================================
   LOAD QUIZ
===================================================== */

function loadQuestion() {

    answered = false;

    const current =
        quizQuestions[questionIndex];


    question.textContent =
        current.question;


    questionNumber.textContent =
        questionIndex + 1;


    progressBar.style.width =
        ((questionIndex + 1) /
            quizQuestions.length * 100) + "%";


    answers.innerHTML = "";

    quizResult.textContent = "";

    nextQuestion.style.display = "none";


    current.answers.forEach(function (answer) {

        const button =
            document.createElement("button");


        button.textContent =
            answer[0];


        button.dataset.correct =
            answer[1];


        button.addEventListener(
            "click",
            selectAnswer
        );


        answers.appendChild(button);

    });

}


/* =====================================================
   SELECT ANSWER
===================================================== */

function selectAnswer(event) {

    if (answered) {

        return;

    }


    answered = true;


    const selected =
        event.target;

    const correct =
        selected.dataset.correct === "true";


    const allButtons =
        answers.querySelectorAll("button");


    allButtons.forEach(function (button) {

        button.disabled = true;

        if (
            button.dataset.correct ===
            "true"
        ) {

            button.classList.add("correct");

        }

    });


    if (correct) {

        selected.classList.add("correct");

        quizResult.textContent =
            "✓ Correct! Great job.";

        quizResult.style.color =
            "#22c55e";

        score++;

    } else {

        selected.classList.add("wrong");

        quizResult.textContent =
            "✕ Not quite. The correct answer is highlighted.";

        quizResult.style.color =
            "#ef4444";

    }


    nextQuestion.style.display =
        "block";

}


/* =====================================================
   NEXT QUESTION
===================================================== */

nextQuestion.addEventListener(
    "click",
    function () {

        questionIndex++;


        if (
            questionIndex >=
            quizQuestions.length
        ) {

            showQuizResult();

            return;

        }


        loadQuestion();

    }
);


/* =====================================================
   QUIZ FINAL RESULT
===================================================== */

function showQuizResult() {

    question.textContent =
        "Quiz Complete! 🎉";


    answers.innerHTML = "";


    questionNumber.textContent =
        "5";


    progressBar.style.width =
        "100%";


    quizResult.textContent =
        "You scored " +
        score +
        " out of " +
        quizQuestions.length +
        "!";


    quizResult.style.color =
        "#ff5a00";


    nextQuestion.textContent =
        "Play Again →";


    nextQuestion.style.display =
        "block";


    nextQuestion.onclick =
        restartQuiz;

}


function restartQuiz() {

    questionIndex = 0;

    score = 0;

    nextQuestion.textContent =
        "Next Question →";

    nextQuestion.onclick = null;

    loadQuestion();

}


/* =====================================================
   NEWSLETTER
===================================================== */

const newsletterForm =
    document.getElementById("newsletterForm");


newsletterForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const email =
            document.getElementById("email");


        if (email.value.trim() !== "") {

            alert(
                "🎉 Thanks for subscribing to Growth Keeda!"
            );


            email.value = "";

        }

    }
);


/* =====================================================
   FACT TEXT TRANSITION
===================================================== */

factText.style.transition =
    "opacity 0.2s";


/* =====================================================
   INITIALIZE
===================================================== */

loadQuestion();


console.log(
    "🚀 Growth Keeda loaded successfully!"
);
```

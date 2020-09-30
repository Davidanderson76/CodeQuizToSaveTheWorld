//  Pulling elements in from the HTML

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const qImage = document.getElementById("questionImage");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timer = document.getElementById("timer");

const choiceA  = document.getElementById("A");
const choiceB  = document.getElementById("B");
const choiceC  = document.getElementById("C");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");


 // Making my questions into an array which has an object inside

 // MAKING THE QUESTIONS
  
let questions = [
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/spiderman.jpg",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/thor.jpg",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/hulk.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/blackpanther.jpg",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/blackwidow.jpg",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/scarletwitch.jpg",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/milesmorales.jpg",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/captainamerica.jpg",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/wintersoldier.jpg",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/stanlee.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    },
];

// Variables


const lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
let timer;
let score = 0; 

//Variables for making the timer work on each individual question

const questionTime = 10;
const timerWidth = 150;
let count = 0;
const timerProgress = timerWidth/questionTime;

//function to make questions based off of info in array

function renderQuestion(){
    let q = questions[runningQuestionIndex];
    qImage.innerHTML = "<img src = " + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

//START QUIZ BUTTON

start.addEventListener("click", startQuiz);

function startQuiz(){
    start.style.display = "none";
    counterRender();
    timer = setInterval(counterRender,1000);
    progress();
    renderQuestion();
    quiz.style.display = "block";
}

//showing progress of correct and incorrect answers

function progress(){
    for (let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        progress.innerHTML += "<div class = 'prog' id = " + qIndex + "> </div>";
    }
}

//Making the timer show the status of how much time you have left

function counterRender(){
    if(count <= questionTime) {
        counter.innerHTML = count;
        timer.style.width = timerProgress * count + "px";
        count++;
    }else{
        count = 0;
        answerWrong();
        if( runningQuestionIndex < lastQuestionIndex){
            runningQuestionIndex++;
            renderQuestion();
        }else{
            clearInterval(timer);
            scoreRender();
        } 
    }
}

// Checking the Answers to be correct

function checkAns(answer){
    if(questions[runningQuestionIndex].correct == answer){
        score++;
        answerCorrect();
    }else{
        answerWrong();
    }
    if(runningQuestionIndex < lastQuestionIndex){
        count = 0;
        runningQuestionIndex++;
        renderQuestion();
    }else{
        clearInterval(timer);
        scoreRender();
    }
}



//Shows Correct Answer
function answerCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
}

//Shows Wrong Answer
function answerWrong(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}


//giving a score function

function score(){
    scoreContainer.style.display = "block";
    let scorePercent = Math.round(100 * score / questions.length);
    let img =   ( scorePercent >= 90) ? "Assets/1GOOD.png" :
                ( scorePercent >= 80) ? "Assets/2OK.png" :
                ( scorePercent >= 70) ? "Assets/3MEH.png" :
                ( scorePercent >= 60) ? "Assets/4EHH.png" :
                ( scorePercent <= 50) ? "Assets/5BAD.png" :
    scoreContainer.innerHTML = "<img src =" + img + "> <p>" + scorePercent + "%</p>";
}



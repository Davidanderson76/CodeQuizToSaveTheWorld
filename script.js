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
        imgSrc : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        correct : ""
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        correct : ""
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        correct : ""
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        correct : ""
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        correct : ""
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        correct : ""
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        correct : ""
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        correct : ""
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        correct : ""
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "",
        choiceA : "",
        choiceB : "",
        choiceC : "",
        correct : ""
    },
];

// Variables

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

//function to make questions based off of info in array

function renderQuestion(){
    let q = questions[runningQuestionIndex];
    qImage.innerHTML = "<img src = " + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

//showing progress of correct and incorrect answers

function progress(){
    for (let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        progress.innerHTML += "<div class = 'prog' id = " + qIndex + "> </div>";
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

//Making the timer work on each individual question

const questionTime = 10;
const timerWidth = 150;
let count = 0;
const timerProgress = timerWidth/questionTime;

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


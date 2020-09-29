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

// MAKING THE QUESTIONS

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

//shows correct answer
function answerCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
}




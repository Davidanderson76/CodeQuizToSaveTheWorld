//  Pulling elements in from the HTML
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


 // Making my questions into an array which has an object inside
 // MAKING THE QUESTIONS
  
let questions = [
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/spiderman.jpg",
        choiceA : "Spider-Man",
        choiceB : "Splunder Mann",
        choiceC : "spider men",
        correct : "A"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/thor.jpg",
        choiceA : "iron man",
        choiceB : "t-pain",
        choiceC : "Thor",
        correct : "C"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/hulk.png",
        choiceA : "The Incredible Green man",
        choiceB : "Bulk",
        choiceC : "HULK",
        correct : "C"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/blackpanther.jpg",
        choiceA : "Panther Man",
        choiceB : "Black Panther",
        choiceC : "Mr Panther",
        correct : "B"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/blackwidow.jpg",
        choiceA : "Blackwidow",
        choiceB : "Greenwidow",
        choiceC : "Legolas",
        correct : "A"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/scarletwitch.jpg",
        choiceA : "elizabeth Olsen",
        choiceB : "Scarletwitch",
        choiceC : "Mrs. Doom",
        correct : "B"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/milesmorales.jpg",
        choiceA : "Miles Morales",
        choiceB : "Spider Man 2",
        choiceC : "Toby Maguire",
        correct : "A"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/captainamerica.jpg",
        choiceA : "MAGA",
        choiceB : "Captain USA",
        choiceC : "Captain America",
        correct : "C"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/wintersoldier.jpg",
        choiceA : "Wong",
        choiceB : "Summer Soldier",
        choiceC : "Winter Soldier",
        correct : "C"
    },
    {
        question : "Who is THIS superhero?",
        imgSrc : "Assets/stanlee.png",
        choiceA : "Stan Lee",
        choiceB : "Stanley Yelnats",
        choiceC : "Captain Marvel",
        correct : "A"
    },
];

// Variables


const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; 
const gaugeWidth = 150; 
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;


//function to make questions based off of info in array
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

//START QUIZ BUTTON

start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}


//showing progress of correct and incorrect answers

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}


function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}



// Checking the Answers to be correct

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}



// answer shows correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer shows Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}


//giving a score function

function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 90) ? "Assets/1GOOD.png" :
              (scorePerCent >= 80) ? "Assets/2OK.png" :
              (scorePerCent >= 70) ? "Assets/3MEH.png" :
              (scorePerCent >= 60) ? "Assets/4EHH.png" :
              "Assets/5BAD.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}



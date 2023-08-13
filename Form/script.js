const quizDB=[
    {
        question: "Q1: What is the full form of HTML",
        a: "Hello to my Land",
        b: "Hey text Markup Language",
        c: "Hypertext makeup Language",
        d: "Hypertext markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: Who is the father of HTML?",
        a: "Rasmus Lerdorf",
        b: "Tim Berners-Lee",
        c: "Brendan Eich",
        d: "Sergey Brin",
        ans: "ans2"
    },
    {
        question: "Q3: Which of the following is used to read an HTML page and render it?",
        a: "Web server",
        b: "Web network",
        c: "Web browser",
        d: "Web matrix",
        ans: "ans3"
    },
    {
        question: "Q4: What is DOM in HTML?",
        a: "Language dependent application programming",
        b: "Hierarchy of objects in ASP.NET",
        c: "Application programming interface",
        d: "Convention for representing and interacting with objects in html documents",
        ans: "ans4"
    },
    {
        question: "Q5: In which part of the HTML metadata is contained?",
        a: "head tag",
        b: "title tag",
        c: "html tag",
        d: "body tag",
        ans: "ans1"
    }
    
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount=0;
let score=0;

const loadQuestion=()=>{
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll= () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener(`click`, () => {
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer == quizDB[questionCount].ans){
        score++
    };

    questionCount++;
    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h3> you scored ${score}/${quizDB.length}</h3>
        <button class='btn' onclick='location.reload()'>Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
            
    }
});
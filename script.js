const questions = [
    {
        question: "What is Java Virtual Machine?",
        answers: [
            { text: "A compiler", correct: false},
            { text: "A runtime environment for Java bytecode", correct: true},
            { text: "A development tool", correct: false},
            { text: "A programming language", correct: false},

        
            
        ]
    },
    {
        question:"What is the purpose of the break statement in Java?",
        answers: [
            { text: "To exit a loop or switch statement", correct: true},
            { text: "To skip the current iteration of a loop", correct: false},
            { text: "To resume the next iteration of a loop", correct: false},
            { text: "To terminate the program", correct: false},
        ]
    },
    {
        question: "What is the purpose of the super keyword in Java?",
        answers: [
            { text: "To call the superclass constructor", correct: true},
            { text: "To refer to the current object", correct: false},
            { text: "To invoke a static method", correct: false},
            { text: "To access a static variable", correct: false},
        ]
    },
    {
        question: "Which statement is used to remove all records from a table in MySQL?",
        answers: [
            { text: "Delete All", correct: false},
            { text: "Remove", correct: false},
            { text: "Truncate Table", correct: true},
            { text: "Drop Table.", correct: false}, 
        ]
    },
    {
        question: "Which data type is used to store date and time values in MySQL?",
        answers: [
            { text: "Int", correct: false},
            { text: "Varchar", correct: false},
            { text: "DateTime", correct: true},
            { text: "Float", correct: false},  
        ]
    },
    {
        question: "How can you insert data into a MySQL table?",
        answers: [
            { text: "ADD", correct: false},
            { text: "INSERT", correct: true},
            { text: "UPDATE", correct: false},
            { text: "MODIFY", correct: false},  
        ]
    },
    {
        question: "Which statement is used to retrieve data from a MySQL database?",
        answers: [
            { text: "GET", correct: false},
            { text: "FETCH", correct: false},
            { text: "SELECT", correct: true},
            { text: "EXTRACT", correct: false},  
        ]
    },
    {
        question: "What does SQL stand for?",
        answers: [
            { text: "Structed Query Language", correct: true},
            { text: "Simple Question Language", correct: false},
            { text: "Sequential Query Language", correct: false},
            { text: "Scripted Question Language", correct: false},  
        ]
    },
    {
        question: "What does the SQL statement ALTER TABLE do?",
        answers: [
            { text: "Deletes a Table", correct: false},
            { text: "Adds a new column or modifies an existing column in a table", correct: true},
            { text: " Retrieves data from multiple tables", correct: false},
            { text: "Combines two tables into a new table", correct: false},  
        ]
    },
    {
        question: "What is the purpose of the WHERE clause in SQL?",
        answers: [
            { text: "To specify the columns to be retrieved", correct: false},
            { text: "To filter rows based on a condition", correct: true},
            { text: " To sort the result set", correct: false},
            { text: " To join two tables", correct: false}, 
        ]

    }
    
];
const questionElement =document.getElementById("question");
const answerButtons =document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + "," + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);


    });

}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;


    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart Quiz";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();

    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }

})
startQuiz();







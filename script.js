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
    }
];
const questionElement =document.getElementById("questions");
const answerButton =document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");

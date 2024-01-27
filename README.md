1. HTML (index.html):
The HTML code serves as the structure and content for the quiz website. Here's a breakdown:

<!DOCTYPE html>: Declares the document type and version of HTML.
<html>: The root element of the HTML document.
<head>: Contains metadata, including the title of the page and a link to the external stylesheet.
<title>: Specifies the title of the webpage (shown in the browser tab).
<link>: Establishes a link to an external CSS file for styling.
<body>: Contains the main content of the webpage.
Within the <body>:

<div class="website">: A container for the entire content of the website.

<h1>: A heading displaying "Simple Quiz."

<div class="quiz">: A container for the quiz section, including questions and answer buttons.

<h2 id="question">: A heading element with an ID for displaying the current question.

<div id="answer-buttons">: A container for dynamically generated answer buttons.

<button id="next-btn">Next</button>: A button to move to the next question.

<script src="script.js"></script>: Links the JavaScript file to provide interactivity.

2. CSS (style.css):
The CSS code styles the HTML elements, providing visual aesthetics and responsiveness. Here's a breakdown:

*: Applies styles to all elements on the page.
body: Sets a background color for the entire website.
.website: Styles the container for the main content with a white background, rounded corners, and padding.
.website h1: Styles the main heading with a specific font size, color, and border bottom.
.quiz: Adds padding to the quiz section.
.quiz h2: Styles the question heading within the quiz section.
.btn: Styles the answer buttons with a consistent design, including background color and padding.
#next-btn: Styles the "Next" button with a specific background color, text color, and padding.
.correct and .incorrect: Define styles for correct and incorrect answers, changing the background color.
3. JavaScript (script.js):
The JavaScript code provides the dynamic functionality for the quiz. Here's a breakdown:

const questions = [...]: Defines an array of objects, each representing a question with multiple-choice answers.
Variables such as questionElement, answerButtons, nextButton, currentQuestionIndex, and score are declared.
Functions:

startQuiz(): Initializes the quiz by resetting variables and showing the first question.
showQuestion(): Displays the current question and dynamically generates answer buttons based on the question data.
resetState(): Resets the state of the quiz by hiding the "Next" button and clearing answer buttons.
selectAnswer(e): Handles the user's answer selection, checks correctness, updates the score, and disables buttons.
showScore(): Displays the final score and allows the user to restart the quiz.
handleNext(): Advances to the next question or shows the final score if there are no more questions.
Event Listeners:

nextButton.addEventListener(...): Listens for clicks on the "Next" button, triggering the appropriate actions.

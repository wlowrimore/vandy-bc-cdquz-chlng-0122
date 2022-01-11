// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const questionIndex = 0
const landingContent = document.getElementById("landing-content");
const question = document.getElementById("question");
const answers = document.getElementById("answers");


// Quiz Q and A
const questions = [
  {
    question: "Commonly used data types do not include ________.",
    answers: [
       "strings",
       "booleans",
       "alerts",
       "numbers"
    ],
    correctAnswer: "3"
  }, 

  {
    question: "The condition of an if/else statement is inclosed with ________.",
    answers: {
      1: "quotes",
      2: "curly brackets",
      3: "parentheses",
      4: "square brackets"
    },
    correctAnswer: "2"
  }, 

  {
    question: "Arrays in JavaScript can be used to store ________.",
    answers: {
      1: "numbers and strings",
      2: "other Arrays",
      3: "booleans",
      4: "ALL OF THE ABOVE"
    },
    correctAnswer: "4"
  }, 

  {
    question: "String values must be enclosed with ________.",
    answers: {
      1: "commas",
      2: "curly brackets",
      3: "quotes",
      4: "parentheses"
    },
    correctAnswer: "3"
  },

  {
    question: "A very useful tool that can be used during development and debugging for printing content to the debugger is ________.",
    answers: {
      1: "JavaScript",
      2: "terminal / bash",
      3: "for loops",
      4: "consol.log"
    },
    correctAnswer: "4"
  }
];

// Start Quiz
function listQuestionsEl(){
  question.textContent = questions[questionIndex].question;
  landingContent.classList.add("hide");
for (let i = 0; i < questions[questionIndex].answers.length; i++) {
  
  var newLi = document.createElement("li");
  newLi.textContent = questions[questionIndex].answers[i];
  answers.append(newLi);
}
  
  
  
  console.log(questions[0]);
};


// // Start timer
// function timer(){
//   var sec = 75;
//   var timer = setInterval(function(){
//       document.getElementById('timer').innerHTML='00:'+sec;
//       sec--;
//       if (sec < 0) {
//           clearInterval(timer);
//       }
//   }, 1000);
// }
var button = document.getElementById("#btn");
addEventListener("click", listQuestionsEl);


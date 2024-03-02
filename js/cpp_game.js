let name;
let score = 0;
let currentQuestion = 0;

const questions = [
  {question: "Who invented C++?", answer: "Bjarne Stroustrup"},
  {question: "Which of the following type is provided by C++ but not C?", answer: "Bool"},
  {question: "Which approach is used by C++?", answer: "Bottom-up"}
];

function startGame() {
  name = document.getElementById("name-input").value;
  document.getElementById("name-prompt").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  nextQuestion();
}

function nextQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("score").innerHTML = "Final score: " + score;
    return;
  }
  document.getElementById("next-button").style.display = "none";
  document.getElementById("result").innerHTML = "";
  document.getElementById("question").innerHTML = questions[currentQuestion].question;
  document.getElementById("answer-input").value = "";
  currentQuestion++;
}

function checkAnswer() {
  const answer = document.getElementById("answer-input").value;
  if (answer.toLowerCase() === questions[currentQuestion-1].answer.toLowerCase()) {
    document.getElementById("result").innerHTML = "Correct!";
    score++;
  } else {
    document.getElementById("result").innerHTML = "Incorrect. The correct answer is " + questions[currentQuestion-1].answer + ".";
  }
  document.getElementById("next-button").style.display = "block";
  document.getElementById("score").innerHTML = "Score: " + score;
}

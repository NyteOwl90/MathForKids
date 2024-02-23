var isLoggedIn = false;
var currentQuestion = {};

function authenticate() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simple authentication (replace with more secure method in production)
  if (username === 'yourUsername' && password === 'yourPassword') {
    isLoggedIn = true;
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    loadQuestion();
  } else {
    alert('Authentication failed. Please try again.');
  }
}

function loadQuestion() {
  if (isLoggedIn) {
    // Generate a simple addition question
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    currentQuestion = {
      num1: num1,
      num2: num2,
      answer: num1 + num2
    };

    document.getElementById('question-container').innerText = `What is ${num1} + ${num2}?`;
  }
}

function checkAnswer() {
  if (isLoggedIn) {
    var userAnswer = parseInt(document.getElementById('answer').value);

    if (userAnswer === currentQuestion.answer) {
      alert('Correct! Well done.');
      loadQuestion();
    } else {
      alert('Incorrect. Try again.');
    }
  }
}
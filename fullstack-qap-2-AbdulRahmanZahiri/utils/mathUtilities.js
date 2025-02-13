// 📌 Generates a random math question
function getQuestion() {
  // 🎲 Generate two random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  // 🔢 Define possible math operators
  const operators = ["+", "-", "*", "/"];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  // 🎯 Compute the correct answer based on the selected operator
  let correctAnswer;
  switch (operator) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
    case "/":
      correctAnswer = parseFloat((num1 / num2).toFixed(2)); // Limit division results to 2 decimal places
      break;
  }

  // 🏆 Return the generated math question and its correct answer
  return { num1, num2, operator, correctAnswer };
}

// ✅ Compares the user's answer with the correct answer
function isCorrectAnswer(userAnswer, correctAnswer) {
  return parseFloat(userAnswer) === correctAnswer;
}

// 📤 Export functions for use in other parts of the application
module.exports = { getQuestion, isCorrectAnswer };

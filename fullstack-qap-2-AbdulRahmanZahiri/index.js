const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // Enable form data parsing
app.use(express.static("public")); // Serve static files (CSS, JS, images)

/* 🏠 Home Page */
app.get("/", (req, res) => {
  const streak = req.app.locals.streak || 0; // Retrieve current streak or default to 0
  res.render("index", { streak });
});

/* 🎯 Quiz Page - Generates a new math question */
app.get("/quiz", (req, res) => {
  // Generate random numbers and a random operator
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operators = ["+", "-", "*", "/"];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  // Compute the correct answer
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
      correctAnswer = parseFloat((num1 / num2).toFixed(2));
      break; // Limit decimal places
  }

  // Store the question and correct answer in memory
  req.app.locals.currentQuestion = { num1, num2, operator, correctAnswer };

  // Render the quiz page with the generated question
  res.render("quiz", { num1, num2, operator, error: null });
});

/* 📝 Quiz Submission - Validates the answer */
app.post("/quiz", (req, res) => {
  const { answer } = req.body; // Retrieve user's input
  const userAnswer = parseFloat(answer); // Convert input to a number
  const { correctAnswer } = req.app.locals.currentQuestion; // Retrieve correct answer

  req.app.locals.streak = req.app.locals.streak || 0; // Ensure streak is initialized

  // Check if the user's answer is correct
  if (userAnswer === correctAnswer) {
    req.app.locals.streak += 1; // Increase streak count
    console.log("✅ Correct answer!");
    res.redirect("/quiz/completion"); // Redirect to completion page
  } else {
    req.app.locals.streak = 0; // Reset streak on incorrect answer
    console.log("❌ Incorrect answer.");
    res.render("quiz", {
      num1: req.app.locals.currentQuestion.num1,
      num2: req.app.locals.currentQuestion.num2,
      operator: req.app.locals.currentQuestion.operator,
      error: "Incorrect answer. Try again!",
    });
  }
});

/* 🎉 Quiz Completion - Displays streak and updates leaderboard */
app.get("/quiz/completion", (req, res) => {
  const streak = req.app.locals.streak || 0; // Get the current streak

  req.app.locals.leaderboards = req.app.locals.leaderboards || []; // Ensure leaderboard exists

  // Update leaderboard only if streak is > 0
  if (streak > 0) {
    const date = new Date().toLocaleString(); // Store timestamp
    req.app.locals.leaderboards.push({ streak, date });

    // Sort leaderboard by highest streak and keep only the top 10 scores
    req.app.locals.leaderboards = req.app.locals.leaderboards
      .sort((a, b) => b.streak - a.streak)
      .slice(0, 10);
  }

  res.render("completion", { streak }); // Show completion page
});

/* 🏆 Leaderboards - Displays top 10 streaks */
app.get("/leaderboards", (req, res) => {
  const leaderboards = req.app.locals.leaderboards || []; // Ensure leaderboard is always an array
  res.render("leaderboards", { leaderboards });
});

/* 🚀 Start the server */
app.listen(port, () => {
  console.log(`📡 Server running at http://localhost:${port}`);
});

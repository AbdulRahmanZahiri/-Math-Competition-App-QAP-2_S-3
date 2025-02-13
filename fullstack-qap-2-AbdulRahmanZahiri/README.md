# Math Competition App - Abdul Rahman Zahiri

This project serves as the foundation for the **Math Competition App** assignment. The objective is to develop a simple web application that allows users to solve math problems, track their streak of correct answers, and view leaderboards.

## Features

- **Home Page**:
  - Start a new quiz or check the leaderboards.
  - Display the user's most recent streak or indicate if no streak exists.
- **Quiz Page**:

  - Generate and display random math problems.
  - Track and update the user's streak of correct answers.

- **Quiz Completion Page**:

  - Show the current streak.
  - Provide options to restart the quiz or return to the homepage.

- **Leaderboards Page**:
  - List the top 10 streaks, including the highest correct answers and the date they were recorded.

## Setup Instructions

### Prerequisites

- Install [Node.js](https://nodejs.org) on your system.
- Use a code editor such as [VSCode](https://code.visualstudio.com/).

## How to Set Up the Project

This repository is designed as a **GitHub template** to help you quickly initialize your own version of the **Math Competition App**.

### Steps to Create Your Repository

1. **Click the "Use this template" button** on GitHub to create your own repository.
2. **Name your repository** and set its visibility (public or private).
3. **Clone your repository** onto your local machine:
   ```bash
   git clone <your-repo-url>
   ```
4. Navigate to the project folder and install dependencies:
   ```bash
   cd <your-repo-name>
   npm install
   ```
5. **Run the application:**

   ```bash
   npm start
   ```

   This starts the server at `http://localhost:3000/`.

6. **Run tests:**

   ```bash
   npm test
   ```

   This will execute unit tests for the application.

7. As you work on the project, commit and push your changes regularly:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

By following these steps, you’ll have a structured project setup, allowing you to focus on implementing features efficiently.

## Development Guidelines

1. **Homepage**
   - Links should direct users to either start a quiz or view the leaderboards.
   - Display the last recorded streak or inform users if no previous streak is available.
2. **Quiz Logic**
   - Implement a system that presents random math problems.
   - Verify user answers and update streaks accordingly.
3. **Leaderboard System**

   - Track and display the top 10 streaks.
   - Store data in memory (no database required).

4. **Testing**
   - Implement unit tests to ensure:
     - Math questions are generated correctly.
     - User responses are validated properly.
   - Ensure all tests pass before final submission.

## Submission Guidelines

- Submit your GitHub repository link through **Microsoft Teams** under the appropriate assignment.
- Ensure that all required functionality is implemented and fully operational.
- The project should launch using `npm start`, and all tests should successfully run with `npm test`.

## Additional Notes

- You may use additional npm packages to enhance the project (excluding React or other templating engines).
- **All pages must be built using .ejs templates**.
- There is no need for a database; all data will be stored temporarily in memory.

---

### **Prepared by:**

**Abdul Rahman Zahiri**

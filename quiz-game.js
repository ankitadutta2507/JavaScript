const questions = [
  {
    category: "JavaScript",
    question: "Which keyword declares a constant variable?",
    choices: ["var", "let", "const"],
    answer: "const"
  },
  {
    category: "JavaScript",
    question: "Which method adds an item to the end of an array?",
    choices: ["push()", "pop()", "shift()"],
    answer: "push()"
  },
  {
    category: "Programming",
    question: "Which data type represents true or false?",
    choices: ["String", "Number", "Boolean"],
    answer: "Boolean"
  },
  {
    category: "HTML",
    question: "Which tag creates a hyperlink?",
    choices: ["<a>", "<div>", "<img>"],
    answer: "<a>"
  },
  {
    category: "CSS",
    question: "Which property changes text color?",
    choices: ["color", "font-size", "margin"],
    answer: "color"
  }
];
function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}
function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

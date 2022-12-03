const questions = [
  { 
    type: "multipleChoice",
    question: "Which of these colors do you prefer?",
    options: [
      { name: "red", hex: "#C1292E" },
      { name: "blue", hex: "#235789" },
      { name: "violent", hex: "#42033D" },
      { name: "yellow", hex: "#F1D302", light:true },
      { name: "black", small:"(the color of death)", hex: "#010101" },
      { name: "green", hex: "#77BFA3", light:true }
    ]
  },
  {
    type: "range",
    title: "How many alcoholic drinks do you drink in a week?",
    min: 3,
    max: 99
  }
]
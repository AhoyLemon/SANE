const questions = {
  colors:  { 
    type: "multipleChoice",
    question: "Which of these colors do you prefer?",
    options: [
      { name: "red", hex: "#C1292E", opposite:"#3ed6d1" },
      { name: "blue", hex: "#235789", opposite:"#f89434"  },
      { name: "violent", hex: "#42033D", opposite:"#61ee6d"  },
      { name: "yellow", hex: "#F1D302", light:true, opposite:"#87B5FD" },
      { name: "black", small:"(the color of death)", hex: "#010101", opposite:"#ccc" },
      { name: "green", hex: "#77BFA3", light:true, opposite:"#f05592" }
    ]
  },
  drinks: {
    type: "range",
    title: "How many alcoholic drinks do you drink in a week?",
    min: 3,
    max: 99
  },
  rorschach: {
    options: [
      { text: "death moth" },
      { text: "smiling skull" },
      { text: "stab victim" },
      { text: "blood prints" }
    ]
  },
  youThink: {
    options: [
      { text: "yes" },
      { text: "no" }
    ]
  },

  foodHappy: {
    options: [
      { text: "😚" },
      { text: "🤫" },
      { text: "😱" },
      { text: "🤓" },
      { text: "🫥" },
    ]
  },

  ashamed: {
    options: [
      { text: "strongly disagree" },
      { text: "slightly disagree" },
      { text: "modestly do agree" },
      { text: "extremely agree" },
    ]
  },

  hats: {
    options: [
      { text: "strongly disagree" },
      { text: "slightly disagree" },
      { text: "modestly do agree" },
      { text: "extremely agree" },
    ]
  },

  loveObject: {
    options: [
      { text: "a potato", slug:"potato" },
      { text: "a u-turn sign", slug:"uturn" },
      { text: "lead crystal glass", slug:"glass" },
      { text: "a camera that costs about $6,000", slug:"camera" }
    ]
  }

}
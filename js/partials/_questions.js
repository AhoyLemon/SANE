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
  },

  enterCode2FollowUp: {
    confirmOptions: [
      { text: 'Yes' },
      { text: "No" },
    ],
    questions: [
      {
        title: "Do you forget a lot of things?",
        options: [
          { text: 'Yes' },
          { text: "No" },
          { text: "I don't know"}
        ] 
      },
      {
        title: "Forgetfulness is a sign of depression. Are you depressed?",
        options: [
          { text: 'Yes' },
          { text: "No" },
          { text: "Sometimes"}
        ] 
      },
      {
        title: "Forgetfulness is caused by stress and anxiety. Which is a bigger problem for you?",
        options: [
          { text: 'stress' },
          { text: "anxiety" },
          { text: "both" }
        ] 
      },
      {
        title: "Would you describe your forgetfulness as...",
        options: [
          { text: 'Typical' },
          { text: "Problematic" },
          { text: "I don't know"}
        ] 
      },
      {
        title: "Everyone will forget you after you die. Is this a problem?",
        options: [
          { text: 'Yes' },
          { text: "No" },
          { text: "I don't know"}
        ] 
      },
      {
        title: "Will you forget those who have loved you, and will it be hard?",
        options: [
          { text: 'Yes I will forget them, and yes it will be hard.' },
          { text: "Yes I will forget them but it will be easy." },
          { text: "I will try to not forget them, but it will be hard if I do."}
        ] 
      },
      {
        title: "Are you jealous of people smarter than you?",
        options: [
          { text: 'no' },
          { text: "very" },
          { text: "it is difficult to be truthful"}
        ] 
      }
    ]
  }

}
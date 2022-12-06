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
      { text: "Yes, I choose to believe it will." },
      { text: "Food will not make me happy." },
      { text: "Nothing can do that." },
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
      { text: "a potato", slug:"potato", title: "A Potato" },
      { text: "a u-turn sign", slug:"uturn", title: "A Sign That Signifies U-Turns Are Allowed Here" },
      { text: "lead crystal glass", slug:"glass", title: "A Lead Crystal Glass, Which Is Unsafe To Drink From" },
      { text: "a camera that costs about $6,000", slug:"camera", title:"A Leica M10-D digital Rangefinder camera, MSRP $8,000 USD." }
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
        title: "Is it difficult to remember?",
        options: [
          { text: 'no' },
          { text: "very" },
          { text: "it is difficult to be truthful"}
        ] 
      }
    ]
  },

  breatheNormally: {
    why: {
      options: [
        { text: "Because of the medications I am on" },
        { text: "Because of my issues with my weight and/or food" },
        { text: "Because of my struggles with anxiety" },
        { text: "Because of my upbringing/family/the way I was raised" },
        { text: "Because of the way my nose is shaped" },
        { text: "Because of my unusual/unappealing face" },
        { text: "Because of my the thoughts I try to keep to myself" },
        { text: "Because I cannot stop dwelling on my regrets" },
        { text: "Because there is probably a carbon monoxide leak" },
        { text: "Because I am nervous about what this test will uncover" },
      ]
    }
  },

  tongue: {
    options: [
      { text: "me" },
      { text: "you" },
      { text: "nothing" },
      { text: "pine needles" },
      { text: "dread" },
      { text: "that is unknowable" },
    ]
  },

  ramblingQuestion: {
    options: [
      { text: "Yes" },
      { text: "No." },
      { text: "I don't know." },
    ]
  },

  howManyLights: {
    options: [
      { text: "1", disabled: false },
      { text: "2", disabled: false },
      { text: "3", disabled: false },
      { text: "4", disabled: true },
      { text: "5", disabled: false },
      { text: "7", disabled: false },
      { text: "8", disabled: false },
      { text: "1,000", disabled: false },
    ],
    followUp: {
      options: [
        { text: "I know that isn't the right number", disabled: false },
        { text: "I don't know that isn't the right number", disabled: false },
      ]
    }
  }


}
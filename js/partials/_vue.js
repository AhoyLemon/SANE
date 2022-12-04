var app = new Vue({
  el: '#app',
  data: {

    questions: questions,

    current: {
      question: 12
    },

    ui: {

      aside: {
        showNametag: false,
        nametagBackground: "#fff"
      },

      howManyDrinks: {
        min: 3,
        max: 21
      },
      favoriteColor: {
        opposite: "#fff"
      },
      sink: {
        min: 27,
        max: 103,
      },
      validName: {
        min: 5,
        max: 22,
      },
      youThink: {
        saneHover: false
      },
      hatsExplanation: {
        demand: false,
        min: 35,
        max: 103,
        placeholder: null
      },

      enterCode: {
        code: randomNumber(101,999) + randomFrom(codeLetters) + randomNumber(11,99),
        errorMessage: null,
        errorMessageAgain: null,
        showFollowUpQuestions: false
      }
    },

    answers: {
      howManyDrinks: 0,
      yourName: "",
      favoriteColor: null,
      sink: "",
      rorschach: null,
      youThink: null,
      foodHappy: null,
      ashamed: null,
      hats: null,
      hatsExplanation: null,
      loveObject: null,
      enterCode: null,
      enterCodeAgain: null,
      enterCodeFollowUp: {
        confirmed: null,
        questions: []
      }
    }
  },

  methods: {
    saneHover(v) { 
      const self = this;
      self.ui.youThink.saneHover = v;
      return false;
    },

    changeFavoriteColor(o) {
      const self = this;
      self.ui.favoriteColor.opposite = o;
    },

    validateCode(w) {
      const self = this;
      if (w == 1) {
        const enteredCode = self.answers.enterCode.trim().toUpperCase();
        if (!enteredCode || enteredCode.length < 3) {
          self.ui.enterCode.errorMessage = `You must enter the code <tt>${self.ui.enterCode.code}</tt>`;
        } else if (enteredCode == self.ui.enterCode.code) {
          self.current.question++;
        } else {
          self.ui.enterCode.errorMessage = `That is not the correct code. Enter <tt>${self.ui.enterCode.code}</tt>`;
        }
      } else if (w == 2) {
        const enteredCode = self.answers.enterCodeAgain.trim();
        if (!enteredCode || enteredCode.length < 3) {
          self.ui.enterCode.errorMessageAgain = `You must enter the Personal Code (PC) given to you earlier.`;
        } else if (enteredCode == self.ui.enterCode.code) {
          self.current.question++;
        } else {
          self.ui.enterCode.errorMessageAgain = `That is not the correct code. Enter the Personal Code (PC) given to you earlier.`;
        }
      }
      
    },

    answerQuestion(q) {
      const self = this;
      
      if (q == "yourName") {
        self.answers.yourName = self.answers.yourName.slice(0, -1)
        self.ui.aside.showNametag = true;
      } else if (q == "favoriteColor") {
        self.ui.aside.nametagBackground = self.ui.favoriteColor.opposite;
        self.ui.aside.showNametag = true;
      }

      // Advance to next question, unless...
      if (q == "hats") {
        
        if (self.answers.hats == 'strongly disagree') {
          self.ui.hatsExplanation.placeholder = "You have confessed to an unhealthy aversion to hats. What makes you so afraid?"
        } else if (self.answers.hats == 'slightly disagree') {
          self.ui.hatsExplanation.placeholder = "You have failed to commit to your aversion of hats. Is this a problem in your life?"
        } else if (self.answers.hats == 'modestly do agree') {
          self.ui.hatsExplanation.placeholder = "You are struggling to choose safe answers. Are you worried what would happen if you told the truth?"
        } else if (self.answers.hats == 'extremely agree') {
          self.ui.hatsExplanation.placeholder = "You enjoy how hats disguise your appearance. Has anyone ever seen the real you?"
        }
        self.ui.hatsExplanation.demand = true;
      } else if (q == "enterCode1") {
        self.validateCode(1);
      } else if (q == "enterCode2") {
        self.validateCode(2);
      } else {

        // This isn't a special round, go ahead and just advance to the next one.
        
        self.current.question++;
      }
      
    }
    
  },

  computed: {
    validNameEntered() {
      const self = this;
      if (self.answers.yourName.length >= self.ui.validName.min && self.answers.yourName.length <= self.ui.validName.max) {
        return true;
      } else {
        return false;
      }
    },
    computedDrinksError() {
      const self = this;
      
      if (self.answers.howManyDrinks > 16) {
        return "I am worried about you.";
      } else if (self.answers.howManyDrinks > 10) {
        return "You have a drinking problem.";
      } else if (self.answers.howManyDrinks > 6) {
        return "That's quite a lot.";
      } else {
        return "Please be honest."
      }
    },
    computedFollowUpQuestionsFinished() {
      const self = this;

      if (!self.questions.enterCode2FollowUp.questions || !self.answers.enterCodeFollowUp.questions) {
        return false;
      } else if (self.questions.enterCode2FollowUp.questions.length == self.answers.enterCodeFollowUp.questions.length) {
        return true;
      } else {
        return false;
      }
    }
  },

  mounted: function() {

  }

});
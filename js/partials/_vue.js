var app = new Vue({
  el: '#app',
  data: {

    questions: questions,

    current: {
      question: 1
    },

    ui: {

      aside: {
        showNametag: false,
        nametagBackground: "#fff"
      },

      howManyDrinks: {
        min: 3,
        max: 14
      },
      favoriteColor: {
        opposite: "#fff"
      },
      sink: {
        min: 27,
        max: 103,
      },
      yourName: {
        min: 7,
        max: 21,
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
      },
      breatheNormally: {
        phase: 1,
        timer: null,
        ms: 0
      },
      ramblingQuestion: {
        followUp: {
          display:false
        }
      },
      howManyLights: {
        flashing: false,
        phase: 1,
        timer: null,
        ms: null
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
      ramblingQuestion: null,
      howManyLights: null,
      howManyLightsFollowUp: null,
      enterCodeFollowUp: {
        confirmed: null,
        questions: []
      },
      breatheNormally: {
        why: []
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

    resetPersonalCode() {
      const self = this;
      self.ui.enterCode.code = randomNumber(101,999) + randomFrom(codeLetters) + randomNumber(11,99);
      return true;
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

    startBreathing(phase) {
      const self = this;
      if (phase == 1) {
        self.ui.breatheNormally.ms = 0;
        self.ui.breatheNormally.timer = setInterval(function() {
          self.ui.breatheNormally.ms += 0.01;
          if (self.ui.breatheNormally.ms >= 5.6) {
            clearInterval(self.ui.breatheNormally.timer);
            self.ui.breatheNormally.timer = null;
            self.ui.breatheNormally.phase = 3;
            self.ui.breatheNormally.ms = 0;
          }
        }, 10);
        self.ui.breatheNormally.phase = 2;
      } else if (phase == 3) {
        self.ui.breatheNormally.ms = 0;
        self.ui.breatheNormally.timer = setInterval(function() {
          self.ui.breatheNormally.ms += 0.01;
          if (self.ui.breatheNormally.ms >= 11.2) {
            clearInterval(self.ui.breatheNormally.timer);
            self.ui.breatheNormally.timer = null;
            self.ui.breatheNormally.phase = 5;
            self.ui.breatheNormally.ms = 0;
          }
        }, 10);
        self.ui.breatheNormally.phase = 4;
      }
      
    },

    startLights() {
      const self = this;
      self.ui.howManyLights.phase = 2;
      self.ui.howManyLights.flashing = true;

      self.ui.breatheNormally.timer = setTimeout(function() {
        self.ui.howManyLights.flashing = false;
        self.ui.howManyLights.phase = 3;
      }, 7300);
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
      } else if (q == "ramblingQuestion") {
        if (self.answers.ramblingQuestion == "I don't know.") {
          self.ui.ramblingQuestion.followUp.display = true;
        } else {
          self.current.question++;
        }
      } else if (q == "howManyLights") {
        if (self.answers.howManyLights == "1" || self.answers.howManyLights == "2" || self.answers.howManyLights == "7" || self.answers.howManyLights == "8" || self.answers.howManyLights == "1,000") {
          self.ui.howManyLights.phase = 4;
        } else {
          self.current.question++;
        }
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
    computedDrinksOutput() {
      const self = this;
      if (self.answers.howManyDrinks < 1) {
        return ""
      } else if (self.answers.howManyDrinks < self.ui.howManyDrinks.max) {
        return self.answers.howManyDrinks
      } else {
        return self.answers.howManyDrinks + "+";
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
    computedMessCharacters() {
      const self = this;
      if (!self.answers.sink) {
        return {
          display:false,
          current: 0,
          min: self.ui.sink.min,
          max: self.ui.sink.min,
          error: true,
          status: "empty"
        }
      } else {
        const current = self.answers.sink.length
        if (current < self.ui.sink.min)  {
          return {
            display:true,
            current: current,
            min: self.ui.sink.min,
            max: self.ui.sink.max,
            error: true,
            status: "tooShort"
          }
        } else if (current > self.ui.sink.max) {
          return {
            display:true,
            current: current,
            min: self.ui.sink.min,
            max: self.ui.sink.max,
            error: true,
            status: "tooLong"
          }
        } else {
          return {
            display:true,
            current: current,
            min: self.ui.sink.min,
            max: self.ui.sink.max,
            error: false,
            status: "valid"
          }
        }
      }
    },
    computedHatsCharacters() {
      const self = this;
      const rules = self.ui.hatsExplanation;
      if (!self.answers.hatsExplanation) {
        return {
          display:false,
          current: 0,
          min: rules.min,
          max: rules.min,
          error: true,
          status: "empty"
        }
      } else {
        const current = self.answers.hatsExplanation.length
        if (current < rules.min)  {
          return {
            display:true,
            current: current,
            min: rules.min,
            max: rules.max,
            error: true,
            status: "tooShort"
          }
        } else if (current > rules.max) {
          return {
            display:true,
            current: current,
            min: rules.min,
            max: rules.max,
            error: true,
            status: "tooLong"
          }
        } else {
          return {
            display:true,
            current: current,
            min: rules.min,
            max: rules.max,
            error: false,
            status: "valid"
          }
        }
      }
    },
    computedNameCharacters() {
      const self = this;
      const rules = self.ui.yourName;
      if (!self.answers.yourName) {
        return {
          display:false,
          current: 0,
          min: rules.min,
          max: rules.min,
          error: true,
          status: "empty"
        }
      } else {
        const current = self.answers.yourName.length
        if (current < rules.min)  {
          return {
            display:true,
            current: current,
            min: rules.min,
            max: rules.max,
            error: true,
            status: "tooShort"
          }
        } else if (current > rules.max) {
          return {
            display:true,
            current: current,
            min: rules.min,
            max: rules.max,
            error: true,
            status: "tooLong"
          }
        } else {
          return {
            display:true,
            current: current,
            min: rules.min,
            max: rules.max,
            error: false,
            status: "valid"
          }
        }
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
    },
    computedBreathSecondsOutput() {
      const self = this;
      if (!self.ui.breatheNormally || !self.ui.breatheNormally.ms) {
        return null
      } else {
        let parts = self.ui.breatheNormally.ms.toString().split('.');
        let seconds = parseInt(parts[0]);
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        let ms = parts[1].substring(0,2);
        return `<span class="big">${seconds}</span><span class="small">${ms}</span>`;
      }
    }
  },

  mounted: function() {

  }

});
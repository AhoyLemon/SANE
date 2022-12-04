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
        max: 21,
        errorMessage: "Please be honest for accurate results."
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
      loveObject: null
    }
  },

  methods: {
    saneHover(v) { 
      const self = this;
      self.ui.youThink.saneHover = v;
      return false;
    },

    answerQuestion(q) {
      const self = this;
      

      if (q == "yourName") {
        self.answers.yourName = self.answers.yourName.slice(0, -1)
        self.ui.aside.showNametag = true;
      } else if (q == "favoriteColor") {
        self.ui.aside.nametagBackground = "#F33";
      }
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
      } else {
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
    }
  },

  mounted: function() {

  }

});
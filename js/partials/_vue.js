var app = new Vue({
  el: '#app',
  data: {

    questions: questions,

    current: {
      question: 6
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
      }
    },

    answers: {
      howManyDrinks: 6,
      yourName: "",
      favoriteColor: null,
      sink: "",
      rorschach: null,
      youThink: null
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

      self.current.question++;
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
    }
  },

  mounted: function() {

  }

});
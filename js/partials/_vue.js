var app = new Vue({
  el: '#app',
  data: {

    questions: questions,
    stickerURL: "https://ahoylemon.square.site/product/sane-sticker/6",

    current: {
      interface: "questions",
      question: 20,
      diagnosis: null
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
      },

      hearingMusic: {
        now: false,
        phase: 1
      },

      yourPrediction: {
        diagnosis: null,
        phase: 1
      },

      sortCities: {
        cities: [], 
        answers: [],
        totalScore: 0,
        showScores: false,
        dragCount: 0,
        sortFeedback: `Sort the cities by population. Do it quickly and <strong>do not make any mistakes</strong>.`,
        sortFeedbackOptions: [
          `Be more efficient when you sort the cities.`,
          `Go faster.`,
          `Think about it.`,
          `Go significantly faster.`,
          `Be faster in your sorting.`,
          `That's probably not right.`,
          `You really think so? <strong>Think about it.</strong>`,
          `Take your time.`,
          `Slow down.`,
          `Be faster.`,
          `Faster!`,
          `Don't do it like that.`,
          `That's probably wrong.`,
          `You should read more.`,
          `You're not familiar with other countries.`,
          `You aren't getting this.`,
          `You're probably not able to do this.`,
          `Are you even trying?`,
          `Don't do it that way.`
        ],
        submitButtonDisabled: true,
        count: {
          wrong: 0,
          bad: 0,
          veryBad: 0
        }
      },

      dragList: {
        dragging: false
      },

      diagnosis: {
        sanityScore: -1,
        showHow: false
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
      },
      hearingMusic: null,
      howManyLightsFollowUp: [],
      whyTest: null,
      yourPrediction: null,
      yourPredictionFollowUp: null,
      sortCities: []
    }
  },

  methods: {


    beginExam() {
      const self = this;
      self.current.interface = 'questions';
      setTimeout(() => {
        self.current.question = 1;
      }, 2225)
    },

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
        const enteredCode = self.answers.enterCodeAgain.trim().toUpperCase();
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

    startMusic(whatMusic) {
      const self = this;

      if (whatMusic == "quiet") {
        if (!self.ui.hearingMusic.now) {
          comet1.play();
          comet1.fade(0,0.05, 12000);
          self.ui.hearingMusic.now = "quiet";
        }
        
      } else if (whatMusic == "loop") {
        if (self.ui.hearingMusic.now != "loop") {
          comet1.fade(0.05,0, 6000);
          cometLoop.play();
          cometLoop.fade(0,0.1, 6000);
        }
      } else if (whatMusic == "stop") {
        comet1.fade(0.05,0, 6000);
        cometLoop.fade(0.1,0, 6000);
        setTimeout(() => {
          comet1.stop();
          cometLoop.stop();
          self.ui.hearingMusic.now = null;
        }, 6000)
        
      }
      
    },

    cityDragged() {
      const self = this;
      self.ui.sortCities.dragCount += 1;
      if (self.ui.sortCities.dragCount < 1) {
        self.ui.sortCities.sortFeedback = `Sort the cities by population. Do it quickly and <strong>do not screw it up</strong>`;
      } else {
        self.ui.sortCities.sortFeedback = randomFrom(self.ui.sortCities.sortFeedbackOptions);
      }
    },

    scoreCities() {
      const self = this;
      const answers = self.ui.sortCities.answers;

      self.ui.sortCities.cities.forEach(function(element, key) {
        
        if (answers[key] && answers[key].name && element.name == answers[key].name) {
          element.score = 3;
        } else if (answers[key-1] && answers[key-1].name && element.name == answers[key-1].name) {
          element.score = 2;
        } else if (answers[key+1] && answers[key+1].name && element.name == answers[key+1].name) {
          element.score = 2;
        } else if (answers[key-2] && answers[key-2].name && element.name == answers[key-2].name) {
          element.score = 0;
        } else if (answers[key+2] && answers[key+2].name && element.name == answers[key+2].name) {
          element.score = 0;
        } else if (answers[key-3] && answers[key-3].name && element.name == answers[key-3].name) {
          element.score = -1;
        } else if (answers[key+3] && answers[key+3].name && element.name == answers[key+3].name) {
          element.score = -1;
        } else if (answers[key-4] && answers[key-4].name && element.name == answers[key-4].name) {
          element.score = -2;
        } else if (answers[key+4] && answers[key+4].name && element.name == answers[key+4].name) {
          element.score = -2;
        } else if (answers[key-5] && answers[key-5].name && element.name == answers[key-5].name) {
          element.score = -3;
        } else if (answers[key+5] && answers[key+5].name && element.name == answers[key+5].name) {
          element.score = -3;
        } else if (answers[key-6] && answers[key-6].name && element.name == answers[key-6].name) {
          element.score = -4;
        } else if (answers[key+6] && answers[key+6].name && element.name == answers[key+6].name) {
          element.score = -4;
        } else {
          element.score = -5;
        }

        self.ui.sortCities.totalScore += element.score;

        if (element.score < 3) {
          self.ui.sortCities.count.wrong += 1;
        }
        if (element.score < 0) {
          self.ui.sortCities.count.bad += 1;
        }
        if (element.score < -2) {
          self.ui.sortCities.count.veryBad += 1;
        }


      });

      self.ui.sortCities.showScores = true;

      setTimeout(() => {
        self.ui.sortCities.submitButtonDisabled = false
      }, 3000)
      
      

    },

    answerQuestion(q, theQuestion, theAnswer) {
      const self = this;
      
      
      if (q == "yourName") {
        self.answers.yourName = self.answers.yourName.slice(0, -1)
        self.ui.aside.showNametag = true;
        _paq.push(['setCustomVariable', 1, "patientName", self.answers.yourName, "visit"]);
      } else if (q == "favoriteColor") {
        self.ui.aside.nametagBackground = self.ui.favoriteColor.opposite;
        self.ui.aside.showNametag = true;
      }

      if (self.current.question == 15) {
        self.startMusic('quiet');
      }
      if (self.current.question == 18) {
        self.startMusic('stop');
      }

      // Advance to next question, unless...
      if (q == 'yourPrediction') {
        if (self.answers.yourPrediction.includes(" SANE")) {
          self.ui.yourPrediction.diagnosis = "sane";
        } else if (self.answers.yourPrediction.includes(" INSANE")) {
          self.ui.yourPrediction.diagnosis = "insane";
        } else {
          self.ui.yourPrediction.diagnosis = "uncertain";
        }
        _paq.push(['setCustomVariable', 2, "prediction", self.ui.yourPrediction.diagnosis.toUpperCase(), "visit"]);
        self.ui.yourPrediction.phase = 2;
      } else if (q == "hats") {
        
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
      } else if (q == "hearingMusic") {
        if (self.answers.hearingMusic == "I don't hear anything.") {
          self.ui.hearingMusic.phase = 2;
          self.startMusic('loop');
        } else if (self.answers.hearingMusic == "Yes, I hear music." || self.answers.hearingMusic == "I did, but not anymore.") {
          self.ui.hearingMusic.phase = 3;
          self.startMusic('loop');
        } else {
          self.current.question++;
        }
        
      } else {
        // This isn't a special round, go ahead and just advance to the next one.
        self.current.question++;


        let url = new URL(window.location);
        url.searchParams.set('question', self.current.question);
        window.history.pushState({question: self.current.question}, '', url);

        if (self.current.question > 20) {

          self.current.interface = "outro";
          self.ui.diagnosis.showHow = false;
          
          let url = new URL(window.location);
          url.searchParams.delete('question');
          url.searchParams.set('show', 'outro');
          window.history.pushState({question: self.current.question}, '', url);

          self.current.diagnosis = "calculating";
          setTimeout(() => {
            self.determineSanity();
          }, 6300);

          
        }
      }

      if (theQuestion && theAnswer) {
        sendEvent("Question Answered", theQuestion, theAnswer);
      }
      
    },

    determineSanity() {
      const self = this;
      const sanityBarrier = 50;

      // Randomly generate a sanity score....
      if (!self.ui.diagnosis.sanityScore || self.ui.diagnosis.sanityScore < 1) {
        self.ui.diagnosis.sanityScore = Math.floor(Math.random() * 99) + 1;
      } else if (self.ui.diagnosis.sanityScore <= 50) {
        self.ui.diagnosis.sanityScore = Math.floor(Math.random() * 49) + 50;
      } else if (self.ui.diagnosis.sanityScore > 50) {
        self.ui.diagnosis.sanityScore = Math.floor(Math.random() * 49);
      }

      if (self.ui.diagnosis.sanityScore == 50 || self.ui.diagnosis.sanityScore == 0) {
        // 50 and 0 are not acceptable numbers, try again.
        self.determineSanity();
      }

      // Determine sanity from the sanity score.
      self.ui.diagnosis.showHow = false;
      if (self.ui.diagnosis.sanityScore < sanityBarrier) {
        self.current.diagnosis = "INSANE";
      } else {
        self.current.diagnosis = "SANE";
      }

      // Scroll to diagnosis
      document.getElementById('DiagnosisMain').scrollIntoView({behavior: "smooth"});

      // Play the appropriate sound.
      if (self.current.diagnosis == "INSANE") {
        insaneSound.play();
      }
      if (self.current.diagnosis == "SANE") {
        saneSound.play();
      }

      // Change the URL
      let url = new URL(window.location);
      url.searchParams.set('diagnosis', self.current.diagnosis);
      window.history.pushState({question: self.current.question}, '', url);

      // Send diagnosis to Matomo
      sendEvent("Diagnosis", self.current.diagnosis);
      _paq.push(['setCustomVariable', 3, "diagnosis", self.current.diagnosis, "visit"]);
      
    },
    

    showHow() {
      const self = this;
      self.ui.diagnosis.showHow = true;
      setTimeout(() => {
        hljs.highlightAll();
      }, 100)
    }
  },

  computed: {
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

      if (!self.answers.howManyDrinks) {
        return "Answer using the slider above.";
      } else if (self.answers.howManyDrinks > 16) {
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
    },

    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },

  mounted: function() {
    const self = this;
    self.ui.sortCities.cities = [...self.questions.sortCities.cities];
    self.ui.sortCities.cities = shuffle(self.ui.sortCities.cities);
    self.ui.sortCities.cities.length = 10;

    self.ui.sortCities.answers = [...self.ui.sortCities.cities];
    self.ui.sortCities.answers.sort(function(a, b) {
      
      if (a.population > b.population) return -1;
      if (a.population < b.population) return 1;
      return 0;
    });


    let url = new URL(window.location);
    url.searchParams.delete('question');
    url.searchParams.delete('show');
    url.searchParams.delete('diagnosis');
    window.history.replaceState({'vue': 'mounted'}, '', url);
  }

});
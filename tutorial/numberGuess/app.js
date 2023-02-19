Vue.createApp({
  data() {
    return {
      input: 1,
      turnCounter: 0,
      priorGuesses: [],
      numberToGuess: this.generateRandomNumber(),
      status: "",
    };
  },
  methods: {
    submit() {
      this.turnCounter++;
      this.feedback();
    },

    feedback() {
      if (this.input == this.numberToGuess) {
        this.status = "victory";
      }

      if (this.input == this.numberToGuess && this.turnCounter > 7) {
        this.status = "halfVictory";
      }

      if (
        (this.turnCounter == 7 && this.input > this.numberToGuess) ||
        (this.turnCounter == 7 && this.input < this.numberToGuess)
      ) {
        this.status = "gameOver";
      }

      if (this.input > this.numberToGuess) {
        this.priorGuesses.push(this.input + " is too HIGH");
      } else if (this.input < this.numberToGuess) {
        this.priorGuesses.push(this.input + " is too LOW");
      }
    },

    gameReset() {
      this.turnCounter = 0;
      this.priorGuesses.length = 0;
      this.status = false;
      this.generateRandomNumber();
    },

    generateRandomNumber() {
      return (this.numberToGuess = Math.floor(Math.random() * 100) + 1);
    },
  },
  computed: {
    // autoGen() {
    //   return (this.numberToGuess = Math.floor(Math.random() * 100) + 1);
    // },
  },
}).mount("#app");

Vue.createApp({
  data() {
    return {
      input: 0,
      turnCounter: 0,
      priorGuesses: [],
      numberToGuess: 0,
    };
  },
  methods: {
    submit() {
      this.priorGuesses.push(this.input);
      checkCloseness(this.input);
      this.input = 0;
    },
    checkCloseness(userInput) {},
  },
  computed: {
    generateRandomNumber() {
      return (this.numberToGuess = Math.floor(Math.random() * 100) + 1);
    },
  },
}).mount("#app");

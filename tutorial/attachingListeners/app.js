Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    multiply(msg, event) {
      console.log(msg);
    },
  },
}).mount("#app");

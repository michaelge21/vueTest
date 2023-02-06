import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      isPurple: false,
    };
  },
  methods: {},
  computed: {
    circle_classes() {
      return { purple: this.isPurple };
    },
  },
}).mount("#app");

import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      isPurple: false,
      size: 300,
    };
  },
  methods: {},
  computed: {
    circle_classes() {
      return { purple: this.isPurple };
    },
    changeSize() {
      return {
        width: this.size + "px",
        height: this.size + "px",
        lineHeight: this.size + "px",
      };
    },
  },
}).mount("#app");

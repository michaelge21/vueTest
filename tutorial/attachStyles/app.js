import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";


createApp({
  data() {
    return {
      color: "green",
      isClicked: false,
    }
  },
  methods: {
    changeColor() {
      return this.color === "green"
      ? this.color = "blue"
      : this.color = "green";
    },

    clickSwitch() {
      return this.isClicked === false
      ? this.isClicked = true
      : this.isClicked = false;
    }
  }
}).mount("#app");
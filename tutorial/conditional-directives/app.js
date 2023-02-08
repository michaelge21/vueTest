import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      isClicked: true,
      password: ""
    }
  },
  methods: {
    toggleIsClicked() {
      this.isClicked === true
      ? this.isClicked = false
      : this.isClicked = true;
    }
  }
}).mount("#app")
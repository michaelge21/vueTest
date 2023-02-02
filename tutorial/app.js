let appData = {
  data() {
    return {
      message: "hey! can you see this?",
    };
  },
  methods: {
    makeUpperCase(dataString) {
      return dataString.toUpperCase();
    },
  },
};

const app = Vue.createApp(appData);
app.mount("#app");

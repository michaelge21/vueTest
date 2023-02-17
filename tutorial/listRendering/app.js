Vue.createApp({
  data() {
    return {
      clubs: ["liverpool", "man city", "united", "arsenal"],
      managers: [
        { name: "klopp", form: "poor" },
        { name: "pep", form: "great" },
        { name: "ten hag", form: "okay" },
        { name: "arteta", form: "great" },
      ],
    };
  },
  methods: {},
}).mount("#app");

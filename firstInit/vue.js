import { createApp } from "vue";

const firstApp = createApp({
  data() {
    return {
      message: "asdf",
    };
  },
});
firstApp.mount("#app");

let id = 0;
const todoApp = createApp({
  data() {
    return {
      todoText: "",
      todoArray: [
        { id: id++, content: "first Todo", done: false },
        { id: id++, content: "second Todo", done: false },
        { id: id++, content: "third Todo", done: false },
        { id: id++, content: "fourth Todo", done: false },
      ],
    };
  },
  methods: {
    addItem() {
      this.todoArray.push({
        id: id++,
        content: this.todoText,
        done: false,
      });
      this.todoText = "";
    },
    deleteItem(todo) {
      this.todoArray = this.todoArray.filter((eachTodo) => eachTodo !== todo);
    },
  },
  watch: {
    todoArray: {
      deep: true,
      immediate: true,

      handler() {
        console.log(this.todoArray, ": and this is the whole array!");
      },
    },
  },
});
todoApp.mount("#secondApp");

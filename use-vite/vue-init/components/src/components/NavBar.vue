<template>
  <nav>
    <ul>
      <li>About</li>
      <li>Initiatives</li>
      <li>TransformAsian</li>
      <li>Contact</li>
      <li>
        <label for="search">
          <input
            id="search"
            type="text"
            placeholder="search here"
            v-model="searchQuery"
          />
        </label>
        <button @click="submitSearch">submit</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    submitSearch() {
      alert(
        "woah! you clicked! and looks like the message was " + this.searchQuery
      );
    },
  },
};
</script>

<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
}

nav {
  background-color: rebeccapurple;
}
ul {
  height: 20vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  list-style: none;

  color: white;
}

ul li:first-child {
  margin-right: auto;
}

ul li {
  margin: 0 15px;
}
</style>

<template>
  <nav>
    <ul>
      <li>About</li>
      <li>Initiatives</li>
      <li>TransformAsian</li>
      <li>Contact</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      msg: "hello world!",
    };
  },
};
</script>

<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
}

ul,
h1,
h2,
h3,
h4,
li {
  padding: 0;
  margin: 0;
}
ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  list-style: none;
}

ul li:first-child {
  margin-right: auto;
}
</style>

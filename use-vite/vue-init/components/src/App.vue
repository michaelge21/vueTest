<template>
  <NavBar></NavBar>
  <Main></Main>
  <Footer></Footer>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Main,
    Footer,
  },
};
</script>

<style>
*,
::before,
::after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
ul,
li,
main,
body {
  margin: 0;
  padding: 0;
}
</style>

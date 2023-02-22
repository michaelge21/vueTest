<template>
  <h1>{{ title }}</h1>
  <p>{{ desc }}</p>
</template>

<script>
export default {
  name: "BlogPost",
  props: ["title", "desc"],
};
</script>

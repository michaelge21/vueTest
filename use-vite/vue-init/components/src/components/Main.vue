<template>
  <main>
    <h1>this is some main content</h1>
    <p>this will only grow as large as the content within</p>
    <ul>
      <li>
        <BlogPost title="testing1" desc="testing"></BlogPost>
      </li>
      <li>
        <BlogPost title="sample title" desc="wow, clickbait!"></BlogPost>
      </li>
      <li>
        <BlogPost title="another sample" desc="no clickbait >:("></BlogPost>
      </li>

      <!-- <li v-for="post in BlogPosts">
        <h1>{{ post.title }}</h1>
        <p>{{ post.desc }}</p>
      </li> -->
    </ul>
  </main>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
export default {
  name: "Main",
  data() {
    return {
      //   BlogPosts: [
      //     {
      //       title: "test",
      //       desc: "testingDesc",
      //     },
      //     {},
      //     {},
      //   ],
    };
  },
  components: {
    BlogPost,
  },
};
</script>

<style scoped>
main {
  background-color: grey;
}

h1 {
  color: pink;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;

  list-style: none;
}

li {
  flex: 1 400px;
}
</style>

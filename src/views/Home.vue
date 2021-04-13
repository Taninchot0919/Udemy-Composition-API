<template>
  <div class="home">
    <h1>home</h1>
    <post-list v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList.vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "welcome to the blog",
        body:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur sequi natus ducimus accusamus, voluptas nam nemo, illo distinctio perspiciatis est facilis molestiae possimus doloremque incidunt! Assumenda tempore dolores ex fuga totam quidem neque itaque quam ducimus blanditiis voluptatibus aut numquam, aspernatur exercitationem possimus iure nostrum, non quos illum? Debitis ipsum delectus nam enim officia blanditiis eveniet, aspernatur magni beatae amet laborum assumenda autem nobis, ullam itaque a voluptate, temporibus incidunt maxime provident impedit similique laudantium. Rem adipisci, iusto deserunt repudiandae sint dolorem sunt tenetur id error possimus magni itaque. Aspernatur asperiores aut incidunt laboriosam possimus! Fugiat temporibus aspernatur asperiores facilis.",
        id: 1
      },
      { title: "top 5 css tips", body: "lorem ipsum", id: 2 }
    ]);

    const showPosts = ref(true);

    return { posts, showPosts };
  }
};
</script>

<style>
</style>
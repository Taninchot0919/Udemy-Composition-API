<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <post-list :posts="posts" />
    </div>
    <div v-else><spinner /></div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner.vue";

export default {
  name: "Home",
  components: { PostList, Spinner },
  setup() {
    // ต้องทำ Destructuring เพื่อนำข้อมูลที่ได้จาก GetPosts มาใช้
    const { posts, error, load } = getPosts();

    // เรียกใช้ load
    load();

    return { posts, error };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
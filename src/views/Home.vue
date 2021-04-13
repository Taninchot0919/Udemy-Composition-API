<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <post-list :posts="posts" />
    </div>
    <div v-else>Loading ...</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import GetPosts from "../composables/GetPosts";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    // ต้องทำ Destructuring เพื่อนำข้อมูลที่ได้จาก GetPosts มาใช้
    const { posts, error, load } = GetPosts();

    load();

    return { posts, error };
  }
};
</script>

<style>
</style>
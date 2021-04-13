<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <single-post :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["posts"],
  //   ใน setup สามารถเข้าถึง props ได้เลย
  setup(props) {
    //   เหมือนเป็นการบอกว่าจะใช้ Object ชื่ออะไร
    console.log(props.posts);
  }
};
</script>

<style>
</style>
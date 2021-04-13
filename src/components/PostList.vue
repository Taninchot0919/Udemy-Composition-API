<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <single-post :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["posts"],
  setup() {
    //   เราสามารถทำ vue life cycle ใน setup ได้เลย เพียงเติม on นำหน้า เช่น mounted เราต้องใช้ onMounted, updated ใช้ onUpdated
    onMounted(() => console.log("component mounted"));
    onUnmounted(() => console.log("component unmounted"));
    onUpdated(() => console.log("component updated"));
  },
  mounted() {
    console.log("mounted from old mounted");
  }
};
</script>

<style>
</style>
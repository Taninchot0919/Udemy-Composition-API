<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  // เหมือนประมาณว่าเราอยากจะจัดการให้เรียบร้อยก่อนที่จะ mounted (เท่าที่เข้าใจนะ)
  setup(props) {
    const snippet = computed(() => {
      // เป็น method ของ string เองแบบจะแสดงเริ่มต้นที่ไหน และจบที่ไหน
      return props.post.body.substring(0, 100) + "...";
    });

    return { snippet };
  }
};
</script>

<style>
</style>
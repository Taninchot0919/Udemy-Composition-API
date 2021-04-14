<template>
  <div class="create">
    <form>
      <label>Title : </label>
      <input v-model="title" type="text" required />
      <label>Content : </label>
      <textarea v-model="body" required></textarea>
      <label>Tags (Hit Enter to add tags)</label>
      <input
        type="text"
        v-model="tag"
        @keydown.enter.prevent="handleKeyDown"
        required
      />
      <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/runtime-core";
export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const handleKeyDown = () => {
      // ฟังก์ชั่นนี้จะทำงานก็ต่อเมื่อ tag ที่รับเข้ามาเป็นของใหม่กว่า tags ที่มีอยู่แล้ว เพราะอยากให้มัน unique
      if (!tags.value.includes(tag.value)) {
        // /\s/ หมายถึง spaces
        tag.value = tag.value.replace(/\s/, ""); //ลบ white space ทั้งหมด
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    return { title, body, tag, handleKeyDown, tags };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
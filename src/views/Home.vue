<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">Stop Watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "@vue/runtime-core";
export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach"
    ]);

    // เหมือนเป็นคำสั่งจับตาดู
    // เช่น ทุกๆครั้งที่ search มีการเปลี่ยนแปลงให้มาทำ function ข้างใน
    const stopWatch = watch(search, () => {
      console.log("Watch Function run");
    });

    //** ถ้าอยากใช้ค่าข้างในใช้ watchEffect แต่ถ้าไม่อนากใช้ควรใช้ watch เฉยๆ **/

    // ทำงานแบบจับตาดูเหมือนกันแต่เป็นการจับตาดูค่าข้างในด้วยว่ามีอะไร
    const stopWatchEffect = watchEffect(() => {
      console.log("watchEffect Function run", search.value);
    });

    const matchingNames = computed(() => {
      // name ข้างใน filter จะหมายถึง name แต่ละตัว เหมือนๆกับ name in names
      return names.value.filter(name => name.includes(search.value));
    });

    // สามารถหยุด watch และ watchEffect ได้โดยการเหมือนเรียกใช้ซ้ำ
    const handleClick = ()=> {
      stopWatch()
      stopWatchEffect()
    }

    return { names, search, matchingNames, handleClick};
  }
};
</script>
<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button>
  </div>
</template>

<script>
import { ref, reactive } from "@vue/reactivity";
export default {
  name: "Home",
  setup() {
    const ninjaOne = ref({ name: "Mario", age: 30 });
    const ninjaTwo = reactive({ name: "Luigi", age: 35 });

    // โดยถ้าให้เลือกใช้งาน reactive จะใช้งานง่านกว่าเพราะเราไม่จำเป็นต้อง .value  อะไรเลย
    // ** ข้อสังเกต **
    // ถ้าใช้ reactive จะใช้กับพวก primative type ไม่ได้ (คือ type ทุกอย่างที่ไม่ใช่ Object หรือ Array อ้างอิง : https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
    const nameOne = ref("mario");
    // const nameTwo = reactive("Luigi");

    // ถ้าเราใช้ ref จำเป็นต้องมี .value เพื่อเข้าถึงข้อมูลด้วย
    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    // ถ้าใช้ reactive ไม่จำเป็นต้องมี .value
    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
      // nameTwo = reactive("Mario");
    };

    return {
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
      nameOne
      // nameTwo
    };
  }
};
</script>

<style>
</style>
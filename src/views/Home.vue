<template>
  <div class="home">Home</div>
  <!-- การเติม ref จะหมายความว่าแล้วใส่ค่าตัวแปร paragraph ที่อยู่ข้างล่างจะลิ้งกับ p ตรงนี้ -->
  <p ref="paragraph">My name is {{ name }} and my age is {{ age }}</p>
  <button @click="handleClick">Click me</button>
</template>

<script>
import { ref } from "@vue/reactivity";
// @ is an alias to /src

export default {
  name: "Home",
  // ไม่เหมือนกับ data เนื่องจาก data ถ้าข้อมูลถูกเปลี่ยนจะเปลี่ยนได้ แต่ setup จะไม่เปลี่ยนเลย
  setup() {
    let name = "Taninchot";
    let age = 20;

    // โดย ref จะ return ออกมาเป็น Object ของ ref ทำให้สามารถทำงานแบบ DOM ได้เลย
    // การทำงานของมันคือจะออกไป return ก่อน เพราะอยู่ใน setup พอออกนอก return ปุ้บ ถึงจะลิ้งกัน
    const paragraph = ref(null);
    const handleClick = () => {
      // console.log(paragraph, paragraph.value);
      // เป็นเหมือนการเพิ่ม class ที่ชื่อว่า test ลงไปใน paragraph ที่ถูกref
      // paragraph.value.classList.add("test");
      // สามารถใช้ .innerHTML อะไรแบบนี้ได้
      // paragraph.value.innerHTML ='Hello Ref'
    };

    return { name, age, handleClick, paragraph };
  },
  data() {
    return {};
  }
};
</script>

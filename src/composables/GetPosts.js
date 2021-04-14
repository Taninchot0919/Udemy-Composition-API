import { ref } from "vue";
const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    // เนื่องจากบางครั้งหลายๆ Component ต้องใช้โค้ดนี้บ่อย เราจึงต้องสร้างไว้เก็บแยกเพื่อให้เรียกใช้ง่ายๆ
    const load = async () => {
        try {
            // await เป็นการรอจนกวาจะทำเสร็จถึงทำบรรทัดต่อๆไป
            // สร้างจำลองการ delay เหมือนเป็นการทำว่ารอ 2 วินะ แล้วค่อยไป fetch data
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })
            let data = await fetch("http://localhost:3000/posts");
            if (!data.ok) {
                throw Error("no data available");
            }
            posts.value = await data.json();
        } catch (err) {
            error.value = err.message;
            console.log(err.message);
            console.log(error.value);
        }
    };
    return { posts, error, load };
}

export default getPosts
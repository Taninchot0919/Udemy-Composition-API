import { ref } from 'vue'

// เพราะเดี๋ยวเราจะ parse ค่า id เข้าไป
const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      // สร้างจำลองการ delay เหมือนเป็นการทำว่ารอ 2 วินะ แล้วค่อยไป fetch data
      await new Promise(resolve => {
        setTimeout(resolve, 2000)
      })

      let data = await fetch('http://localhost:3000/posts/' + id)
      if (!data.ok) {
        throw Error('that post does not exist')
      }
      post.value = await data.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { post, error, load }
}

export default getPost
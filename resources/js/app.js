import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import '../css/app.css'
import App from './App.vue'
import router from './router'


const app = createApp(App)
const head = createHead()

const pinia = createPinia()

pinia.use(({ store }) => {
  const key = `pinia:${store.$id}`
  const saved = localStorage.getItem(key)
  if (saved) store.$patch(JSON.parse(saved))

  store.$subscribe((_mutation, state) => {
    localStorage.setItem(key, JSON.stringify(state))
  })
})


app.use(pinia)
app.use(router)
app.use(head)

app.mount('#app')


import { bruh } from "./folder/test.js"

import { createApp } from 'vue'

createApp({
  data() {
    return {
      message: bruh
    }
  }
}).mount('#app')

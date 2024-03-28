import { defineStore } from 'pinia'
import { computed,ref } from 'vue'

// 定义store
// defineStore(仓库的唯一标识, () => { ... })
export const useCounterStore = defineStore('counter', () => {
  // 声明数据 state - count
  const count = ref(100)
 
    const addCount = () => count.value++
    const subCount = () => count.value--

    const double = computed(() => count.value *2 )

  // 声明数据 state - msg
  const msg = ref('hello pinia')
  return {
    count ,
    double,
    addCount,
    subCount,
    msg
  }
} 
)
<!-- <script setup>

import { reactive } from 'vue'

const state = reactive({ 
  count: 100
 });

const setCount = () => {
  state.count++;
}

</script>

<template>
  <div>
    <div>{{ state.count }}</div>
    <button @click="setCount">+1</button>
  </div>
</template>
 -->
 <script setup>
 // 导入
 import { ref } from 'vue'
 // 执行函数 传入参数 变量接收
 const count = ref(1)
 const setCount = ()=>{
   // 修改数据更新视图必须加上.value
   count.value*=10
 }
</script>

<template>
  <div>{{count}}</div>
  <button @click="setCount">{{count}}</button>
</template>
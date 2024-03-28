<script setup>
import TestCom from '@/components/test-com.vue' 
 
import { ref,onMounted } from 'vue'
   
const inp = ref(null); 
console.log(inp);
console.log(inp.value);
 
onMounted(() => {
  console.log(inp.value);
  inp.value.focus()
});

const clickFn = () => {
  inp.value.focus()
}

const testRef = ref(null)
const getCom = () => {
  console.log(testRef);

  console.log(testRef.value.count);
  console.log(testRef.value.sayHi);

}

</script>

<template>
  <div>
    <input ref="inp"  type="text">
    <button @click="clickFn" >点击让输入框聚焦</button>
  </div>
  <TestCom ref="testRef" ></TestCom>
  <button @click="getCom">获取组件</button>
</template>
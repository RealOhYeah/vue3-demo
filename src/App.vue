<script setup> 
import Son1Com from '@/components/Son1Com.vue'
import Son2Com from '@/components/Son2Com.vue'
import { useCounterStore } from '@/store/counter.js'  
const counterStore = useCounterStore()

console.log(counterStore);

</script>

<template>
    <h3>App.vue 根组件 - 0
     -  {{ counterStore.count }}
     -  {{ counterStore.msg }}

    </h3>
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
  
</template>

<style scoped>

</style>

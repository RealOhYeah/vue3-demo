  
  <!-- setup函数实现 -->
  <!-- <script>
  export default{
      setup() {
        console.log('setup函数',this);

        const message = 'hello Vue3'
        const logMessage = () => {
          console.log(message);
        }
        return{
          message,
          logMessage
        }

      },

      beforeCreate() {
        console.log('beforeCreate函数');
      }
    }
  </script> -->
<!-- 语法糖实现 -->
  <script setup>
  const message = 'this is a message'
  const logMessage = () => {
    console.log(message);
  }

</script>


  <template>
    <div> {{ message }} </div>
    <button @click="logMessage">按钮</button>

  </template>


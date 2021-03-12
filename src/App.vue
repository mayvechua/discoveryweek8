
<template>
  <div id='storename'>
    <h1 id='header'> SUPPER SUPPER </h1>
        <nav-nav></nav-nav>
    <router-view> </router-view>

  </div>
</template>

<script>
import Nav from './nav.vue'
  export default {
    data() {
      return {


      }
    },

    components: {
      'nav-nav':Nav,
    }
  }
</script>

<style>

#header {
  background-color: lightblue;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
#storename {
  text-align: center;
}
</style>
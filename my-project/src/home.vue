<template>
  <div id="home">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <HomePage></HomePage>
   <!--  <headertop></headertop> -->

  </div>
</template>

<script>

import HomePage from './pages/HomePage'
export default {
  name: 'home',
  components:{HomePage},
  data(){
    return{

    }
  }
}
</script>

<style>
/*  .layout123{
    overflow:-Scroll;
    overflow-x:hidden;
    width: 1349px;
  }*/
</style>

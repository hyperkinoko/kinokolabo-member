<template>
  <div id="app">
    <div id="header" class="fixed-top">
      <top-header></top-header>
      <top-navigation></top-navigation>
    </div>
    <router-view class="main"></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>

import TopHeader from "./components/TopHeader";
import MyFooter from "./components/Footer";
import TopNavigation from "./components/TopNavigation";
export default {
  name: 'app',
  components: {TopNavigation, MyFooter, TopHeader},
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  #header {
    margin: 0;
    padding: 20px 50px 5px 50px;
    border-bottom: 2px solid crimson;
    background-color: white;
  }

  .main {
    margin: 180px 50px 30px 50px;
  }
</style>

<template>
  <div id="app">
    <div id="header" class="container-fluid fixed-top">
      <top-header></top-header>
<!--      <top-navigation></top-navigation>-->
    </div>
    <router-view class="main"></router-view>
    <my-footer id="footer" class="jumbotron"></my-footer>
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
    padding-top: 30px;
    padding-bottom: 20px;
    border-bottom: 2px solid crimson;
    background-color: white;
  }
  @media screen and (max-width: 480px){
    #header {
      padding: 5px;
    }

  }

  .main {
    margin-top: 180px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 480px){
    .main {
      margin-top: 100px;
    }
  }

  #footer {
    margin-bottom: 0;
  }

</style>

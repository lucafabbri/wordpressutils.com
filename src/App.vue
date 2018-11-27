<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/wu-logo.png">
    <Home />
    <footer>
      powered by Luca Fabbri and <a href="https://www.zepfiro.com" target="_blank">Higrow</a>
    </footer>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
footer{
  position: fixed;
  bottom:0;
  text-align: center;
  width: 100%;
  padding:15px;
}
</style>

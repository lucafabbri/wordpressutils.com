<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/wu-logo.png">
    <Home />
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
  width:1024px;
  margin: auto;
}
pre{
  text-align: left;
  padding: 15px;
  background-color: #eee;
  border: thin dotted #666;
  overflow: auto;
}
</style>

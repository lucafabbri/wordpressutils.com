<template>
  <div>
    <h1>Wordpress utils</h1>
    <p>
      A collection of utils for people who work with wordpress
    </p>
    <DatabaseUrlReplace />
    <MetaKeyReplace />
  </div>
</template>

<script>
import DatabaseUrlReplace from './DatabaseUrlReplace.vue'
import MetaKeyReplace from './MetaKeyReplace.vue'
export default {
  name: 'Home',
  components: {
    DatabaseUrlReplace,
    MetaKeyReplace
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-family: 'Lora', serif;
  margin: 40px 0 0;
}
</style>

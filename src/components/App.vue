<template lang="pug">
div.app-container Hello World from Vue!
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend(
  { name: 'AppComponent'
  , data: () => ({})
  })
</script>

<style lang="postcss" scoped>
.app-container {
  font-family: Arial, Helvetica, sans-serif;
}
</style>

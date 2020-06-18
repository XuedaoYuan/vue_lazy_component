<template>
  <div>
    <h1>This is an about page</h1>
    <AboutChild>
      <div>sadada</div>
      <template v-slot:header="scope">
        <header>{{scope.user.lastName}}</header>
      </template>
      <template v-slot:footer>
        <footer>footer title</footer>
      </template>
    </AboutChild>
  </div>
</template>

<script>
import AboutChild from './components/AboutChild'
export default {
  components: {
    AboutChild
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
</style>

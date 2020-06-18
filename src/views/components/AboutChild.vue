<template>
  <div>
    <h1>aboout-child</h1>
    <div>
      subtitle:
      <slot></slot>
    </div>
    <div>
      header:
      <slot :user="user" name="header"></slot>
    </div>
    <div>
      footer:
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: '袁',
        lastName: '学道'
      }
    }
  }
}
</script>

<style scoped>
</style>

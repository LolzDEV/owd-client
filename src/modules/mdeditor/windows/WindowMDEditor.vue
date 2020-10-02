<template>
  <WindowIframe :data="data" />
</template>

<script>
import WindowIframe from 'C:\\Users\\lollo\\WebstormProjects\\owd-client\\src\\core\\components\\window\\iframe\\WindowIframe.vue'

export default {
  name: 'WindowMDEditor',
  components: {WindowIframe},
  props: {
    data: Object
  }
}
</script>

<style scoped lang="scss">
p {
  color: #AAA;
}
</style>

<template>
  <div>
    {{ name }}
    <custom-button/>
  </div>
</template>

<script>
import customButton from '../atoms/Button'
const Buttons = {
  data () {
    return { name: 'buttons' }
  },
  components: {
    customButton
  }
}

export default Buttons
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

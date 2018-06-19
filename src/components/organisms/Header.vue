<template>
  <div>
    {{ name }}
    <buttons/>
  </div>
</template>

<script>
import Buttons from '../molecules/Buttons'
const Header = {
  data () {
    return { name: 'header' }
  },
  components: {
    Buttons
  }
}

export default Header
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

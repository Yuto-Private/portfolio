<template>
  <div id="particles"></div>
</template>

<script>
import config from '~/assets/js/particlesConfig/config.js'

export default {
  mounted() {
    particlesJS('particles',config.data);
  }
}
</script>

<style>
  #particles {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
  }
</style>

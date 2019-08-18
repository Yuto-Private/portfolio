<template>
  <main class='portfolio'>
    <particles />
    <nuxt />
    <TheFooter />
  </main>
</template>

<script>
import particles from '@/components/particles'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    particles,TheFooter
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.$store.commit('responsive/update');
    })
  }
}
</script>
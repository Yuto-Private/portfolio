<template>
  <main class='portfolio'>
    <particles />
    <nuxt />
    <TheFooter />
    <dockMenu />
  </main>
</template>

<script>
import particles from '@/components/particles'
import TheFooter from '@/components/TheFooter'
import dockMenu from '@/components/dockMenu'

export default {
  components: {
    particles,TheFooter,dockMenu
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.$store.commit('responsive/update');
    })
  }
}
</script>
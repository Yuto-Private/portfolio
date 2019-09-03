<template>
  <main class='portfolio'>
    <Load />
    <particles />
    <nuxt />
    <TheFooter />
    <dockMenu />
  </main>
</template>

<script>
import Load from '@/components/Load'
import particles from '@/components/particles'
import TheFooter from '@/components/TheFooter'
import dockMenu from '@/components/dockMenu'

export default {
  components: {
    Load,particles,TheFooter,dockMenu
  },
  mounted() {
    window.addEventListener('load', () => {
      this.$store.commit('load/loadFlag');
      window.setTimeout(() => {
        this.$store.commit('load/done');
      }, 1250);
    })
    window.addEventListener('resize', () => {
      this.$store.commit('responsive/update');
    })
  }
}
</script>
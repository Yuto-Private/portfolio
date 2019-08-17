<template>
  <main class='portfolio'>
    <TheHeader />
    <Particles />
    <nuxt />
    <TheFooter />
  </main>
</template>

<script>
import Particles from '~/components/particles'
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,Particles,TheFooter
  }
}
</script>
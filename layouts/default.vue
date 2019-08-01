<template>
  <main class='portfolio'>
    <div class="portfolio_inner">
      <TheHeader />
      <nuxt />
    </div>
  </main>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  components: {
    TheHeader
  }
}
</script>
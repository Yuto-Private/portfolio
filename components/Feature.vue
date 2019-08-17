<template>
  <section class="feature">
    <h3><span>PORTFOLIO</span></h3>
    <div class='feature_contents'>
      <CardList :posts="posts" />
    </div>
    <div class='feature_texture'></div>
  </section>
</template>

<style lang="scss">


</style>

<script>
import Card from '@/components/Card'

export default {
  components: { Card },
  props: ['posts']
}
</script>
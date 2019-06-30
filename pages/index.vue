<template>
  <main class="portfolio">

    <section class='hero'>
      <div class='hero_inner'>
        <h1>Yuto Takahashi</h1>
        <p>Engineer</p>
      </div>
    </section>

    <Works/>
    
  </main>
</template>

<script>
import Works from '@/components/Works'
export default {
  components: {
    Works
  }
}
</script>

<style lang="scss">

.hero {
  position: relative;
  height: 550px;
  &_inner {
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    letter-spacing: 6px;
    h1 {
      font-size: 45px;
      letter-spacing: 6px;
    }
    p {
      font-size: 20px;
      margin-top: 10px;
      color: #9a9b9b;
    }
  }
}

</style>

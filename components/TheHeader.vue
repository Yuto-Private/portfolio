<template>
  <section class='hero'>
    <div class='hero_inner'>
      <h1>Yuto Takahashi</h1>
      <p>Web Engineer</p>
    </div>
  </section>
</template>

<style lang="scss">

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  &_inner {
    text-align: center;
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
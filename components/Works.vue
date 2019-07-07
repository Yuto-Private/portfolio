<template>
  <section class="works">
    <ul class="works_list">
      <li>
        <img src='~/assets/images/hoge.jpg' alt=''>
      </li>
      <li>
        <img src='~/assets/images/fuga.jpg' alt=''>
      </li>
      <li>
        <img src='~/assets/images/kilta.jpg' alt=''>
      </li>
      <li>
        <img src='~/assets/images/kumiki.jpg' alt=''>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">

.works {
  padding: 0 5vw;
  display: flex;
  align-items: center;
  &_list {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 22%;
      border: 1px solid #000;
    }
  }
}

</style>

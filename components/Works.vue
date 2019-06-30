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
    </ul>
  </section>
</template>

<style lang="scss">

.works {
  background-color: #ebebeb;
  padding: 30px;
  &_list {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      width: 30%;
    }
  }
}

</style>

<template>
  <nav>
    <ul class="header">
      <li><a href=''>Portfolio</a></li>
      <li><a href=''>About</a></li>
    </ul>
  </nav>
</template>

<style lang="scss">

.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
  li {
    &:first-child {
      padding-left: 0;
    }
    padding-left: 10px;
    letter-spacing: 1px;
  }
}

</style>

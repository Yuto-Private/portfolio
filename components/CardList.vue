<template>
  <ul class="cardList">
    <Card
      v-for="post in posts"
      :key="posts"
      :title="post.fields.title"
      :slag="post.fields.slag"
      :thumb="post.fields.keyVisual.fields.file.url"
      :launch="post.fields.launch"
    />
  </ul>
</template>

<script>
  import Card from '@/components/Card'

  export default {
    components: { Card },
    props: ['posts']
  }
</script>

<style scoped lang='scss'>
  .cardList {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    @include mediaQuery {
      flex-direction: row;
    }

    li {
      margin-top: 60px;
      &:first-child {
        margin-top: 0;
      }
      @include mediaQuery {
        margin-top: 0;
      }
      &:nth-child(n + 4) {
        @include mediaQuery {
          margin-top: 70px;
        }
      }
    }
  }
</style>

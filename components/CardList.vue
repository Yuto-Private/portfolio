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

<style scoped lang='scss'>
  .cardList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      &:nth-child(n + 4) {
        margin-top: 70px;
      }
    }
  }
</style>


<script>
import Card from '@/components/Card'

export default {
  components: { Card },
  props: ['posts']
}
</script>
<template>
  <ul class="cardList cardView">
    <Card
      v-for="(post, index) in posts"
      :key="post.sys.id"
      :title="post.fields.title"
      :slag="post.fields.slag"
      :thumb="post.fields.keyVisual.fields.file.url"
      :status="post.fields.status"
      :style="`transition-delay:${index / 5}s`"
    />
  </ul>
</template>

<script>
  import { inView } from '~/plugins/common.js'
  import Card from '@/components/Card'

  export default {
    components: { Card },
    props: ['posts','animetionDelayTime'],
    mounted() {
      inView({className:'cardView', delayTime: this.animetionDelayTime});
    }
  }
</script>

<style scoped lang='scss'>
  .cardList {
    display: flex;
    flex-direction: column;
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

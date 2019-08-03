<template>
  <div class="wrapper">
    <section class='hero'>
      <div class='hero_inner'>
        <h1>Yuto Takahashi</h1>
        <p>Web Engineer</p>
      </div>
    </section>
    <section class="works">
      <CardList :posts="posts" />
    </section>
  </div>
</template>

<style scoped lang="scss">

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

.works {
  width: 960px;
  margin: 0 auto;
}

</style>

<script>

  import { client } from '~/plugins/contentful.js'
  import CardList from '@/components/CardList'

  export default {
    components: {
      CardList
    },
    asyncData(context) {
      return client.getEntries({
        content_type: 'detail',
        order: '-sys.createdAt',
      })
      .then( document => {
        return { posts:document.items }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    }
  }

</script>

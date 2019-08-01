<template>
  <div class="wrapper">
    <section class='hero'>
      <div class='hero_inner'>
        <h1>Yuto Takahashi</h1>
        <p>Web Engineer</p>
      </div>
    </section>
    <section class="works">
      <ul class="works_list">
        <nuxt-link 
          tag='li'
          :to="'detail/'+post.fields.slag"
          v-for="(post, index) in posts"
          :key="index"
          class="post"
        >
          {{ post.fields.title }}
        </nuxt-link>
      </ul>
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

</style>

<script>

  import { client } from '~/plugins/contentful.js'
  import About from '@/components/About'

  export default {
    components: {
      About
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

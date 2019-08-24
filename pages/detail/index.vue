<template>
  <div class="archiveDetail">
    <section class='hero'>
      <div class='hero_inner'>
        <h1>PORTFOLIO</h1>
        <p>制作実績一覧</p>
      </div>
    </section>
    <section class="works">
      <CardList :posts="posts" />
    </section>
  </div>
</template>

<style lang="scss">

.archiveDetail {

  padding: 0 20px;

  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    &_inner {
      text-align: center;
      letter-spacing: 6px;
      h1 {
        @include font_family(primary);
        font-size: 50px;
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

    max-width: 960px;
    margin: 0 auto;

    @include mediaQuery(tablet) {
      .cardList {
        flex-direction: row;
        li {
          width: 48%;
          margin-top: 0;
          &:nth-child(n + 3) {
            margin-top: 30px;
          }
        }
      }
    }

  }

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

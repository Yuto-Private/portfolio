<template>

  <article class="pageDetail">
    <section class="hero">
      <Glitch 
        :height='["520px","520px"]'
        :path="posts.fields.keyVisual.fields.file.url"
      />
      <div class='hero_heading'>
        <h1>{{posts.fields.title}}</h1>
        <div class='hero_heading_innerBox'>
          <a :href="posts.fields.url" target="_blank" class="textLink mod-icon">
            <img src="/icon/Link1.svg"><span>WEB SITE</span>
          </a>
          <a :href="posts.fields.repositories" target="_blank" class="textLink mod-icon" :class="{disabled:!posts.fields.repositories}">
            <img src="/icon/github.svg"><span>Repositories</span>
          </a>
        </div>
      </div>
    </section>

    <section class="data">
      <div class="data_inner">
        <dl>
          <dt>CLIENT</dt>
          <dd>{{posts.fields.client}}</dd>
        </dl>
        <dl>
          <dt>LAUNCH</dt>
          <dd>{{posts.fields.launch}}</dd>
        </dl>
        <dl>
          <dt>TECHNOLOGY</dt>
          <dd>
            <img v-for='item in posts.fields.technology' :key='item' :src="`/icon/${item}.svg`">
          </dd>
        </dl>
      </div>
    </section>

    <section class="comment">
      <h2>COMMENT</h2>
      <div v-html="toHtmlString(posts.fields.detail)" class="comment_detail"></div>
    </section>

    <ButtonCTA :url='posts.fields.url' :caption='"このサイトを見る"' :styleType='"scale"' :target='"_blank"'/>

  </article>

</template>

<style lang="scss">

 .pageDetail {

   max-width: 960px;
   margin: 60px auto;
   position: relative;
   z-index: 1;

   .buttonWrap {
     margin-top: 50px;
   }

  .hero {
    position: relative;
    &_heading {
      position: absolute;
      bottom: -60px;
      right: 0;
      left: 0;
      text-shadow: 1px 1px 1px #000;
      h1 {
        @include font_family(primary);
        font-size: 45px;
        text-align: center;
        letter-spacing: 7px;
      }
      &_innerBox {
        display: flex;
        justify-content: center;
        font-size: 18px;
        margin-top: 20px;
        a {
          &:first-child {
            margin-right: 10px;
          }
        }
      }
    }
  }

  .data {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    background-color: rgba(54, 55, 55, .5);

    &_inner {
      padding: 30px 0;

      dl {
        display: flex;
        margin-top: 20px;
        &:first-child {
          margin-top: 0;
        }
        dt {
          width: 112px;
        }
        dd {
          padding-left: 20px;
          img {
            width: 25px;
            margin-right: 10px;
          }
          p {
            letter-spacing: 2px;
            margin-top: 8px;
            &:first-child {
              margin-top: 0;
            }
          }
          ul {
            margin: 20px;
            font-size: 14px;
            list-style-type: circle;
            li {
              letter-spacing: 2px;
              margin-top: 8px;
            }
          }
        }
      }
    }
  }

  .comment {
    text-align: center;
    line-height: 1.75;
    margin-top: 200px;
    h2 {
      @include font_family(primary);
      font-size: 30px;
      letter-spacing: 7px;
    }
    &_detail {
      margin-top: 30px;
    }
  }

 }
 
</style>


<script>

  import { client } from '~/plugins/contentful.js'
  import { BLOCKS } from '@contentful/rich-text-types';
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
  import Glitch from '@/components/Glitch'
  import ButtonCTA from '@/components/ButtonCTA'

  export default {

    components: {
      Glitch,ButtonCTA
    },

    asyncData(context) {
      return client.getEntries({
        content_type: 'detail',
        'fields.slag': context.params.slag
      })
      .then( ({ items }) => {
        return { posts:items[0] }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    },
    methods: {
     toHtmlString(obj) {
       const options = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
            `<img src="${fields.file.url}"/>`,
        },
       }
       return documentToHtmlString(obj, options);
     }
   }

  }

</script>
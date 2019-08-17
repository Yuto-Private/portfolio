<template>

  <article class="pageDetail">
    <section class="hero">
      <div class='hero_heading'>
        <h1>{{posts.fields.title}}</h1>
        <div class='hero_heading_innerBox'>
          <h2>{{posts.fields.subtitle}}</h2>
          <a :href="posts.fields.url" target="_blank">WEB SITE</a>
        </div>
      </div>
      <img class='hero_keyVisual' :src="posts.fields.keyVisual.fields.file.url" alt='' />
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
            <img v-for='item in posts.fields.technology' :src="'/icon/'+item+'.svg'">
          </dd>
        </dl>
        <dl>
          <dt>COMMENT</dt>
          <dd v-html="toHtmlString(posts.fields.detail)" ></dd>
        </dl>
      </div>
    </section>

  </article>

</template>


<style lang="scss">

 .pageDetail {
   max-width: 960px;
   margin: 60px auto;

  .hero {
    &_heading {
      h1 {
        font-size: 45px;
        text-align: center;
        letter-spacing: 7px;
      }
      &_innerBox {
        display: flex;
        justify-content: center;
        font-size: 18px;
        margin-top: 20px;
        h2 {
          padding-right: 20px;
        }
      }
    }
    &_keyVisual {
      margin-top: 60px;
    }
  }

  .data {
    background-color: #f9f9f9;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    &_inner {
      padding: 60px 20px;
      dl {
        display: flex;
        margin-top: 30px;
        &:first-child {
          margin-top: 0;
        }
        dt {
          width: 125px;
        }
        dd {
          padding-left: 20px;
          border-left: 1px solid #000;
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
 }
 
</style>


<script>

  import { client } from '~/plugins/contentful.js'
  import { BLOCKS } from '@contentful/rich-text-types';
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

  export default {
    
    asyncData(context) {
      return client.getEntries({
        content_type: 'detail',
        'fields.slag': context.params.slag
      })
      .then( document => {
        return { posts:document.items[0] }
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
<template>

  <article class="pageDetail">
    <section class="hero">
      <Glitch 
        :height='["520px","220px"]'
        :path="posts.fields.keyVisual.fields.file.url"
      />
      <div class='hero_heading'>
        <h1>{{posts.fields.title}}</h1>
        <div class='hero_heading_innerBox'>
          <a :href="posts.fields.url" target="_blank" class="textLink mod-icon">
            <img src="/icon/Link1.svg"><span>This Page Link</span>
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

    <section class="look">
      <img v-for='item in posts.fields.images' :key='item.sys.id' :src="item.fields.file.url">
    </section>

    <section class="comment">
      <div class='comment_title'>
        <h2 data-text="COMMENT" class="textGlitch">COMMENT</h2>
      </div>
      <div class="comment_detail">
        <div v-html="toHtmlString(posts.fields.detail)" class='comment_detail_inner' />
      </div>
    </section>

    <ButtonCTA :url='posts.fields.url' :caption='"このサイトを見る"' :styleType='"scale"' :target='"_blank"'/>

  </article>

</template>

<style lang="scss">

 .pageDetail {

   max-width: 960px;
   margin: 0 auto;
   position: relative;
   z-index: 1;
   @include mediaQuery {
     margin: 60px auto;
   }

   .buttonWrap {
      margin-top: 30px;
     @include mediaQuery(desktopFollow) {
      margin-top: 100px;
     }
   }

  .hero {
    position: relative;
    &_heading {
      position: absolute;
      bottom: -66px;
      right: 0;
      left: 0;
      text-shadow: 1px 1px 1px #000;
      @include mediaQuery(desktopFollow) {
        bottom: -80px;
      }
      h1 {
        @include font_family(primary);
        font-size: 40px;
        line-height: 1.2;
        text-align: center;
        letter-spacing: 7px;
        @include mediaQuery(desktopFollow) {
          font-size: 80px;
        }
      }
      &_innerBox {
        display: flex;
        justify-content: center;
        font-size: 17px;
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
    margin: 100px 20px 0;
    display: flex;
    justify-content: center;
    background-color: rgba(54, 55, 55, .5);
    @include mediaQuery(desktopFollow) {
      margin: 120px 0 0;
    }

    &_inner {
      padding: 30px 0;

      dl {
        margin-top: 20px;
        text-align: center;
        @include mediaQuery(desktopFollow) {
          display: flex;
          text-align: left;
        }
        &:first-child {
          margin-top: 0;
        }
        dt {
          @include mediaQuery(desktopFollow) {
            width: 112px;
          }
        }
        dd {
          margin-top: 10px;
          font-size: 13px;
          @include mediaQuery(desktopFollow) {
            margin-top: 0;
            padding-left: 20px;
            font-size: 16px;
          }
          img {
            width: 20px;
            margin-right: 10px;
            @include mediaQuery(desktopFollow) {
              width: 25px;
            }
            &:last-child {
              margin-right: 0;
            }
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

  .look {
    padding: 0 20px;
    margin-top: 90px;
    @include mediaQuery {
      padding: 0;
      margin-top: 150px;
    }
    img {
      margin-top: 40px;
      &:first-child {
        margin-top: 0;
      }
      @include mediaQuery {
        margin-top: 70px;
      }
    }
  }

  .comment {
    text-align: center;
    line-height: 1.75;
    margin-top: 90px;
    position: relative;
    padding: 0 20px;
    @include mediaQuery(desktopFollow) {
      display: flex;
      padding: 0;
      margin-top: 150px;
    }

    &:before {
      @include mediaQuery(desktopFollow) {
        content: "";
        position: absolute;
        bottom: -60px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        background-color: $mainColor;
        opacity: .5;
        width: 40%;
        height: 100px;
        z-index: -1;
      }
    }

    &_title {
      width: 100%;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 2px solid;
      background-color: #000;
      @include mediaQuery(desktopFollow) {
        width: 50%;
        min-height: 400px;
      }
      h2 {
        @include font_family(primary);
        font-size: 50px;
        letter-spacing: 7px;
        @include mediaQuery {
          font-size: 80px;
        }
      }
    }

    &_detail {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 20px;
      justify-content: center;
      background-color: #fff;
      font-size: 13px;
      color: #000;
      text-align: justify;
      @include mediaQuery(desktopFollow) {
        width: calc(50% + 2px);
        min-height: 400px;
        margin: 40px 0 -40px -2px;
        padding: 30px;
        font-size: 16px;
      }
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
   },

  }

</script>
<template>

  <article class="pageDetail">
    
    <section class="hero">
      <Glitch 
        :height='["520px","210px"]'
        :path="posts.fields.keyVisual.fields.file.url"
      />
      <div class='hero_heading js-parallax'>
        <h1 id='mainViewAnimetion'>{{posts.fields.title}}</h1>
        <div class='hero_heading_innerBox mainViewSubAnimetion'>
          <a :href="posts.fields.url" target="_blank" class="textLink mod-icon" :class="{disabled:!posts.fields.url}">
            <BlankTarget /><span>This Page Link</span>
          </a>
          <a :href="posts.fields.repositories" target="_blank" class="textLink mod-icon" :class="{disabled:!posts.fields.repositories}">
            <Github /><span>Repositories</span>
          </a>
        </div>
      </div>
    </section>

    <section class="data mainViewSubAnimetion js-parallax">
      <div class="data_inner">
        <dl>
          <dt>CLIENT</dt>
          <dd>{{posts.fields.client}}</dd>
        </dl>
        <dl>
          <dt>STATUS</dt>
          <dd>{{posts.fields.status[0]}}</dd>
        </dl>
        <dl>
          <dt>LAUNCH</dt>
          <dd>{{posts.fields.launch}}</dd>
        </dl>
        <dl>
          <dt>TECHNOLOGY</dt>
          <dd class="mod-technology">
            <img v-for='item in posts.fields.technology' :key='item' :src="`/icon/${item}.svg`" />
          </dd>
        </dl>
      </div>
    </section>

    <section class="look">
      <img class='detailView' v-for='item in posts.fields.images' :key='item.sys.id' :src="item.fields.file.url">
    </section>

    <section class="comment detailView">
      <div class='comment_title js-parallax'>
        <h2 data-text="COMMENT" class="textGlitch">COMMENT</h2>
      </div>
      <div class="comment_detail js-parallax">
        <div v-html="toHtmlString(posts.fields.detail)" class='comment_detail_inner' />
      </div>
    </section>

    <ButtonCTA v-if='posts.fields.url' :url='posts.fields.url' :caption='"このサイトを見る"' :styleType='"scale"' :target='"_blank"'/>

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
      margin-top: 130px;
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
        font-size: 30px;
        line-height: 1.2;
        text-align: center;
        letter-spacing: 7px;
        @include mediaQuery(desktopFollow) {
          font-size: 80px;
        }
        span {
          position: relative;
          opacity: 0;
          bottom: -20px;
        }
      }
      &_innerBox {
        display: flex;
        justify-content: center;
        font-size: 17px;
        margin-top: 20px;
        opacity: 0;
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
    transition: opacity .3s;
    opacity: 0;
    &.active {
      opacity: 1;
    }
    @include mediaQuery(desktopFollow) {
      margin: 120px 0 0;
    }

    &_inner {
      padding: 20px 0;

      dl {
        margin-top: 10px;
        text-align: center;
        display: flex;
        text-align: left;
        @include mediaQuery {
          margin-top: 20px;
        }
        &:first-child {
          margin-top: 0;
        }
        dt {
          font-size: 14px;
          color: #9a9b9b;
          @include mediaQuery {
            font-size: 16px;
          }
        }
        dd {
          margin-top: 1px;
          font-size: 12px;
          padding-left: 10px;
          @include mediaQuery(desktopFollow) {
            font-size: 14px;
          }
          &.mod-technology {
            margin-top: -1px;
            @include mediaQuery {
              margin-top: -3px;
            }
          }
          img {
            width: 15px;
            margin-right: 6px;
            @include mediaQuery(desktopFollow) {
              width: 20px;
              margin-right: 10px;
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
      position: relative;
      margin-top: 40px;
      opacity: 0;
      bottom: -20px;
      transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
      &.detailView-flag {
        opacity: 1;
        bottom: 0;
      }
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
    opacity: 0;
    bottom: -20px;
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    &.detailView-flag {
      opacity: 1;
      bottom: 0;
    }
    @include mediaQuery(desktopFollow) {
      display: flex;
      padding: 0;
      margin-top: 150px;
    }

    &:before {
      @include mediaQuery(desktopFollow) {
        content: "";
        position: absolute;
        bottom: -100px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        background-color: $mainColor;
        opacity: .5;
        width: 50%;
        height: 200px;
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
      margin: -7px 0 0 0;
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

  import { createClient } from '~/plugins/contentful.js'
  import { BLOCKS } from '@contentful/rich-text-types';
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
  import { mainViewAnimetion,inView,parallax } from '~/plugins/common.js'
  import Glitch from '@/components/Glitch'
  import ButtonCTA from '@/components/ButtonCTA'
  import Github from '@/assets/icon/github.svg'
  import BlankTarget from '@/assets/icon/blankTarget.svg'
  const client = createClient();

  export default {

    head() {
      return {
        title: `${this.posts.fields.title} | YutoTakahashi Portforio`,
        meta: [
          { hid: 'description', name: 'description', content: `${this.posts.fields.title} 制作実績詳細` },
          { hid: 'og:url', property: 'og:url', content: `https://tkhsyt.me/detail/${this.posts.fields.slag}/` },
        ]
      }
    },

    components: {
      Glitch,ButtonCTA,BlankTarget,Github
    },

    asyncData({ env, params }) {
      return client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        'fields.slag': params.slag
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

   mounted() {

    mainViewAnimetion({
      idName:'mainViewAnimetion',
      delayTime:500,
      callback: () => {
        const subTarget = [].slice.call(document.querySelectorAll('.mainViewSubAnimetion'));
        TweenMax.to( subTarget[0], .3, { opacity: 1, onComplete:() => {
          subTarget[1].classList.add('active');
        }}, .1);
      }
    });

    inView({className:'detailView'});
    parallax(this.$store, '.js-parallax');

   }

  }

</script>
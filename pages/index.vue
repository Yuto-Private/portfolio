<template>
  <div class="top">

    <TopTextAnimetion />

    <Feature :title="'PORTFOLIO'" :titlePositionAdjust="'62%, -217%'">
      <CardList :posts="posts" />
    </Feature>

    <Feature :title="'PROFILE'" :reversal='true' :titlePositionAdjust="'62%, 148%'">
      <div class='profile'>
        <Glitch 
          :className="'profile_image'" 
          :width="['40%','100%']" 
          :height="['40vw','50vh']"
          :minHeight="['550px','auto']" 
          :path="'/images/about.jpg'" 
        />
        <div class='profile_detail'>
          <div class='profile_detail_inner'>
            <h4>Yuto Takahashi</h4>
            <dl class="profile_detail_item">
              <dt>SKILL SET</dt>
              <dd class="mod-iconList">
                <img v-for='item in items' :key='items' :src="'/icon/'+item+'.svg'">
              </dd>
            </dl>
            <dl class="profile_detail_item">
              <dt>BIOGRAPHY</dt>
              <dd>
                adidas・reebok ECサイト運用チームのリーダー・リードエンジニアとして業務に従事しております。
                業務では主にReactやadidasチーム独自のテンプレートエンジンを用いたLP用のモジュール作成や、
                アニメーションの多いランディングページの実装と技術的なディレクション、チームビルディングなどを担当し、
                副業ではLPやwordpressサイトの作成や更新なども引き受け、個人開発ではvueやnuxtの勉強中です。
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </Feature>

  </div>
</template>

<style lang="scss">

  .profile {
    
    display: flex;
    flex-direction: column;
    @include mediaQuery {
      flex-direction: row;
    }

    &_image {
      position: relative;
    }

    &_detail {
      background-color: rgba(255,255,255,1);
      color: #000;
      padding: 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @include mediaQuery {
        width: 60%;
        padding: 50px;
        margin: 60px 0 -60px;
      }

      h4 {
        @include font_family(primary);
        font-size: 30px;
        letter-spacing: 3px;
        border-bottom: 2px dashed #000;
        padding-bottom: 6px;
        @include mediaQuery {
          font-size: 40px;
        }
      }

      &_item {
        dt {
          @include font_family(primary);
          font-size: 25px;
          margin-top: 40px;
        }
        dd {
          margin-top: 15px;
          font-size: 12px;
          line-height: 1.65;
          letter-spacing: 2px;
          font-weight: normal;
          &.mod-iconList {
            margin-top: 10px;
          }
          @include mediaQuery {
            font-size: 16px;
          }
          img {
            width: 10%;
            max-width: 40px;
            margin: 5px 15px 0 0 ;
          }
        }
      }
    }

  }

</style>

<script>
  import { client } from '~/plugins/contentful.js'
  import TopTextAnimetion from '@/components/TopTextAnimetion'
  import Feature from '@/components/Feature'
  import CardList from '@/components/CardList'
  import Glitch from '@/components/Glitch'

  export default {

    data() {
      return { items: [ 'html5','css3','javascript','php','git','wordpress','nuxt','react' ] }
    },

    components: {
      TopTextAnimetion,Feature,CardList,Glitch
    },

    asyncData(context) {
      return client.getEntries({
        content_type: 'detail',
        order: '-sys.createdAt',
      })
      .then( document => {
        return { posts:document.items }
      })
      .catch( error => {
        console.log("Error getting document:", error);
      });
    },

    mounted() {
      // パララックス
      const parallaxTarget = [].slice.call(document.querySelectorAll('.feature_contents'));
      window.addEventListener('scroll',() => {
        parallaxTarget.forEach(element => {
          const elementRects = element.getBoundingClientRect();
          if( elementRects.top <= this.$store.state.responsive.isDevice.size.h ){
            element.setAttribute('style','transform: translateY(' + elementRects.top * .02 + '%' + ')');
          }
        });
      });
    }
  }

</script>

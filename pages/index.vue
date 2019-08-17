<template>
  <div class="top">

    <TopTextAnimetion />

    <section class="feature rise">
      <h3 class='feature_title'><span>PORTFOLIO</span></h3>
      <div class='feature_contents'>
        <CardList :posts="posts" />
      </div>
      <div class='feature_texture'>
      </div>
    </section>

    <section class="feature reversal rise">
      <h3 class='feature_title'><span>PROFILE</span></h3>
      <div class='feature_contents'>
        <div class='profile'>
          <Glitch 
            :className="'profile_image'" 
            :width="'40%'" 
            :height="'40vw'"
            :minHeight="'550px'" 
            :path="'/images/about.jpg'" 
          />
          <div class='profile_detail'>
            <div class='profile_detail_inner'>
              <h4>Yuto Takahashi</h4>
              <dl class="profile_detail_item">
                <dt>SKILL SET</dt>
                <dd>
                  <img v-for='item in items' :src="'/icon/'+item+'.svg'">
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
      </div>
      <div class='feature_texture'>
      </div>
    </section>

  </div>
</template>

<style lang="scss">

  .rise {
    opacity: 0;
    transition: opacity .5s cubic-bezier(.17,.67,.65,.54);
    &.active {
      opacity: 1;
    }
  }

  .feature {
    position: relative;
    padding: 50px 0;
    margin-top: 200px;

    &.reversal {
      padding: 50px 0 110px;
    }

    &_title {
      font-family: 'FujillaOne',sans-serif;
      position: absolute;
      font-size: 40px;
      letter-spacing: 10px;
      top: 0;
      right: 0;
      transform: rotate(90deg) translate(62%, -200%);
      z-index: 10;
      .reversal & {
        right: auto;
        left: 0;
        transform: rotate(90deg) translate(62%, 130%);
      }
    }

    &_contents {
      position: relative;
      width: 90%;
      z-index: 2;
      .reversal & {
        margin-left: auto;
      }
    }

    &_texture {
      position: absolute;
      width: 80%;
      height: 100%;
      right: 0;
      top: 0;
      background-color: $mainColor;
      opacity: .5;
      .reversal & {
        right: auto;
        left: 0;
        background-color: $subColor;
      }
    }
  }

  .profile {
    
    display: flex;

    &_image {
      width: 40%;
      position: relative;
    }

    &_detail {
      width: 60%;
      background-color: rgba(255,255,255,1);
      color: #000;
      margin: 60px 0 -60px;
      padding: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h4 {
        font-family: 'FujillaOne',sans-serif;
        font-size: 40px;
        letter-spacing: 3px;
        border-bottom: 2px dashed #000;
        padding-bottom: 6px;
      }

      &_item {
        dt {
          font-family: 'FujillaOne',sans-serif;
          font-size: 25px;
          margin-top: 40px;
        }
        dd {
          margin-top: 15px;
          font-size: 16px;
          line-height: 1.65;
          letter-spacing: 2px;
          font-weight: normal;
          img {
            width: 10%;
            max-width: 40px;
            margin-right: 15px;
          }
        }
      }
    }

  }

</style>

<script>

  import { TweenMax } from 'gsap'
  import { client } from '~/plugins/contentful.js'
  import TopTextAnimetion from '@/components/TopTextAnimetion'
  import CardList from '@/components/CardList'
  import Glitch from '@/components/Glitch'

  export default {
    data() {
      return { items: [ 'html5','css3','javascript','php','git','wordpress','nuxt','react' ] }
    },
    components: {
      CardList,TopTextAnimetion,Glitch
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

      let windowHeight = innerHeight;
      window.addEventListener('resize',() => {
        windowHeight = innerHeight;
      });

      // 要素を柔らかく表示
      const riseTarget = [].slice.call(document.querySelectorAll('.feature'));

      window.addEventListener('scroll',() => {
        riseTarget.forEach(element => {
          const elementRects = element.getBoundingClientRect();
          if( elementRects.top <= windowHeight / 1.5 ){
            element.classList.add('active');
          }
        });
      });


      // パララックス
      const parallaxTarget = [].slice.call(document.querySelectorAll('.feature_contents'));

      window.addEventListener('scroll',() => {
        parallaxTarget.forEach(element => {
          const elementRects = element.getBoundingClientRect();
          if( elementRects.top <= windowHeight ){
            element.setAttribute('style','transform: translateY(' + elementRects.top * .02 + '%' + ')');
          }
        });
      });

    }
  }

</script>

<template>
  <section class='TopTextAnimetion'>

    <div class='TopTextAnimetion_inner'>
      <h1 ref='targetText'>STAY HUNGRY</h1>
      <p ref='subText'>常に挑戦しつづける。</p>
    </div>

    <div ref='scrollDown' class='scrollDown'><span></span></div>

  </section>
</template>

<style lang="scss">

  .TopTextAnimetion {

    @include font_family(primary);
    width: 100vw;
    height: 100vh;
    padding: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    letter-spacing: 5px;

    &_inner {
      h1 {
        letter-spacing: 5px;
        font-size: 14vw;
        @include mediaQuery(desktopFollow) {
          font-size: 10vw;
        }

        span {
          position: relative;
          opacity: 0;
          bottom: -20px;
        }
      }
      p {
        font-size: 4.5vw;
        margin-top: 20px;
        opacity: 0;
        @include mediaQuery(desktopFollow) {
          font-size: 2.5vw;
        }
      }
    }

    .scrollDown.active {
      position: absolute;
      bottom: 0;
      left: 50%;
      padding-top: 70px;
      z-index: 2;
      display: inline-block;
      -webkit-transform: translate(0, -50%);
      transform: translate(0, -50%);
      text-decoration: none;

      span {
        position: absolute;
        top: 0;
        left: 50%;
        width: 24px;
        height: 24px;
        margin-left: -12px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotateZ(-45deg);
        animation: scrollDown 1.5s infinite;
        box-sizing: border-box;
      }

    }

  }

</style>


<script>

  import { TweenMax } from 'gsap'

  export default {
    mounted() {
      // 要素と要素内の文字列取得
      let targetTextBox = this.$refs.targetText;
      const targetText = targetTextBox.textContent;

      // 一度targetTextBoxの中を空にする
      targetTextBox.innerHTML = null;

      // 文字数分だけspanで囲う
      targetText.split('').forEach( string => {
        string == "/" ? targetTextBox.innerHTML += '<br>' : targetTextBox.innerHTML += '<span>'+string+'</span>';
      });

      // アニメーション
      TweenMax.staggerTo( targetTextBox.children, .5, { opacity: 1, bottom: 0 }, .1, () => {
        TweenMax.to( this.$refs.subText, .3, { opacity: 1, onComplete:() => {this.$refs.scrollDown.classList.add('active')} }, .1);
      });

    }
  }

</script>

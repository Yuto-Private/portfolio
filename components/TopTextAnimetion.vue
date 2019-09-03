<template>
  <section class='TopTextAnimetion'>

    <div class='TopTextAnimetion_inner'>
      <h1 id='mainViewAnimetion' ref='targetText'>STAY HUNGRY</h1>
      <p class='mainViewSubAnimetion' >常に挑戦しつづける。</p>
    </div>

    <div class='scrollDown mainViewSubAnimetion'><span></span></div>

  </section>
</template>

<style lang="scss">

  .TopTextAnimetion {

    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    letter-spacing: 5px;
    @include mediaQuery {
      height: 100vh;
    }

    &_inner {
      h1 {
        @include font_family(primary);
        letter-spacing: 5px;
        font-size: 13vw;
        opacity: 0;
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

  import { mainViewAnimetion } from '~/plugins/common.js'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        done: 'load/done'
      })
    },
    methods: {
      animetionFire() {
        mainViewAnimetion({
          idName: 'mainViewAnimetion',
          callback: () => {
            const subTarget = [].slice.call(document.querySelectorAll('.mainViewSubAnimetion'));
            TweenMax.to( subTarget[0], .3, { opacity: 1, onComplete:() => {subTarget[1].classList.add('active')} }, .1);
          }
        });
      }
    },
    watch: {
      done (val) {
        if( val ){ 
          this.animetionFire();
        }
      }
    },
    mounted() {
      if( this.$store.state.load.done ) {
        this.animetionFire();
      }
    }
  }

</script>

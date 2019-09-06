<template>

  <section class="feature inView" :class="{reversal:reversal}">
    <h3 class='feature_title' :style="titlePosition"><span>{{title}}</span></h3>
    <div class='feature_contents js-parallax'>
      <slot />
    </div>
    <div class='feature_texture' />
  </section>

</template>

<script>

import { inView, parallax } from '~/plugins/common.js'

export default {
  props: ['title','reversal','titlePositionAdjust'],

  data() {
    return {
      titlePosition: {
        transform: 'rotate(90deg) translate('+ this.titlePositionAdjust +')'
      }
    }
  },
  mounted() {
    inView({className:'inView'});
    parallax(this.$store, '.js-parallax');
  }
}

</script>

<style lang='scss'>

  .feature {
    position: relative;
    padding: 50px 0 10px;
    margin-top: 100px;
    @include mediaQuery {
      padding: 50px 0;
      margin-top: 200px;
    }

    &.reversal {
      padding: 50px 0 10px;
      @include mediaQuery {
        padding: 50px 0 110px;
      }
    }

    &_title {
      @include font_family(primary);
      position: absolute;
      font-size: 20px;
      letter-spacing: 10px;
      top: 0;
      right: -20px;
      z-index: 10;
      transition: opacity .5s cubic-bezier(1, 0, .08, 1);
      transition-delay: .5s;
      @include mediaQuery(desktopFollow) {
        font-size: 40px;
        right: 0;
      }
      .inView & {
        opacity: 0;
      }
      .inView-flag & {
        opacity: 1;
      }
      .reversal & {
        right: auto;
        left: -15px;
        @include mediaQuery(desktopFollow) {
          left: 0;
        }
      }
    }

    &_contents {
      position: relative;
      width: 88%;
      z-index: 2;
      margin-left: 5px;
      @include mediaQuery {
        margin-left: 30px;
      }
      .reversal & {
        margin-left: auto;
        margin-right: 5px;
        @include mediaQuery {
          margin-right: 5px;
        }
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
      transition: transform .5s cubic-bezier(1, 0, .08, 1);
      transform-origin: 100% 0;
      .reversal & {
        right: auto;
        left: 0;
        background-color: $subColor;
        transform-origin: 0 100%;
      }
      .inView & {
        transform: scaleX(0);
      }
      .inView-flag & {
        transform: scaleX(1);
      }
    }
  }

</style>

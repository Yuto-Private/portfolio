<template>
  <div :class='className' class="glitch glitchView" :style='{
    width: $store.state.responsive.isDevice.isPC ? width[0] : width[1],
    height: $store.state.responsive.isDevice.isPC ? height[0] : height[1],
    minHeight: $store.state.responsive.isDevice.isPC ? minHeight[0] : minHeight[1]
  }'>
    <div class='glitch_inner'>
      <div v-for='n of 5' :key='n' class='glitch_img' :style='{ backgroundImage: "url(" + path + ")" }' />
    </div>
  </div>
</template>

<script>

import { inView } from '~/plugins/common.js'

export default {
  props: {
    className: {
      type: String
    },
    width: {
      type: Array,
      default: () => {
        return ['100%','100%']
      }
    }, 
    height: {
      type: Array,
      default: () => {
        return ['100%','100%']
      }
    },
    minHeight: {
      type: Array,
      default: () => {
        return ['auto','auto']
      }
    },
    path: {
      type: String,
      required: true
    },
    animetionDelayTime: {
      type: Number
    }
  },
  mounted() {
    inView({store:this.$store, className:'glitchView', delayTime:this.animetionDelayTime});
  }
}

</script>

<style lang='scss'>
  .glitch {
    position: relative;
    overflow: hidden;
    &_inner {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 0;
      transition: height .5s cubic-bezier(1, 0, .08, 1);
      .glitchView-flag & {
        height: 100%;
      }
    }
    &_img {
      position: absolute;
      top: calc(-1 * 5px);
      left: calc(-1 * 10px);
      width: calc(100% + 10px * 2);
      height: calc(100% + 5px * 2);
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      transform: translate3d(0,0,0);
      transition: opacity .5s cubic-bezier(1, 0, .08, 1);
      opacity: 0;
      .glitchView-flag & {
        opacity: 1;
      }
      &:nth-child(n+2) {
        animation-duration: 4s;
        animation-delay: 2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        background-color: none;
        background-blend-mode: transpalent;
      }
      &:nth-child(2) {
        .glitchView-flag & {
          animation-name: glitch-anim-1;
        }
      }
      &:nth-child(3) {
        .glitchView-flag & {
          animation-name: glitch-anim-2;
        }
      }
      &:nth-child(4) {
        .glitchView-flag & {
          animation-name: glitch-anim-3;
        }
      }
      &:nth-child(5) {
        .glitchView-flag & {
          animation-name: glitch-anim-flash;
        }
      }
    }
  }
</style>

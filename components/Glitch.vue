<template>
  <div :class='className' class="glitch" :style='{
    width: $store.state.responsive.isDevice.isPC ? width[0] : width[1],
    height: $store.state.responsive.isDevice.isPC ? height[0] : height[1],
    minHeight: $store.state.responsive.isDevice.isPC ? minHeight[0] : minHeight[1]
  }'>
    <div v-for='n of 5' :key='n' class='glitch_img' :style='{ backgroundImage: "url(" + path + ")" }' />
  </div>
</template>

<script>

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
    }
  }

</script>

<style lang='scss'>
  .glitch {
    position: relative;
    overflow: hidden;
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
      &:nth-child(n+2) {
        animation-duration: 4s;
        animation-delay: 2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      &:nth-child(2) {
        background-color: none;
        background-blend-mode: transpalent;
        animation-name: glitch-anim-1;
      }
      &:nth-child(3) {
        background-color: none;
        background-blend-mode: transpalent;
        animation-name: glitch-anim-2;
      }
      &:nth-child(4) {
        background-color: none;
        background-blend-mode: transpalent;
        animation-name: glitch-anim-3;
      }
      &:nth-child(5) {
        background-color: none;
        background-blend-mode: transpalent;
        animation-name: glitch-anim-flash;
      }
    }
  }
</style>

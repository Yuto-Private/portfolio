<template>
  <div :class='className' class="glitch" :style='baseStyle'>
    <div v-for='n of 5' :key='n' class='glitch_img' :style='background' />
  </div>
</template>

<script>

export default {

  props: ['className', 'width', 'height', 'minHeight', 'path'],
  
  data() {
    return {
      baseStyle: {
        width: this.width,
        height: this.height,
        minHeight: this.minHeight,
      },
      background: {
        backgroundImage: 'url(' + this.path + ')'
      }
    }
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
      background-position: 50% 0;
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

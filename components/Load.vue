<template>
  <div v-if='!$store.state.load.done' id="loading" :class="{active:$store.state.load.loadFlag}">
    <p>YUTO TAKAHASHI</p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        status: 'load/loadFlag'
      })
    }
  }
</script>

<style lang='scss'>
  #loading {
    position: fixed;
    transform: translateX(0);
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #111;
    transition: transform .5s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: .9s;
    &:before {
      content: '';
      display: block;
      position: fixed;
      z-index: 1002;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #111;
      transform: translateX(-100%);
      transition: transform .5s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition-delay: .6s;
    }
    &:after {
      content: '';
      display: block;
      position: fixed;
      z-index: 1003;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      transform: translateX(0);
      transition: transform .5s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    p {
      @include font_family(primary);
      color:#000;
      font-size: 80px;
      z-index: 2000;
      transition: color .6s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &.active {
      transform: translateX(100%);
      &:before {
        transform: translateX(0);
      }
      &:after {
        transform: translateX(100%);
      }
      p {
        color: #fff;
      }
    }
  }
</style>

<template>
  <div class='theHeader' :class="{active:$store.state.entered}" >
    <div class='hamburger' @click='click'>
      <ul class="hamburger_inner">
        <li></li>
        <li></li>
      </ul>
    </div>
    <nav class="globalNavigation">
      <ul>
        <nuxt-link tag='li' to="/">
          TOP
        </nuxt-link>
        <nuxt-link tag='li' to="/detail/">
          制作実績
        </nuxt-link>
        <nuxt-link tag='li' to="/about/">
          プロフィール
        </nuxt-link>
      </ul>
    </nav>
  </div>
</template>


<style scoped lang='scss'>

  .hamburger {
    position: fixed;
    top: 0;
    right: 3px;
    padding: 12px 7px 10px 10px;
    background-color: #CC6699;
    z-index: 3;
    &_inner {
      position: relative;
      width: 25px;
      height: 14px;
      display: inline-block;
      transition: all .4s;
      box-sizing: border-box;
      li {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #fff;
        border-radius: 4px;
        display: inline-block;
        transition: all .4s;
        box-sizing: border-box;
        &:first-child {
          top: 0;
          .active & {
            transform: translateY(7px) rotate(-45deg);
          }
        }
        &:last-child {
          bottom: 0;
          .active & {
            transform: translateY(-5px) rotate(45deg);
          }
        }
      }
    }
  }

  .globalNavigation {
    position: fixed;
    top: 0;
    width: 30vw;
    left: -30vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #CC6699;
    z-index: 2;
    color: #fff;
    transition: all .4s;
    .active & {
      left: 0;
    }
    ul {
      padding: 50px;
      li {
        font-size: 30px;
        margin-top: 40px;
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }

</style>

<script>

  import {mapGetters, mapMutations} from 'vuex'

  export default {

    computed: {
      ...mapGetters({
        entered: 'entered'
      })
    },

    methods: {
      ...mapMutations({
        click: 'click'
      })
    }
  }

</script>
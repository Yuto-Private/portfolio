<template>

  <section class="feature rise" :class="{reversal:reversal}">
    <h3 class='feature_title' :style="titlePosition"><span>{{title}}</span></h3>
    <div class='feature_contents'>
      <slot />
    </div>
    <div class='feature_texture' />
  </section>

</template>

<script>

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
    // 要素を柔らかく表示
    const riseTarget = [].slice.call(document.querySelectorAll('.feature'));

    window.addEventListener('scroll',() => {
      riseTarget.forEach(element => {
        const elementRects = element.getBoundingClientRect();
        if( elementRects.top <= this.$store.state.responsive.isDevice.size.h / 1.5 ){
          element.classList.add('active');
        }
      });
    });
  }

}
</script>

<style lang='scss'>

  .rise {
    opacity: 0;
    transition: opacity .5s cubic-bezier(.17,.67,.65,.54);
    &.active {
      opacity: 1;
    }
  }

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
      @include mediaQuery(desktopFollow) {
        font-size: 40px;
        right: 0;
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
      .reversal & {
        margin-left: auto;
      }
      @include mediaQuery {
        width: 90%;
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

</style>

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
  }

}
</script>

<style lang='scss'>

  .feature {
    position: relative;
    padding: 50px 0;
    margin-top: 200px;

    &.reversal {
      padding: 50px 0 110px;
    }

    &_title {
      @include font_family(primary);
      position: absolute;
      font-size: 40px;
      letter-spacing: 10px;
      top: 0;
      right: 0;
      z-index: 10;
      .reversal & {
        right: auto;
        left: 0;
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

</style>

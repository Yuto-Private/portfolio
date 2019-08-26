
<template>
  <div class='buttonWrap'>
    <nuxt-link v-if="forceLink" tag='div' :to="url" class='button' :class='`mod-${styleType}`'>
      <span>{{caption}}</span>
    </nuxt-link>
    <a v-else :href='url' class='button' :class='`mod-${styleType}`' :target='target'>
      <span>{{caption}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      styleType: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }, 
      caption: {
        type: String,
        required: true
      },
      forceLink: {
        type: Boolean,
        default: false
      },
      target: {
        type: String
      },
      wrap: {
        type: String
      },
    }
  }
</script>


<style lang="scss">

  .buttonWrap {
    text-align: center;
  }

  .button {
    position: relative;
    display: inline-flex;
    padding: 0 25px 0 27px;
    text-decoration: none;
    color: white;
    height: 40px;
    line-height: 38px;
    font-size: 14px;
    transition: all 0.3s;
    cursor: pointer;
    text-align: center;
    span {
      transition: all 0.3s;
      transform: scale(1, 1);
    }
    &:before,
    &:after {
      content: '';
      position: absolute;
      transition: all 0.3s;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    &.mod-scale {
      &:before {
        left: 4px;
        z-index: 1;
        opacity: 0;
        background: rgba(255, 255, 255, 0.1);
        transform: scale(0.1, 1);
      }
      &:after {
        transition: all 0.3s;
        border: 1px solid rgba(255, 255, 255, 0.5);
      }
      &:hover {
        &:before {
          opacity: 1;
          transform: scale(1, 1);
        }
        &:after {
          transform: scale(1, .1);
          opacity: 0;
        }
      }
    }
  }

</style>

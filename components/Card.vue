<template>
  <nuxt-link tag='li' :to="'/detail/'+slag+'/'" class="card">
    <div class='card_thumbnail'>
      <Label :status='status' />
      <img :src='thumb' alt=''>
    </div>
    <div class='card_text'>
      <p>{{ title }}</p>
    </div>
  </nuxt-link>
</template>

<script>
  import Label from '@/components/Label'

  export default {
    components: { Label },
    props: ['title','slag','thumb','launch','status']
  }
</script>

<style scoped lang='scss'>

  .card {
    width: 100%;
    cursor: pointer;
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    position: relative;
    opacity: 0;
    bottom: -20px;
    .cardView-flag & {
      opacity: 1;
      bottom: 0;
    }
    @include mediaQuery {
      width: 30%;
    }

    &_thumbnail {
      position: relative;
      transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
      img {
        position: relative;
        z-index: 2;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        transform: translateX(0) translateY(0);
        background-image: linear-gradient(90deg, rgba(204,102,153,1) 35%, rgba(237,169,197,1) 100%);
      }
    }

    &_text {
      @include font_family(primary);
      margin-top: 20px;
      transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
      p {
        font-size: 20px;
        margin-top: 10px;
        letter-spacing: 1.5px;
      }
    }

    &:hover {
      .card_thumbnail {
        transform: rotateX(30deg) rotateY(-20deg) rotateZ(5deg);
        &:after {
          transform: translateX(20px) translateY(20px);
        }
      }
    }

  }

</style>

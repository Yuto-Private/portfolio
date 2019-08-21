<template>
  <nuxt-link tag='li' :to="'/detail/'+slag+'/'" class="card">
    <div class='card_thumbnail'>
      <img :src='thumb' alt=''>
    </div>
    <div class='card_text'>
      <p>{{ title }}</p>
      <p>{{launch}}</p>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    props: ['title','slag','thumb','launch']
  }
</script>

<style scoped lang='scss'>

  .card {
    width: 100%;
    cursor: pointer;
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
      margin-top: 25px;
      transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
      p {
        &:first-child {
          font-size: 20px;
          letter-spacing: 1.5px;
        }
        &:last-child {
          font-size: 12px;
          margin-top: 10px;
        }
      }
    }

    &:hover {
      .card_thumbnail {
        transform: rotateX(30deg) rotateY(-20deg) rotateZ(5deg);
        &:after {
          transform: translateX(20px) translateY(20px);
        }
      }
      .card_text {
        color: $mainColor;
      }
    }

  }

</style>

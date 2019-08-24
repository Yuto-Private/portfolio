<template>
  <section class="footer">
    <div class='footer_inner'>
      <ul class='footer_snsLink'>
        <li v-for='item in items' :key='item.name' >
          <a :href='item.url' target="_blank">
            <img :src="'/icon/'+item.name+'.svg'">
          </a>
        </li>
      </ul>
      <p>Copyright © 2019 Yuto Takahashi<br>All Right Reserved.</p>
    </div>
  </section>
</template>

<script>

  export default {
    data(){
      return {
        items: [
          {
            name: 'wantedly',
            url: 'https://github.com/Yuto-Private?tab=repositories'
          },
          {
            name: 'github',
            url: 'https://github.com/Yuto-Private?tab=repositories'
          },
          {
            name: 'facebook',
            url: 'https://github.com/Yuto-Private?tab=repositories'
          },
          {
            name: 'twitter',
            url: 'https://github.com/Yuto-Private?tab=repositories'
          },
          {
            name: 'netlify',
            url: 'https://github.com/Yuto-Private?tab=repositories'
          }
        ]
      }
    }
  }

</script>

<style lang="scss">

  .footer {
    position: relative;
    z-index: 2;
    padding: 70px 0;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    &_snsLink {
      display: flex;
      justify-content: center;
      li {
        cursor: pointer;
        width: 35px;
        margin: 0 15px;
      }
    }

    p {
      font-size: 12px;
      line-height: 1.7;
      margin-top: 40px;
      letter-spacing: 2px;
      text-align: center;
      @include mediaQuery {
        font-size: 16px;
      }
    }
  }

</style>

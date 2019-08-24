<template>
  <div class="errorPage">
    <div class='errorPage_404' v-if="error.statusCode === 404">
      <h1 class="textGlitch" data-text="404 Not Found">404 Not Found</h1>
      <h2>お探しのページは見つかりませんでした。</h2>
      <p>
        既に削除されているか、移動された可能性があります。<br>
        お手数ですが、下記リンクからサイトTOPへ移動してください。
      </p>
    </div>
    <div class='errorPage_other' v-else>
      <h1 class="textGlitch" data-text="ERROR">ERROR</h1>
      <h2>エラーが起きました</h2>
    </div>
    <nuxt-link to="/" tag='div' class='button mod-scale'>
      <span>BACK TO TOP</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }
      ]
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || `<%= messages.client_error %>`
    }
  }
}
</script>

<style lang='scss'>

.errorPage {

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h2 {
    font-size: 17px;
    color: #ab2328;
    margin-top: 20px;
    @include mediaQuery(desktopFollow) {
      font-size: 23px;
    }
  }
  p {
    font-size: 11px;
    line-height: 1.45;
    margin-top: 20px;
    @include mediaQuery(desktopFollow) {
      font-size: 16px;
    }
  }

  .button {
    width: 200px;
    margin: 30px auto 0;
  }

  .textGlitch {
    font-size: 40px;
    @include mediaQuery(desktopFollow) {
      font-size: 70px;
    }
  }

  &_404 {
    .textGlitch {
      width: 294px;
      @include mediaQuery(desktopFollow) {
        width: 513px;
      }
    }
  }

  &_other {
    .textGlitch {
      width: 142px;
      @include mediaQuery(desktopFollow) {
        width: 247px;
      }
    }
  }

}

</style>

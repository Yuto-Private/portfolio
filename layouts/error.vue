<template>
  <div class="errorPage">
    <div class='errorPage_404' v-if="error.statusCode === 404">
      <h1 class="textGlitch" data-text="404 Not Found">404 Not Found</h1>
      <h2>お探しのページは見つかりませんでした。</h2>
      <p>
        既に削除されているか、移動された可能性があります。<br>
        お手数ですが、下記リンクからサイトTOPへ移動してください。
      </p>
      <nuxt-link to="/" tag='div' class='button mod-scale'>
        <span>BACK TO TOP</span>
      </nuxt-link>
    </div>
    <div class='errorPage_other' v-else>
      <h1 class="textGlitch" data-text="ERROR">ERROR</h1>
      <h2>エラーが起きました</h2>
      <nuxt-link to="/" tag='div' class='button mod-scale'>
        <span>BACK TO TOP</span>
      </nuxt-link>
    </div>
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
    font-size: 23px;
    color: #ab2328;
    margin-top: 20px;
  }
  p {
    font-size: 14px;
    line-height: 1.45;
    margin-top: 20px;
  }

  .button {
    width: 200px;
    margin: 30px auto 0;
  }

  &_404 {
    .textGlitch {
      font-size: 100px;
      width: 731px;
    }
  }

  &_other {
    .textGlitch {
      font-size: 100px;
      width: 351px;
    }
  }

}

</style>

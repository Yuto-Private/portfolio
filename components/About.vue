<template>
  <section class="about">
    <div class='profile'>
      <div class="profile_image">
        <img src='~/assets/images/about.jpg' alt=''>
      </div>
      <div class="profile_data">
        <dl class='profile_item mod-2line'>
          <dt>Skill</dt>
          <dd>
            <img src='~/assets/icon/html5.svg' alt='html5'>
            <img src='~/assets/icon/css3.svg' alt='css3'>
            <img src='~/assets/icon/jquery.svg' alt='jQuery'>
            <img src='~/assets/icon/javascript.svg' alt='javascript'>
            <img src='~/assets/icon/git.svg' alt='git'>
            <img src='~/assets/icon/gulp.svg' alt='gulp'>
            <img src='~/assets/icon/wordpress.svg' alt='wordpress'>
            <img src='~/assets/icon/php.svg' alt='php'>
            <img src='~/assets/icon/vue.png' alt='vue.js'>
            <img src='~/assets/icon/nuxt.svg' alt='nuxt.js'>
            <img src='~/assets/icon/react.svg' alt='react.js'>
          </dd>
        </dl>
        <dl class='profile_item mod-2line'>
          <dt>Tools</dt>
          <dd>
            <img src='~/assets/icon/github.svg' alt=''>
            <img src='~/assets/icon/netlify.svg' alt=''>
          </dd>
        </dl>
        <dl class='profile_item mod-2line'>
          <dt>About</dt>
          <dd>
            adidas・reebok ECサイト運用チームのリーダー・リードエンジニアとして業務に従事しております。
            業務では主にReactやadidasチーム独自のテンプレートエンジンを用いたLP用のモジュール作成や、
            アニメーションの多いランディングページの実装と技術的なディレクション、チームビルディングなどを担当し、
            副業ではLPやwordpressサイトの作成や更新なども引き受け、個人開発ではvueやnuxtの勉強中です。
          </dd>
        </dl>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

.about {
  background-color: #ebebeb;
  margin-top: 60px;
  padding: 5vw;

  .profile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &_image {
      width: 32%;
    }

    &_data {
      width: 64%;
    }

    &_item {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      margin-top: 40px;
      &:first-child {
        margin-top: 0;
      }
      &.mod-2line {
        flex-direction: column;
        align-items: flex-start;
      }
      dt {
        margin-bottom: 10px;
        font-size: 22px;
        letter-spacing: 2px;
      }
      dd {
        color: #363738;
        text-align: justify;
        line-height: 1.45;
        letter-spacing: 2px;
        font-size: 14px;
        img {
          width: 25px;
          margin-right: 5px;
        }
      }
    }
  }
}

</style>

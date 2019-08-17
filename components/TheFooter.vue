<template>
  <section class="footer">
    <div class='footer_inner'>
      <ul class='footer_snsLink'>
        <li>
          <a href='https://github.com/Yuto-Private?tab=repositories' target="_blank">
            <img src="/icon/wantedly.svg">
          </a>
        </li>
        <li>
          <a href='https://github.com/Yuto-Private?tab=repositories' target="_blank">
            <img src="/icon/github.svg">
          </a>
        </li>
        <li>
          <a href='https://github.com/Yuto-Private?tab=repositories' target="_blank">
            <img src="/icon/facebook.svg">
          </a>
        </li>
        <li>
          <a href='https://github.com/Yuto-Private?tab=repositories' target="_blank">
            <img src="/icon/twitter.svg">
          </a>
        </li>
        <li>
          <a href='https://github.com/Yuto-Private?tab=repositories' target="_blank">
            <img src="/icon/netlify.svg">
          </a>
        </li>
      </ul>
      <p>Copyright © 2019 Yuto Takahashi All Right Reserved.</p>
    </div>
  </section>
</template>

<style lang="scss">

  .footer {
    position: relative;
    z-index: 2;
    height: 70vh;
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
      margin-top: 40px;
      letter-spacing: 2px;
    }
  }

</style>

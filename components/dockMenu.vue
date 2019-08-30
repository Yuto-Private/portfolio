
<template>
  <nuxt-link v-if='$store.state.dockMenu.status' tag='div' class="dockMenuButton ion-ios-home-outline" :to='"/"' />
</template>

<style lang="scss">

@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);

.dockMenuButton {
  background: $subColor;
  color: #fff;
  position: fixed;
  right: 40px;
  bottom: 40px;
  font-size: 28px;
  width: 45px;
  height: 45px;
  line-height: 43px;
  box-sizing: content-box;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  transform: rotate(45deg);
  transition: all 0.25s ease-in-out;
  opacity: .75;
  z-index: 10;
  &:before,
  &:after {
    transition: all 0.25s ease-in-out;
  }
  &:before {
    z-index: 2;
    opacity: 0.75;
    transform: rotate(-45deg);
  }
  &:hover {
    opacity: 1;
    transform: rotate(135deg);
    &:before {
      opacity: 1;
      transform: rotate(-135deg);
    }
  }
}
</style>

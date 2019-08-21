<template>
  <div class='label' :class="'mod-'+status" >
    <div class='label_inner'>
      <span v-if='status == "done"'>DONE</span>
      <span v-else >IN<br>PROGRESS</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['status']
  }
</script>

<style scoped lang='scss'>

  .label {

    &_inner {
      span {
        position: absolute;
        top: 18px;
        left: 7px;
        z-index: 101;
        color: #fff;
        font-size: 12px;
        text-align: center;
        transform: rotate(-45deg);
        .mod-inprogress & {
          top: 14px;
          left: -6px;
        }
      }
      &:after {
        content: "";
        border-bottom: 5em solid transparent;
        position: absolute;
        z-index: 100;
        .mod-done & {
          border-left: 5em solid #3DB680;
        }
        .mod-inprogress & {
          border-left: 5em solid #F3C759;
        }
      }
    }

  }

</style>

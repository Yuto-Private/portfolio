<template>

  <h3>{{query_add}}</h3>

</template>


<style>
  h3 {
    color: #ff4500;
  }
</style>


<script>
  export default {
    asyncData(context) {
      return {
        query_add: context.query['id']
      }
    }
  }
</script>
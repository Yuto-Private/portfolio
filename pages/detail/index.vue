<template>

<div>
  <div>{{posts.fields.title}}</div>
  <div>{{posts.fields.description}}</div>
</div>



</template>


<style>
  h3 {
    color: #ff4500;
  }
</style>


<script>

  import { client } from '~/plugins/contentful.js'

  export default {
    
    asyncData(context) {
      return client.getEntries({
        content_type: 'detail',
        'fields.title': context.query['id']
      })
      .then( document => {
        return { posts:document.items[0] }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    }

  }

</script>
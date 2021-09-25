<template>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <h1>This is a search page!</h1>
  <div class="container-fluid">
    <div class="row py-5">
        <div class="col-lg-12 mx-auto">
          <div class="text-white p-5 shadow-sm rounded banner">
            <h1 class="display-4">Gif Searched</h1>
            <img :src="this.url" alt="Lights">
            <div class="py-5 text-right"><a href="#" class="btn btn-dark px-5 py-3 text-uppercase" @click="$router.push('/')">Back to Search</a></div>
          </div>
        </div>
      </div>
  </div>  
</template>

<script>

export default {
  name: 'SearchDetail',
  props: ['items'],
  data () {
    return {
      url:this.$route.params.url
    }
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
body {
  background: #f4f4f4;
}
.banner {
  background: #a770ef;
  background: -webkit-linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);
  background: linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);
}
</style>
<template>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  
  <div class="container-fluid"><div class="row py-5">
        <div class="col-lg-12 mx-auto">
          <div class="text-white p-5 shadow-sm rounded banner">
            <h1>This is a trending page!</h1>
          </div>
        </div>
      </div>
    <div class="px-lg-5">
      <div class="row">
        <div class="col-md-2" v-for="item in gifs.data" v-bind:key="item.id">
          <div class="thumbnail">
            <a @click="$router.push({name: 'SearchDetail', params: { url: item.images.original.url}})" 
                    style="cursor: pointer" data-toggle="tooltip" title="Press image to show detail!">
              <img :src="item.images.original.url" alt="Lights" style="width:100%">        
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5 text-right"><a href="#" class="btn btn-dark px-5 py-3 text-uppercase" @click="$router.push('/')">Back to Search</a></div>
  </div> 
</template>

<script>
import axios from 'axios'
export default {
  name: 'Trends',
  data () {
    return {
      gifs:[],
    }
  },
  mounted(){
    const url=`https://api.giphy.com/v1/gifs/trending?api_key=Vi7Nr1eFpasZNZSHg9yAoAbHmu3IP03V&limit=24&offset=5`;
    axios.get(url).then(response => (this.gifs = response.data,console.log(response)));
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
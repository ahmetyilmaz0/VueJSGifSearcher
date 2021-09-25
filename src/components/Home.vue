<template>
  <div class="home">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <h1 class="display-4">Welcome to Your Vue.js Gif Searcher</h1>
    <div class="container-fluid">
    <div class="px-lg-5">
      <div class="row py-5">
        <div class="col-lg-12 mx-auto">
          <div class="text-white p-5 shadow-sm rounded banner">
            <h1>Gif Search Gallery</h1>
            <br/>
            <form>
              <div class="input-group">
                <input type="text" class="form-control" v-model="query" name="query" @keyup="searchGifs" placeholder="Write type of gif as you want to see!">
              </div>
            </form>
            <br/>
            <p class="lead">Bootstrap gif search snippet.</p>
            <label>Limit</label>&nbsp;
            <input type="text" v-model="limit" name="limit" placeholder="Limit">&nbsp;
            <label>Offset</label>&nbsp;
            <input type="text" v-model="offset" name="offset" placeholder="Ofset">
            <p class="lead">Created by <a target="blank" href="https://github.com/ahmetyilmaz0" class="text-reset">Ahmet Yilmaz</a>, 
            Supported by <a href="https://biooo.cz" target="blank" class="text-reset">Biooo.cz</a>.
            </p>
          </div>
        </div>
      </div>
        <div class="row">
          <div class="col-md-2" v-for="item in gifs.data" v-bind:key="item.id" id="to-hover">
            <div class="thumbnail">
              <a @click="$router.push({name: 'SearchDetail', params: { url: item.images.original.url}})" 
                    style="cursor: pointer" data-toggle="tooltip" title="Press image to show detail!">
                <img :src="item.images.original.url" alt="Lights" style="width:100%"  >
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="py-5 text-right"><a href="#" class="btn btn-dark px-5 py-3 text-uppercase">Back to Search</a></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Home',
  title: 'Home Page',
  data () {
    return {
      apiUrl:'https://api.giphy.com/v1/gifs/',
      apiKey:'Vi7Nr1eFpasZNZSHg9yAoAbHmu3IP03V',
      gifs:[],
      query:'',
      limit:24,
      offset:5
    }
  },
  methods:{
    searchGifs(){
      //const url=`${this.apiUrl}search?api_key=${this.apiKey}&q=${this.query}&limit=2&offset=5`;
      setTimeout(() => { 
        axios.get(`${this.apiUrl}search?api_key=${this.apiKey}&q=${this.query}&limit=${this.limit}&offset=${this.offset}`)
        .then(response => (this.gifs = response.data,
        console.log(response)));}, 300);      
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


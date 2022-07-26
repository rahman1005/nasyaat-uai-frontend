<template>
<div class="About-Us">
  <Navbar/>
  <br/>
  <br/>
  <center> <h1>About Us</h1> </center>
  <br/>
  <center><img src="../assets/img/nasyaatuai.png"></center>
  <br/>
      <div class="about-us-item">
      <p v-for="about in about.aboutUs" :key="about.id"><center>How Nasyaat UAI came to be</center><br/><br/>
        {{about.deskripsi}} </p>

      </div>
</div>

</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from "axios";
export default {
  name: 'About-Us',
  components:{
    Navbar,
  },
data(){
  return{
    about:{}
  }
},
methods:{
  setData(data){
  this.about=data
},
},

mounted(){
  axios
  .get("http://localhost:5000/aboutus")
  .then((response)=> this.setData(response.data))
  .catch((error) => console.log(error));
}
}
</script>

<style>

</style>

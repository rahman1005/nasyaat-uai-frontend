<template>
  <div class="Dashboard-home">
    <Navbar />
    <main class="list">
      <div class="button-lembaga">
        <router-link class="routerlink" to="/postlembaga"
          ><div class="tambah-event"><h1>+Tambah Lembaga</h1></div></router-link
        >
        <router-link class="routerlink" to="/formabout"
          ><div class="tambah-event"><h1>Edit About Us</h1></div></router-link
        >
      </div>
      <br>
      <h1 class="daftarlembaga">Daftar Lembaga</h1>
      <br> <br>
      <div>
        <table class="table caption-top">

  <thead>
    <tr >
      <th scope="col">Nama Lembaga</th>
      <th scope="col">Email</th>
      <th class="action-l" scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="lembaga in lembagas" :key="lembaga.id">
      <td>{{lembaga.lembagaName}}</td>
      <td>{{lembaga.emailLembaga}}</td>
      <td > 
        <div class="action-table">
        <div>
            <router-link :to="'/putlembaga/'+lembaga.id" class="btn btn-warning">EDIT</router-link>
        </div>
        <div>
            <button class="btn color-delete" type="submit" @click=" Delete(lembaga.id)">DELETE</button>
        </div>
        </div>
      </td>
    </tr>
   
  </tbody>
</table>
      </div>
  
      
   
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/NavbarDashboard.vue";
import axios from "axios";
export default {
  name: "dashboard-view",
  components: {
    Navbar,
  },
  data(){
    return{
      lembagas:{
    },
    statusLembaga:{
      status:null
    },
    lembagaNonAktif:{
      statusId:2
    },
     lembagaAktif:{
      statusId:2
    }
    }
  },
  methods:{
    setData(data){
      this.lembagas=data
    },
    Delete(id){
      let yakin = confirm("Anda Yakin Ingin mnghapus Lembaga ini?")
      if(yakin){
        axios
      .delete("http://localhost:5000/lembaga/"+id)
      .then(()=>{
            axios
            .get("http://localhost:5000/lembaga")
            .then((response)=> this.setData(response.data));

        })
      }else{
      axios
            axios
            .get("http://localhost:5000/lembaga")
            .then((response)=> this.setData(response.data));
      }

    },
   


  },
  mounted(){
    axios
    .get("http://localhost:5000/lembaga")
    .then((response)=> this.setData(response.data))
    .catch((error) => console.log(error))
  }

};
</script>

<style>
</style>
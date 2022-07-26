<template>
  <div>
     <main class="form">
         <div class="form-floating">
          <label for="floatingTextarea2">Deskripsi</label>
          <textarea
            class="form-control"
            placeholder=""
            id="floatingTextarea2"
            style="height: 100px"
             v-model="about.deskripsi"
            required
            action="/action_page.php"
          ></textarea>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          required
          action="/action_page.php"
           @click="setAbout"
        >
          Simpan
        </button>
    </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
     name: "form-about",

     data(){
        return{
            about:{
                deskripsi:null
            }
        }
        
        
     },
     methods:{
        setAbout(e){
            if(this.about.deskripsi !=null){
            axios.put("http://localhost:5000/aboutus/1", this.about);
            alert("data berhasi disimpan")
            this.$router.push({path: "/dashboard"})
            }else{
                alert("data tdak boleh kosong")
            }
            console.warn(this.lembaga);
            e.preventDefault();
        },


     }
}
</script>

<style>

</style>
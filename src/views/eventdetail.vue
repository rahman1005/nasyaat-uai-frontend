<template>
  <div>
    <Navbar/>
      <div class="event-detail-body">
           <div class="box-image">
              <img :src="'http://localhost:5000/'+events.Image">
           </div>
            <h1 class="nama-event">{{events.nameEvent}}</h1>
           <div class="container-box-item">
             <div class="box-item">
                <div>
                    <img src="../assets/img/Icon Kalender.png" alt="">
                </div>
                <div>
                    <h3>{{events.tanggal}}</h3>
                </div>
            </div>
             <div class="box-item">
                <div>
                    <img src="../assets/img/Icon Location 2.png" alt="">
                </div>
                 <div>
                    <h3>{{events.tempat}}</h3>
                 </div>
            </div>
             <div class="box-item">
                <div>
                    <img src="../assets/img/Icon jam.png" alt="">
                </div>
                 <div>
                    <h3>{{events.waktu_mulai}} WIB</h3>
                </div>
            </div>
             <div class="box-item">
                <div>
                    <img src="../assets/img/Icon Jam 2.png" alt="">
                </div>
                 <div>
                    <h3>{{events.waktu_selesai}} WIB</h3>
                 </div>
            </div>
            <div class="box-item1">
                 <div>
                    <img src="../assets/img/Logo Instagram.png" alt="">
                </div>
                 <div>
                   <a :href="events.link_instagram" target="_blank"><h3> Instagram</h3></a>
                 </div>
            </div>
            <div class="box-item1">
                 <div>
                    <img src="../assets/img/icon Daftar biru.png" alt="">
                </div>
                 <div>
                   <a :href="events.link_pendaftaran" target="_blank"><h3> Daftar</h3></a>
                 </div>
            </div>
           </div>
           <div class="box-deskripsi">
            <p>{{events.deskripsi}}</p>
           </div>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios';
export default {
    name:'event-detail',
    components:{
        Navbar,
    },
    data(){
        return{
            events:{},
        }
    },
    methods:{
        setEvent(data){
            this.events=data;
        }
    },
    mounted(){
        axios
        .get("http://localhost:5000/events/"+ this.$route.params.id)
        .then((response)=> this.setEvent(response.data))
        .catch((error)=>console.log(error));
        console.warn(this.events);
    },
}

</script>

<style>

</style>
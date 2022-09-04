<template>
  <div class="Dashboard-home">
    <Navbar />
    <main class="list">
         <div class="list-item">
          <div>
            <h1 class="judul">Daftar Event</h1>
          </div>
          <div>
            <h1 class="action">Action</h1>
          </div>
        </div>
        <div class="list-item-event" v-for="event in events.events" :key="event.id" >
          <div>
            <h2 class="judul-event">{{event.nameEvent}}</h2>
          </div>
           <div>
            <h2 class="judul-event">{{event.lembagaName}}</h2>
          </div>
          <div>
            <h2 class="judul-event">{{event.tanggal}}</h2>
          </div>
          <div>
            <button class="btn btn-primary " type="submit" @click="allowEvents(event.id)">Batal</button>
        </div>
        </div>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/NavbarDashboard.vue";
import axios from 'axios';
export default {
  name: "eventConfirmSadmin",
  components: {
    Navbar,
  },
   data(){
        return{
            events:{},
            EventCancel:{
                statusId:1
            },
          
            
        };
    },
    methods:{
        setEvents(data){
            this.events=data;
        },
        allowEvents(id){
            axios.put("http://localhost:5000/updatestatusevent/"+id, this.EventCancel)
            .then(()=>{ 
            axios
            .get("http://localhost:5000/eventsconfirm")
            .then((response)=> this.setEvents(response.data));

        })
        },
    },
    mounted(){
        axios
        .get("http://localhost:5000/eventsconfirm")
        .then((response)=> this.setEvents(response.data))
        .catch((error)=> console.log(error));

    }

};
</script>

<style>
</style>
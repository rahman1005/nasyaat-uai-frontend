<template>
   <div class="Dashboard-home">
        <Navbar/>
        <main class="list">
        <div class="button-lembaga">
             <router-link class="routerlink" to="/postlembaga"><div class="tambah-event"><h1>+Tambah Lembaga</h1></div></router-link>
        </div>
        <div class="list-item">
          <div>
            <h1 class="judul">Nama</h1>
          </div>
        </div>
        <div   > 
             <ListEvent/>
        </div>
         
        </main>
    </div>
</template>

<script>
import Navbar from '@/components/NavbarDashboard.vue'
import ListEvent from '@/components/listEventDashboard.vue'
export default {
    name:'dashboard-view',
    components:{
        ListEvent,
        Navbar
    },
   
}
</script>

<style>

</style>
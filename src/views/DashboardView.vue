<template>
    <div class="Dashboard-home">
        <Navbar/>
        <main class="list">
        <div class="button-lembaga">
             <router-link class="routerlink" to="/inputpost"><div class="tambah-event"><h1>+Tambah Event</h1></div></router-link>
             <router-link class="routerlink" to="/postlembaga"> <div class="tambah-event"><h1>+TambagLembaga</h1></div></router-link>
        </div>
          <ListEvent/>
        </main>
    </div>
</template>

<script>
import Navbar from "@/components/NavbarDashboard.vue"
import ListEvent from '@/components/listEventDashboard.vue'
export default {
    name:'dashboard-view',
    components:{
        Navbar,
        ListEvent
    }
}
</script>

<style>

</style>
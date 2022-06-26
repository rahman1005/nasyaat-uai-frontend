<template>
    <div class="Dashboard-home">
        <nav>
            <ul>
                <li><router-link class="routerlink" :to="'/dashboardlembaga/'+$route.params.lembagaId">All Event </router-link></li>
                <li ><router-link class="routerlink" to="/"><button class="button-logout" >Log out</button></router-link></li>
                
            </ul>
        </nav>
        <main class="list">
        <div class="button-lembaga">
             <router-link class="routerlink" :to="'/inputpost/'+$route.params.lembagaId"><div class="tambah-event"><h1>+Tambah Event</h1></div></router-link>
        </div>
        <div class="list-item">
          <div>
            <h1 class="judul">Nama</h1>
          </div>
          <div>
            <h1 class="action">Action</h1>
          </div>
        </div>
        <div   > 
             <ListEvent/>
        </div>
         
        </main>
    </div>
</template>

<script>
import ListEvent from '@/components/listEventLembaga.vue'
export default {

    name:'dashboard-view',
    components:{
        ListEvent
    },
    

}
</script>

<style>

</style>
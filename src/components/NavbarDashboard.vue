<template>
  <div class="nav-dashboard">
         <nav>
            <ul>
                <li><router-link class="routerlink" to="/dashboard">Home </router-link></li>
                <li><router-link class="routerlink" to="/eventnotconfirmSadmin">Event Menunggu Konfirmasi</router-link></li>
                <li><router-link class="routerlink" to="/eventconfirmSadmin">Event Terkonfirmasi </router-link></li>
                <li><router-link class="routerlink" to="/eventdeniedSadmin">Event Ditolak </router-link></li>
                <li ><router-link class="routerlink" to="/"><button class="button-logout" >Log out</button></router-link></li>
                
            </ul>
            
        </nav>
  </div>
</template>

<script>
export default {
    name:'navbar-dashboard'
  
}
</script>

<style>

</style>
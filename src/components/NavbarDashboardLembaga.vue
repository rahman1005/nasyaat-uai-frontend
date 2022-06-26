<template>
  <div class="nav-dashboard">
         <nav>
            <ul>
                <li><router-link class="routerlink" :to="'/dashboardlembaga/'">All Event </router-link></li>
                <li ><router-link class="routerlink" to="/"><button class="button-logout" >Log out</button></router-link></li>
                
            </ul>
        </nav>
  </div>
</template>

<script>
export default {
    name:'navbar-dashboard',
     props: ["event"],
}
</script>

<style>

</style>
<template>
   <nav>
            <ul>
                <li><router-link class="routerlink" to="/">Home</router-link></li>
                <li><router-link class="routerlink" to="/allevents">All Event</router-link></li>
                <li><router-link class="routerlink" to="/about">About Us</router-link></li>
                 <li><a href="/login">Buat Event</a></li>
                
                
            </ul>
        </nav>
</template>

<script>
export default {
    name: 'Navbar-view'
}
</script>

<style>
</style>
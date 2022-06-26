<template>
  <div class="put-event">
        <main class="form">
            <h1>Edit Event</h1>
            <Formput/>
        </main>
  </div>
</template>

<script>
import Formput from '@/components/form-put.vue'
export default {
    name:'put-event',
    components:{
  
        Formput
    }
}
</script>

<style>

</style>
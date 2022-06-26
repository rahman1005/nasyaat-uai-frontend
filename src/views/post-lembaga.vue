<template>
  <div class="post-lembaga-view">
         <main class="form">
            <h1>Buat Lembaga Baru</h1>
            <InputLembaga/>
        </main>
  </div>
</template>

<script>
import InputLembaga from '@/components/form-post-lembaga.vue'
export default {
    name: 'post-lembaga',
    components:{ 
        InputLembaga,
        
    }
}
</script>

<style>

</style>
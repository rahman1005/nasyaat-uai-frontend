<template>
  <div class="login">
      <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form class="login-body">
        <div class="login-padding">
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" v-model="input.username" @change="searchdata" />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" v-model="input.password" @change="searchdataps"/>
            
            <label class="form-label" for="form3Example4">Password</label>
          </div>

      

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn color-login btn-lg"
              style="padding-left:1.5rem; padding-right: 2.5rem; padding-bottom: 2.5rem;" @click="login">Login</button>
            <!-- <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Register</a></p> -->
          </div>

          <p class="super-admin-router" ><router-link  to="/login">Login Sebagai Super Admin</router-link></p>
        </div>
        </form>
      </div>
    </div>
  </div>
 
</section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'login-lembaga',
    data(){
        return{
            admin:{},
            lembaga:{},
            userAdmin:null,
            userAdminps:null,
            input:{
                username:null,
                password:null
            },
        };
    },
    methods:{
      setData(data){
        this.userAdmin=data;
      },
      setDataps(data){
        this.userAdminps=data;
      },
        setDataAdmin(data){
            this.admin=data;

        },
        setDataLembaga(data){
          this.lembaga=data
        },

        searchdata(){
         axios
        .get("http://localhost:5000/lembaga/"+this.input.username)
        .then((response)=> this.setData(response.data))
        .catch((error)=> console.log(error));
        },
        searchdataps(){
        axios
        .get("http://localhost:5000/lembagaps/"+this.input.password)
        .then((response)=> this.setDataps(response.data))
        .catch((error)=> console.log(error));
        },

        login(){
        if(this.userAdmin==''){
            alert('email salah')
        // eslint-disable-next-line no-dupe-else-if
        }else if(this.userAdminps=='' || this.userAdminps==null){
          alert('password salah')
        }
        else{
          this.$router.push({path: "/dashboardlembaga/"+this.userAdmin[0].id})
        }
        }
    },
    mounted(){
        axios
        .get("http://localhost:5000/admin")
        .then((response)=> this.setDataAdmin(response.data))
        .catch((error)=> console.log(error));

        axios
        .get("http://localhost:5000/lembaga")
        .then((response)=> this.setDataLembaga(response.data))
        .catch((error)=> console.log(error));
    },
   
}
</script>

<style>

</style>
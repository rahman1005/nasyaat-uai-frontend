<template>
   <div class="put-event">
        <main class="form">
            <h1>Edit Event</h1>
              <div class="input-lembaga" v-on:submit.prevent>
    <div>
        <label for="formGroupExampleInput" class="form-label">Category</label>
    </div>
    <div
      class="form-check form-check-inline"
      v-for="category in categorys"
      :key="category.CategoryId"
    >
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio2"
        :value="category.id"
        v-model="lembaga.categoryId"
        required
      />
      <label class="form-check-label" for="inlineRadio2">{{
        category.categoryName
      }}</label>
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label"
        >Nama Lemabaga</label
      >
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="Contoh: HMIF"
        v-model="lembaga.lembagaName"
        required
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label"
        >Email Lembaga</label
      >
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="nasyaat@gmail.com"
        v-model="lembaga.emailLembaga"
        required
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder=""
        v-model="lembaga.password"
        required
      />
    </div>
     <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">Konfirmasi Password</label>
      <input
        type="password"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder=""
        v-model="lembaga.confpassword"
        required
      />
    </div>
    <button type="button" class="btn btn-primary" @click="confirmasipassword">
      Simpan
    </button>
  </div>
        </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "put-lembaga",

  data() {
    return {
      categorys: {},
      lembaga: {
      lembagaName:null,
      categoryId:null,
      emailLembaga:null,
      password:null,
      confpassword:null

      },
    };
  },
  methods: {
    setCategory(data) {
      this.categorys = data;
    },
    confirmasipassword(){
        if(this.lembaga.password!=this.lembaga.confpassword){
            alert("Password dan Konfirmasi Password tidak sama.")
        }else{
            this.lembagas()
        }
    },
    lembagas() {
      if(this.lembaga.lembagaName &&
      this.lembaga.categoryId &&
      this.lembaga.emailLembaga &&
      this.lembaga.password !=null){
      axios.put("http://localhost:5000/lembaga/"+this.$route.params.id, this.lembaga);
          alert("data berhasil disimpan")
          this.$router.push({path: "/dashboard"})
      } else{
        alert("data tdak boleh kosong")
    }
      console.warn(this.lembaga);
    
 
    },
  },
  mounted() {
    axios
      .get("http://localhost:5000/category")
      .then((response) => this.setCategory(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>
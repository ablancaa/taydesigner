<template>
  <br/>
  <div class="container">
    <h1>Clientes</h1>
    <SearchBar v-on:search="setSearchTerm"/>
  <div class="center"><ListaClientes :listaClientes="itemListFiltered"/></div>

  </div>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue'
import ListaClientes from "@/components/ListarClientes.vue"
import { reactive, onMounted, ref, computed } from "vue";
import { db } from "../firebase.js"
import { collection, getDocs } from "firebase/firestore";

let datos = reactive([]);
let searchTerm = ref('');

onMounted(() => {
  getListado();
});

 const itemListFiltered = computed(() => {
      if (!searchTerm.value) {
        return datos;
       } else if (searchTerm.value) {
          return datos.filter((item) => {
           return (
              item.nombre.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
              item.apellido1.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
              item.apellido2.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
              item.mail.includes(searchTerm.value) ||
              item.phones.fijo.includes(searchTerm.value)
           );
          });
         }
         return datos;
      })

function setSearchTerm(search) {
      console.log(search);
      searchTerm.value = search;
    }

async function getListado() {
  const querySnapshot = await getDocs(collection(db, "taydesigner"));
  querySnapshot.forEach((doc) => {
    datos.push(doc.data());
  });
}

</script>
<script>
  export default {
    name: 'Clientes-view'
  }
</script>
<style scoped>
.center {
    display: flex;
    justify-content: center;
}
</style>


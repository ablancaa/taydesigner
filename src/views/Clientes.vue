<template>
  <br/>
  <div class="container">
    <h1>Clientes</h1>
  <div class="center"><ListaClientes :listaClientes="datos"/></div>
 
  </div>
</template>

<script setup>

import ListaClientes from "@/components/ListarClientes.vue"
import { reactive, onMounted } from "vue";
import { db } from "../firebase.js"
import { collection, getDocs } from "firebase/firestore";

let datos = reactive([]);

onMounted(() => {
  getListado();
});

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


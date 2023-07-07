<template>
  <br />
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-3"><router-link to="/clientes"><img alt="Vue logo"
            src="../assets/icons/people.svg" width="150">
          <h5>Clientes</h5>
        </router-link></div>
      <div class="col-xs-12 col-sm-6 col-md-3"><router-link to="/registros"><img alt="Vue logo"
            src="../assets/icons/chat-left-text.svg" width="150">
          <h5>Registros</h5>
        </router-link></div>
      <div class="col-xs-12 col-sm-6 col-md-3"><router-link to="/facturacion"><img alt="Vue logo"
            src="../assets/icons/cash-coin.svg" width="150">
          <h5>Facturación</h5>
        </router-link></div>
      <div class="col-xs-12 col-sm-6 col-md-3"><router-link to="/gestionUsuarios"><img alt="Vue logo"
            src="../assets/icons/bug.svg" width="150">
          <h5>Gestión de usuarios</h5>
        </router-link></div>
    </div>
    <!-- <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-3"><img alt="Vue logo" src="../assets/logo.png" width="150"><p>Calendario</p></div>
    <div class="col-xs-12 col-sm-6 col-md-3"><img alt="Vue logo" src="../assets/logo.png"  width="150"><p>Agenda</p></div>
    <div class="col-xs-12 col-sm-6 col-md-3"><img alt="Vue logo" src="../assets/logo.png"  width="150"><p>Facturación</p></div>
    <div class="col-xs-12 col-sm-6 col-md-3"><img alt="Vue logo" src="../assets/logo.png"  width="150"><p>Gestión de usuarios</p></div>
  </div> -->
    
    
  </div>
</template>

<script setup>
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
    //console.log(doc.data());
    datos.push(doc.data());
    //console.log(crypto.randomUUID())
  });
}
</script>
<script>
export default {
  name: 'HomeView',
}
</script>

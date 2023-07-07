<template>
    <br/>
<div class="container">
        <h1>Gestión de usuarios</h1>

    
    <table>
	<tbody>
		<tr>
			<td>ID</td>
			<td>Nombre</td>
			<td>Apellidos</td>
			<td>Mail</td>
			<td>Teléfonos</td>
			<td>Botón 1</td>
			<td>Botón 2</td>
		</tr>
		<tr v-for="dato in datos" :key="dato.id">
			<td>{{ dato.id }}</td>
			<td>{{ dato.nombre }}</td>
			<td>{{ dato.apellido1}} {{ dato.apellido2}} </td>
			<td>{{ dato.mail}}</td>
			<td>
                
                <ul>
                    <!-- <li>{{ dato.phones }}</li> -->
                </ul>
           </td>
			<td><button>Botón 1</button></td>
			<td><button>Botón 2</button></td>
		</tr>
	</tbody>
    </table>
    <select class="form-control" id="docente">
        <option v-for="phone in datos.phones" :key="phone.fijo">{{phone.fijo}}</option>
    </select>
    <ul v-for="phone in datos.phones" :key="phone">
        <li>{{ datos.phones }}</li>
    </ul>
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
    datos.push(doc.data());
  });
}

</script>
<script>
export default {
    name: 'GestionUsuarios-View'
}

</script>
<style scoped>

</style>
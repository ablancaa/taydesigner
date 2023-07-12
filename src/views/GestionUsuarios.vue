<template>
    <br/>
<div class="container">
        <h1>Gestión de usuarios</h1>
        <div id="nuevoUsuario">
            <button @click="showModal = true">Añadir usuario</button>
            <ModalNewUser :open="showModal" @close="showModal = !showModal" @newUser="addNewUser">
                <p>prueba</p>
            </ModalNewUser>
        
        </div>
        {{ newUser }}
        <br/>
        <!-- <router-link to="/newUser"><p></p></router-link> -->
    <table>
	<tbody>
		<tr>
			<td><strong>ID</strong></td>
			<td><strong>Nombre</strong></td>
			<td><strong>Apellidos</strong></td>
			<td><strong>Mail</strong></td>
			<td><strong>Teléfonos</strong></td>
			<td><strong>Editar</strong></td>
			<td><strong>Borrar</strong></td>
		</tr>
		<tr v-for="dato in datos" :key="dato.id">
			<td>{{ dato.id }}</td>
			<td><input type="text" v-if="editar" placeholder="dato.nombre"/>{{ dato.nombre }}</td>
			<td>{{ dato.apellido1 }} {{ dato.apellido2 }} </td>
			<td>{{ dato.mail }}</td>
			<td>
            <select>
                <option v-for="num in dato.phones" :key="num">{{ num }}</option>
            </select>
           </td>
			<td>
                <button @click="edit()" v-if="!editar"><img src="../assets/icons/escritura.png" width="20"/></button>
                <button v-if="editar" @click="escribir()"><img src="../assets/icons/confirmar.png" width="20"/></button>
            </td>
			<td>
                <button @click="deleteRegistro(dato.id)"><img src="../assets/icons/eliminar.png" width="20"/></button>
            </td>
		</tr>
	</tbody>
    </table>
</div>
</template>

<script setup>

import { reactive, onMounted, ref } from "vue";
import { db } from "../firebase.js"
import { collection, getDocs, doc, deleteDoc, addDoc } from "firebase/firestore";
import ModalNewUser from "../components/newUser.vue"



let editar = ref(false);
let datos = reactive([]);
let showModal = ref(false);


onMounted(() => {
  getListado();
});

async function getListado() {
  const querySnapshot = await getDocs(collection(db, "taydesigner"));
  querySnapshot.forEach((doc) => {
  
    datos.push({
        id: doc.id,
        nombre: doc.data().nombre,
        apellido1: doc.data().apellido1,
        apellido2: doc.data().apellido2,
        mail: doc.data().mail,
        phones: {
            fijo: doc.data().phones.fijo,
            movil: doc.data().phones.movil,
        }
    })
  });
}

async function deleteRegistro (id){
    await deleteDoc(doc(db, "taydesigner", id));
    location.reload();
}

function edit(){
    editar.value = true;   
}

function escribir(){
    editar.value = false;

}
async function addNewUser (newUser) {
  console.log("Gestion");
  console.log(newUser);
  const docRef = await addDoc(collection(db, "taydesigner"), {
        nombre: newUser.nombre,
        apellido1: newUser.apellido1,
        apellido2: newUser.apellido2,
        mail: newUser.mail,
        phones: {
            fijo: newUser.phones.fijo,
            movil: newUser.phones.movil
        }
    });
console.log("Document written with ID: ", docRef.id);

  // Add a new document in collection "cities"
  //await setDoc(doc(db, "taydesigner",new), newUser);
  
   
}


</script>
<script>
export default {
    name: 'GestionUsuarios-View'
}

</script>
<style scoped>
#nuevoUsuario{
    display: flex;
}

table {
   width: 100%;
   border: 1px solid #000;
}
th, td {
   text-align: center;
   vertical-align: top;
   border: 1px solid #000;
   border-collapse: collapse;
}
option{
    color: black;
    background-color:rgb(252, 255, 226) ;
}
</style>
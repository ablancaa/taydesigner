<template>
<transition name="fade">
<div class="vue-modal" v-show="props.open">
  <transition name="drop-in">
    <div class="vue-modal-inner" v-show="open">
        <div class="vue-modal-content">
          <span class="buttonClose"><button type="button" @click="close"><img src="../assets/icons/cerrar-sesion.png" width="20"/></button></span>
        <!-- <slot/> -->
        <div class="form" @submit.prevent="close">
          <form action="#" target="" method="" name="formDatosPersonales">

            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" v-model="nombre" placeholder="Escribe tu nombre"/>

            <label for="apellidos">Apellido</label>
            <input type="text" name="apellido1" v-model="apellido1" placeholder="1r Apellido"/>

            <label for="apellidos">Apellido</label>
            <input type="text" name="apellido2" v-model="apellido2" placeholder="2o Apellido"/>

            <label for="email">Mail</label>
            <input type="email" name="email" v-model="mail" placeholder="email" required />

            <label for="phone">Fijo</label>
            <input type="tel" name="phoneFijo" v-model="phoneFijo" placeholder="Teléfono fijo"/>
            
            <label for="phone">Móvil</label>
            <input type="tel" name="phoneMovil" v-model="phoneMovil" placeholder="Teléfono móvil"/>

            <!-- <label for="asunto">Asunto</label>
            <input type ="text" name="asunto" v-model="asunto" placeholder="titular de la consulta"/>

            <label for="mensaje">Mensaje</label>
            <textarea name="mensaje" for="mensaje" placeholder="describe brevemente en menos de 300 carácteres" maxlength="300"></textarea> -->

            <input type="submit" name="enviar" value="Añadir nuevo usuario" @click="addNewUser"/>
          </form>
        </div>
          
        </div>
    </div>
  </transition>
</div>
</transition>
</template>

<script setup>
//import { doc, setDoc } from "firebase/firestore"; 
import { ref, reactive, defineProps, defineEmits, onMounted, onUnmounted } from 'vue'

let nombre = ref('');
let apellido1 = ref('');
let apellido2 = ref('');
let mail = ref('');
let phoneFijo = ref('');
let phoneMovil = ref('');


//console.log(usuario);

const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  }
})
const emit = defineEmits(['close', 'newUser'])
const close = () =>{
  emit('close', false);
}

const handleKeyup = (event) => {
  if(event.keyCode==27){
    close();
  }
}

onMounted(()=> document.addEventListener("keyup", handleKeyup))
onUnmounted(()=> document.removeEventListener("keyup", handleKeyup))

const addNewUser = () =>{
  let usuario = reactive({
   nombre: nombre.value,
   apellido1: apellido1.value,
   apellido2: apellido2.value,
   mail: mail.value,
   phones: 
    { fijo: phoneFijo.value,
      movil: phoneMovil.value,
    }
});
  emit('newUser', usuario);
  console.log("modal");
  console.log(usuario)
}

</script>

<style scoped>

.buttonClose{
display: flex;
float: right;
}


::before, 
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.vue-modal{
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0,0,0,0.4);
  z-index: 1;
}

.vue-modal-inner{
  max-width: 500px;
  margin: 2rem auto;
}

.vue-modal-content{
  position: relative;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.3);
  background-clip: padding-box;
  border-radius: 0.3rem;
  padding: 1rem;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.drop-in-enter-active,
.drop-in-leave-active{
  transition: all 0.3s ease-out;
}

.drop-in-enter-from,
.drop-in-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}


/* FORMULARIO */
*{box-sizing:border-box;}

form{
	width:300px;
	padding:16px;
	border-radius:10px;
	margin:auto;
	background-color:#ccc;
}

form label{
	width:80px;
	font-weight:bold;
	display:inline-block;
}

form input[type="text"],
form input[type="email"],
form input[type="tel"]{
	width:180px;
	padding:3px 10px;
	border:1px solid #f6f6f6;
	border-radius:3px;
	background-color:#f6f6f6;
	margin:8px 0;
	display:inline-block;
}

form input[type="submit"]{
	width:100%;
	padding:8px 16px;
	margin-top:32px;
	border:1px solid #000;
	border-radius:5px;
	display:block;
	color:#fff;
	background-color:#000;
} 


form input[type="submit"]:hover{
	cursor:pointer;
}

textarea{
	width:100%;
	height:100px;
	border:1px solid #f6f6f6;
	border-radius:3px;
	background-color:#f6f6f6;			
	margin:8px 0;
	/*resize: vertical | horizontal | none | both*/
	resize:none;
	display:block;
}
</style>
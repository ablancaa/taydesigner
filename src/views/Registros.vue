<template>
  <br />
  <div class="container">
    <h1>Registros</h1>
 
    <br/>
   <!-- <FlexCards/> -->
   <br/>
      <div class="row">
        <div class="col-xs-4 col-md-4">
          <figure>
            <img src="../assets/icons/salaEspera.png" alt="Mountains"  width="250" />
            <figcaption>
              <div class="contenidoFlex">
                <div class="hijoFlex">
                  <img src="../assets/icons/salaEspera.png" alt="Mountains" class="peq" />
                  <p>Cr 01</p>
                </div>
                <div class="hijoFlex">
                  <img src="../assets/icons/salaEspera.png" alt="Mountains" class="peq" />
                  <p>Cr 02</p>
                </div>
                <div class="hijoFlex">
                  <img src="../assets/icons/salaEspera.png" alt="Mountains" class="peq" />
                  <p>Cr 03</p>
                </div>
                <div class="hijoFlex">
                  <img src="../assets/icons/salaEspera.png" alt="Mountains" class="peq" />
                  <p>Cr 04</p>
                </div>
              </div>
              <hr/>
              <div class="contenidoFlex">
                <div class="hijoFlex">
                  <img src="../assets/icons/salaEspera.png" alt="Mountains" class="peq" />
                  <p>Cr 05</p>
                </div>
                <div class="hijoFlex">
                  <img src="../assets/icons/salaEspera.png" alt="Mountains" class="peq" />
                  <p>Cr 06</p>
                </div>
                <div class="hijoFlex">
                  <img src="../assets/icons/salaEspera.png" alt="Mountains" class="peq" />
                  <p>Cr 07</p>
                </div>
                <div class="hijoFlex">
                  <img src="../assets/icons/salaEspera.png" alt="Mountains" class="peq" />
                  <p>Cr 08</p>
                </div>
              </div>
        <span class="marginTitle">ChecksList Habitaciones</span>
      </figcaption>
    </figure>
  </div>
  <div class="col-xs-4 col-md-4">
          <figure>
          
            <img src="../assets/icons/almacen.png" alt="Mountains"  width="220" />
            <figcaption>
              <div class="contenidoFlex">
                <div class="hijoFlex borde">    
                    <p>General</p>
                  <img src="../assets/icons/almacen.png" alt="Mountains" class="peq" />
                </div>
                <div class="hijoFlex borde">
                  <p>Polivalente</p>
                  <img src="../assets/icons/almacen.png" alt="Mountains" class="peq" />
                </div>
                <div class="hijoFlex borde">
                  <p>Urgencias</p>
                  <img src="../assets/icons/almacen.png" alt="Mountains" class="peq" />
                </div>
              </div>
             
        <span class="marginTitle">ChecksList Almacenes</span>
      </figcaption>
    </figure>
  </div>
  </div>
  
</div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";
//import FlexCards from "../components/FlexCards.vue";
let listado = reactive([]);

onMounted(() => {
  getListado();
});
async function getListado() {
  const querySnapshot = await getDocs(collection(db, "taydesigner"));
  querySnapshot.forEach((doc) => {
    listado.push(doc.data());
  });
}

// Se parsea para poder ser usado en js con JSON.parse :)
//listado = JSON.parse(listado);
</script>
<script>
export default {
  name: "Registros-View",
};
</script>
<style scoped>
.borde{
  border-radius: 10%;
  height: 125px;
  background-color: #fff;
  font-size: 10px;
  color: #000;
}
.contenidoFlex {
  display: flex;
  justify-content: flex-end;
  color: #000;
}
.hijoFlex > p {
  font-size: 20px;
  color: #000;
}
img.peq{
width: 50%;
}

.marginTitle{
  text-align: start;
  font-size: 22px;
  color: #000;
}
figure {
  display: grid;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
}
figure > * {
  grid-area: 1/1;
  transition: 0.4s;
}
figure figcaption {
  display: grid;
  align-items: end;
  font-family: sans-serif;
  font-size: 2.3rem;
  font-weight: bold;
  color: #0000;
  padding: 0.75rem;
  background: var(--c, #0009);
  clip-path: inset(0 var(--_i, 100%) 0 0);
  -webkit-mask: linear-gradient(#000 0 0), linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  -webkit-mask-clip: text, padding-box;
  margin: -1px;
}
figure:hover figcaption {
  --_i: 0%;
}
figure:hover img {
  transform: scale(1.1);
}
@supports not (-webkit-mask-clip: text) {
  figure figcaption {
    -webkit-mask: none;
    color: #fff;
  }
}

</style>

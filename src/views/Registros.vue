<template>
    <br/>
    <div class="container">
<h1>Registros</h1>
            <select>
                <option v-for="item in listado" :key="item.id">{{ item.nombre }}</option>
            </select>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
let listado = reactive[{}];
localStorage.getItem('lista');
// Se parsea para poder ser usado en js con JSON.parse :)
//listado = JSON.parse(listado);

</script>
<script>
export default {
    name: 'Registros-View'
}

</script>
<style scoped>

</style>
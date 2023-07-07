<template>
    <div class="card" style="width: 15rem;">
        <img alt="logo" :src="props.cliente.image_url" height="150">
  <div class="card-body">
    <h5 class="card-title">{{props.cliente.name}}</h5>
    <p class="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Un elemento</li>
    <li class="list-group-item">Un segundo elemento</li>
    <li class="list-group-item">Un tercer elemento</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Enlace de tarjeta</a>
    <a href="#" class="card-link">Otro enlace</a>
  </div>
</div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  cliente: Object
})
</script>
<script>
export default {
    name: 'Card-Cliente'
}
</script>

<style scoped>

</style>
<template>
    <div class="container">
        <div class="row">
            <div v-for="cliente in props.listaClientes" :key="cliente.id" class="col-xs-12 col-sm-4 col-md">
                <CardCliente2 :cliente="cliente"/>
                <br/>
            </div>
        </div>
    </div>
</template>

<script setup>
//import CardCliente from '@/components/CardCliente.vue'
import CardCliente2 from '@/components/CardCliente2.vue'
// eslint-disable-next-line no-undef
const props = defineProps({
  listaClientes: Array
})
</script>

<style scoped>
center{
    display: flex;
    justify-content: center;
}
</style>
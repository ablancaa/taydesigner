<template>
    <div class="container">
        <form action="" @submit.prevent="handleSubmit">
            <input type="text" v-model="text" placeholder="escribe aquí"/>
        </form>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const text = ref('');
const emits = defineEmits(['onNewItem'])

function handleSubmit(){
    if(text.value != ''){
        //manda llamar emit
        emits("onNewItem", text);
        text.value = "";
    }
}
</script>

<style scoped>
form {
    margin-top: 5px;
    margin-bottom: 10px;
}
input{
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
}
</style>
<template>
      <div class="search">
      <div class="search-wrapper input-group">
        <input type="text" v-model="search" placeholder="Búsqueda"/>
        <!-- <label for="">Cerca el  material</label> -->
        <button class="clear" v-if="search.length" @click="clearSearch">
          Borrar
        </button>
      </div>
      <!-- <button @click="showForm">Add a new recipe</button> -->
    </div>
</template>

<script setup>
 import { defineEmits, watch, ref } from "vue";

  let search = ref('');
  const emit = defineEmits(["search"]);
 
  const clearSearch = () => {
    search.value = "";
  };
    watch(search, async (newValue) => {
        emit("search", newValue);
    });
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
  .input-group {
  position: relative;
}
  .search {
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 25px;
    margin-top: -10px;
    justify-content: space-between;
  }
  .search input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: white;
    font-size: 16px;
    margin: 0 auto;
    max-width: 500px;
    width: 500px;
    border-radius: 10px;
    transition:  150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .search button {
    margin-left: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    background: blue;
    color: #fff;
  }

  label{
    position: absolute;
    left:30px;
    margin-top:-5px;
    pointer-events: none;
    transform: translateY(1rem);
    transition: 150ms cubic-bezier(0.4, 0, 0,2, 1);
  }
  input:focus{
    outline: none;
    border: 1.5px solid blue;
  }
</style>
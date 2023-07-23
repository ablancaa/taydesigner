<template>
    <!-- <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="gallery">
                    <div class="cardTop">
                        <img src="../assets/icos/celsius.png" height="50" class="" alt="Icono Humedad Tierra" />
                    </div>
                    <div class="cardTop">
                        <img src="../assets/icos/dom.png" height="50" class="" alt="Icono Sol" />
                    </div>
                    <div class="cardTop">
                        <img src="../assets/icos/humedad.png" height="50" class="" alt="Icono Humedad" />
                    </div>
                    <div class="cardTop">
                        <img src="../assets/icos/humedadTierra.png" height="50" class="" alt="Icono Humedad Tierra" />
                    </div> -->
                    <!-- <div class="card">
                        Card 5
                    </div>
                    <div class="card">
                        Card 6
                    </div> -->
                <!-- </div>
            </div>
        </div>
    </div> -->
    <br/>
<!-- Abajo Gráficos -->
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="gallery">
                    <div class="card">
                        <div><img src="../assets/icons/bug.svg" height="40" class="colorTituloTemAmb" alt="Icono Temperatura Ambiente" /></div>
                        <br/>
                        <div class="row">
                            <div class="col-sx-4 col-md-4">
                                <img src="../assets/icons/bug.svg" alt="Mountains" width="40" />
                                <p>CheckList Habitación</p> 
                            </div>
                            <div class="col-sx-4 col-md-4">
                                <img src="../assets/icons/bug.svg" alt="Mountains" width="40" />
                                <h6>CheckList Carro Peq</h6>
                            </div>
                            <div class="col-sx-4 col-md-4">
                                <img src="../assets/icons/bug.svg" alt="Mountains" width="40" />
                                <h6>CheckList Carro Grandes</h6>
                            </div>
                            <p>CheckList Habitaciones</p> 
                        </div>
                        
                    </div>
                    <div class="card">
                        <img src="../assets/icons/bug.svg" height="40" class="colorTituloLuzAmb" alt="Icono Sol" />
                        
                    </div>
                    <div class="card">
                        <img src="../assets/icons/bug.svg" height="40" class="colorTituloHumAmb" alt="Icono Humedad" />
                        
                    </div>
                    <div class="card">
                        <img src="../assets/icons/bug.svg" height="40" class="colorTituloHumTie" alt="Icono Humedad Tierra" />
                        
                    </div>
                    <!-- <div class="card">
                        Card 5
                    </div>
                    <div class="card">
                        Card 6
                    </div> -->
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { reactive, toRefs,onMounted } from 'vue'
export default {
    setup () {
        const state = reactive({
            count: 0,
        })

    

        onMounted(() => {
            
        })
        

      
    
        return {
            ...toRefs(state),
        }
    }
}
</script>
<style scoped>
.gallery{
    display: flex;
    gap: 4px;
    
}
.cardTop{
    position: relative;
    left: 0px;
    width: 80px;
    height: 65px;
    border-radius: 4px;
    padding: 8px;
    background-color: white;
    transition: 0.4s ease-in-out;
    flex: 1px;
}
.cardTop:nth-child(1){
    background-color: rgb(255, 0, 0);
    align-items: center;
    
}
.cardTop:nth-child(2){
    background-color: Orange;
    align-items: center;
}
.cardTop:nth-child(3){
    background-color: rgb(7, 153, 197);
    align-items: center;
}
.cardTop:nth-child(4){
    background-color: green;
    align-items: center;
}
.cardTop:nth-child(5){
    background-color: rgb(128, 0, 117);
}
.cardTop:nth-child(6){
    background-color: rgb(247, 248, 156);
}

.cardTop:hover {
    flex:16;
    font-weight: bold;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
}
.card{
    position: relative;
    left: 0px;
    width: 80px;
    height: 240px;
    border-radius: 15px;
    padding: 6px;
    background-color: white;
    transition: 0.4s ease-in-out;
    flex: 1px;
    font-size: 16px;
    
}
.card:nth-child(1){
    /* background-color: rgb(255, 0, 0); */
    align-items: center;
    
}
.card:nth-child(2){
    /* background-color: Orange; */
    align-items: center;
    
}
.card:nth-child(3){
    /* background-color: rgb(7, 153, 197); */
    align-items: center;
}
.card:nth-child(4){
    /* background-color: green; */
    align-items: center;
}
.card:nth-child(5){
    background-color: rgb(128, 0, 117);
}
.card:nth-child(6){
    background-color: rgb(247, 248, 156);
}

.card:hover {
    flex:3;
    font-weight: bold;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    height: 270px;
    
}

.colorTituloTemAmb{
    background-color: red;
    border-radius: 10px;
    padding: 5px;
}
.colorTituloLuzAmb{
    background-color: orange;
    border-radius: 10px;
    padding: 5px;
}
.colorTituloHumAmb{
    background-color: rgb(7, 153, 197);
    border-radius: 10px;
    padding: 5px;
}
.colorTituloHumTie{
    background-color: green;
    border-radius: 10px;
    padding: 5px;
}

</style>
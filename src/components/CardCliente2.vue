<template>
    <br/><br/>
    <div class="container center">
        <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
            <div class="imgRedonda"><img src="../assets/icons/people.svg" height="55"/></div>
                <p class="title">{{ props.cliente.nombre }}</p>
                <p>{{ props.cliente.apellido1 }} {{ props.cliente.apellido2 }}</p>
                <p></p>
            </div>
            <div class="backSide">
                <p class="">{{ props.cliente.nombre }} {{ props.cliente.apellido1 }} {{ props.cliente.apellido2 }}<br/>{{ props.cliente.direccion }}</p>
                <p class="left">
                    <button class="Btn">
                      <div class="sign"><img src="../assets/icons/telephone.svg" height="25"/></div>
                      <div class="text">{{ props.cliente.phones.movil }}</div>
                    </button>
                    <button class="Btn">
                      <div class="sign"><img src="../assets/icons/telephone.svg" height="25"/></div>
                      <div class="text">{{ props.cliente.phones.fijo }}</div>
                    </button>
                    <button class="Btn">
                      <div class="sign"><img src="../assets/icons/envelope-at.svg" height="25"/></div>
                      <div class="text textEmail">{{ props.cliente.mail }}</div>
                    </button>
                </p>
                
                <p>{{ props.cliente.id }}</p>
            </div>
        </div>
    </div>



    </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  cliente: Object
})
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,300,600,700,900);

.left {
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 5px;
}
.center{
    display: flex;
    justify-content: center;
}
.marginTop{
    margin-top: -35px;
}
.imgRedonda {
    width:70px;
    height:70px;
    border-radius:150px;
    border:1.5px solid #ffffff;
}

.myCard {
  background-color: transparent;
  width: 190px;
  height: 254px;
  perspective: 1000px;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.innerCard {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.myCard:hover .innerCard {
  transform: rotateY(180deg);
}

.frontSide,
.backSide {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  color: white;
  box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
  font-weight: 700;
}

.frontSide,
.frontSide::before {
  background: linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);
}

.backSide,
.backSide::before {
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
}

.backSide {
  transform: rotateY(180deg);
}

.frontSide::before,
.backSide::before {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: '';
  width: 110%;
  height: 110%;
  position: absolute;
  z-index: -1;
  border-radius: 1em;
  filter: blur(20px);
  animation: animate 5s linear infinite;
}

@keyframes animate {
  0% {
    opacity: 0.3;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0.3;
  }
}

.Btn {
  display: flex;
  align-items: center;

  justify-content: left;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: rgb(160, 166, 252);
}

/* plus sign */
.sign {
  width: 100%;
  transition-duration: .3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign svg {
  width: 17px;
}

.sign svg path {
  fill: white;
}
/* text */
.text {
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: white;
  font-size: 1.2em;
  font-weight: 200;
  transition-duration: .3s;
}
.textEmail {
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 200;
  transition-duration: .3s;
}
/* hover effect on button width */
.Btn:hover {
  width: 190px;
  border-radius: 40px;
  transition-duration: .3s;
}

.Btn:hover .sign {
  width: 30%;
  transition-duration: .3s;
  padding-left: 20px;
}
/* hover effect button's text */
.Btn:hover .text {
  opacity: 1;
  width: 70%;
  transition-duration: .3s;
  padding-right: 10px;
}
/* button click effect*/
.Btn:active {
  transform: translate(2px ,2px);
}
</style>
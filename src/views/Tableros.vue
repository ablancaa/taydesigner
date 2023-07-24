<template>
    <div class="container">
      <nav>
        <ul>
          <li><a href="#" @click.prevent="handleNewBoard">Create Board</a></li>
        </ul>
      </nav>
      <div class="container">
      <div class="row">
        <div class="col-sx-12 col-md-3 p-1" v-for="board in boards" :key="board.id">
          <div class="boards">
            <div class="board" 
            @drop="onDrop($event, board)" 
            @dragover.prevent @dragenter.prevent>
              <div class="name"><strong><u>{{ board.name }}</u></strong></div>
              <inputNew @on-new-item="(text) => handleNewItem(text, board)"/>
                <div class="items">
                  <div class="item" draggable="true" @dragstart="startDrag($event, board, item)" v-for="item in board.items" :key="item.id">
                  <u>{{ item.title }}</u>
                  <br/>
                  <div class="content">{{ item.content }}</div>
                  <div><img :src="item.image" class="image"/></div>
                  </div>
                </div> 
            </div>
          </div>
        </div>
      </div>
      </div>
      <!-- fin nav -->
      <!-- <div class="boards-container">
        <div class="boards">
          <div class="board" 
          @drop="onDrop($event, board)" 
          @dragover.prevent @dragenter.prevent 
          v-for="board in boards" :key="board.id">
            <div><strong><u>{{ board.name }}</u></strong></div>
            <inputNew @on-new-item="(text) => handleNewItem(text, board)"/>
              <div class="items">
                <div class="item" draggable="true" @dragstart="startDrag($event, board, item)" v-for="item in board.items" :key="item.id">
                <u>{{ item.title }}</u>
                <br/>
                <div class="content">{{ item.content }}</div>
                <div><img :src="item.image" class="image"/></div>
                </div>
              </div>
          </div>
        </div>
      </div>boards-container -->
    </div>
    </template>
    
    <script setup>
    import { reactive } from 'vue'
    import inputNew from '@/components/inputNew.vue'
    
    let boards = reactive([
      {
        id: crypto.randomUUID(),
        name: 'Tablero 1',
        items: [
          {
            id: crypto.randomUUID(),
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iY2VUn0h9MNpvPHPAU5mRNwauQ8EyIlqHjobQQyXKrfEo3S77gZ94eWOZcUSPY_MmaY&usqp=CAU',
            title: 'Funciones básicas con vue',
            content: 'Funciones básicas que te ayudarán a usar Vue.JS como un verdadero experto'
          },
          {
            id: crypto.randomUUID(),
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iY2VUn0h9MNpvPHPAU5mRNwauQ8EyIlqHjobQQyXKrfEo3S77gZ94eWOZcUSPY_MmaY&usqp=CAU',
            title: 'Funciones en JavaScript',
            content: 'Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.'
          }
        ]
      },
      {
        id: crypto.randomUUID(),
        name: 'Tablero 2',
        items: [
          {
            id: crypto.randomUUID(),
            image: 'data:image/jpeg;base64,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',
            title: 'Crear tu app con Vue.js',
            content: 'Si acabas de crear tu applicación en Vue.js no deberás hacer nada más. A diferencia de Bootstrap 4.6, la versión 5 de Bootstrap no utiliza popper.js ni jquery. En su lugar utiliza @popperjs/core la cual es instalada automáticamente. Para verificar esto puedes utilizar los siguientes comandos.'
          },
          {
            id: crypto.randomUUID(),
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iY2VUn0h9MNpvPHPAU5mRNwauQ8EyIlqHjobQQyXKrfEo3S77gZ94eWOZcUSPY_MmaY&usqp=CAU',
            title: 'Correos',
            content: 'Un email, también mencionado como e-mail, es un correo electrónico: un mensaje digital que se transmite mediante una red informática. La noción proviene de electronic mail, la expresión inglesa para nombrar a este tipo de correo.'
          }
        ]
      },
      {
        id: crypto.randomUUID(),
        name: 'Tablero 3',
        items: [
          {
            id: crypto.randomUUID(),
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iY2VUn0h9MNpvPHPAU5mRNwauQ8EyIlqHjobQQyXKrfEo3S77gZ94eWOZcUSPY_MmaY&usqp=CAU',
            title: 'Funciones básicas con vue',
            content: 'Funciones básicas que te ayudarán a usar Vue.JS como un verdadero experto'
          },
          {
            id: crypto.randomUUID(),
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iY2VUn0h9MNpvPHPAU5mRNwauQ8EyIlqHjobQQyXKrfEo3S77gZ94eWOZcUSPY_MmaY&usqp=CAU',
            title: 'Funciones en JavaScript',
            content: 'Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.'
          }
        ]
      },
      {
        id: crypto.randomUUID(),
        name: 'Tablero 4',
        items: [
          {
            id: crypto.randomUUID(),
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iY2VUn0h9MNpvPHPAU5mRNwauQ8EyIlqHjobQQyXKrfEo3S77gZ94eWOZcUSPY_MmaY&usqp=CAU',
            title: 'Crear tu app con Vue.js',
            content: 'Si acabas de crear tu applicación en Vue.js no deberás hacer nada más. A diferencia de Bootstrap 4.6, la versión 5 de Bootstrap no utiliza popper.js ni jquery. En su lugar utiliza @popperjs/core la cual es instalada automáticamente. Para verificar esto puedes utilizar los siguientes comandos.'
          },
          {
            id: crypto.randomUUID(),
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iY2VUn0h9MNpvPHPAU5mRNwauQ8EyIlqHjobQQyXKrfEo3S77gZ94eWOZcUSPY_MmaY&usqp=CAU',
            title: 'Correos',
            content: 'Un email, también mencionado como e-mail, es un correo electrónico: un mensaje digital que se transmite mediante una red informática. La noción proviene de electronic mail, la expresión inglesa para nombrar a este tipo de correo.'
          }
        ]
      },
    ]);
    
    function handleNewItem(text, board){
      console.log(text.value,board.id, board.name);
      board.items.push({
        id: crypto.randomUUID(),
        title: text.value,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iY2VUn0h9MNpvPHPAU5mRNwauQ8EyIlqHjobQQyXKrfEo3S77gZ94eWOZcUSPY_MmaY&usqp=CAU',
      });
    }
    
    function handleNewBoard(){
      const name = prompt('Name of the board');
      if(name){
        boards.push({
          id: crypto.randomUUID(),
          name: name,
          items: [],
        })
      }
    
    }
    
    function startDrag(evt, board, item){
      evt.dataTransfer.setData(
        'text/plain', 
        JSON.stringify({boardId: board.id, itemId: item.id})
        );
    }
    
    function onDrop(evt, dest){
      const { boardId, itemId } = JSON.parse(evt.dataTransfer.getData('text/plain'));
      const originBoard = boards.find((item) => item.id == boardId);
      const originItem = originBoard.items.find((item) => item.id == itemId);
    
      dest.items.push({...originItem});
      originBoard.items = originBoard.items.filter((item) => item != originItem);
    
    }
    </script>
    <script>
export default {
  name: "Tablero-View",
};
</script>
    <style scoped>
    
    .content {
      font-size: 12px;
      text-align: justify;
      
    }
    
    nav{
      background-color: black;
      margin-bottom: 10px;
    }
    
    nav ul{
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .image {
      border-radius: 150px;
      width: 20%;
      height: 50px;
      margin-top: 10px;
    }
    
    nav ul li a {
      display: block;
      padding: 10px;
      color:white;
      text-decoration: none;
    }
    
    .boards {
      display: flex;
      gap: 10px;
    }
    
    .board{
      background-color: #efefef;
      padding: 5px;
    }
    
    .items {
      display: flex;
      flex-direction: column;
      gap: 10px;
      
    }
    .item {
      background-color: white;
      padding: 5px;
      box-sizing: border-box;
      border-radius: 10px;
    }
    </style>
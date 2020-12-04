let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "ritht";

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

    /* Criando Funções do jogo */

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}


    function drawFood(){
        context.fillStyle = "red";
        context.fillRect(food.x, food.y, box, box);
    }



    /*Criando evento */

    document.addEventListener('keydown', update);

    /*Criando abaixo, a função update utlizada acima */

    function update (event){
        if(event.keyCode == 37 && direction != "right") direction = "left";
        if(event.keyCode == 38 && direction != "down") direction = "up";
        if(event.keyCode == 39 && direction != "left") direction = "right";
        if(event.keyCode == 40 && direction != "up") direction = "down";
    }

    /* Criando função que chamará as Funções */
function iniciarJogo(){
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0  && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0  && direction == "up") snake[0].y = 16 * box;


    criarBG();
    criarCobrinha();
    drawFood();

    /*Definindo ponto de partida da cobrinha */
    let snakeX = snake[0].x; 
    let snakeY = snake[0].y;

    /*Criando as coordenadas da cobrinha */
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box; 

  

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }


    
    /*Utilizando a função pop para retirar o último elemento do array */
    //snake.pop();


    /*Acrescentando primeiro elemento */
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    /*Utilizando o método unshift para acrescentar no primeiro elemento */
    snake.unshift(newHead);



}

let jogo = setInterval(iniciarJogo, 100);









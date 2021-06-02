var game = document.querySelector('.js-game');
var grid = [];

var GAME_ROW_LENGTH = 100;
const GAME_ROW_HEIGHT = 50;
var GAME_CELLS_LENGTH = GAME_ROW_LENGTH * GAME_ROW_HEIGHT;

// Create grid
for(let i = 0; i < GAME_CELLS_LENGTH; i++) {
    var cell = document.createElement('div');
    cell.className = 'cell';
    cell.style.width = 100 / GAME_ROW_LENGTH + '%';
    // cell.innerHTML = i;
    game.append(cell);

    grid.push(cell);
}
//Считаем смайл
// Через FOR вышло бы быстрее, но много кода.
//Переменная для начальной позиции отсчета смайла
let threeString = GAME_ROW_LENGTH*2 + GAME_ROW_LENGTH/2;
//Нам нужна вся коллекция классов CELL что бы циклом на индекс навешивать свой класс
let boll = document.querySelectorAll('.cell');
//Переменная, отвечающая за количество закрашиваемых ячеек
let k = 4;
// переменная отвечающая за номер строки смайла. Начинается с 0.
let n = 0;
//Динамичная переменная, влияющая на прирост переменной 'k' в зависимости от строки 'n'
let e = 3;
//цикл, проставляет класс smile 
for (let i = -3; i < k; i++) {
    //nam - индекс коллекции boll
    let nam = threeString + i + GAME_ROW_LENGTH*n;
    boll[nam].className = 'cell js-smile';
//Перед тем, как 'i' достигнет 'к' мы должны увеличить 'к' на 'е' по следующим зависимостям от текущего 'n':
    if (i - k === -1 ) {
        if (n === 2  ||
            n === 5 ||  
            n === 8 ||
            n === 36 ||
            n === 39 ||
            n === 41
            ) {
            --e;
            n = n+1;
            k = k+e;
        } else if (n === 9  ||
                   n === 11 ||
                   n === 13 ||
                   n === 16 ||
                   n === 19 
                   ){
            e=1;
            n = n+1;
            k = k+e;
            e=0;
        } else if ( n === 25  ||
                    n === 28 ||
                    n === 31 ||
                    n === 33 ||
                    n === 35 
                    ){
            e=-1;
            n = n+1;
            k = k+e;
            e=0;

        }else {
            n = n+1;
            k = k+e;
        }
     
        i=-1*k;

    } 

}
//рисуем глаза и рот
function normalSmileFace(){
    //Удаляем лишние классы
    let delAnger = document.querySelectorAll('.js-anger');
    for (let i = 0 ;  i < delAnger.length; i++){
    delAnger[i].classList.remove('js-anger');
    }
//рисуем глаза
for (let i = -11; i < -6; i++) {
    let nam = threeString + i + GAME_ROW_LENGTH*12;
    boll[nam].classList.add('js-normal');
}
for (let i = 7; i < 12; i++) {
    let nam = threeString + i + GAME_ROW_LENGTH*12;
    boll[nam].classList.add('js-normal');

}
for (let i = -12; i < -5; i++) {
    let nam = threeString + i + GAME_ROW_LENGTH*13;
    boll[nam].classList.add('js-normal');
}
for (let i = 6; i < 13; i++) {
    let nam = threeString + i + GAME_ROW_LENGTH*13;
    boll[nam].classList.add('js-normal');
}
for (let i = -13; i < -4; i++) {
    let nam = threeString + i + GAME_ROW_LENGTH*14;
    boll[nam].classList.add('js-normal');
}
for (let i = 5; i < 14; i++) {
    let nam = threeString + i + GAME_ROW_LENGTH*14;
    boll[nam].classList.add('js-normal');
}
for (let i = -13; i < -4; i++) {
    let nam = threeString + i + GAME_ROW_LENGTH*15;
    boll[nam].classList.add('js-normal');
}
for (let i = 5; i < 14; i++) {
    let nam = threeString + i + GAME_ROW_LENGTH*15;
    boll[nam].classList.add('js-normal');
}


// рисуем рот
for (let i = -13; i < 14; i++) {
    let nam = threeString + i + GAME_ROW_LENGTH*28;
    boll[nam].classList.add('js-normal');
}
for (let i = -12; i < 13; i++) {
    let nam = threeString + i + GAME_ROW_LENGTH*29;
    boll[nam].classList.add('js-normal');
}
for (let i = -11; i < 12; i++) {
    let nam = threeString + i + GAME_ROW_LENGTH*30;
    boll[nam].classList.add('js-normal');
}
for (let i = -10; i < 11; i++) {
    let nam = threeString + i + GAME_ROW_LENGTH*31;
    boll[nam].classList.add('js-normal');
}
for (let i = -9; i < 10; i++) {
    let nam = threeString + i + GAME_ROW_LENGTH*32;
    boll[nam].classList.add('js-normal');
}
for (let i = -7; i < 8; i++) {
    let nam = threeString + i + GAME_ROW_LENGTH*33;
    boll[nam].classList.add('js-normal');
}
}

normalSmileFace();


//рисуем злые глаза и рот

function angerSmileFace(){

    //Удаляем лишние классы
    let delNormal = document.querySelectorAll('.js-normal');
    for (let i = 0 ;  i < delNormal.length ; i++){
    delNormal[i].classList.remove('js-normal');
    }


    for (let i = -10; i < -8; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*12;
        boll[nam].classList.add('js-anger');
    }
    for (let i = 9; i < 11; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*12;
        boll[nam].classList.add('js-anger');
    }


    for (let i = -10; i < -7; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*13;
        boll[nam].classList.add('js-anger');
    }
    for (let i = 8; i < 11; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*13;
        boll[nam].classList.add('js-anger');
    }


    for (let i = -10; i < -6; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*14;
        boll[nam].classList.add('js-anger');
    }
    for (let i = 7; i < 11; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*14;
        boll[nam].classList.add('js-anger');
    }


    for (let i = -10; i < -5; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*15;
        boll[nam].classList.add('js-anger');
    }
    for (let i = 6; i < 11; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*15;
        boll[nam].classList.add('js-anger');
    }


    for (let i = -9; i < -4; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*16;
        boll[nam].classList.add('js-anger');
    }
    for (let i = 5; i < 10; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*16;
        boll[nam].classList.add('js-anger');
    }


    for (let i = -8; i < -4; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*17;
        boll[nam].classList.add('js-anger');
    }
    for (let i = 5; i < 9; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*17;
        boll[nam].classList.add('js-anger');
    }

    
    
    //рот
    for (let i = -7; i < 8; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*28;
        boll[nam].classList.add('js-anger');
    }
    for (let i = -9; i < 10; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*29;
        boll[nam].classList.add('js-anger');
    }
    for (let i = -10; i < 11; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*30;
        boll[nam].classList.add('js-anger');
    }
    for (let i = -11; i < 12; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*31;
        boll[nam].classList.add('js-anger');
    }
    for (let i = -12; i < 13; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*32;
        boll[nam].classList.add('js-anger');
    }
    for (let i = -13; i < 14; i++) {
        let nam = threeString + i + GAME_ROW_LENGTH*33;
        boll[nam].classList.add('js-anger');
    }
    }
    // angerSmileFace()


// Food
var currentFoodPosition = 0;
var counterFood = -1;
var foodTimeout;
function createFood() {
    grid[currentFoodPosition].classList.remove('food');

    currentFoodPosition = Math.floor(Math.random() * GAME_CELLS_LENGTH);
    
    if(grid[currentFoodPosition].classList.contains('snake')) {
        createFood();
    } else {
        grid[currentFoodPosition].classList.add('food');

        clearTimeout(foodTimeout);
        foodTimeout = setTimeout(function() {
            createFood();
        }, 5000);
    }
}

var LEFT_DIR = 'KeyA';
var RIGHT_DIR = 'KeyD';
var UP_DIR = 'KeyW';
var BOTTOM_DIR = 'KeyS';

var currentDirection = RIGHT_DIR;

var canChangeDirection = true
function changeDirection(newDirection) {

    if(currentDirection === newDirection || !canChangeDirection) return;

    // if(newDirection === LEFT_DIR && currentDirection !== RIGHT_DIR) {
    //     currentDirection = newDirection
    // } else if(newDirection === RIGHT_DIR && currentDirection !== LEFT_DIR) {
    //     currentDirection = newDirection
    // } else if(newDirection === UP_DIR && currentDirection !== BOTTOM_DIR) {
    //     currentDirection = newDirection
    // } else if(newDirection === BOTTOM_DIR && currentDirection !== UP_DIR) {
    //     currentDirection = newDirection
    // }
    
    if(
        (newDirection === LEFT_DIR && currentDirection !== RIGHT_DIR) ||
        (newDirection === RIGHT_DIR && currentDirection !== LEFT_DIR) ||
        (newDirection === UP_DIR && currentDirection !== BOTTOM_DIR) ||
        (newDirection === BOTTOM_DIR && currentDirection !== UP_DIR)
    ) {
        currentDirection = newDirection
        canChangeDirection = false
    }

}

var currentSnakeHeadPosition = GAME_CELLS_LENGTH / 2;
var isStart = true

var SPEED = 100;
var snakeLength = SPEED * 9;

function moveSnake() {

    grid[currentSnakeHeadPosition].classList.remove('head')

    if(!isStart) {
        switch(currentDirection) {
            case RIGHT_DIR:
                explosionPosition = currentSnakeHeadPosition;
                currentSnakeHeadPosition += 1
                if(currentSnakeHeadPosition % GAME_ROW_LENGTH === 0 ||
                    currentSnakeHeadPosition > GAME_CELLS_LENGTH - 1) {
                    // currentSnakeHeadPosition -= GAME_ROW_LENGTH
                    GameOver(explosionPosition)

                }
                break;
            case LEFT_DIR:
                explosionPosition = currentSnakeHeadPosition;
                currentSnakeHeadPosition -= 1
                if(currentSnakeHeadPosition % GAME_ROW_LENGTH === GAME_ROW_LENGTH - 1 ||
                    currentSnakeHeadPosition < 0) {
                    // currentSnakeHeadPosition += GAME_ROW_LENGTH
                    GameOver(explosionPosition)

                }
                break;
            case UP_DIR:
                explosionPosition = currentSnakeHeadPosition;
                currentSnakeHeadPosition -= GAME_ROW_LENGTH
                if(currentSnakeHeadPosition < 0) {
                    // currentSnakeHeadPosition += GAME_CELLS_LENGTH
                    GameOver(explosionPosition)

                }
                break;
            case BOTTOM_DIR:
                explosionPosition = currentSnakeHeadPosition;
                currentSnakeHeadPosition += GAME_ROW_LENGTH
                if(currentSnakeHeadPosition > GAME_CELLS_LENGTH - 1) {
                    // currentSnakeHeadPosition -= GAME_CELLS_LENGTH
                    GameOver(explosionPosition)

                }
                break;
        }
    }

    isStart = false;

    let nextSnakeHeadCell = grid[currentSnakeHeadPosition]

    //Выбираем злое или нормальное лицо в зависимости от класса клетки
    if(nextSnakeHeadCell.classList.contains('js-smile')) {
        angerSmileFace();
    } else {
        normalSmileFace();
    }


    if(nextSnakeHeadCell.classList.contains('snake')) {
        // nextSnakeHeadCell.classList.remove('head')
        GameOver(explosionPosition);
    }


    nextSnakeHeadCell.classList.add('snake');
    grid[currentSnakeHeadPosition].classList.add('head');

    setTimeout(function() {
        nextSnakeHeadCell.classList.remove('snake');
    }, snakeLength);
    
    if(nextSnakeHeadCell.classList.contains('food')) {
        snakeLength += SPEED

        createFood();
        
        // увеличиваем счетчик
        counterFood += 1;
        // прописать в span на странице
        console.log(counterFood)
    }

    canChangeDirection = true
}

// Events
document.addEventListener('keypress', function(event) {
    changeDirection(event.code);
});
// Достигаем границ блока и запускаем эту функцию
function GameOver(explosionPosition){
    //сбрасываем индекс массива ячеек в несуществующее значение. Избегаем дальнейшей отрисовки змейки
    currentSnakeHeadPosition = -1;
    //Определяем ячейку в которой ошиблась змейка, через предварительно записанное значение.
    let = explosionEl = grid[explosionPosition];
    //Создаем новый элемент, добавляем в него ГИФ, подключаем класс
    let explosionElIn = document.createElement('span');
    explosionElIn.innerHTML = '<img src="https://francescosegala.files.wordpress.com/2014/05/explosion.gif"/>';
    explosionElIn.classList.add('js-explosion');
    //Вставляем созданный элемент в нашу ячейку
    explosionEl.append(explosionElIn);
    //чистим змейку
        clearInterval(gameInterval);
        // 
        // настраиваем отложенную перезагрузку страницы
         setTimeout(reloadLoc , 5000);
    }

    function reloadLoc(){
        window.location.reload();
    }


// Start Game
createFood();

var gameInterval = setInterval(function() {
    moveSnake();
}, SPEED)
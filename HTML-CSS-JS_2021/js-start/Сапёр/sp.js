let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d"); //создание объекта CanvasRenderingContext2D, представляющий двумерный контекст.

let arrSize=prompt('Введите число столбцов/строк на поле:');
if (arrSize == null){
    arrSize = 9;
}
let blockSize;
if (arrSize > 18 && arrSize < 25){
    blockSize = 30;
}
else if (arrSize > 24 && arrSize < 37){
    blockSize = 20;
}
else if (arrSize > 36 && arrSize < 51){
    blockSize = 14;
}
else if (arrSize > 50){
    alert("Слишком большой размер!");
    arrSize = 50;
    blockSize = 14;
}
else{
    blockSize = 40;
}

let kDiff = 0.1;
let isGameStart = false;
let field = Array();
let flags = Array();

canvas.width = arrSize * blockSize;
canvas.height = arrSize * blockSize;


function fillBlockDig(h,w) {

    if(h >=0 && h <= arrSize - 1 && w >= 0 && w < arrSize) {

        if(field[h][w].number != 9) {
           
            field[h][w].number++;
            
        }
    }
    
}


function start(stH,stW) { //Заполнение массива

    field = Array();
    flags = Array();
    for(let h = 0; h < arrSize; h++) {
        let tempArray = Array();
        let tempArrayFlags = Array();
        for(let w = 0; w < arrSize; w++) {

            tempArrayFlags.push(0);
            if(h == stH && w == stW) {    //первый нажатый блок - не бомба
               
                tempArray.push({number:0, show:0});
                continue;
                
            }
            
            if(Math.random() < kDiff) {   //Заполнение массива бомбами
               tempArray.push({number:9, show:0});
            } else {
                tempArray.push({number:0, show:0});
            }
        }
        
        field.push(tempArray);
        flags.push(tempArrayFlags);
    }
    
    for(let h = 0; h < arrSize; h++) {
        for(let w = 0; w < arrSize; w++) {
            if(field[h][w].number == 9) {
               
                fillBlockDig(h,w-1);
                fillBlockDig(h,w+1);
                fillBlockDig(h-1,w);
                fillBlockDig(h+1,w);
                fillBlockDig(h-1,w-1);
                fillBlockDig(h-1,w+1);
                fillBlockDig(h+1,w-1);
                fillBlockDig(h+1,w+1);
                
            }
        }
    }
    isGameStart = true;
    
}

function draw() {   //Отрисовка массива
    
    ctx.fillStyle = "#3f2fb5";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    for(let h = 0; h < field.length; h++) {
        for(let w = 0; w < field[h].length; w++) {
            if(flags[h][w] == 1){
                ctx.font = "32px serif";
                ctx.fillStyle = "#ff0000"; //Отрисовка флага
                ctx.fillText("F", w*blockSize + 10, (h+1)*blockSize - 10);
            }

            if(field[h][w].show) {
                
                if(field[h][w].number == 9) {
                    ctx.beginPath();
                    ctx.fillStyle = "#afafaf"; //Отрисовка бомбы
                    ctx.arc(w*blockSize+blockSize/2,h*blockSize+blockSize/2,blockSize/3,0,2*Math.PI,true);
                    ctx.fill();

                    ctx.lineWidth = 5;
                    ctx.strokeStyle = "#afafaf";
                    ctx.beginPath();
                    ctx.moveTo(w*blockSize+blockSize/10, h*blockSize+blockSize/2);
                    ctx.lineTo(w*blockSize+blockSize-blockSize/10, h*blockSize+blockSize/2);
                    ctx.stroke();

                    ctx.strokeStyle = "#afafaf";
                    ctx.beginPath();
                    ctx.moveTo(w*blockSize+blockSize/2, h*blockSize+blockSize/10);
                    ctx.lineTo(w*blockSize+blockSize/2, h*blockSize+blockSize-blockSize/10);
                    ctx.stroke();


                    continue;
                    
                }
                
                ctx.fillStyle = "#454351";  //Отрисовка открытого поля
                ctx.fillRect(w*blockSize,h*blockSize,blockSize,blockSize);
                
                if(field[h][w].number) {
                    ctx.font = 32*blockSize/40 + "px serif";
                    ctx.fillStyle = "#ffffff"; //Отрисовка числа
                    ctx.fillText(field[h][w].number, w*blockSize + blockSize/4, (h+1)*blockSize - blockSize/4); 
                }
               
            }
            
        }
    }
    
    for(let i = 0; i < arrSize + 1; i++) {  //Отрисовка полос-разделителей
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#ffffff";
        ctx.beginPath();
        ctx.moveTo(0, i * blockSize);
        ctx.lineTo(canvas.width, i * blockSize);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(i * blockSize,0);
        ctx.lineTo(i * blockSize, canvas.height);
        ctx.stroke();
    }
}
draw();

canvas.addEventListener('click',function(event){

    let h = Math.floor((event.clientY/blockSize));
    let w = Math.floor((event.clientX/blockSize));
    
    if(!isGameStart) {
       start(h,w);
       draw();
    }
    
    if (field[h][w].number == 9) {
        showBLocks();
        draw();
        alert('Вы проиграли')
        isGameStart = false;
    }

    showBLock(h,w);

    if(vin()) {
        draw();
        alert('Вы победили')
        isGameStart = false;
    }

    draw();
});

canvas.oncontextmenu = function (){return false};
canvas.addEventListener('contextmenu',function(event){

    let h = Math.floor((event.clientY/blockSize));
    let w = Math.floor((event.clientX/blockSize));

    for(let i = 0; i < arrSize; i++) {
        for(let j = 0; j < arrSize; j++) {
            if (h == i && w == j){
                if (flags[i][j] == 0){
                    flags[i][j] = 1;
                } else {
                    flags[i][j] = 0;
                }
            }
        }
    }
    draw();
});

function vin() {
    let countOpen = 0;
    let countBombs = 0;
    for(let h = 0; h < field.length; h++) {
        for(let w = 0; w < field[h].length; w++) {
            if (field[h][w].number == 9){
                countBombs++;
            }
        }
    }

    for(let h = 0; h < field.length; h++) {
        for(let w = 0; w < field[h].length; w++) {
            if (field[h][w].show == 1){
                countOpen++;
            }
        }
    }
    if (countOpen + countBombs == arrSize*arrSize){
        return true;
    } else {
        return false;
    }

}

function showBLock(h,w) {
    
    field[h][w].show = 1;
    
    if (field[h][w].number != 0) {
        return;
    }
    
    checkZero(h,w-1);
    checkZero(h,w+1);
    checkZero(h-1,w);
    checkZero(h+1,w);
    
}

function showBLocks() {
    
    for(let h = 0; h < field.length; h++) {
        for(let w = 0; w < field[h].length; w++) {
            field[h][w].show = 1;
        }
    }
}

function checkZero(h,w) {
    
    if(h >=0 && h <= arrSize - 1 && w >= 0 && w < arrSize) {
        if(!field[h][w].show) {
           showBLock(h,w);
        }
    }
    
}

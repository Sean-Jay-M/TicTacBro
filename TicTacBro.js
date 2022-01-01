//Button management
function positiontaken(position){
    if(field[position] == 'O'){
        console.log("Dang bro, I already played there !")
        reset()
        Angry()
        typeWriter2()
    } else if (field[position] == 'X'){
        console.log ("Bruh, you already played there.")
        reset()
        Tired()
        typeWriter3()
    }
}

function resetboard(){
    field = {1: ' ', 2: ' ', 3: ' ',
    4: ' ', 5: ' ', 6: ' ',
    7: ' ', 8: ' ', 9: ' ',};

    document.getElementById("topleft").src = "images/topleft.png";
    document.getElementById("topmiddle").src = "images/topmiddle.png";
    document.getElementById("topright").src = "images/topright.png";
    document.getElementById("middleleft").src = "images/middleleft.png";
    document.getElementById("middlem").src = "images/Middlem.png";
    document.getElementById("middleright").src = "images/middleright.png";
    document.getElementById("bottomleft").src = "images/bottomleft.png";
    document.getElementById("bottommiddle").src = "images/bottommiddle.png";
    document.getElementById("bottomright").src = "images/bottomright.png";
}

function changeimagePlayer(image){
    if (image == 1){
        document.getElementById("topleft").src = "images/topleftPlayer.png";
    } else if (image == 2){
        document.getElementById("topmiddle").src = "images/topmiddlePlayer.png";
    } else if (image == 3){
        document.getElementById("topright").src = "images/toprightPlayer.png";
    } else if (image == 4){
        document.getElementById("middleleft").src = "images/middleleftPlayer.png";
    } else if (image == 5){
        document.getElementById("middlem").src = "images/MiddlemPlayer.png";
    } else if (image == 6){
        document.getElementById("middleright").src = "images/middlerightPlayer.png";
    } else if (image == 7){
        document.getElementById("bottomleft").src = "images/bottomleftPlayer.png";
    } else if (image == 8){
        document.getElementById("bottommiddle").src = "images/bottommiddlePlayer.png";
    } else if (image == 9){
        document.getElementById("bottomright").src = "images/bottomrightPlayer.png";
    }
}

function changeimageBot(image){
    if (image == 1){
        document.getElementById("topleft").src = "images/topleftBot.png";
    } else if (image == 2){
        document.getElementById("topmiddle").src = "images/topmiddleBot.png";
    } else if (image == 3){
        document.getElementById("topright").src = "images/toprightBot.png";
    } else if (image == 4){
        document.getElementById("middleleft").src = "images/middleleftBot.png";
    } else if (image == 5){
        document.getElementById("middlem").src = "images/MiddlemBot.png";
    } else if (image == 6){
        document.getElementById("middleright").src = "images/middlerightBot.png";
    } else if (image == 7){
        document.getElementById("bottomleft").src = "images/bottomleftBot.png";
    } else if (image == 8){
        document.getElementById("bottommiddle").src = "images/bottommiddleBot.png";
    } else if (image == 9){
        document.getElementById("bottomright").src = "images/bottomrightBot.png";
    }
}

//Bot Visualizer 
//restarter 

function resetreactions(){
    i = 0;
    txt = ' yAy, a neW plAyer !'; 
    speed = 50; 
    txt3 = 'A win for Ai!';
    i3 = 0;
    speed3 = 50;
    txt1 = 'you KneW it wAs tAken';
    i1 = 0;
    speed1 = 50; 
    txt2 = 'i Am woRRied for humAns';
    i2 = 0;
    speed2 = 50; 
    txt3 = 'A win for Ai!';
    i3 = 0;
    speed3 = 50; 
    txt4 = "Bro, I could've won that";
    i4 = 0;
    speed4 = 50;
    txt6 = " Yay, another game.";
    i6 = 0;
    speed6 = 50; 
    txt5 = 'Dang, Nice Draw';
    i5 = 0;
    speed5 = 50; 
}

//start
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

var i = 0;
var txt = ' yAy, a neW plAyer !'; 
var speed = 50; 

function reset(){
    document.getElementById("talking").innerHTML = '';
}

async function backtonormal() {
    await sleep(3000);
    document.getElementById("BOT").src = "images/AIstart.png";
}

function typeWriter() {
    AIstart()
  if (i < txt.length) {
    document.getElementById("talking").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function AIstart(){
    document.getElementById("BOT").src = "images/AIHappy.png";
    backtonormal();
}

//If space is taken 

var txt1 = 'you KneW it wAs tAken';
var i1 = 0;
var speed1 = 50; 

function typeWriter2() {
    if (i1 < txt1.length) {
      document.getElementById("talking").innerHTML += txt1.charAt(i1);
      i1++;
      setTimeout(typeWriter2, speed1);
    }
}

function Angry(){
    document.getElementById("BOT").src = "images/AIAngry.png";
    backtonormal();
}

function Tired(){
    document.getElementById("BOT").src = "images/AITired.png";
    backtonormal();
}

var txt2 = 'i Am woRRied for humAns';
var i2 = 0;
var speed2 = 50; 

function typeWriter3() {
    if (i2 < txt2.length) {
      document.getElementById("talking").innerHTML += txt2.charAt(i2);
      i2++;
      setTimeout(typeWriter3, speed2);
    }
}

//If Ai Win (it always will win or draw)
function Win(){
    document.getElementById("BOT").src = "images/AIHappy.png";
    backtonormal();
}

var txt3 = 'A win for Ai!';
var i3 = 0;
var speed3 = 50; 

function typeWriter4(){
    if (i3 < txt2.length) {
      document.getElementById("talking").innerHTML += txt3.charAt(i3);
      i3++;
      setTimeout(typeWriter4, speed3);
    }
}

//if game is restarted before end HERE !!!

var restarts = 0;
function restarttrack(){
    if (restarts > 1 && !draw_check() && !check_win()){
        reset();
        sad();
        typeWriter5();
    } else if (restarts != 0 && (draw_check() || check_win())){
        console.log("newgame")
        newgame()
    } else if (restarts == 0){
        typeWriter()
    }
    restarts++
}

function sad(){
    document.getElementById("BOT").src = "images/AISad.png";
    backtonormal();
    typeWriter5();
}

var txt4 = "Bro, I could've won that";
var i4 = 0;
var speed4 = 50; 

function typeWriter5(){
    if (i4 < txt4.length) {
      document.getElementById("talking").innerHTML += txt4.charAt(i4);
      i4++;
      setTimeout(typeWriter5, speed4);
    }
}

var txt6 = "Yay, another game.";
var i6 = 0;
var speed6 = 50; 

function newgame(){
    console.log("in newgame")
    console.log(i6)
    console.log(speed6)
    if (i6 < txt6.length) {
      document.getElementById("talking").innerHTML += txt6.charAt(i6);
      i6++;
      setTimeout(newgame, speed6);
    }
}

//If Draw

function Annoyed(){
    document.getElementById("BOT").src = "images/AIAnnoyed.png";
    backtonormal();
}

var txt5 = 'Dang, Nice Draw';
var i5 = 0;
var speed5 = 50; 

function typeWriter6(){
    if (i5 < txt5.length) {
      document.getElementById("talking").innerHTML += txt5.charAt(i5);
      i5++;
      setTimeout(typeWriter6, speed5);
    }
}


//define the variables and return statement (for the console)
var field = {1: ' ', 2: ' ', 3: ' ',
4: ' ', 5: ' ', 6: ' ',
7: ' ', 8: ' ', 9: ' ',};

function represent(){
    var line1 = field[1] + '|' + field[2] + '|' + field[3];
    var line2 = '-+-+-';
    var line3 = field[4] + '|' + field[5] + '|' + field[6];
    var line4 = '-+-+-';
    var line5 = field[7] + '|' + field[8] + '|' + field[9];
    completefield = line1 + '\n' + line2 + '\n' + line3 + '\n' + line4 + '\n' + line5;
    return completefield;
}

//various checks for the state of the game
function draw_check(){
    for (let key in field){
        if (field[key] != 'X' && field[key] != 'O'){
            return false;
        }
    }return true;
}

function space_clear(position){
    if (field[position] == ' '){
        return true;
    }else{
        positiontaken(position);
        return false;
    }
}
//The winning combinations, basic approach to checking if a winstate has occured.
function check_win(){
    if(field[1] == field[2] && field[1] == field[3] && field[1] != ' '){
        return true;
    }else if(field[4] == field[5] && field[4] == field[6] && field[4] != ' '){
        return true;
    }else if(field[7] == field[8] && field[7] == field[9] && field[7] != ' '){
        return true;
    }else if(field[1] == field[4] && field[1] == field[7] && field[1] != ' '){
        return true;
    }else if(field[2] == field[5] && field[2] == field[8] && field[2] != ' '){
        return true;
    }else if(field[3] == field[6] && field[3] == field[9] && field[3] != ' '){
        return true;
    }else if(field[1] == field[5] && field[1] == field[9] && field[1] != ' '){
    return true;
    }else if(field[7] == field[5] && field[7] == field[3] && field[7] != ' '){
    return true;
    }
}

function who_won(value){
    if(field[1] == field[2] && field[1] == field[3] && field[1] == value){
        return true;
    }else if(field[4] == field[5] && field[4] == field[6] && field[4] == value){
        return true;
    }else if(field[7] == field[8] && field[7] == field[9] && field[7] == value){
        return true;
    }else if(field[1] == field[4] && field[1] == field[7] && field[1] == value){
        return true;
    }else if(field[2] == field[5] && field[2] == field[8] && field[2] == value){
        return true;
    }else if(field[3] == field[6] && field[3] == field[9] && field[3] == value){
        return true;
    }else if(field[1] == field[5] && field[1] == field[9] && field[1] == value){
    return true;
    }else if(field[7] == field[5] && field[7] == field[3] && field[7] == value){
    return true;
    }
}

//bot and player move setting 
function playerset(position){
    changeimagePlayer(position);
    field[position] = 'X';
    if (check_win()){
        reset();
        Win();
        typeWriter4();
        console.log("Player Won !")
    }
    if (draw_check()){
        console.log("Draw!")
        reset();
        Annoyed();
        typeWriter6();
    }
}

function botset(position){
        changeimageBot(position);
        field[position] = 'O';
    if (check_win()){
        reset();
        Win();
        typeWriter4();
        console.log("Bot     Won !")
    }
    if (draw_check()){
        console.log("Draw!");
        reset();
        Annoyed();
        typeWriter6();
    }
}

//minimax calculations
function minimaxbest(){
    var Bscore = -100;
    var Bmove = 0;
    for (let key in field){
        if (field[key] == ' '){
            field[key] = 'O';
            var score = minimax(0, false);
            field[key] = ' '
            if (score > Bscore){
                Bscore = score;
                Bmove = key;
            }
        }
    }
    botset(Bmove);
}

function minimax(depth, MaxMin){
    if(who_won('O')){
        return 1;
    }else if (who_won('X')) {
        return -1;
    }else if (draw_check()){
        return 0;
    }
    if (MaxMin){
        var Bscore = -100;
        for (let key in field){
            if(field[key] == ' '){
                field[key] = 'O';
                var score = minimax(depth+1, false);
                field[key] = ' ';
                if(score > Bscore){
                    Bscore = score;
                }
            }
        }
        return Bscore
    }else{
        var Bscore = 100;
        for (let key in field){
            if(field[key] == ' '){
                field[key] = 'X';
                var score = minimax(depth+1, true);
                field[key] = ' ';
                if (score < Bscore){
                    Bscore = score;
                }
            }
        }
        return Bscore
    }
}

// testing loop
var proceed = true;
async function game(position){
        if(restarts == 0){
            return;
        } else if(!check_win() && draw_check()){
            proceed = false;
            return;
        }else if(check_win() && !draw_check()){
            proceed = false;
            return
        }else{
            if(draw_check()){
                proceed = false;
                return;
            }else if(check_win() && !draw_check()){
                proceed = false;
                return;
            }
            if(space_clear(position)){
                playerset(position);
                await sleep(500);
                bot();
            }else{
                console.log("Space is taken")
            }
}
}

async function bot(){
    minimaxbest();
    console.log(represent());
}

//Each button will call the above without the while loop. It will do all the checks each time without looping.
//It is important to add a reset button if this is done.
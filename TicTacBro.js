//Button management
src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"

function positiontaken(position){
    if(field[position] == 'O'){
        console.log("Dang bro, I already played there !")
    } else if (field[position] == 'X'){
        console.log ("Bruh, you already played there.")
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


function display(){
    document.getElementById("TicTacTester").innerHTML= represent();
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
    field[position] = 'X';
    if (check_win()){
        console.log("Player Won !")
    }
    if (draw_check()){
        console.log("Draw!")
    }
}

function botset(position){
        changeimageBot(position);
        field[position] = 'O';
    if (check_win()){
        console.log("Bot     Won !")
    }
    if (draw_check()){
        console.log("Draw!")
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
function game(position){
        if(!check_win() && draw_check()){
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
            }else{
                console.log("Space is taken")
            }
}
}

function bot(){
    minimaxbest();
    document.getElementById("TicTacTester").innerHTML= represent();
    console.log(represent());
}

//Each button will call the above without the while loop. It will do all the checks each time without looping.
//It is important to add a reset button if this is done.
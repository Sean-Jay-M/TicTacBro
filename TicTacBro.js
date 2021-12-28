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
    console.log(represent());
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
}

function botset(position){
    console.log("inside botmove");
        console.log("Botmove about to be played");
        field[position] = 'O';
        console.log("Botmove played at" + position);
}

//minimax calculations
function minimaxbest(){
    console.log("MinimaxBest called")
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
    console.log("Bot move fed" + Bmove)
    return;
}

function minimax(depth, MaxMin){
    console.log("Minimax was called")
    if(who_won('O')){
        return 1;
    } else if (who_won('X')) {
        return -1;
    }else if (draw_check){
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
                    console.log("Score was set")
                }
            }
        }
        console.log("Score returned")
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
                    console.log("Score was set 2")
                }
            }
        }
        console.log("Score returned")
        return Bscore
    }
}

// testing loop
var proceed = true;
function game(position){
        if(!check_win() && draw_check()){
            console.log("Draw1");
            proceed = false;
            return;
        }else if(check_win() && !draw_check()){
            console.log("Win1");
            proceed = false;
            return
        }else{
            minimaxbest()
            if(draw_check()){
                console.log("Draw2");
                proceed = false;
                return;
            }else if(check_win() && !draw_check()){
                console.log("Win2");
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

//Each button will call the above without the while loop. It will do all the checks each time without looping.
//It is important to add a reset button if this is done.
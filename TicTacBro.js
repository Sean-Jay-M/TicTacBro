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

function draw_check(){
    for (let key in field){
        if (field[key] != 'X' && field[key] != 'O'){
            return false;
        }else{
            return true;
        }
    }
}

function space_clear(position){
    if (field[position] == ' '){
        return true;
    }else{
        return false;
    }
}

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

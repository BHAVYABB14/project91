player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0; 
player2_score = 0; 
document.getElementById("player1_name").innerHTML = player1_name + ":" ; 

document.getElementById("player2_name").innerHTML = player2_name + ":" ;

document.getElementById("player1_score").innerHTML = player1_score; 

document.getElementById("player2_score").innerHTML = player2_score; 

document.getElementById("player_question").innerHTML = "question turn " +player1_name ; 

document.getElementById("player_answer").innerHTML = "answer turn " +player2_name ; 
function send() {
    number1 = documnet.getElementById("number1").value;
    number2 = documnet.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log(actual_answer);
    question_word = "<h4 id='word_display'> Q."+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'></input>";
    check_button = "<br><br><button class ='btn-btn-info'onclck='check()'>check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    question_turn = "player1";
    answer_turn = "player2";
}
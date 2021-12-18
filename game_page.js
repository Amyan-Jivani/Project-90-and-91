player_1_name= localStorage.getItem("player_1_name");
player_2_name= localStorage.getItem("player_2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

function Send(){
    number1= document.getElementById("number1").value;
    number2= document.getElementById("number2").value;
    correct_answer= parseInt(number1) + parseInt(number2);
    question_number= "<h4>" + number1 + "+" + number2 + "</h4>";
    input_box= "<br>Answer: <input type='number' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-danger' onclick='check()'>Check</button>";
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML= row;
    document.getElementById("number1").value= "";
    document.getElementById("number2").value= "";
}
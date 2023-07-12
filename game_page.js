var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var score_player1 = 0;
var score_player2 = 0;

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";
document.getElementById("player1_score").innerHTML = score_player1;
document.getElementById("player2_score").innerHTML = score_player2;
document.getElementById("player_question").innerHTML = "Turno de pergunta: " + player1_name;
document.getElementById("player_answer").innerHTML = "Turno de resposta: " + player2_name;

function send() {
    numero1 = document.getElementById("number1").value;
    numero2 = document.getElementById("number2").value;
    resultado = parseInt(numero1) * parseInt(numero2);

    questao = "<h4>" + numero1 + "X" + numero2 + "</h4>";
    input = "<br>Resposta: <input type='text' id='input_check_box'>";
    butao = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
    div = questao + input + butao;

    document.getElementById("output").innerHTML = div;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

questionTurn = "player1";
answerTurn = "player2";

function check() {
    getAnswer = document.getElementById("input_check_box").value;
    if (getAnswer == resultado) {
        if (answerTurn == "player1") {
            score_player1 = score_player1 + 1;
            document.getElementById("player1_score").innerHTML = score_player1;
        }
        else {
            score_player2 = score_player2 + 1;
            document.getElementById("player2_score").innerHTML = score_player2;
        }
    }

    if (questionTurn == "player1") {
        questionTurn = "player2";
        document.getElementById("player_question").innerHTML = "Turno de pergunta: " + player2_name;
    }
    else {
        questionTurn = "player1";
        document.getElementById("player_question").innerHTML = "Turno de pergunta: " + player1_name;
    }

    if (answerTurn == "player1") {
        answerTurn = "player2";
        document.getElementById("player_answer").innerHTML = "Turno de resposta: " + player2_name;
    }
    else {
        answerTurn = "player1";
        document.getElementById("player_answer").innerHTML = "Turno de resposta: " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}
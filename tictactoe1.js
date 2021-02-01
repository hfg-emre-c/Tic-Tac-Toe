alert("Bitte erst namen festlegen, Spielfeldgröße bestimmen und dann erst den Button zum erstellen betätigen!!");
let Spielfeldgröße = "";

let currentPlayer = "X";
let player1 = "X";
let player2 = "O";

let player1name = "";
let player2name = "";


let player1counter = 0;
let player2counter = 0;
let round = 0;
/* jsHint ignore:start */
let spielfeldstatus = [];
/*jshint ignore:end */
function buttonaktivieren() {
    document.getElementById("buttondown").disabled = false;
}
//wird in HTML ausgeführt und ändert bzw fügt die namen hinzu
//gibt PopUp's mit "Spielernamen wurden festgelegt", "Spieler Y ist X", "Spieler X ist O"
/*jshint ignore:start */
function changeplayername() {
    player1name = document.getElementById("player1").value;
    document.getElementById("player1").disabled = true;
    player2name = document.getElementById("player2").value;
    document.getElementById("player2").disabled = true;

    alert("Spielernamen wurden festgelegt");
    alert(player1name + " ist " + player1);
    alert(player2name + " ist " + player2);

    document.getElementById("update").innerHTML = player1name + " fängt mit dem Symbol X an sobald Anzahl der Symbole zum win und die Spielfeldgröße bestimmt wurden"
    var elem = document.getElementById('namebest');
    elem.parentNode.removeChild(elem);
    return false;

}
/*jshint ignore:end */

//Gibt an wer gerade am Zug ist über der Tabelle 
function changetext() {
    if (currentPlayer === ("X")) {
        document.getElementById("update").innerHTML = player2name + " ist als nächstes dran!";
    } else if (currentPlayer === ("O")) {
        document.getElementById("update").innerHTML = player1name + " ist als nächstes dran!!";
    }
}

//wird in generate ausgeführt aber dieser ist im ignore
//Rundenzähler fängt bei 0 an mit let round - hierdurch ändert sich der Text und zählt hoch
function rundenzaehler() {
    round++;
    document.getElementById("rundenzaehlerid").innerHTML = "RUNDE " + round;
}


//Gewinnanzeige welches die Gewinnausgabe ausgibt
function gewinnanzeige() {
    if (currentPlayer === ("X")) {
        document.getElementById("gewinnausgabe").innerHTML = player1name + " hat GEWONNEN!!!";
    } else {
        document.getElementById("gewinnausgabe").innerHTML = player2name + " hat GEWONNEN";
    }
}

//ändert Buttontext um eine neue Runde zu starten
function neustart() {
    document.getElementById("erstellen").innerHTML = "Neue Runde starten";
}

//funktion schließt die td's damit man nicht mehr spielen kann
function close() {
    $("td").prop("disabled", true);
}

//generate() wird auf der HTML genutzt
/*jshint ignore:start */
function generate() {

    let counter = 0;
    let newId = 0;

    rundenzaehler();
    document.getElementById("gewinnausgabe").innerText = "";

    $("tr").remove();
    Spielfeldgröße = Number(document.getElementById("groeße").value); /*Feld ID hinzufügen*/
    for (let i = 0; i < Spielfeldgröße; i++) {
        newId = "Zeile" + i /*ID vergabe durch Zeile und i*/
        $("table").append("<tr id=" + newId + "></tr>");
        console.log("erstelle table")

        spielfeldstatus[i] = []; //erzeugt neue Zeile

        for (let j = 0; j < Spielfeldgröße; j++) {
            let idvar = String(i) + "-" + String(j)
            $("#" + newId).append("<td id=" + idvar + "></td>");
            counter++;
            console.log("erstelle table ")

            spielfeldstatus[i][j] = " ";
        }

    }


    console.log($("td"))

}
/*jshint ignore:end */

//onclick funktion um zu Spielen - Spielablauf wird hier bestimmt 
$("table").on("click", "td", function() {
    if ($(this).text() === "") {

        console.log($(this).attr("id").split("-")[1]);

        //splitte hier die ID damit man x & y nutzen kann
        let x = Number($(this).attr("id").split("-")[0]);
        let y = Number($(this).attr("id").split("-")[1]);

        //xy vom aktuellem spieler wird abgerufen
        spielfeldstatus[x][y] = currentPlayer;

        $(this).text(currentPlayer);
        console.log($(this).text());

        //funktionen
        changetext();
        checkForWin();
        currentPlayer = changeplayer();

    }


});

/*Spielerwechsel funktion - wenn Player1, dann Player2 ansonsten Player1*/
function changeplayer() {
    if (currentPlayer === player1) {

        currentPlayer = player2;
    } else {

        currentPlayer = player1;
    }
    return currentPlayer;

}
//Zählt den Wincounter für die einzelnen Spieler hoch mit der IF abfrage - so wird der aktuelle Spieler ausgesucht und der Punkt dann 
//gegeben
function counter() {
    if (currentPlayer === player1) {
        player1counter++;
        document.getElementById("zaehler1").innerHTML = player1counter + " WIN";
    } else if (currentPlayer === player2) {
        player2counter++;
        document.getElementById("zaehler2").innerHTML = player2counter + " WIN";
    }
}

function checkForWin() {
    wincheckhorizontalvertical();
    wincheckquer();

}

function wincheckhorizontalvertical() {
    let symbolzahl = document.getElementById("winsize").value;
    console.log(symbolzahl);
    /*"horizontal" und "vertikal" werden mit "X" und "O" befüllt.
       Daraufhin wird überprüft ob die anzahl m (Symbolanzahl) übereinstimmt und dann gibt es ein Gewinner*/
    let horizontal = "";
    let vertikal = "";
    let victoryOne = "O".repeat(symbolzahl);
    let victoryTwo = "X".repeat(symbolzahl);
    for (let i = 0; i < Spielfeldgröße; i++) {
        horizontal = "";
        vertikal = "";
        for (let t = 0; t < Spielfeldgröße; t++) {
            horizontal += spielfeldstatus[i][t];
            vertikal += spielfeldstatus[t][i];
        }
        if (horizontal.includes(victoryOne) || vertikal.includes(victoryOne)) {
            gewinnanzeige();
            neustart();
            close();
            buttonaktivieren();
            counter();

        } else if (horizontal.includes(victoryTwo) || vertikal.includes(victoryTwo)) {
            gewinnanzeige();
            neustart();
            close();
            buttonaktivieren();
            counter();
        }
    }
}

function wincheckquer() {
    let symbolzahl = document.getElementById("winsize").value;
    let victoryOne = "O".repeat(symbolzahl);
    let victoryTwo = "X".repeat(symbolzahl);
    let diagonalEins = "";
    let diagonalZwei = "";
    for (let i = 0; i < Spielfeldgröße; i++) {
        for (let h = 0; h < Spielfeldgröße; h++) {
            diagonalEins = "";
            diagonalZwei = "";
            if (i + (symbolzahl - 1) < Spielfeldgröße) {
                if (h + (symbolzahl - 1) < Spielfeldgröße) {
                    for (let m = 0; m < symbolzahl; m++) {
                        diagonalEins += spielfeldstatus[i + m][h + m];
                    }
                    if (diagonalEins.includes(victoryOne)) {
                        gewinnanzeige();
                        neustart();
                        close();
                        buttonaktivieren();
                        counter();


                    } else if (diagonalEins.includes(victoryTwo)) {
                        gewinnanzeige();
                        neustart();
                        close();
                        buttonaktivieren();
                        counter();
                    }
                }
            }
            if (h - (symbolzahl - 1) >= 0) {
                if (i + (symbolzahl - 1) < Spielfeldgröße) {
                    for (let m = 0; m < symbolzahl; m++) {
                        diagonalZwei += spielfeldstatus[i + m][h - m];
                    }
                    if (diagonalZwei.includes(victoryOne)) {
                        gewinnanzeige();
                        neustart();
                        close();
                        buttonaktivieren();
                        counter();

                    } else if (diagonalZwei.includes(victoryTwo)) {
                        gewinnanzeige();
                        neustart();
                        close();
                        buttonaktivieren();
                        counter();
                    }
                }
            }
        }
    }
}
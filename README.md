# TicTacToe
Semesteraufgabe - TicTacToe

# Tic - Tac - Toe
Das Spiel ist Tic - Tac - Toe, man kann gegen einen Freund spielen. Es läuft über den Browser, besitzt einen Runden Counter sowie auch einem Win Counte.

## Usage / Benutzung

Sobald das Dokument heruntergeladen wurde, muss man lediglich die tictactoe1.html datei öffnen. Dieser wird sich in einem Browser öffnen.<br>
Man erhält die Anweisungen via Pop-Up. Weiterhin wird angezeigt, wer gerade am Zug ist. <br>
1. Spielernamen eingeben und via "Spielernamen bestätigen" Button bestätigen
2. Anzahl der Symbole eingeben, wann man gewinnen soll
2. Feldgröße n x n bestimmen durch den Input Feld und via erstellen button das Spielfeld generieren
3. Zum spielen bitte abwechselnd die Felder anklicken<br>
4. Sobald jemand gewonnen (Wenn Spielfeld 3x3 ist - benötigt man 3 Symbole in gleicher Reihenfolge) hat, kann man entweder über das Button "Neue Runde starten" eine neue Runde starten oder via "NEUES SPIEL STARTEN" button ein komplett neues Spiel starten. Hier setzen sich der Win und Rundencounter zurück

## Structure / Aufbau


* buttonaktiviere.(): aktiviert den Button für ein Neues Spiel unten im Bereich
* active(): aktiviert den Button "Spielfeld erstellen" sobald die Spielernamen bestätigt wurden
* Spielfeldgröße: wird am anfang vom Spiel angegeben
* changepplayername(): Ändert ausgaben in HTML, gibt ein PopUp aus und deaktiviert die input Felder von namen
* changetext(): wechselt den Text wer aktuell am Zug ist
* rundenzaehler(): zählt round (Rundenzähler) hoch
* gewinnanzeige(): Gibt aus wer gewonnen hat
* neustart(): wechselt den Buttontext in "Neue Runde starten"
* close(): schließt die td's damit man nicht weiter Spielen kann
* changeplayer(); fragt ab ob der currentPlayer gerade player1 ist, wenn nicht ist der player2 der currentPlayer
* counter(): die Funktion zählt den Win Counter hoch je nachdem wer gewonnen hat mit der If & else funktion


#```generate()``` Diese funktion wird bei onclick auf der HTML verwendet. In generate wird ein counter sowie newId als 0 gesetzt. Dann entnimmt die funktion die Spielfeldgröße mit geElementsById("groeße") die Zahl welches wiederum bei i verwendet wird. Sobald die Tabelle erstellt wird, werden ID's vergeben.

#```$("table").on("click", "td", function()``` Sobald man in die Tabelle klickt, werden die aktionen ausgeführt wie die ID - splitten, status[x][y] vom currentPlayer auslesen und die Funktionen ausgeführt wie  ```changetext()```, ```checkForWin(x,y,currentplayer)``` und ```changeplayer()```. 

#```checkForWin()``` in checkForWin werden die winCheck Funktionen ausgeführt. 

#```wincheckhorizontalvertical()``` Die funktion erhält den letzten Punkt und geht von hier aus auf die Suche - dabei sollen eben die Anzahl der m (Symbole) übereinstimmen. Wenn also m gleich drei ist, und X also das gleiche Zeichen so oft gefunden wird gibt es einen gewinner. Dabei wird die Zeile nach Anzahl vom Spielfeld gesucht - und dementsprechend funktioniert auch die senkrechte Spalte. Nur das hier entweder hoch oder runter kontrolliert wird. Dazu nutzt die funktion mein Array Status, da dort die Symbole eingetragen werden. Falls jemand gewinnt, werden die funktionen wie ```gewinnanzeige()```, ```neustart()```, ```close()```, ```buttonaktivieren()``` & ```counter()``` ausgeführt da diese erst nach einem Win ausgeführt werden sollen. 

#```wincheckquer()``` In der Funktion werden die Diagonalen überprüft - über den Status erhält es wieder die Koordinaten und vergleicht es mit dem M (anforderung von der Anzahl der Symbole). M wird vom Input in der HTML Datei bezogen wie beim wincheckhorizontalvertical(). Falls jemand gewinnt, werden die funktionen wie ```gewinnanzeige()```, ```neustart()```, ```close()```, ```buttonaktivieren()``` & ```counter()``` ausgeführt da diese erst nach einem Win ausgeführt werden sollen. 
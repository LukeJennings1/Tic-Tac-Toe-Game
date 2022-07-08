const containerDiv = document.getElementById('containerDiv');
const resetButton = document.getElementById('resetButton');
const nameResetButton2 = document.getElementById('resetButton2');
const scoreResetButton3 = document.getElementById('resetButton3');
const submitButton = document.getElementById('submitButton');
const p1WinnerBanner = document.getElementById('p1WinnerBanner');
const p2WinnerBanner = document.getElementById('p2WinnerBanner');
const p1score = document.getElementById('p1score');
const p2score = document.getElementById('p2score');
const player1Name = document.getElementById('player1Name');
const player2Name = document.getElementById('player2Name');
const winner = document.getElementById('winner');
const child1 = document.getElementById('class1');
const child2 = document.getElementById('class2');
const child3 = document.getElementById('class3');
const child4 = document.getElementById('class4');
const child5 = document.getElementById('class5');
const child6 = document.getElementById('class6');
const child7 = document.getElementById('class7');
const child8 = document.getElementById('class8');
const child9 = document.getElementById('class9');
const button = submitButton.addEventListener('click', () => submit());
resetButton.addEventListener('click', () => {resetGameBoard()});
nameResetButton2.addEventListener('click', () => {p1WinnerBanner.innerHTML = '', p2WinnerBanner.innerHTML = ''});
scoreResetButton3.addEventListener('click', () => {player1Score = 0, player2Score = 0, p1score.innerHTML = 0, p2score.innerHTML = 0});

let player1turn = true; // if true then it is player 1s turn

function submit(){
    p1WinnerBanner.textContent += 'Player X : ' + player1Name.value; //.value takes the text from the text box
    p1score.textContent += player1Score;
    p2WinnerBanner.textContent += 'Player O : ' + player2Name.value;
    p2score.textContent += player2Score;
};
function resetGameBoard() {
    gameboard.board = [],
    child1.innerHTML = '';
    child2.innerHTML = '';             // this resets each grid div and the game array essentailly 
    child3.innerHTML = '';           // resetting the game.
    child4.innerHTML = '';
    child5.innerHTML = '';
    child6.innerHTML = '';
    child7.innerHTML = '';
    child8.innerHTML = '';
    child9.innerHTML = ''; 
    
};
const gameboard = {
    board:[]
    };
/* notes - need to finish wiring up the score/winner , ADD ROUNDS BO3  */

let player1Score = 0;
let player2Score = 0;

function Score(){ // need to add the logic to display the winner on the screen 
    if (player1Score === 3) {
        return winner.innerHTML = 'Player 1 Wins the game!', player1Score = 0, player2Score = 0 , p1score.innerHTML = '', p2score.innerHTML = '', p1score.textContent += player1Score, p2score.textContent += player1Score;
    } else if (player2Score === 3) {
        return winner.innerHTML = 'Player 2 Wins the game!',  player1Score = 0, player2Score = 0 , p1score.innerHTML = '', p2score.innerHTML = '', p1score.textContent += player1Score, p2score.textContent += player1Score;
    }
}
/* the below code is the gamelogic that detects a line (IE a winner) */
function gameLogicX(){
    if (child1.innerHTML=== 'X' && child2.innerHTML=== 'X' && child3.innerHTML === 'X' || child4.innerHTML=== 'X' && child5.innerHTML=== 'X' && child6.innerHTML === 'X' || child7.innerHTML === 'X' && child8.innerHTML === 'X' && child9.innerHTML === 'X'){ 
    return winner.textContent += 'Player 1 Wins!', player1Score++, Score(),p1score.innerHTML = '',p1score.textContent += player1Score, resetGameBoard()}
    else if (child1.innerHTML=== 'X' && child4.innerHTML=== 'X' && child7.innerHTML === 'X' || child2.innerHTML === 'X'&& child5.innerHTML=== 'X' && child8.innerHTML === 'X' || child3.innerHTML=== 'X' && child6.innerHTML=== 'X' && child9.innerHTML === 'X'){
    return winner.textContent += 'Player 1 Wins!', player1Score++, Score(),p1score.innerHTML = '',p1score.textContent += player1Score, resetGameBoard();}
    else if (child3.innerHTML=== 'X' && child5.innerHTML=== 'X' && child7.innerHTML === 'X' || child1.innerHTML=== 'X' && child5.innerHTML=== 'X' && child9.innerHTML === 'X'){
    return winner.textContent += 'Player 1 Wins!', player1Score++, Score(),p1score.innerHTML = '',p1score.textContent += player1Score, resetGameBoard();}
}; // we must add something to the logic to allow a score to be displayed 
function gameLogicO(){
    if (child1.innerHTML === 'O' && child2.innerHTML === 'O' && child3.innerHTML === 'O' || child4.innerHTML === 'O' && child5.innerHTML === 'O' && child6.innerHTML === 'O' || child7.innerHTML === 'O' && child8.innerHTML === 'O' && child9.innerHTML === 'O'){ 
    return winner.textContent += 'Player 2 Wins!', player2Score++,Score(), p2score.innerHTML = '',p2score.textContent += player2Score, resetGameBoard();}
    else if (child1.innerHTML === 'O' && child4.innerHTML === 'O' && child7.innerHTML === 'O' || child2.innerHTML === 'O' && child5.innerHTML === 'O' && child8.innerHTML === 'O' || child3.innerHTML === 'O' && child6.innerHTML === 'O' && child9.innerHTML === 'O'){
    return winner.textContent += 'Player 2 Wins!', player2Score++,Score(), p2score.innerHTML = '',p2score.textContent += player2Score, resetGameBoard();}
    else if (child3.innerHTML === 'O' && child5.innerHTML === 'O' && child7.innerHTML === 'O' || child1.innerHTML === 'O' && child5.innerHTML === 'O' && child9.innerHTML === 'O'){
    return winner.textContent += 'Player 2 Wins!', player2Score++,Score(), p2score.innerHTML = '',p2score.textContent += player2Score, resetGameBoard();}
};
// the below event listeners take the input and produce an X or O depending on the boolean statement
// if the player1turn boolean === true that means that it is player 1s turn. 

child1.addEventListener('click', () => { 
    if (player1turn === true && child1.textContent === '') { // the second part of the if statement determins
    return  gameboard.board.push('X'),
    child1.textContent += 'X',
    winner.innerHTML = '',                                                   
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child1.textContent === '') {
        return gameboard.board.push('O'), 
        child1.textContent += 'O',  
        winner.innerHTML = '',
        player1turn = true,
        gameLogicO();}
 });
child2.addEventListener('click', () => { 
    if (player1turn === true && child2.textContent === '') {
    return gameboard.board.push('X'),
    child2.textContent += 'X',
    winner.innerHTML = '',
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child2.textContent === '') {
        return gameboard.board.push('O'),
        child2.textContent += 'O', 
        winner.innerHTML = '',
        player1turn = true,
        gameLogicO();}
 });
 child3.addEventListener('click', () => { 
    if (player1turn === true && child3.textContent === '') {
    return gameboard.board.push('X'),
    child3.textContent += 'X', 
    winner.innerHTML = '',
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child3.textContent === '') {
        return gameboard.board.push('O'),
        child3.textContent += 'O', 
        winner.innerHTML = '',
        player1turn = true,
        gameLogicO();}
 });
 child4.addEventListener('click', () => { 
    if (player1turn === true && child4.textContent === '') {
    return gameboard.board.push('X'),
    child4.textContent += 'X', 
    winner.innerHTML = '',
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child4.textContent === '') {
        return gameboard.board.push('O'),
        child4.textContent += 'O',
        winner.innerHTML = '', 
        player1turn = true,
        gameLogicO();}
 });
 child5.addEventListener('click', () => { 
    if (player1turn === true && child5.textContent === '') {
    return gameboard.board.push('X'),
    child5.textContent += 'X', 
    winner.innerHTML = '',
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child5.textContent === '') {
        return gameboard.board.push('O'),
        child5.textContent += 'O', 
        winner.innerHTML = '',
        player1turn = true,
        gameLogicO();}
 });
 child6.addEventListener('click', () => { 
    if (player1turn === true && child6.textContent === '') {
    return gameboard.board.push('X'),
    child6.textContent += 'X', 
    winner.innerHTML = '',
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child6.textContent === '') {
        return gameboard.board.push('O'),
        child6.textContent += 'O', 
        winner.innerHTML = '',
        player1turn = true,
        gameLogicO();}
 });
 child7.addEventListener('click', () => { 
    if (player1turn === true && child7.textContent === '') {
    return gameboard.board.push('X'),
    child7.textContent += 'X', 
    winner.innerHTML = '',
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child7.textContent === '') {
        return gameboard.board.push('O'),
        child7.textContent += 'O', 
        winner.innerHTML = '',
        player1turn = true,
        gameLogicO();}
 });
 child8.addEventListener('click', () => { 
    if (player1turn === true && child8.textContent === '') {
    return gameboard.board.push('X'),
    child8.textContent += 'X', 
    winner.innerHTML = '',
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child8.textContent === '') {
        return gameboard.board.push('O'),
        child8.textContent += 'O',
        winner.innerHTML = '', 
        player1turn = true,
        gameLogicO();}
 });
 child9.addEventListener('click', () => { 
    if (player1turn === true && child9.textContent === '') {
    return gameboard.board.push('X'),
    child9.textContent += 'X', 
    winner.innerHTML = '',
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child9.textContent === '') {
        return gameboard.board.push('O'),
        child9.textContent += 'O',
        winner.innerHTML = '', 
        player1turn = true,
        gameLogicO();}
 });

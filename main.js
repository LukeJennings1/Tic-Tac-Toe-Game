const containerDiv = document.getElementById('containerDiv');
const resetButton = document.getElementById('resetButton');
const child1 = document.getElementById('class1');
const child2 = document.getElementById('class2');
const child3 = document.getElementById('class3');
const child4 = document.getElementById('class4');
const child5 = document.getElementById('class5');
const child6 = document.getElementById('class6');
const child7 = document.getElementById('class7');
const child8 = document.getElementById('class8');
const child9 = document.getElementById('class9');
let player1turn = true; // if true then it is player 1s turn

resetButton.addEventListener('click', () => {gameboard.board = [],
    child1.innerHTML = '';
    child2.innerHTML = '';             // this resets each grid div and the game array essentailly 
    child3.innerHTML = '';           // resetting the game.
    child4.innerHTML = '';
    child5.innerHTML = '';
    child6.innerHTML = '';
    child7.innerHTML = '';
    child8.innerHTML = '';
    child9.innerHTML = '';   
});
const gameboard = {
    board:[]
    };
const players =  (name1, name2) => {
    let player1 = name1;
    let player2 = name2;
    return {player1, player2}
};
const test = players('dave','jub'); // assign this to a display so that each player can put in thier name

/* notes - ADD ROUNDS BO3  */

/* the below code is the gamelogic that detects a line (IE a winner) */
let player1Score = 0;
let player2Score = 0;

function Score(){ // need to add the logic to display the winner on the screen 
    if (player1Score === 3) {
        return console.log('Player1 WINS');  
    } else if (player2Score === 3) {
        return console.log('Player2 WINS'); 
    }
}

function gameLogicX(){
    if (child1.innerHTML=== 'X' && child2.innerHTML=== 'X' && child3.innerHTML === 'X' || child4.innerHTML=== 'X' && child5.innerHTML=== 'X' && child6.innerHTML === 'X' || child7.innerHTML === 'X' && child8.innerHTML === 'X' && child9.innerHTML === 'X'){ 
    return console.log('WINNER'), player1Score++, Score();}
    else if (child1.innerHTML=== 'X' && child4.innerHTML=== 'X' && child7.innerHTML === 'X' || child2.innerHTML === 'X'&& child5.innerHTML=== 'X' && child8.innerHTML === 'X' || child3.innerHTML=== 'X' && child6.innerHTML=== 'X' && child9.innerHTML === 'X'){
    return console.log('VINNER1'), player1Score++,Score();}
    else if (child3.innerHTML=== 'X' && child5.innerHTML=== 'X' && child7.innerHTML === 'X' || child1.innerHTML=== 'X' && child5.innerHTML=== 'X' && child9.innerHTML === 'X'){
    return console.log('YAY'), player1Score++,Score();}
}; // we must add something to the logic to allow a score to be displayed 
function gameLogicO(){
    if (child1.innerHTML === 'O' && child2.innerHTML === 'O' && child3.innerHTML === 'O' || child4.innerHTML === 'O' && child5.innerHTML === 'O' && child6.innerHTML === 'O' || child7.innerHTML === 'O' && child8.innerHTML === 'O' && child9.innerHTML === 'O'){ 
    return console.log('WINNER2'), player2Score++,Score();}
    else if (child1.innerHTML === 'O' && child4.innerHTML === 'O' && child7.innerHTML === 'O' || child2.innerHTML === 'O' && child5.innerHTML === 'O' && child8.innerHTML === 'O' || child3.innerHTML === 'O' && child6.innerHTML === 'O' && child9.innerHTML === 'O'){
    return console.log('VINNER2'), player2Score++,Score();}
    else if (child3.innerHTML === 'O' && child5.innerHTML === 'O' && child7.innerHTML === 'O' || child1.innerHTML === 'O' && child5.innerHTML === 'O' && child9.innerHTML === 'O'){
    return console.log('YAY2'), player2Score++,Score();}
};


// the below event listeners take the input and produce an X or O depending on the boolean statement
// if the player1turn boolean === true that means that it is player 1s turn. 

child1.addEventListener('click', () => { 
    if (player1turn === true && child1.textContent === '') { // the second part of the if statement determins
    return  gameboard.board.push('X'),
    child1.textContent += 'X',                                                   
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child1.textContent === '') {
        return gameboard.board.push('O'),
        child1.textContent += 'O',  
        player1turn = true,
        gameLogicO();}
 });
child2.addEventListener('click', () => { 
    if (player1turn === true && child2.textContent === '') {
    return gameboard.board.push('X'),
    child2.textContent += 'X',
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child2.textContent === '') {
        return gameboard.board.push('O'),
        child2.textContent += 'O', 
        player1turn = true,
        gameLogicO();}
 });
 child3.addEventListener('click', () => { 
    if (player1turn === true && child3.textContent === '') {
    return gameboard.board.push('X'),
    child3.textContent += 'X', 
    
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child3.textContent === '') {
        return gameboard.board.push('O'),
        child3.textContent += 'O', 
        player1turn = true,
        gameLogicO();}
 });
 child4.addEventListener('click', () => { 
    if (player1turn === true && child4.textContent === '') {
    return gameboard.board.push('X'),
    child4.textContent += 'X', 
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child4.textContent === '') {
        return gameboard.board.push('O'),
        child4.textContent += 'O', 
        player1turn = true,
        gameLogicO();}
 });
 child5.addEventListener('click', () => { 
    if (player1turn === true && child5.textContent === '') {
    return gameboard.board.push('X'),
    child5.textContent += 'X', 
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child5.textContent === '') {
        return gameboard.board.push('O'),
        child5.textContent += 'O', 
        player1turn = true,
        gameLogicO();}
 });
 child6.addEventListener('click', () => { 
    if (player1turn === true && child6.textContent === '') {
    return gameboard.board.push('X'),
    child6.textContent += 'X', 
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child6.textContent === '') {
        return gameboard.board.push('O'),
        child6.textContent += 'O', 
        player1turn = true,
        gameLogicO();}
 });
 child7.addEventListener('click', () => { 
    if (player1turn === true && child7.textContent === '') {
    return gameboard.board.push('X'),
    child7.textContent += 'X', 
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child7.textContent === '') {
        return gameboard.board.push('O'),
        child7.textContent += 'O', 
        player1turn = true,
        gameLogicO();}
 });
 child8.addEventListener('click', () => { 
    if (player1turn === true && child8.textContent === '') {
    return gameboard.board.push('X'),
    child8.textContent += 'X', 
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child8.textContent === '') {
        return gameboard.board.push('O'),
        child8.textContent += 'O', 
        player1turn = true,
        gameLogicO();}
 });
 child9.addEventListener('click', () => { 
    if (player1turn === true && child9.textContent === '') {
    return gameboard.board.push('X'),
    child9.textContent += 'X', 
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child9.textContent === '') {
        return gameboard.board.push('O'),
        child9.textContent += 'O', 
        player1turn = true,
        gameLogicO();}
 });

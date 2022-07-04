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
    child1.innerHTML = ''
    child2.innerHTML = ''              // this resets each grid div and the game array essentailly 
    child3.innerHTML = ''             // resetting the game.
    child4.innerHTML = ''
    child5.innerHTML = ''
    child6.innerHTML = ''
    child7.innerHTML = ''
    child8.innerHTML = ''
    child9.innerHTML = ''    
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

/* notes - I think we can add all possible win conditions via a function
for example, there are 3 rows and 3 columns so 6 total possible straight line win cons 
and two diagonal ones */

function gameLogicX(){
    if (child1.innerHTML=== 'X' && child2.innerHTML=== 'X' && child3.innerHTML === 'X' || child4.innerHTM=== 'X' && child5.innerHTML=== 'X' && child6.innerHTML === 'X' || child7.innerHTML === 'X' && child8.innerHTML === 'X' && child9.innerHTML === 'X'){ 
    return console.log('WINNER');}
    else if (child1.innerHTML=== 'X' && child4.innerHTML=== 'X' && child7.innerHTML === 'X' || child2.innerHTML === 'X'&& child5.innerHTML=== 'X' && child8.innerHTML === 'X' || child3.innerHTML=== 'X' && child6.innerHTML=== 'X' && child9.innerHTML === 'X'){
    return console.log('VINNER1');}
    else if (child3.innerHTML=== 'X' && child5.innerHTML=== 'X' && child7.innerHTML === 'X' || child1.innerHTML=== 'X' && child5.innerHTML=== 'X' && child9.innerHTML === 'X'){
    return console.log('YAY');}
};
function gameLogicO(){
    if (child1.innerHTML === 'O' && child2.innerHTML === 'O' && child3.innerHTML === 'O' || child4.innerHTML === 'O' && child5.innerHTML === 'O' && child6.innerHTML === 'O' || child7.innerHTML === 'O' && child8.innerHTML === 'O' && child9.innerHTML === 'O'){ 
    return console.log('WINNER2');}
    else if (child1.innerHTML === 'O' && child4.innerHTML === 'O' && child7.innerHTML === 'O' || child2.innerHTML === 'O' && child5.innerHTML === 'O' && child8.innerHTML === 'O' || child3.innerHTML === 'O' && child6.innerHTML === 'O' && child9.innerHTML === 'O'){
    return console.log('VINNER2');}
    else if (child3.innerHTML === 'O' && child5.innerHTML === 'O' && child7.innerHTML === 'O' || child1.innerHTML === 'O' && child5.innerHTML === 'O' && child9.innerHTML === 'O'){
    return console.log('YAY2');}
};


// the below event listeners take the input and produce an X or O depending on the boolean statement
// if the player1turn boolean === true that means that it is player 1s turn. 

child1.addEventListener('click', () => { 
    if (player1turn === true && child1.textContent === '') { // the second part of the if statement determins
    return  gameboard.board.push('X'),
    child1.textContent += 'X',                         
    console.log(gameboard.board),                          
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
    console.log(gameboard.board), 
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child2.textContent === '') {
        return gameboard.board.push('O'),
        child2.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true,
        gameLogicO();}
 });
 child3.addEventListener('click', () => { 
    if (player1turn === true && child3.textContent === '') {
    return gameboard.board.push('X'),
    child3.textContent += 'X', 
    console.log(gameboard.board), 
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child3.textContent === '') {
        return gameboard.board.push('O'),
        child3.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true,
        gameLogicO();}
 });
 child4.addEventListener('click', () => { 
    if (player1turn === true && child4.textContent === '') {
    return gameboard.board.push('X'),
    child4.textContent += 'X', 
    console.log(gameboard.board), 
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child4.textContent === '') {
        return gameboard.board.push('O'),
        child4.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true,
        gameLogicO();}
 });
 child5.addEventListener('click', () => { 
    if (player1turn === true && child5.textContent === '') {
    return gameboard.board.push('X'),
    child5.textContent += 'X', 
    console.log(gameboard.board), 
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child5.textContent === '') {
        return gameboard.board.push('O'),
        child5.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true,
        gameLogicO();}
 });
 child6.addEventListener('click', () => { 
    if (player1turn === true && child6.textContent === '') {
    return gameboard.board.push('X'),
    child6.textContent += 'X', 
    console.log(gameboard.board), 
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child6.textContent === '') {
        return gameboard.board.push('O'),
        child6.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true,
        gameLogicO();}
 });
 child7.addEventListener('click', () => { 
    if (player1turn === true && child7.textContent === '') {
    return gameboard.board.push('X'),
    child7.textContent += 'X', 
    console.log(gameboard.board), 
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child7.textContent === '') {
        return gameboard.board.push('O'),
        child7.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true,
        gameLogicO();}
 });
 child8.addEventListener('click', () => { 
    if (player1turn === true && child8.textContent === '') {
    return gameboard.board.push('X'),
    child8.textContent += 'X', 
    console.log(gameboard.board), 
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child8.textContent === '') {
        return gameboard.board.push('O'),
        child8.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true,
        gameLogicO();}
 });
 child9.addEventListener('click', () => { 
    if (player1turn === true && child9.textContent === '') {
    return gameboard.board.push('X'),
    child9.textContent += 'X', 
    console.log(gameboard.board), 
    player1turn = false,
    gameLogicX();}
    else if (player1turn === false && child9.textContent === '') {
        return gameboard.board.push('O'),
        child9.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true,
        gameLogicO();}
 });


 function create(){ // this function assigns each grid square an array elemenet. (might not need this) 
const gameboardObject = gameboard.board
gameboardObject[0] = child1.textContent  // adds the first gameboard array element to the created div child element. 
child2.textContent = gameboardObject[1] 
child3.textContent = gameboardObject[2] 
child4.textContent = gameboardObject[3] 
child5.textContent = gameboardObject[4] 
child6.textContent = gameboardObject[5] 
child7.textContent = gameboardObject[6] 
child8.textContent = gameboardObject[7] 
child9.textContent = gameboardObject[8] 
 
}

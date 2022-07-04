const containerDiv = document.getElementById('containerDiv')
const child1 = document.getElementById('class1')
const child2 = document.getElementById('class2')
const child3 = document.getElementById('class3')
const child4 = document.getElementById('class4')
const child5 = document.getElementById('class5')
const child6 = document.getElementById('class6')
const child7 = document.getElementById('class7')
const child8 = document.getElementById('class8')
const child9 = document.getElementById('class9')
let player1turn = true; // if true then it is player 1s turn

const gameboard = {
    board:[]
    };
    
    



// // child2.addEventListener('click', () => { gameboard.board.push('X'), child2.textContent += gameboard.board[1], console.log(gameboard.board); });
// // child3.addEventListener('click', () => { child3.textContent = 'X'; });
// // child4.addEventListener('click', () => { child4.textContent = 'X'; });
// // child5.addEventListener('click', () => { child5.textContent = 'X'; });
// // child6.addEventListener('click', () => { child6.textContent = 'X'; });
// // child7.addEventListener('click', () => { child7.textContent = 'X'; });
// // child8.addEventListener('click', () => { child8.textContent = 'X'; });
// // child9.addEventListener('click', () => { child9.textContent = 'X'; });

// };
// gameplay();





function create(){ // this function assigns each grid square an array elemenet. (might not need this) 
const gameboardObject = gameboard.board
child1.textContent = gameboardObject[0] // adds the first gameboard array element to the created div child element. 
child2.textContent = gameboardObject[1] 
child3.textContent = gameboardObject[2] 
child4.textContent = gameboardObject[3] 
child5.textContent = gameboardObject[4] 
child6.textContent = gameboardObject[5] 
child7.textContent = gameboardObject[6] 
child8.textContent = gameboardObject[7] 
child9.textContent = gameboardObject[8] 
}
create()






const players =  (name1, name2) => {
    let player1 = name1;
    let player2 = name2;
    
    return {player1, player2}
};
const test = players('dave','jub');

/* we must display the gamebaord array as the cross box
 - The player must be able to click an invisable button on the grid that will allow for the 
 x or o to be displayed (addEventListner 'click' for this to reveal the x I guess)
Make a grid using CSS grid 

HOW TO MAKE THE CLICK EVENT TAKE TURNS SO X INPUT THEN O INPUT:
I think we can make it so that an if statement takes the last input to the array and then changes
the input logic depending. So if the last input was X then it will input O etc. 

*/




// function create(){
// //     const gameboardObject = gameboard.board
// //     const div = document.createElement('div');
// //     containerDiv.appendChild(div)
// //     div.classList.add('div1')
//     div.textContent = gameboardObject // adds the gameboard array to the created div element. 
// }
// create()

// the below event listeners take the input and produce an X or O depending on the boolean statement
// if the player1turn boolean === true that means that it is player 1s turn. 

child1.addEventListener('click', () => { 
    if (player1turn === true) {
    return gameboard.board.push('X'),
    child1.textContent += 'X', 
    console.log(gameboard.board), 
    player1turn = false,console.log(player1turn);}
    else if (player1turn === false) {
        return gameboard.board.push('O'),
        child1.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true;}
 });
child2.addEventListener('click', () => { 
    if (player1turn === true) {
    return gameboard.board.push('X'),
    child2.textContent += 'X', 
    console.log(gameboard.board), 
    player1turn = false,
    console.log(player1turn);}
    else if (player1turn === false) {
        return gameboard.board.push('O'),
        child2.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true,console.log(player1turn);}
 });
 child3.addEventListener('click', () => { 
    if (player1turn === true) {
    return gameboard.board.push('X'),
    child3.textContent += 'X', 
    console.log(gameboard.board), 
    player1turn = false,
    console.log(player1turn);}
    else if (player1turn === false) {
        return gameboard.board.push('O'),
        child3.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true,console.log(player1turn);}
 });
 child4.addEventListener('click', () => { 
    if (player1turn === true) {
    return gameboard.board.push('X'),
    child4.textContent += 'X', 
    console.log(gameboard.board), 
    player1turn = false,
    console.log(player1turn);}
    else if (player1turn === false) {
        return gameboard.board.push('O'),
        child4.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true,console.log(player1turn);}
 });
 child5.addEventListener('click', () => { 
    if (player1turn === true) {
    return gameboard.board.push('X'),
    child5.textContent += 'X', 
    console.log(gameboard.board), 
    player1turn = false,
    console.log(player1turn);}
    else if (player1turn === false) {
        return gameboard.board.push('O'),
        child5.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true,console.log(player1turn);}
 });
 child6.addEventListener('click', () => { 
    if (player1turn === true) {
    return gameboard.board.push('X'),
    child6.textContent += 'X', 
    console.log(gameboard.board), 
    player1turn = false,
    console.log(player1turn);}
    else if (player1turn === false) {
        return gameboard.board.push('O'),
        child6.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true,console.log(player1turn);}
 });
 child7.addEventListener('click', () => { 
    if (player1turn === true) {
    return gameboard.board.push('X'),
    child7.textContent += 'X', 
    console.log(gameboard.board), 
    player1turn = false,
    console.log(player1turn);}
    else if (player1turn === false) {
        return gameboard.board.push('O'),
        child7.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true,console.log(player1turn);}
 });
 child8.addEventListener('click', () => { 
    if (player1turn === true) {
    return gameboard.board.push('X'),
    child8.textContent += 'X', 
    console.log(gameboard.board), 
    player1turn = false,
    console.log(player1turn);}
    else if (player1turn === false) {
        return gameboard.board.push('O'),
        child8.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true,console.log(player1turn);}
 });
 child9.addEventListener('click', () => { 
    if (player1turn === true) {
    return gameboard.board.push('X'),
    child9.textContent += 'X', 
    console.log(gameboard.board), 
    player1turn = false,
    console.log(player1turn);}
    else if (player1turn === false) {
        return gameboard.board.push('O'),
        child9.textContent += 'O', 
        console.log(gameboard.board), 
        player1turn = true,console.log(player1turn);}
 });
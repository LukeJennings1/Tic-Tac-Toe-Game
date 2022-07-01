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
child1.addEventListener('click', () => { child1.style.backgroundColor = 'red',
gameboard.board.push('x')}); // adds x to the gameboard Array when clicked and highlights the box red
child2.addEventListener('click', () => { child2.style.backgroundColor = 'red'; });
child3.addEventListener('click', () => { child3.style.backgroundColor = 'red'; });
child4.addEventListener('click', () => { child4.style.backgroundColor = 'red'; });
child5.addEventListener('click', () => { child5.style.backgroundColor = 'red'; });
child6.addEventListener('click', () => { child6.style.backgroundColor = 'red'; });
child7.addEventListener('click', () => { child7.style.backgroundColor = 'red'; });
child8.addEventListener('click', () => { child8.style.backgroundColor = 'red'; });
child9.addEventListener('click', () => { child9.style.backgroundColor = 'red'; });



const gameboard = {
     board:[]
     };

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

make a function that turns each grid square a different color when clicked on. 



GAme logic - maybe we can make it so that the input 

*/




// function create(){
// //     const gameboardObject = gameboard.board
// //     const div = document.createElement('div');
// //     containerDiv.appendChild(div)
// //     div.classList.add('div1')
//     div.textContent = gameboardObject // adds the gameboard array to the created div element. 
// }
// create()
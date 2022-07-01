const containerDiv = document.getElementById('containerDiv')

const gameboard = {
     board:['x','o','x','o','x','o']
     };

function create(){
    const gameboardObject = gameboard.board
    const div = document.createElement('div');
    containerDiv.appendChild(div)
    div.textContent = gameboardObject // adds the gameboard array to the created div element. 
}
create()



const players =  (name1, name2) => {
    let player1 = name1;
    let player2 = name2;
    
    return {player1, player2}
};
const test = players('dave','jub');


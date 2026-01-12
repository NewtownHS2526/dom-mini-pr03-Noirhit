console.log("Script Running");

const changePosition = (scooter, position) => {
    if (position <= 5){
        scooter.style.setProperty('grid-column', position);
    };

};

const shift = (sprite, col) => (col <= 7 ? sprite.style.setProperty("grid-column", col) : null);

let pepperoni_step = 1;
let veggie_step = 1;
let bbq_step = 1;



// Query selectors for all buttons and scooters go here

const pepperoniButton = document.querySelector('#pepperoni-button');
const veggie_stepButton = document.querySelector('#veggie-button');
const bbq_stepButton = document.querySelector('#bbq-button');
const pepperoniScotter = document.querySelector('#pepperoni-scooter');
const veggieScotter = document.querySelector('#veggie-scooter');;
const bbqScotter = document.querySelector('#bbq-scooter');
const winnerButton = document.querySelector('#winner');


// Write the function that moves the pepperoni scooter forward

const pepperoni_move = () =>{
    pepperoni_step += 1;
    changePosition(pepperoniScotter, pepperoni_step);
    checkWinner(pepperoni_step, "pepperoni");
};



// Increase the pepperoni position
// Call the helper function to update the scooter position
// Call the winner check function





const handle_winner = (food) =>{
    winnerButton.textContent = `${food} wins the race`;

    pepperoniButton.disabled = true;
    veggie_stepButton.disabled = true;
    bbq_stepButton.disabled = true;
    
};




// Write the function that moves the veggie scooter forward
const veggie_move = () =>{
    pepperoni_step += 1;
    changePosition(veggieScotter, veggie_step);
    checkWinner(veggie_step, "veggie");
};


// Write the function that moves the bbq scooter forward

const bbq_move = () =>{
    pepperoni_step += 1;
    changePosition(bbqScotter, bbq_step);
    checkWinner(bbq_step, "bbq");
};

// Write a function that checks if a scooter reached column 7
// If so, display the winner message
// Disable all buttons when a winner is found

const checkWinner = (position, food) =>{
    if (position >= 7){
        handle_winner(food);
    };
};

// Add event listeners for each button
// Each button should trigger its own movement function
pepperoniButton.addEventListener("click", pepperoni_move);
veggie_stepButton.addEventListener("click", veggie_move);
bbq_stepButton.addEventListener("click", bbq_move);

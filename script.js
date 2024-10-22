console.log("script running");

//  variable to savethe shopping list total (in cents)
let totalInCents = 0;

// creating a variable, setting it equal to the id=apple
//  part 1, the who
const appleButton = document.querySelector("#apple");
const shoppingList = document.querySelector("#shopping-cart");

console.log(appleButton);

// part 2, the what
const addApple = () => {
 shoppingList.innerHTML += '<p>Apple<p>';
 totalInCents += 75;
 updateTotal();
};

// part 3, the when
appleButton.addEventListener("click", addApple);


//  ------- BANANA !!!!!!!

// creating a variable, setting it equal to the id=banana
//  part 1, the who
const bananaButton = document.querySelector("#banana");
// const shoppingList = document.querySelector("#shopping-cart");

console.log(bananaButton);

// part 2, the what
const addBanana = () => {
    shoppingList.innerHTML += '<p>Banana<p>';
    totalInCents +=30;
    updateTotal();
};

// part 3, the when
bananaButton.addEventListener("click", addBanana);



//  ------- MANGO !!!!!!!


// creating a variable, setting it equal to the id=banana
//  part 1, the who
const mangoButton = document.querySelector("#mango");
// const shoppingList = document.querySelector("#shopping-cart");

console.log(mangoButton);

// part 2, the what
const addMango = () => {
    shoppingList.innerHTML += '<p>Mango<p>';
    totalInCents +=125;
    updateTotal();
};

// part 3, the when
mangoButton.addEventListener("click", addMango);

// step 1;
const total = document.querySelector("#total-span");

//  step 2;
const updateTotal = () => {
    total.innerHTML = totalInCents/100;
}

//  ------- PAPAYA !!!!!!!

// creating a variable, setting it equal to the id=banana
//  part 1, the who
const papayaButton = document.querySelector("#papaya");
// const shoppingList = document.querySelector("#shopping-cart");

console.log(papayaButton);

// part 2, the what
const addPapaya = () => {
    shoppingList.innerHTML += '<p>Papaya<p>';
    totalInCents +=595;
    updateTotal();
};

// part 3, the when
papayaButton.addEventListener("click", addPapaya);


//  ------- CHERRY !!!!!!!
// creating a variable, setting it equal to the id=banana
//  part 1, the who
const cherryButton = document.querySelector("#cherry");
// const shoppingList = document.querySelector("#shopping-cart");

console.log(cherryButton);

// part 2, the what
const addCherry = () => {
    shoppingList.innerHTML += '<p>Cherry<p>';
    totalInCents +=395;
    updateTotal();
};

// part 3, the when
cherryButton.addEventListener("click", addCherry);

// keep

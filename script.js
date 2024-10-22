console.log("script running");

// creating a variable, setting it equal to the id=apple
//  part 1, the who
const appleButton = document.querySelector("#apple");
const shoppingList = document.querySelector("#shopping-cart");

console.log(appleButton);

// part 2, the what
const addApple = () => {
 shoppingList.innerHTML += '<p>Apple<p>';
};

// part 3, the when
appleButton.addEventListener("click", addApple);

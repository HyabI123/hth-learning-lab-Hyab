const products = {
    Eggs : 12, 
    milkGallon: 6,
    Water : 3,
};

let total = 0;

const ItemsContainer = document.getElementById("store-items");
const CartContainer = document.getElementById("cart");
const TotalContainer = document.getElementById("cart-total");

const eggs_BTN = document.createElement("button");
eggs_BTN.textContent = "Eggs";
ItemsContainer.appendChild(eggs_BTN);

const milk_BTN = document.createElement("button");
milk_BTN.textContent = "Milk";
ItemsContainer.appendChild(milk_BTN);

const water_BTN = document.createElement("button");
water_BTN.textContent = "Water";
ItemsContainer.appendChild(water_BTN);

function AddToCart (item){
    const price = products[item];
    const itemList = document.createElement("li");
    itemList.textContent = item;
    CartContainer.appendChild(itemList);

    total = total + price;
    TotalContainer.textContent = total;
}

eggs_BTN.addEventListener("click", () => {
    AddToCart("Eggs");
});
milk_BTN.addEventListener("click", () => {
    AddToCart("milkGallon");
});
water_BTN.addEventListener("click", () => {
    AddToCart("Water");
});

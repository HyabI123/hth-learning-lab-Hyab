function shoppingList(){
    const storeItems = {
        Eggs : 12, //realistic tbh
        milkGallon: 6,
        Water : 3,
        candyBar : 2,
        Medicine : 20,
        Cereal : 6,
        Bread : 3, 
        frozenFruit : 5,
        proteinBars : 12 //WHY ARE PROTEIN BARS $12 FOR 6 BARS JUST FOR IT TO TASTE LIKE CHALK THATS SUCH A SCAM AHHHHHH
    };

    const shoppingCart = ["milkGallon", "proteinBars", "Water", "frozenFruit"]

    
    let sum = 0;

    for (item of shoppingCart){ //you would use "in" for keys and "of" for values 
        sum += storeItems[item];
    }

    return console.log(sum)

};

shoppingList();
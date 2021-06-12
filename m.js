let carts=document.querySelectorAll('.add-cart');

let products=[
    {
        name: 'Fruit Salad',
        tag: 'salad',
        price: 100,
    inCart: 0    },
    {
        name: "Fruit Salad",
        tag: "salad",
        price: 90,
    inCart: 0    },
    {
        name: "Lemonade",
        tag: "drink",
        price: 90,
    inCart: 0    },
    {
        name: "Sindhi Curry",
        tag: "lunch",
        price: 190,
    inCart: 0    },
    {
        name: "Cake",
        tag: "bakery",
        price: 550,
    inCart: 0    },
    
    {
        name: "Ice-Cream(Chocolatey)",
        tag: "cold",
        price: 70,
    inCart: 0    },
    {
        name: "Candy",
        tag: "juicy",
        price: 50,
    inCart: 0    },
    {
        name: "Chinese Pudding",
        tag: "dessert",
        price: 170,
    inCart: 0    },
    {
        name: "Cup-Cake",
        tag: "bakery",
        price: 80,
    inCart: 0    },
    {
        name: "Butter-egg",
        tag: "breakfast",
        price: 150,
    inCart: 0    },
    {
        name: "Bread-Cabbage",
        tag: "salad",
        price: 40,
    inCart: 0    },
    {
        name: "Milk",
        tag: "drink",
        price: 30,
    inCart: 0    },
    {
        name: "Butter-Bread",
        tag: "bakery",
        price: 100,
    inCart: 0    },
    {
        name: "Chilli-Potato",
        tag: "Snacks",
        price: 120,
    inCart: 0    },
    {
        name: "Corn Roll",
        tag: "Snacks",
        price: 90,
    inCart: 0    },
    {
        name: "Fish Salad",
        tag: "salad",
        price: 70,
    inCart: 0    },
    {
        name: "Orange juice",
        tag: "drink",
        price: 40,
    inCart: 0    },
    {
        name: "Watermelon Extract",
        tag: "cold",
        price: 70,
    inCart: 0    },
    {
        name: "Momoes",
        tag: "Snacks",
        price: 140,
    inCart: 0    },
    {
        name: "Pastries",
        tag: "bakery",
        price: 70,
    inCart: 0    },
    {
        name: "Ice-Cream (kivi flavour)",
        tag: "cold",
        price: 70,
    inCart: 0    }
    
];


for (let i=0; i< carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent("#current-0")=productNumbers;
    }
}
 


function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    

    productNumbers = parseInt(productNumbers);
    
    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent("#current-0") = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent=1;
    }
}

onLoadCartNumbers();
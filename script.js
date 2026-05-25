let products = [
    {name:"Laptop", price:50000},
    {name:"Phone", price:20000},
    {name:"Headphones", price:3000},
    {name:"Watch", price:2500}
];

displayProducts(products);

function displayProducts(items){
    let productList = document.getElementById("product-list");

    productList.innerHTML = "";

    items.forEach(product => {
        productList.innerHTML += `
            <div class="card">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
            </div>
        `;
    });
}

function sortProducts(){
    let sortValue = document.getElementById("sort").value;

    let sortedProducts = [...products];

    if(sortValue === "low"){
        sortedProducts.sort((a,b)=>a.price-b.price);
    }

    if(sortValue === "high"){
        sortedProducts.sort((a,b)=>b.price-a.price);
    }

    displayProducts(sortedProducts);
}
const shopContent = document.getElementById("shopContent");
const cart = [];//Este array va a guardar los productos que el usuario agregue al carrito

productos.forEach((product) => { //recorro la lista de productos del archivo products.js
    const content = document.createElement("div");
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.productName}</h3>
    <p class="price">$${product.price}</p>
    `;
    shopContent.append(content); //shopContent es el contenedor principal (div con id shopContent en el HTML)

    const buyButton = document.createElement("button");
    buyButton.innerText = "Comprar";

    content.append(buyButton); //agrego el boton comprar a cada producto

    buyButton.addEventListener("click", () => {
        cart.push({
            id: product.id,
            productName: product.productName,
            price: product.price,
            quanty: product.quanty,
        });
        console.log(cart);
    });

});


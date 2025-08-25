const shopContent = document.getElementById("shopContent");

productos.forEach((product) => { //recorro la lista de productos del archivo products.js
    const content = document.createElement("div");
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.productName}</h3>
    <p class="price">$${product.price}</p>
    `;
    shopContent.append(content); //shopContent es el contenedor principal (div con id shopContent en el HTML)
});
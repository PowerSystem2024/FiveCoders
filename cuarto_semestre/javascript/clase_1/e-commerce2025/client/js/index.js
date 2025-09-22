const shopContent = document.getElementById("shopContent");
const cart = []; //Este array va a guardar los productos que el usuario agregue al carrito

productos.forEach((product) => {
  //recorro la lista de productos del archivo products.js
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
    const repeat = cart.some(
      (repeatProduct) => repeatProduct.id === product.id
    ); //some() revisa si el producto ya existe en el carrito
    if (repeat) {
      cart.map((prod) => {
        //map() recorre el array y actualiza la cantidad del producto que ya existe en el carrito
        if (prod.id === product.id) {
          prod.quantity++;
          displayCartCounter(); //actualizo el contador del carrito
        }
      });
    } else {
      cart.push({
        id: product.id,
        productName: product.productName,
        price: product.price,
        quantity: product.quantity,
        img: product.img,
      });
      displayCartCounter();
    }
  });
});

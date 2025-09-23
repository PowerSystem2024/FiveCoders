
const modalContainer = document.getElementById('modal-container');
const modalOverlay = document.getElementById('modal-overlay');
const cartBtn = document.getElementById('cart-btn');

const displayCart = () => {//funcion que muestra el modal del carrito
    modalContainer.innerHTML = "";// limpio el contenido previo del contenedor
    modalContainer.style.display = 'block';
    modalOverlay.style.display = 'block';
    //modal Header
    const modalHeader = document.createElement('div');

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    // Cerrar el modal al hacer click en la X
    modalClose.addEventListener('click', () => {
        modalContainer.style.display = 'none';
        modalOverlay.style.display = 'none';
    })

    const modalTitle = document.createElement('div');
    modalTitle.innerText = "Carrito de compras";
    modalTitle.className = "modal-title"; /*Le agrego clase para darle estilos al modal*/
    modalHeader.append(modalTitle);//agrego el titulo al header del modal

    modalContainer.append(modalHeader); //agrego el header al contenedor del modal

    //modal Body
    if(cart.length > 0){ //si el carrito tiene productos

    cart.forEach((product) => {
        const modalBody = document.createElement("div"); //creo el body del modal (referido al carrito)
        modalBody.className = "modal-body"; /*Le agrego clase para darle estilos al modal*/
        modalBody.innerHTML = `
        <div class="product">
            <img class="product-img" src="${product.img}"/>
            <div class="product-info">
                <h3>${product.productName}</h3>    
            </div>
            <div class="quantity">
              <span class="quantity-btn-decrease">-</span>
              <span class="quantity-input">${product.quantity}</span>
              <span class="quantity-btn-increase">+</span>
            </div>
            <div class="price">${(product.price * product.quantity) }</div>
            <div class="delete-product">🗑️</div>
        </div> 
    `;     
        modalContainer.append(modalBody); //agrego el body al contenedor del modal

        //Boton para decrementar la cantidad del producto
        const btnDecrease = modalBody.querySelector('.quantity-btn-decrease');//selecciono el boton -
        btnDecrease.addEventListener('click', () => {
            if (product.quantity > 0) {
                product.quantity--;
                displayCart(); //vuelvo a renderizar el carrito para actualizar la cantidad
                displayCartCounter(); //actualizo el contador del carrito
            }
        }); 
        //Boton para aumentar la cantidad del producto
        const btnIncrease = modalBody.querySelector('.quantity-btn-increase');//selecciono el boton +
        btnIncrease.addEventListener('click', () => {
            product.quantity++;
            displayCart(); //vuelvo a renderizar el carrito para actualizar la cantidad
            displayCartCounter(); //actualizo el contador del carrito
        });

        //delete product
        const deleteProduct = modalBody.querySelector('.delete-product');//selecciono el boton de eliminar producto
        deleteProduct.addEventListener('click', () => {
            deleteCartProduct(product.id); //llamo a la funcion deleteCartProduct y le paso el id del producto a eliminar
        });
});

    //modal Footer
    //uso reduce() para calcular el precio total del carrito. Los parametros son: un acumulador (acc) y el producto actual (product) y el valor inicial del acumulador es 0
    const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0); //calculo el precio total del carrito
    const modalFooter = document.createElement('div');
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
        <div class="total-price"> Total a pagar: ${totalPrice} </div>
        <button class="btn-primary" id="checkout-btn">Pagar con MercadoPago</button> <!--boton para ir a checkout (mercado pago)-->
        <div id="button-checkout"></div> <!--div donde se renderiza el boton de mercado pago-->
        `;
    modalContainer.append(modalFooter); //agrego el footer al contenedor del modal
    
    const checkoutButton = modalFooter.querySelector('#checkout-btn'); //selecciono el boton de checkout

    checkoutButton.addEventListener('click', async () => {
        if(cart.length == 0) return;  //si el carrito esta vacio, no hago nada
        const product = cart[0]; //tomo el primer producto del carrito (en este caso solo hay uno)
        try {
             const response = await fetch(
                "http://localhost:3001/create_preference", 
                {    
                method: "POST",
                headers: {
                    "content-Type": "application/json", //indico que el contenido es json
                },
                body: JSON.stringify({ //envio los datos de la orden en el body       
                    title: product.productName,
                    quantity: product.quantity,
                    price: product.price,
                    description: "compra de e-commerce",    
                }),
            }
            );
            const data = await response.json(); 
            if(data.id) {
                checkoutButton.style.display = 'none'; //oculto el boton de checkout
                if(window.MercadoPago){
                    const mp = new window.MercadoPago("PUBLIC_KEY_HERE", //reemplazar por la public key generada en la cuenta de mercado pago
                       {
                locale: "es-AR",
              }
            );
            mp.checkout({
              preference: {
                id: data.id,
              },
              render: {
                container: "#button-checkout",
                label: "Pagar con MercadoPago",
              },
            });
          } else {
            console.error("No se encontró el SDK de MercadoPago.");
          }
        } else {
          alert("Error al iniciar el pago");
        }
      } catch (error) {
        alert("Error de conexión con el servidor");
      }
    });
} else {
    const modalText = document.createElement('h2');
    modalText.className = "modal-body";
    modalText.innerText = "El carrito está vacío";
    modalContainer.append(modalText); //agrego el texto al contenedor del modal
}
};

cartBtn.addEventListener('click', displayCart); //al hacer click en el boton del carrito, se ejecuta la funcion displayCart


//función eliminar producto
const deleteCartProduct = (id) => {
    const index = cart.findIndex((product) => product.id === id); //busco el indice del producto a eliminar
    cart.splice(index, 1); //elimino el producto del carrito
     displayCart(); //vuelvo a renderizar el carrito para actualizar el contenido    
     displayCartCounter(); //actualizo el contador del carrito
}

window.displayCartCounter = () => {
    const cartCounter = document.getElementById('cart-counter');
    const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0); //calculo la cantidad total de productos en el carrito
    cartCounter.style.display = totalQuantity > 0 ? 'block' : 'none'; //muestro el contador solo si hay productos en el carrito
    cartCounter.innerText = totalQuantity; //actualizo el contador del carrito
};

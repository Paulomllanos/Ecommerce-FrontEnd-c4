export const addCartItem = (cartItems, productToAdd) => {
    // Busca si cartItems contiene productos
    //! Ojo con el id (solucion ir a tomar el id de productosProvider)
    const existingCartItem = cartItems.find((cartItem) => cartItem._id === productToAdd._id);
    console.log(cartItems)
    // condicional: si ya exite el producto en mi carrito , quiero incrementar su qty en mi carrito
    console.log(cartItems)
    if(existingCartItem){
        return cartItems.map((cartItem) => 
            cartItem._id === productToAdd._id ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
    }
    // retorna un nuveo array con cartItems modificados
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const removeCartItem = (cartItems, cartItemToRemove) => {
    // Busca si cartItems contiene productos
    //! Ojo con el id (solucion ir a tomar el id de productosProvider)
    const existingCartItem = cartItems.find((cartItem) => cartItem._id === cartItemToRemove._id);

    // condicional: si ya exite el producto en mi carrito , si solo hay 1 elemento lo borra

    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem._id !==  cartItemToRemove._id)
    }
    // retorna la resta de la cantidad de elementos en mi carrito
    return cartItems.map((cartItem) => 
    cartItem._id === cartItemToRemove._id ? {...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
}

export const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem._id !== cartItemToClear._id )
}




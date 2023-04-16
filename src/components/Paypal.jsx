
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import CartContext from "../context/cart/CartContext";
import { useContext } from "react";
import ProductContext from "../context/product/ProductContext";

export default function Paypal() {

    const {cartTotal, clearItemFromCheckout, cartItems} = useContext(CartContext)
    const {reduceStock} = useContext(ProductContext)

    console.log(cartTotal)
    return (
        <PayPalScriptProvider options={{ "client-id": "AcRRjtwNn9pwZGXIZwq-35G53dbvhwFDwBHi-HxtLUAWbWbbIKvtMHuGy3btEYPaDCHfPK8aLiwAyzTl" }}>
            <PayPalButtons 
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: cartTotal,
                                    currency: "USD"
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                        reduceStock(cartItems)
                        clearItemFromCheckout()
                    })
                }}
            />
        </PayPalScriptProvider>
    );
}
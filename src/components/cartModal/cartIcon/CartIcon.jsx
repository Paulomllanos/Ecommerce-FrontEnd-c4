import CartContext from "../../../context/cart/CartContext";
import { useContext } from "react";
import shopIcon from '../../../assets/shopping-bag.svg'
import './CartIcon.scss'

const CartIcon = () => {

    const {cartCount, isCartOpen, setIsCartOpen} = useContext(CartContext);

    const handleCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={handleCartOpen}>
        <img src={shopIcon} className='shop-icon' />
        <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon;
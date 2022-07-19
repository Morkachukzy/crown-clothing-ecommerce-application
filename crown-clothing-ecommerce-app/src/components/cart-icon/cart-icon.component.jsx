import {CartIconContainer, ShoppingIcon, ItemCount} from "./cart-icon.styles";
import {useContext} from "react";

import {CartContext} from "../../contexts/cart.context";

export const CartIcon = () => {

  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

  return (
    <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <ShoppingIcon  className="shopping-icon"/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}
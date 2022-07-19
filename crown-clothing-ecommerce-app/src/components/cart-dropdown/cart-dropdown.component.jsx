import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";
import {Button} from "../button/button.component";

import {CartContext} from "../../contexts/cart.context";

import {CartItem} from "../cart-item/cart-item.component";

export const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (<CartDropdownContainer>
    <CartItems>
      {cartItems.length > 0 ? (cartItems.map((cartItem) => (<CartItem key={cartItem.id} cartItem={cartItem}/>))) : (
          <EmptyMessage>Your cart is empty  </EmptyMessage>)}
    </CartItems>
    <Button onClick={goToCheckout}>checkout</Button>
  </CartDropdownContainer>);
};

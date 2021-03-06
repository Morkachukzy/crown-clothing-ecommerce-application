import { useContext } from "react";
import "./product-card.styles.scss";

import { CartContext } from "../../contexts/cart.context";
import { Button, BUTTON_TYPES } from "../button/button.component";

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = (product) => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPES.inverted} onClick={() => addProductToCart(product)}>
        Add to cart
      </Button>
    </div>
  );
};

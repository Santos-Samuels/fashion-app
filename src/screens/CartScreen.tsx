import { CartDetails, CartList, ScreenContainer } from "@src/components";
import { CartContext } from "@src/context/CartContext";
import { useContext } from "react";

const CartScreen = () => {
  const { cart } = useContext(CartContext);
  return (
    <ScreenContainer>
      <CartList cart={cart} />
      {cart.length ? <CartDetails /> : null}
    </ScreenContainer>
  );
};

export default CartScreen;

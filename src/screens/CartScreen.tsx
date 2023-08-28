import { CartDetails, CartList, ScreenContainer } from "@src/components";
import { AppContext } from "@src/context/AppContext";
import { useContext } from "react";

const CartScreen = () => {
  const { cart } = useContext(AppContext);
  return (
    <ScreenContainer>
      <CartList cart={cart} />
      {cart.length ? <CartDetails /> : null}
    </ScreenContainer>
  );
};

export default CartScreen;

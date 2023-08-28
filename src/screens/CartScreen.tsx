import { CartDetails, CartList, ScreenContainer } from "@src/components";

const CartScreen = () => {
  return (
    <ScreenContainer>
      <CartList />
      <CartDetails />
    </ScreenContainer>
  );
};

export default CartScreen;

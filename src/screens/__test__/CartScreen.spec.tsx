import { cartItems } from "../../../test/cart.mock";
import { customRender } from "../../../test/jest.mock";
import CartScreen from "../CartScreen";

describe("CartScreen", () => {
  it("should render a list of cart items with 2 items and show ", () => {
    const { getByText } = customRender(<CartScreen />, { cart: cartItems });

    const cartItemsLength = getByText("02 Items");

    expect(cartItemsLength).toBeTruthy();
  });

  it("should render cart details", () => {
    const { getByTestId } = customRender(<CartScreen />, { cart: cartItems });

    const cartDetails = getByTestId("cart-details");

    expect(cartDetails).toBeTruthy();
  });

  it("should not render cart details if the cart is empty", () => {
    const { queryByTestId } = customRender(<CartScreen />, { cart: [] });

    const cartDetails = queryByTestId("cart-details");

    expect(cartDetails).toBeFalsy();
  });
});

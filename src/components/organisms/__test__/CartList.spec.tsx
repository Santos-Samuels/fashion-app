import { render } from "@testing-library/react-native";
import { cartItems } from "../../../../test/cart.mock";
import CartList from "../CartList";

describe("CartList", () => {
  it("should render a list of cart items with 2 items", () => {
    const { getByText } = render(<CartList cart={cartItems} />);

    const cartItemsLength = getByText("02 Items");

    expect(cartItemsLength).toBeTruthy();
  });

  it("should render a message when the list is empty", () => {
    const { getByText } = render(<CartList cart={[]} />);

    const message = getByText(
      "Your cart is as empty as a desert island. Time to fill it up!"
    );

    expect(message).toBeTruthy();
  });  
});

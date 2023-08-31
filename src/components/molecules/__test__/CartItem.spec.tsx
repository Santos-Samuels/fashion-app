import { render } from "@testing-library/react-native";
import { cartItem } from "../../../../test/cart.mock";
import CartItem from "../CartItem";

describe("CartItem", () => {
  it("should render a cart item", () => {
    const { getByText, getByTestId, getAllByText } = render(
      <CartItem item={cartItem} />
    );

    const productTitle = getByText(cartItem.title);
    const productImage = getByTestId("product-image");
    const productPrice = getByText(`$ ${cartItem.price}`);
    const productOldPrice = getByText(`$ ${cartItem.oldPrice}`, {
      exact: false,
    });
    const productQuantity = getAllByText(cartItem.quantity.toString());

    expect(productTitle).toBeTruthy();
    expect(productImage).toBeTruthy();
    expect(productPrice).toBeTruthy();
    expect(productOldPrice).toBeTruthy();
    expect(productQuantity).toBeTruthy();
    expect(productQuantity.length).toBe(2);
  });

  it("should render a cart item with a input number including the item quantity", () => {
    const { getByTestId } = render(<CartItem item={cartItem} />);

    const counter = getByTestId("counter");

    expect(counter).toBeTruthy();
    expect(counter.props["aria-valuenow"]).toBe(cartItem.quantity);
  });
});

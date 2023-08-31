import { AppProvider } from "@src/context/AppContext";
import { fireEvent, render } from "@testing-library/react-native";
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

  it("should be able to increase the item quantity by 1", () => {
    const { getByTestId } = render(<CartItem item={cartItem} />, {
      wrapper: AppProvider,
    });

    const counter = getByTestId("counter");
    const increaseButton = getByTestId("increase");

    expect(counter.props["aria-valuenow"]).toBe(cartItem.quantity);
    fireEvent.press(increaseButton);

    expect(counter.props["aria-valuenow"]).toBe(cartItem.quantity++);
  });

  it("should not be able to increase the item quantity by 1 if the quantity is equal to 10", () => {
    cartItem.quantity = 10;
    const { getByTestId } = render(<CartItem item={cartItem} />, {
      wrapper: AppProvider,
    });

    const counter = getByTestId("counter");
    const increaseButton = getByTestId("increase");

    expect(counter.props["aria-valuenow"]).toBe(10);
    fireEvent.press(increaseButton);

    expect(counter.props["aria-valuenow"]).toBe(10);
  });

  it("should be able to decrease the item quantity by 1", () => {
    const { getByTestId } = render(<CartItem item={cartItem} />, {
      wrapper: AppProvider,
    });

    const counter = getByTestId("counter");
    const decreaseButton = getByTestId("decrease");

    expect(counter.props["aria-valuenow"]).toBe(cartItem.quantity);
    fireEvent.press(decreaseButton);

    expect(counter.props["aria-valuenow"]).toBe(cartItem.quantity--);
  });

  it("should not be able to decrease the item quantity by 1 if the quantity is equal to 1", () => {
    cartItem.quantity = 1;
    const { getByTestId } = render(<CartItem item={cartItem} />, {
      wrapper: AppProvider,
    });

    const counter = getByTestId("counter");
    const decreaseButton = getByTestId("decrease");

    expect(counter.props["aria-valuenow"]).toBe(1);
    fireEvent.press(decreaseButton);

    expect(counter.props["aria-valuenow"]).toBe(1);
  });
});

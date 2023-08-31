import { AppProvider } from "@src/context/AppContext";
import { render } from "@testing-library/react-native";
import CartDetails from "../CartDetails";

describe("CartDetails", () => {
  it("should render a cart details labels", () => {
    const { getByText, getAllByText } = render(<CartDetails />, {
      wrapper: AppProvider
    });
    
    const subTotal = getByText("Sub-Total:");
    const discount = getByText("Discount:");
    const total = getByText("Total:");
    const checkoutButton = getByText("Checkout");
    
    expect(subTotal).toBeTruthy();
    expect(discount).toBeTruthy();
    expect(total).toBeTruthy();
    expect(checkoutButton).toBeTruthy();
  });

  it("should render a cart details with values", () => {
    const { getAllByText } = render(<CartDetails />, {
      wrapper: AppProvider
    });

    const subTotalValue = getAllByText("0 $", { exact: false });
    const discountValue = getAllByText("0 $", { exact: false });
    const totalValue = getAllByText("0 $", { exact: false });

    expect(subTotalValue).toBeTruthy();
    expect(discountValue).toBeTruthy();
    expect(totalValue).toBeTruthy();
  });
});

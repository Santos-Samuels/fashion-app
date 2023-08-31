import { AppProvider } from "@src/context/AppContext";
import { Categories } from "@src/shared/constants/productCategories";
import { fireEvent, render } from "@testing-library/react-native";
import ProductFilter from "../ProductFilter";

describe("ProductFilter", () => {
  it("should render a product filter with an input and icon", () => {
    const { getByText, getByTestId } = render(<ProductFilter />);

    const inputIcon = getByTestId("input-icon");
    const searchInput = getByTestId("input");
    const clearButton = getByText("Clear");

    expect(inputIcon).toBeTruthy();
    expect(searchInput).toBeTruthy();
    expect(clearButton).toBeTruthy();
  });

  it("should be able to type on input", () => {
    const { getByTestId } = render(<ProductFilter />, { wrapper: AppProvider });
    const searchInput = getByTestId("input");

    fireEvent.changeText(searchInput, "product filter");
    expect(searchInput.props.value).toBe("product filter");
  });

  it("should be able to clear input", () => {
    const { getByText, getByTestId } = render(<ProductFilter />, {
      wrapper: AppProvider,
    });

    const searchInput = getByTestId("input");
    const clearButton = getByText("Clear");

    fireEvent.changeText(searchInput, "product filter");
    expect(searchInput.props.value).toBe("product filter");

    fireEvent.press(clearButton);
    expect(searchInput.props.value).toBe("");
  });

  it("should render a list with all product category options", () => {
    const { getByText } = render(<ProductFilter />);

    Categories.forEach((category) => {
      const categoryBridge = getByText(category);

      expect(categoryBridge).toBeTruthy();
    });
  });

  it("should render product category filter with 'all' option selected by default", () => {
    const { getByText } = render(<ProductFilter />);

    const categoryBridge = getByText("all");

    expect(categoryBridge).toBeTruthy();
  });

  it("should be able to select a product category filter", () => {
    const { getByText } = render(<ProductFilter />, { wrapper: AppProvider });

    const categoryBridge = getByText("jewelery");
    expect(categoryBridge).toBeTruthy();

    fireEvent.press(categoryBridge);
    expect(categoryBridge.props["aria-checked"]).toBe(true);
  });

  it("should be able to unselect default product category filter", () => {
    const { getByText } = render(<ProductFilter />, { wrapper: AppProvider });

    const defaultOption = getByText("all");
    const categoryBridge = getByText("jewelery");
    expect(categoryBridge).toBeTruthy();

    fireEvent.press(categoryBridge);
    expect(categoryBridge.props["aria-checked"]).toBe(true);
    expect(defaultOption.props["aria-checked"]).toBe(false);
  });

  it("should be able to clear product category filter", () => {
    const { getByText } = render(<ProductFilter />, { wrapper: AppProvider });

    const categoryBridge = getByText("jewelery");
    const clearButton = getByText("Clear");

    fireEvent.press(categoryBridge);
    expect(categoryBridge.props["aria-checked"]).toBe(true);

    fireEvent.press(clearButton);
    expect(categoryBridge.props["aria-checked"]).toBe(false);
  });
});

import { NavigationContainer } from "@react-navigation/native";
import { act, render } from "@testing-library/react-native";
import { products } from "../../../../test/product.mock";
import ProductList from "../ProductList";

jest.mock('react-native', () => {
  const rn = jest.requireActual('react-native')
  const spy = jest.spyOn(rn.Animated, 'View', 'get')
  spy.mockImplementation(() => jest.fn(({children}) => children));
  return rn
});

describe("ProductList", () => {
  it("should render a list of products with 2 items", () => {
    const { getByText } = render(
      <NavigationContainer>
        <ProductList products={products} isLoading={false} />
      </NavigationContainer>
    );

    const productsLength = getByText("02 Items");

    expect(productsLength).toBeTruthy();
  });

  it("should render a loading animation when the list is loading", () => {
    act(() => {
      jest.useFakeTimers();
    });
    
    const { getByTestId } = render(
      <NavigationContainer>
        <ProductList products={products} isLoading={true} />
      </NavigationContainer>
    );

    const loadingSkeleton = getByTestId("loading-skeleton");

    expect(loadingSkeleton).toBeTruthy();
  });

  it("should render a message when the list is empty", () => {
    const { getByText } = render(
      <NavigationContainer>
        <ProductList products={[]} isLoading={false} />
      </NavigationContainer>
    );

    const message = getByText("There're no products to list!");

    expect(message).toBeTruthy();
  });
});

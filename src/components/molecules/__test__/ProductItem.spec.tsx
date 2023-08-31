import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import { product } from "../../../../test/product.mock";
import ProductItem from "../ProductItem";

describe("ProductItem", () => {
  it("should render a product item", () => {
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <ProductItem product={product} index={0} />
      </NavigationContainer>
    );

    const productTitle = getByText(product.title);
    const productPrice = getByText(`$ ${product.price}`);
    const productImage = getByTestId("product-image");

    expect(productTitle).toBeTruthy();
    expect(productPrice).toBeTruthy();
    expect(productImage).toBeTruthy();
  });

  it("should render a product item with old price", () => {
    const { getByText } = render(
      <NavigationContainer>
        <ProductItem product={product} index={0} />
      </NavigationContainer>
    );

    const oldPrice = getByText("$ 110", { exact: false });
    expect(oldPrice).toBeTruthy();
  });

  it("should render a product item with rating", () => {
    const { getByTestId, getByText } = render(
      <NavigationContainer>
        <ProductItem product={product} index={0} />
      </NavigationContainer>
    );

    const starIcon = getByTestId("star");
    const rateValue = getByText(product.rating.rate.toString());

    expect(starIcon).toBeTruthy();
    expect(rateValue).toBeTruthy();
  });
});

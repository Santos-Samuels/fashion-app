import { render } from "@testing-library/react-native";
import ProductRate from "../ProductRate";

describe("ProductRate", () => {
  it("should render a rating including the count of ratings and the rate value", () => {
    const { getByText } = render(
      <ProductRate rating={{ rate: 2.5, count: 15 }} />
    );

    const countMessage = getByText("15 Reviews");
    const rateValueMessage = getByText("2.5");

    expect(countMessage).toBeTruthy();
    expect(rateValueMessage).toBeTruthy();
  });
  
  it("should render a rating with five full stars", () => {
    const { getAllByTestId } = render(
      <ProductRate rating={{ rate: 5, count: 1 }} />
    );

    const fullStarsIcon = getAllByTestId("star");

    expect(fullStarsIcon).toHaveLength(5);
  });

  it("should render a rating with four full stars and one half star", () => {
    const { getAllByTestId } = render(
      <ProductRate rating={{ rate: 4.5, count: 1 }} />
    );

    const fullStarsIcon = getAllByTestId("star");
    const halfStarIcon = getAllByTestId("star-half-sharp");

    expect(fullStarsIcon).toHaveLength(4);
    expect(halfStarIcon).toHaveLength(1);
  });

  it("should render a rating with three full stars and two empty stars", () => {
    const { getAllByTestId } = render(
      <ProductRate rating={{ rate: 3, count: 1 }} />
    );

    const fullStarsIcon = getAllByTestId("star");
    const emptyStarsIcon = getAllByTestId("star-outline");

    expect(fullStarsIcon).toHaveLength(3);
    expect(emptyStarsIcon).toHaveLength(2);
  });

  it("should render a rating with two full stars, one half star and two empty stars", () => {
    const { getAllByTestId } = render(
      <ProductRate rating={{ rate: 2.5, count: 1 }} />
    );

    const fullStarsIcon = getAllByTestId("star");
    const halfStarIcon = getAllByTestId("star-half-sharp");
    const emptyStarsIcon = getAllByTestId("star-outline");

    expect(fullStarsIcon).toHaveLength(2);
    expect(halfStarIcon).toHaveLength(1);
    expect(emptyStarsIcon).toHaveLength(2);
  });
});

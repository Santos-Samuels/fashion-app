import { render } from "@testing-library/react-native";
import ShopBanner from "../ShopBanner";

describe("ShopBanner", () => {
  it("should render correct title and subtitle", () => {
    const { getByText } = render(<ShopBanner />);

    const title = getByText("Fashion Shop");
    const subtitle = getByText("Shaking up things fashion concept.");

    expect(title).toBeTruthy();
    expect(subtitle).toBeTruthy();
  });
});

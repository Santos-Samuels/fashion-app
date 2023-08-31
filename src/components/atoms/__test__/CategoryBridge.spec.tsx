import { render } from "@testing-library/react-native";
import CategoryBridge from "../CategoryBridge";

describe("CategoryBridge", () => {
  it("should be able to render a category bridge", () => {
    const { getByText } = render(<CategoryBridge category="all" isActived />);

    const category = getByText("all");

    expect(category).toBeTruthy();
  });
});

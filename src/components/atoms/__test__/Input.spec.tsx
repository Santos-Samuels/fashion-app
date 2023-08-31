import { Input } from "@src/components";
import { render } from "@testing-library/react-native";

describe("Input", () => {
  it("should be able to render an input without icon", () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId("input");

    expect(input).toBeTruthy();
    expect(() => getByTestId("input-icon")).toThrow();
  });

  it("should be able to render an input with icon", () => {
    const { getByTestId } = render(<Input icon={<></>} />);
    const icon = getByTestId("input-icon");
    const input = getByTestId("input");

    expect(input).toBeTruthy();
    expect(icon).toBeTruthy();
  });
});

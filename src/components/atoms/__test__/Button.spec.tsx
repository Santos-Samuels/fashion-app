import { render } from "@testing-library/react-native";
import Button from "../Button";

describe("Button", () => {
  it("should be able to render a button", () => {
    const { getByText } = render(<Button title="test" onPress={() => {}} />);

    const button = getByText("test");

    expect(button).toBeTruthy();
  });

  it("should be able to render a button with icon", () => {
    const { getByText, getByTestId } = render(
      <Button title="test" onPress={() => {}} icon={<></>} />
    );

    const button = getByText("test");
    const icon = getByTestId("button-icon");

    expect(button).toBeTruthy();
    expect(icon).toBeTruthy();
  });
});

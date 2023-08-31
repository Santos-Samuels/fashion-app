import { fireEvent, render } from "@testing-library/react-native";
import InputNumber from "../InputNumber";

describe("InputNumber", () => {
  const setValueMock = jest.fn();

  it("should render a number input with a value of 1", () => {
    const { getByTestId } = render(
      <InputNumber value={1} setValue={setValueMock} />
    );

    const value = getByTestId("counter");

    expect(value).toBeTruthy();
  });

  it("should increment 1 when clicking the increse button", () => {
    const { getByText, getByTestId } = render(
      <InputNumber value={1} setValue={setValueMock} />
    );

    const counterValue = getByText("1");
    const increseButton = getByTestId("increase");

    expect(counterValue).toBeTruthy();

    fireEvent.press(increseButton);
    expect(setValueMock).toHaveBeenCalledWith(2);
  });

  it("should decrement 1 when clicking the decrease button", () => {
    const { getByText, getByTestId } = render(
      <InputNumber value={2} setValue={setValueMock} />
    );

    const counterValue = getByText("2");
    const decreaseButton = getByTestId("decrease");

    expect(counterValue).toBeTruthy();

    fireEvent.press(decreaseButton);
    expect(setValueMock).toHaveBeenCalledWith(1);
  });
});

import { render } from "@testing-library/react-native";
import VoidListMessage from "../VoidListMessage";


describe("VoidListMessage", () => {
  it("should render recived message with an icon", () => {
    const { getByText, getByTestId } = render(<VoidListMessage message="Test message" />);
    
    const icon = getByTestId("exclamation-triangle");
    const message = getByText("Test message");
    
    expect(icon).toBeTruthy();
    expect(message).toBeTruthy();
  });
});

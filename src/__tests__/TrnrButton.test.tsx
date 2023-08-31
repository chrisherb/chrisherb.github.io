import React from "react";
import { Props, TrnrButton } from "../components/TrnrButton";
import { fireEvent, render } from "@testing-library/react";
import { navigate } from "gatsby";

function renderTrnrButton(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    label: "Test Button",
    to: "home",
  };

  return render(<TrnrButton {...defaultProps} {...props} />);
}

describe("<TrnrButton />", () => {
  test("should display button with the correct title", () => {
    const { getByTestId } = renderTrnrButton();
    expect(getByTestId("button-title").textContent).toBe("Test Button");
  });
  test("button should navigate", () => {
    const { getByTestId } = renderTrnrButton();
    const button = getByTestId("button-title");

    fireEvent.click(button);

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith("home");
  });
});

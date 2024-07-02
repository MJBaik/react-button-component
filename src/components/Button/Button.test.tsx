import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  it("renders the correct children", () => {
    const children = "text Button";
    const { getByTestId, getByText } = render(<Button>{children}</Button>);

    const container = getByTestId("button-container");
    const childrenElement = getByText(children);

    expect(container).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });

  it("renders the correct styling", () => {
    const primary = "primary";
    const { getByTestId } = render(<Button color={primary}>"button"</Button>);

    const container = getByTestId("button-container");

    expect(container).toHaveStyle(`background-color: #3354f7`);
  });
});

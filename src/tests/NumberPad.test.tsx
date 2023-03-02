// tests for the number pad component
import { useState } from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import NumberPad from "@/components/NumberPad.component";

import { act } from "react-dom/test-utils";

function NumberPadTest() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input data-testid="test-input" type="text" value={value} readOnly />
      <NumberPad
        inputFunc={(val) => {
          setValue(value + val.toString());
        }}
        cancelFunc={() => {
          setValue(value.slice(0, -1));
        }}
      />
    </div>
  );
}

describe("NumberPad Tests", () => {
  it("should render the number pad", () => {
    render(<NumberPadTest />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("<-")).toBeInTheDocument();
  });

  it("when number is pressed, the input field should update", () => {
    render(<NumberPadTest />);

    act(() => screen.getByText("1").click());
    act(() => screen.getByText("2").click());
    act(() => screen.getByText("3").click());
    act(() => screen.getByText("4").click());
    act(() => screen.getByText("5").click());
    act(() => screen.getByText("6").click());
    act(() => screen.getByText("7").click());
    act(() => screen.getByText("8").click());
    act(() => screen.getByText("9").click());
    act(() => screen.getByText("0").click());

    expect(screen.getByTestId("test-input")).toHaveValue("1234567890");
  });

  it("when the cancel button is pressed, the input field should update", () => {
    render(<NumberPadTest />);

    act(() => screen.getByText("1").click());
    act(() => screen.getByText("2").click());
    act(() => screen.getByText("3").click());
    act(() => screen.getByText("4").click());
    act(() => screen.getByText("5").click());
    act(() => screen.getByText("6").click());
    act(() => screen.getByText("7").click());
    act(() => screen.getByText("8").click());
    act(() => screen.getByText("9").click());
    act(() => screen.getByText("0").click());
    expect(screen.getByTestId("test-input")).toHaveValue("1234567890");
    act(() => screen.getByText("<-").click());
    expect(screen.getByTestId("test-input")).toHaveValue("123456789");
    act(() => screen.getByText("<-").click());
    expect(screen.getByTestId("test-input")).toHaveValue("12345678");
    act(() => screen.getByText("<-").click());
    act(() => screen.getByText("<-").click());
    act(() => screen.getByText("<-").click());
    act(() => screen.getByText("<-").click());
    act(() => screen.getByText("<-").click());
    act(() => screen.getByText("<-").click());
    act(() => screen.getByText("<-").click());
    act(() => screen.getByText("<-").click());
    expect(screen.getByTestId("test-input")).toHaveValue("");
  });
});

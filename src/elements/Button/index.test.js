import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("Should be not allowed click button if have property isDisabled", () => {
  const { container } = render(<Button isDisabled></Button>)
  expect(container.querySelector("span.disabled")).toBeInTheDocument()
})

test("Should render loading",() => {
  const { container,getByText } = render(<Button isLoading></Button>)
  expect(getByText(/loading/i)),toBeInTheDocument()
  expect(container.querySelector("span")).toBeInTheDocument()
}) 


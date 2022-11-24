import React from "react";
import { render } from "@testing-library/react-native";

import Profile from "../../src/screens/Profile";

test("Should input name placeholder render correctly", () => {
  const { getByPlaceholderText } = render(<Profile />);
  const inputName = getByPlaceholderText("Enter your name");
  expect(inputName.props.placeholder).toBeTruthy();
});
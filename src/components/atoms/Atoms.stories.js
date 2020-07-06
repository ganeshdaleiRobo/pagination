import * as React from "react";

import { storiesOf } from "@storybook/react";
import Text from "./Text/Text";
import Button from "./button/Button";
import Input from "./input/Input";

storiesOf("atoms", module)
  .add("Text", () => <Text label="Hello" color="black" />)
  .add("Button", () => <Button label="Button" color="black" />)
  .add("Input", () => <Input />);

import { fn } from "@storybook/test";
import { ButtonComponent } from "./button.component";

export default {
  title: "Components/Button",
  component: ButtonComponent,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    children: "Button",
  },
};

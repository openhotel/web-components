import { fn } from "@storybook/test";
import { FormComponent } from "./form.component";
import { InputComponent, SelectorComponent, ButtonComponent } from "../index";

export default {
  title: "Components/Form",
  component: FormComponent,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  args: { onSubmit: fn() },
};

export const Primary = {
  args: {
    children: (
      <>
        <InputComponent name="input" placeholder="placeholder" />
        <SelectorComponent
          name="selector"
          placeholder="placeholder"
          options={[{ key: "abc", value: "ABC" }]}
        />
        <ButtonComponent>Submit</ButtonComponent>
      </>
    ),
  },
};

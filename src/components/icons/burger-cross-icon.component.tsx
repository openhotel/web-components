import React from "react";
import { IconComponent } from "./icon.component";
import type { IconProps } from "./icon.component";

export const BurgerCrossIconComponent: React.FC<IconProps> = ({
  fill = "white",
  ...props
}) => (
  <IconComponent {...props}>
    <path
      d="M3.7269 6.62755H20.2731M3.7269 12.1429H20.2731M3.7269 17.6583H20.2731"
      stroke={fill}
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconComponent>
);

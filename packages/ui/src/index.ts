export { Button, type ButtonProps } from "./button";

// Complex primitives stay behind the design-system package boundary.
// Product code should never import Base UI directly.
export { Dialog } from "@base-ui/react/dialog";

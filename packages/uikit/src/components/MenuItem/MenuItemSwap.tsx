import React, { useContext } from "react";
import { MenuContext } from "../../widgets/Menu/context";
import StyledMenuItemSwap, { StyledMenuItemContainerSwap } from "./stylesSwap";
import { MenuItemProps } from "./types";

const MenuItemSwap: React.FC<MenuItemProps> = ({
  children,
  href,
  isActive = false,
  variant = "default",
  statusColor,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const itemLinkProps: unknown = href
    ? {
        as: linkComponent,
        href,
      }
    : {
        as: "div",
      };
  return (
    <StyledMenuItemContainerSwap $isActive={isActive} $variant={variant}>
      <StyledMenuItemSwap {...itemLinkProps} $isActive={isActive} $variant={variant} $statusColor={statusColor} {...props}>
        {children}
      </StyledMenuItemSwap>
    </StyledMenuItemContainerSwap>
  );
};

export default MenuItemSwap;

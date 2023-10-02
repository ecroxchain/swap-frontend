import React, { useRef } from "react";
import { useTheme } from "styled-components";
import Heading from "../../components/Heading/Heading";
import getThemeValue from "../../util/getThemeValue";
import { ModalBody, ModalHeader, ModalTitle, ModalContainer, ModalCloseButton, ModalBackButton } from "./styles";
import { ModalProps } from "./types";
import { useMatchBreakpointsContext } from "../../contexts";

export const MODAL_SWIPE_TO_CLOSE_PX = 3;

const Modal: React.FC<ModalProps> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px",
  headerBackground = "transparent",
  minWidth = "320px",
  maxWidth = "none",
  ...props
}) => {
  const theme = useTheme();
  const { isMobile } = useMatchBreakpointsContext();
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    if (wrapperRef.current && maxWidth !== "none") {
      wrapperRef.current.style.setProperty("max-width", "420px", "important")
    }
  }, [])

  return (
    // @ts-ignore
    <ModalContainer
      drag={isMobile ? "y" : false}
      dragConstraints={{ top: 0, bottom: 600 }}
      dragElastic={{ top: 0 }}
      onDragStart={() => {
        if (wrapperRef.current) wrapperRef.current.style.animation = "none";
      }}
      onDragEnd={(e, info) => {
        if (info.offset.y > MODAL_SWIPE_TO_CLOSE_PX && onDismiss) onDismiss();
      }}
      ref={wrapperRef}
      minWidth={minWidth}
      {...props}
    >
      <ModalHeader background='#f2f2f2'>
        <ModalTitle>
          {onBack && <ModalBackButton onBack={onBack} />}
          <Heading>{title}</Heading>
        </ModalTitle>
        {!hideCloseButton && <ModalCloseButton onDismiss={onDismiss} />}
      </ModalHeader>
      <ModalBody p={bodyPadding}>{children}</ModalBody>
    </ModalContainer>
  );
};

export default Modal;

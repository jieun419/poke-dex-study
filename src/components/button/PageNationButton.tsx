import { ReactNode } from "react";
import { EventButton } from "./button.styled";

interface ChildrenT {
  children: ReactNode;
}

const PageNationButton = ({ children }: ChildrenT) => {
  return (
    <EventButton>{children}</EventButton>
  );
};

export default PageNationButton;
import { createRef } from "react";

const headerRef = createRef<HTMLDivElement>();

export const useScrollToHeader = () => {
  return () => {
    headerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
};

export const getHeaderRef = () => headerRef;
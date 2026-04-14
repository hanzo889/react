import React, { createContext, useContext } from "react";

export type CarouselTransition = "slide" | "fade";

export type CarouselContextValue = {
  current: number;
  total: number;
  slideVisible: number;
  loop: boolean;
  prev: () => void;
  next: () => void;
  goTo: (index: number) => void;
  transition: CarouselTransition;
};
export const CarouselContext = createContext<CarouselContextValue | null>(null);

export function useCarousel(): CarouselContextValue {
  const ctx = useContext(CarouselContext);
  if (!ctx) throw new Error("useCarousel must be inside carousel component");
  return ctx;
}

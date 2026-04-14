import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useCarousel, type CarouselTransition } from "../hooks/useCarousel";
import { useCarouselState } from "../hooks/useCarouselState";
import { useCarouselTransform } from "../hooks/useCarouselTransform";
import { CarouselContext } from "../hooks/useCarousel";
import { CarouselNext, CarouselPrev } from "./CarouselNav";

export type CarouselProps = {
  children: ReactNode;
  className?: string;
  transition?: CarouselTransition;
  defaultIndex?: number;
  loop?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  pauseOnHover?: boolean;
  slideVisible?: number;
  onIndexChange?: (index: number) => void;
};

export default function Carousel({
  children,
  className,
  transition = "slide",
  defaultIndex = 0,
  loop = false,
  autoplay = false,
  autoplayInterval = 4000,
  pauseOnHover = true,
  slideVisible = 1,
  onIndexChange,
}: CarouselProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const allChildren = Children.toArray(children);
  const slideChildren = allChildren.filter(isCarouselItem);
  const total = allChildren.length;

  const { current, goTo, next, prev } = useCarouselState({
    defaultIndex: defaultIndex,
    loop: loop,
    total: total,
    onIndexChange: onIndexChange,
  });
  console.log("current",current);
  
  useCarouselTransform({ current, slideVisible, trackRef, transition });
  const rootClass = ["carousel-root", className].filter(Boolean).join(" ");
  
  console.log(total);
  return (
    <CarouselContext.Provider
      value={{
        current,
        goTo,
        loop,
        next,
        prev,
        slideVisible,
        total,
        transition,
      }}
    >
      <div
        ref={rootRef}
        className={rootClass}
        data-transition={transition}
        tabIndex={0}
      >
        <div ref={trackRef} className="carousel-track">
          {allChildren}
        </div>
        <div className="navigation-wrapper">
          <CarouselPrev />
          <CarouselNext />
        </div>
      </div>
    </CarouselContext.Provider>
  );
}
function isCarouselItem(child: ReactNode): boolean {
  return (
    isValidElement(child) && (child.type as any).displayName === "CarouselItem"
  );
}

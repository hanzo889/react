import React, { type ReactNode } from "react";
import { useCarousel } from "../hooks/useCarousel";
import Button from "./Button";

interface navBaseProps {
  className?: string;
  children?: ReactNode;
}

function ChevronLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="chevron-icon"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="chevron-icon"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function CarouselPrev({ children, className }: navBaseProps) {
  const { prev, current } = useCarousel();
  const isDisabled = current === 0;
  const buttonClass = ["carousel-nav", className].filter(Boolean).join(" ");
  const OnClick = () => {
    console.log("current-nav",current);
    prev()
  };


  return (
    <Button
      className={buttonClass}
      onClick={OnClick}
      disabled={isDisabled}
      data-dir="prev"
      type="button"
      
    >
      {children ?? <ChevronLeft />}
    </Button>
  );
}
export function CarouselNext({ children, className }: navBaseProps) {
  const { next, current, total } = useCarousel();
  const isDisabled = current === total - 1;
  const buttonClass = ["carousel-nav", className].filter(Boolean).join(" ");
  const OnClick = () => {
    console.log("current-nav-next",current);
    next()
  };
  return (
    <Button
      className={buttonClass}
      onClick={OnClick}
      disabled={isDisabled}
      data-dir="next"
      type="button"
    >
      {children ?? <ChevronRight />}
    </Button>
  );
}

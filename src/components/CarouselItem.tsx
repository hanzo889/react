import React, { type ReactNode } from "react";
import { useCarousel } from "../hooks/useCarousel";

export type carouselItemAlign = "start" | "center" | "end";

interface carouselItemProps {
  children: ReactNode;
  index: number;
  className?: string;
  align: carouselItemAlign;
}

export default function CarouselItem({
  children,
  index,
  className,
  align = "center",
}: carouselItemProps) {
  const { current, slideVisible } = useCarousel();
  const isActive = index === current;
  const itemClass = ["carousel-item", className].filter(Boolean).join(" ");
  return (
    <div
      className={itemClass}
      data-active={isActive}
      data-slide-visible={slideVisible > 1 ? slideVisible : undefined}
      data-align={align}
    >
      {children}
    </div>
  );
}

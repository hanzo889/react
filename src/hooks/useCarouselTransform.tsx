import React, { useEffect, type RefObject } from "react";
import type { CarouselTransition } from "./useCarousel";

interface useCarouselTransformParams {
  trackRef: RefObject<HTMLDivElement | null>;
  current: number;
  slideVisible: number;
  transition: CarouselTransition;
}

export function useCarouselTransform({
  current,
  slideVisible,
  trackRef,
  transition,
}: useCarouselTransformParams) {
  useEffect(() => {
    if (!trackRef.current || transition !== "slide") return;
    console.log("halo");
    console.log("trans",transition)
    const offSet = current * (100 / slideVisible) * -1;
    console.log("offset",offSet)
    trackRef.current.style.transform = `translateX(${offSet}%)`;
  },[trackRef,current,slideVisible,transition]);
  
}

import React, { useState } from "react";

interface useCarouselParams {
  total: number;
  defaultIndex: number;
  loop: boolean;
  onIndexChange?: (index: number) => void;
}

export function useCarouselState({
  defaultIndex,
  loop,
  total,
  onIndexChange,
}: useCarouselParams) {
  const [current, setCurrent] = useState(defaultIndex);

  const clamp = (index: number) => {
    if (loop) return ((index % total) + total) % total;
    return Math.max(0, Math.min(index, total - 1));
  };
  const goTo = (index: number) => {
    const next = clamp(index);
    setCurrent(next);
    onIndexChange?.(next);
  };
  const prev = () => {
    goTo(current - 1);
  };
  const next = () => {
    goTo(current + 1);
  };
  return {
    current,
    setCurrent,
    prev,
    next,
    goTo,
  };
}

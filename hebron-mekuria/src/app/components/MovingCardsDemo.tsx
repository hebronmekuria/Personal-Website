"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { BentoGrid } from "./ui/bento-grid";

export function InfiniteMovingCardsDemo() {
  const bentoGridItems = [
    <BentoGrid key="1" />, // You can pass props as needed
    <BentoGrid key="2" />,
    <BentoGrid key="3" />,
    <BentoGrid key="4" />,
    <BentoGrid key="5" />
  ];

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={bentoGridItems}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

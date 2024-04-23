import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { generateBentoGridItems } from './BentoGridItems';

export function InfiniteMovingCardsDemo() {
  const bentoGridItems = generateBentoGridItems();  

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

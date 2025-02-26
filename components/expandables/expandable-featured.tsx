import { featuredData } from "@/data";
import FeatureCard from "../cards/feature-card";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ExpandableFeatured() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  //   console.log(HoveredIndex);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div className="w-full grid lg:flex lg:justify-between lg:gap-x-4">
      {featuredData.slice(1, 4).map((featured, i) => (
        <div
          key={i}
          className={cn(
            "relative h-[640px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out",
            i === hoveredIndex ? "lg:w-[40%]" : "lg:w-[33%]"
          )}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <FeatureCard
            active={i === hoveredIndex}
            title={featured.title}
            tag={featured.tag}
            video={featured.video}
          />
        </div>
      ))}
    </div>
  );
}

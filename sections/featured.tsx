import FeatureCard from "@/components/cards/feature-card";
import Heading from "@/components/heading/heading";

import { featuredData } from "@/data";

const MainFeature = featuredData[0];

export default function FeaturedSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      {/*Heading*/}
      <Heading number="01" title_1="Featured" title_2="Work" />
      {/*Feature card*/}
      <FeatureCard
        active
        title={MainFeature.title}
        tag={MainFeature.tag}
        video={MainFeature.video}
      />
    </div>
  );
}

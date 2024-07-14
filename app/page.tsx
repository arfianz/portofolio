"use client";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import { FaUser } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="w-full p-20">
          <div className="max-w-2xl mx-auto">
            <Card title="Ui Components">
              <div className="grid grid-cols-4">
                <Button>Basic Button</Button>
                <Button>
                  <GoHomeFill />
                  Home Button
                </Button>
                <Button>
                  <FaUser />
                </Button>
                <Button link="https://www.google.com">Google</Button>
              </div>
              <Input type="text" placeholder="Full Name" />
              <Input type="text" placeholder="Full Name" icon={<FaUser />} />
              <TextArea placeholder="Full Name" />
              <TextArea placeholder="Full Name" icon={<FaUser />} />
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}

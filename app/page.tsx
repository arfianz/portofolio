import Image from "next/image";
import { clsx } from "clsx";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Hello</h1>
      <h1 className="text-4xl font-secondary">My</h1>
      <h1 className="text-4xl font-local">Friends</h1>
    </div>
  );
}

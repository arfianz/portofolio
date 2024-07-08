import Image from "next/image";
import { clsx } from "clsx";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <h1 className={cn("italic", "text-yellow-400", true && "underline")}>
        Hello my friends
      </h1>
    </div>
  );
}

import Image from "next/image";
import TYBImage from "@/images/tyb.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Yarn Bazaar",
  description: "The Yarn Bazaar is a modern, efficient, and transparently managed marketplace for yarn buyers and sellers to discover real-time yarn prices, information, and market trends.",
};

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-full">
      <Image
        src={TYBImage}
        alt="TYB Logo"
        width={150}
        height={150}
        className="aspect-square"
        priority
      />
      <h1 className="text-6xl">Hey TYB!</h1>
    </div>
  );
}

import Image from "next/image";
import TYBImage from "@/images/tyb.svg";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-dvh border">
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

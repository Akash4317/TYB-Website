import { Metadata } from "next";
import FaqSection from "@/components/FAQ/FaqSection";
import Glory from "@/components/Glory/Glory";
import Hero from "@/components/hero/Hero";
import Subhero from "@/components/hero/Subhero";
import Media from "@/components/images-scroll/Media";
import Bandhu2 from "@/components/bandhu/Bandhu2";
import Say2 from "@/components/Glory/Say2";
import ProductNew from "@/components/product/ProductNew";
import Pillar from "@/components/progress/Pillar";

export const metadata: Metadata = {
  title: "The Yarn Bazaar",
  description: "The Yarn Bazaar is a modern, efficient, and transparently managed marketplace for yarn buyers and sellers to discover real-time yarn prices, information, and market trends.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Subhero />
      <Glory />
      <Say2 />
      <ProductNew />
      <Pillar />
      <Bandhu2 />
      <Media />
      <FaqSection />
    </>
  );
}
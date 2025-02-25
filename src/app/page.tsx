import { Metadata } from "next";

import Bandhu from "@/components/bandhu/Bandhu";
import FaqSection from "@/components/FAQ/FaqSection";
import Glory from "@/components/Glory/Glory";
import Hero from "@/components/hero/Hero";
import Subhero from "@/components/hero/Subhero";
import Media from "@/components/images-scroll/Media";
import Product from "@/components/product/Product";
import Bandhu2 from "@/components/bandhu/Bandhu2";

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
      <Product />
      <Bandhu />
      <Bandhu2 />
      <Media />
      <FaqSection />
    </>
  );
}
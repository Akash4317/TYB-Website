import { Metadata } from "next";

import Bandhu from "@/components/bandhu/Bandhu";
import FaqSection from "@/components/FAQ/FaqSection";
import Glory from "@/components/Glory/Glory";
import Say from "@/components/Glory/Say";
import Hero from "@/components/hero/Hero";
import Subhero from "@/components/hero/Subhero";
import Certificate from "@/components/images-scroll/Certificate";
import Media from "@/components/images-scroll/Media";
import MobileNav from "@/components/MobileNav";
import Product from "@/components/product/Product";
import Progress from "@/components/progress/Progress";
import Divider from "@/components/ui/divider";

export const metadata: Metadata = {
  title: "The Yarn Bazaar",
  description: "The Yarn Bazaar is a modern, efficient, and transparently managed marketplace for yarn buyers and sellers to discover real-time yarn prices, information, and market trends.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Certificate />
      <Subhero />
      <Divider />
      <Glory />
      <Divider />
      <Say />
      <Divider />
      <Product />
      <Divider />
      <Media />
      <Divider />
      <Bandhu />
      <Divider />
      <Progress />
      <Divider />
      <FaqSection />
      <Divider />
    </>
  );
}
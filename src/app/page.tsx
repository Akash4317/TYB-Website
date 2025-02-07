import Bandhu from "@/components/bandhu/Bandhu";
import FaqSection from "@/components/FAQ/FaqSection";
import Glory from "@/components/Glory/Glory";
import Say from "@/components/Glory/Say";
import Hero from "@/components/hero/Hero";
import Subhero from "@/components/hero/Subhero";
import MobileNav from "@/components/MobileNav";
import Product from "@/components/product/Product";
import Progress from "@/components/progress/Progress";
import Divider from "@/components/ui/divider";

export default function Home() {
  return (
    <>
      <div className="block md:hidden mb-[100px]">
        <MobileNav />
      </div>
      <Hero />
      <Subhero />
      <Divider />
      <Progress />
      <Divider />
      <Glory />
      <Divider />
      <Say />
      <Divider />
      <Product />
      <Divider />
      <Bandhu />
      <Divider />
      <FaqSection />
      <Divider />
    </>
  );
}
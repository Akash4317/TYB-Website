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

export default function Home() {
  return (
    <>
      <div className="block md:hidden mb-[100px]">
        <MobileNav />
      </div>
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
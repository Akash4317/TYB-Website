import Bandhu from "@/components/bandhu/Bandhu";
import FaqSection from "@/components/FAQ/FaqSection";
import Glory from "@/components/Glory/Glory";
import Say from "@/components/Glory/Say";
import Hero from "@/components/hero/Hero";
import Subhero from "@/components/hero/Subhero";
import MobileNav from "@/components/MobileNav";
import Product from "@/components/product/Product";
import Progress from "@/components/progress/Progress";
import ThreadDivider from "@/components/ui/ThreadDivider";


export default function Home() {
  return (
    <>
      <div className="block md:hidden mb-[100px]">
        <MobileNav />
      </div>
      <Hero />
      <Subhero />
      <ThreadDivider className="my-20" />
      <Progress />
      <ThreadDivider className="my-20" />
      <Glory />
      <ThreadDivider className="my-20" />
      <Say />
      <ThreadDivider className="my-20" />
      <Product />
      <ThreadDivider className="my-20" />
      <Bandhu />
      <ThreadDivider className="my-20" />
      <FaqSection />
      <ThreadDivider className="my-20" />
    </>
  );
}
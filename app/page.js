import AboutusSection from "../components/AboutusSection";
import Blogs from "../components/Blogs";
import HeroSection from "../components/HeroSection";
import IndustriesWeServe from "../components/IndustriesWeServe ";
import OurProducts from "../components/OurProducts";
import OurStrength from "../components/OurStrength";
import ProductType from "../components/ProductType";
import Whychooseus from "../components/Whychooseus";


export default function Home() {
  return (
    <main>
            <HeroSection /> 
            <AboutusSection />
            <Whychooseus />   
            <ProductType />
      <IndustriesWeServe />
      <OurProducts />
      <OurStrength />
      <Blogs />

 
    </main>
  );
}
   
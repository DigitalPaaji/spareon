import AboutusSection from "../components/AboutusSection";
import Blogs from "../components/Blogs";
import HeroSection from "../components/HeroSection";
import IndustriesWeServe from "../components/IndustriesWeServe ";
import OurProducts from "../components/Products";
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
      <OurProducts />

      <OurStrength />
      <IndustriesWeServe />

      <Blogs />

 
    </main>
  );
}
   
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import PolicySection from "@/components/PolicySection";

// import Slider from "react-slick";
// import { baseUrl } from "./config";

// function Fade() {
//   const settings = {
//     dots: true,
//     fade: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     waitForAnimate: false
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <img src={baseUrl + "/abstract01.jpg"} />
//         </div>
//         <div>
//           <img src={baseUrl + "/abstract02.jpg"} />
//         </div>
//         <div>
//           <img src={baseUrl + "/abstract03.jpg"} />
//         </div>
//         <div>
//           <img src={baseUrl + "/abstract04.jpg"} />
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default Fade;

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PolicySection />
      <MapSection />
      <GallerySection />
    </>
  );
}

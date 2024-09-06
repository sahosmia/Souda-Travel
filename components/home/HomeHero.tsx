"use client";
import { memo } from "react";
import { SearchSection } from "./SearchSection";
import MotionDiv from "../motion/MotionDiv";
const HomeHero: React.FC = () => {
  return (
    <section className="relative bg-cover bg-no-repeat bg-[url('/1.png')]">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      {/* Overlay with lower z-index */}
      <MotionDiv
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "linear",
          duration: 0.3,
          delay: 0.6,
          type: "Inertia",
        }}
        className="relative z-10 container pt-32 pb-32 mx-auto max-w-[90%] lg:w-5/12"
      >
        <h1
          // exit={{ opacity: 0 }}
          className="text-4xl lg:text-6xl font-semibold font-lora pb-4 text-center text-white"
        >
          Souda Travel
        </h1>
        <p className="pb-5 text-base lg:text-lg text-slate-300 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem magnam
          suscipit obcaecati doloremque natus quod sint aut reiciendis earum ad.
        </p>

        <SearchSection/>
      </MotionDiv>
    </section>
  );
};

export default memo(HomeHero);

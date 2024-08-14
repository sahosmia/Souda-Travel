import React from "react";
const HomeHero = () => {
  return (
    <section className=" bg-cover bg-no-repeat  bg-[url('/1.png')]">
      <div className="container text-center py-40 mx-auto w-5/12">
        <h1 className="text-6xl font-semibold pb-4">Souda Travel</h1>
        <p className="pb-5 text-lg text-slate-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem magnam
          suscipit obcaecati doloremque natus quod sint aut reiciendis earum ad.
        </p>

        <input type="text" className="border rounded-full w-[500px] h-10 px-5" placeholder="Serch Here Your Destination"/>
      </div>
    </section>
  );
};

export default HomeHero;

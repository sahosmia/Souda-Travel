import React from "react";

const SectionHeading = ({ title }: { title: string }) => {
  return (
    <>
      <h2 className={`text-2xl pb-5 font-bold font-lora`}>{title}</h2>
    </>
  );
};

export default SectionHeading;

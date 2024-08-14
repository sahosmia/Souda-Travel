import React from "react";

const HotelDetails = ({ params }: { params: { slug: string } }) => {
  return <div>{params.slug}</div>;
};

export default HotelDetails;

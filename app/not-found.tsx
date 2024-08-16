import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata:Metadata = {
  title:"Not Found Page"
};

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;

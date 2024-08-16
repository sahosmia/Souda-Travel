import Link from "next/link";
import React from "react";

const SearchItem = ({ url, title }: { url: string; title: string }) => {
  return (
    <div>
      <Link href={url}>{title}</Link>
    </div>
  );
};

export default SearchItem;

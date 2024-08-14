import { CountryItemType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export const CountryItem = ({ country }: { country: CountryItemType }) => {
  return (
    <Link href={`/country/${country.slug}`}>
      <Image
        src={`/country/${country.image}`}
        alt={country.name}
        width={600}
        height={400}
        className="rounded min-h-60 object-cover"
        placeholder="blur"
        blurDataURL={`/country/${country.image}`}
      />
      <h4 className="text-center py-3 text-xl font-semibold">{country.name}</h4>
    </Link>
  );
};

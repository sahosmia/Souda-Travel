import { DestinationItemType } from "@/types/types";

const DestinationBenner = ({
  destination,
}: {
  destination: DestinationItemType;
}) => {
  const { name, image, about, thumbnail } = destination;
  return (
    <section
      className={`bg-cover bg-no-repeat bg-center `}
      style={{ backgroundImage: `url("/destination/thumbnail/${thumbnail}")` }}
    >
      <div className="container text-center py-60 mx-auto w-5/12">
        <h1 className="text-6xl font-semibold pb-4">{name}</h1>
        <p className="pb-5 text-lg text-slate-700">{about}</p>
      </div>
    </section>
  );
};

export default DestinationBenner;

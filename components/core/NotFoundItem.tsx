import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const NotFoundItem = ({
  title,
  buttonUrl,
}: {
  title: string;
  buttonUrl: string;
}) => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          {title} Not Found
        </h2>{" "}
        <p className="text-lg text-gray-600 mb-8">
          The {title.toLocaleLowerCase()} you are looking for does not exist.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition"
          >
            <ArrowLeft className="mr-2" />
            Go Back to Home
          </button>
          <button
            onClick={() => router.push(buttonUrl)}
            className="inline-flex items-center px-6 py-3 bg-black text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Check other {title}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundItem;

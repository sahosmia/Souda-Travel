"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, ArrowLeftIcon, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="flex justify-center flex-col items-center">
        <AlertTriangle className="text-red-500 w-16 h-16 mb-4" />
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-600 mb-6">
          {error.message
            ? error.message
            : "We encountered an unexpected error. Please try again."}
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center px-5 py-2 bg-black text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition"
          >
            <ArrowLeftIcon className="mr-2" />
            Go Back
          </button>
          <button
            onClick={() => reset()}
            className="inline-flex items-center px-5 py-2 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition"
          >
            <RefreshCw className="mr-2" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

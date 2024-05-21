import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

const Image = ({ image, alt }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
  }, []);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div className="w-full h-full">
      {loading && !error && (
        <div className="flex justify-center items-center h-full">
          <PulseLoader color="#f1f1f1" />
        </div>
      )}
      {error && (
        <div className="flex flex-col justify-center items-center h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <p className="text-white">Error loading image</p>
        </div>
      )}
      <img
        src={image}
        className={`rounded-none lg:rounded-lg shadow-2xl ${
          loading ? "hidden" : "block"
        } lg:block`}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  );
};

export default Image;

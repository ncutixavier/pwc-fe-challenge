import React from 'react';
import { useRouter } from 'next/router';

const CustomNotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
      404 - Page Not Found
      </h1>
      <p className="text-xl text-gray-600">
        The page you are looking for does not exist.
      </p>
      <button
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => router.push('/')}
      >
        Go back to the homepage
      </button>
    </div>
  );
};

export default CustomNotFound;

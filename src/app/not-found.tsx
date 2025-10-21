"use client";

const NotFound = () => {
  const goHome = () => {
    window.location.href = "/";
  };
  return (
    <div className="bg-pickleball-green-100 flex h-screen w-screen flex-col items-center justify-center">
      <p className="text-pickleball-lime-100 text-9xl font-medium">404</p>
      <p className="mb-5 text-5xl font-medium text-white">Page Not Found</p>
      <button
        className="bg-pickleball-lime-100 text-pickleball-green-200 rounded-full px-12 py-4 text-3xl font-thin"
        onClick={goHome}
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;

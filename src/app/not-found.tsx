import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <p className="text-pickleball-lime-100 text-9xl">404</p>
      <p className="mb-5 text-5xl text-white">Page Not Found</p>
      <Link
        href="/"
        className="bg-pickleball-lime-100 text-pickleball-green-200 rounded-full px-12 py-4 text-3xl transition-opacity hover:opacity-70"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;

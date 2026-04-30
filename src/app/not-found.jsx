"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 px-4 text-center">
      <div className="relative mb-8">
        <h1 className="text-9xl font-extrabold text-orange-500 opacity-20 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl animate-bounce">☀️</span>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-slate-800 mb-4">
        Oops! Are you lost in the sun?
      </h2>
      <p className="text-slate-600 mb-8 max-w-md">
        Sorry, the summer destination you are looking for is not on our map. It
        might have evaporated in the heat!
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="btn btn-primary bg-orange-500 hover:bg-orange-600 border-none text-white px-8"
        >
          Back to Home
        </Link>
        <button
          onClick={() => window.history.back()}
          className="btn btn-outline border-orange-500 text-orange-600 hover:bg-orange-50"
        >
          Go Back
        </button>
      </div>

      <div className="mt-12 opacity-50">
        <p className="text-sm text-slate-400 font-medium tracking-widest uppercase">
          GlowSun — Summer Essentials
        </p>
      </div>
    </div>
  );
}

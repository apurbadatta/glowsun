import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="px-4 py-6">
      <div className="bg-[url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop')] h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-3xl shadow-2xl overflow-hidden relative">
      
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 text-white w-full">
          <div className="max-w-2xl">
          
            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
              Summer Collection 2026
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Glow Under the <span className="text-orange-500">Golden Sun</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-lg">
              Discover our curated summer essentials. From premium sunscreens to
              stylish beachwear, get ready for your best summer yet.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 px-8 rounded-xl shadow-lg transition-all border-none">
                  Shop Now — 50% OFF
                </Button>
              </Link>

              <Link href="#deals">
                <Button
                  variant="bordered"
                  className="text-white border-white hover:bg-white hover:text-orange-500 font-bold h-12 px-8 rounded-xl transition-all"
                >
                  Hot Deals 🔥
                </Button>
              </Link>
            </div>
          </div>
        </div>

      
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <p className="text-orange-400 font-bold text-2xl">UP TO 50%</p>
            <p className="text-white text-sm">On All Summer Outfits</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

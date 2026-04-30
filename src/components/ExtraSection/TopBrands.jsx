import {
  FaAward,
  FaShieldAlt,
  FaShippingFast,
  FaCheckCircle,
} from "react-icons/fa";

const TopBrands = () => {
  const brands = [
    { id: 1, name: "SunShade", logo: "🕶️", color: "text-orange-500" },
    { id: 2, name: "BreezeWear", logo: "👕", color: "text-blue-500" },
    { id: 3, name: "GlowSkin", logo: "✨", color: "text-yellow-500" },
    { id: 4, name: "AquaFlow", logo: "🌊", color: "text-cyan-500" },
    { id: 5, name: "EcoIsland", logo: "🏝️", color: "text-green-500" },
  ];

  return (
    <section className="py-16 bg-yellow-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-slate-400 font-semibold uppercase tracking-[0.2em] text-xs mb-2">
            Authorized Dealer
          </h2>
          <h3 className="text-3xl font-bold text-slate-800">
            Brands We Partner With
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md border border-transparent hover:border-orange-100 transition-all group"
            >
              <span
                className={`text-4xl mb-2 group-hover:scale-125 transition-transform duration-300`}
              >
                {brand.logo}
              </span>
              <span className="font-bold text-slate-600 tracking-tight">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-10 border-t border-slate-200 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
            <div className="bg-orange-100 p-3 rounded-full text-orange-600">
              <FaAward size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">
                Official Seller
              </h4>
              <p className="text-xs text-slate-500">100% Genuine Products</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <FaShippingFast size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">
                Fast Shipping
              </h4>
              <p className="text-xs text-slate-500">Delivery within 24 hours</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
            <div className="bg-green-100 p-3 rounded-full text-green-600">
              <FaShieldAlt size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">
                Secure Payment
              </h4>
              <p className="text-xs text-slate-500">Encrypted transactions</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
            <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
              <FaCheckCircle size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">
                Quality Check
              </h4>
              <p className="text-xs text-slate-500">Tested for summer heat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBrands;

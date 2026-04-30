import { FaSun, FaWater, FaTshirt, FaLeaf } from 'react-icons/fa';

const SummerCareTips = () => {
  const tips = [
    {
      id: 1,
      title: "Stay Hydrated",
      description: "Drink at least 8-10 glasses of water daily to keep your skin glowing and body energized under the heat.",
      icon: <FaWater className="text-blue-500" />,
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      title: "Sun Protection",
      description: "Always apply SPF 30+ sunscreen 20 minutes before heading out. Reapply every 2 hours for best results.",
      icon: <FaSun className="text-orange-500" />,
      bgColor: "bg-orange-50"
    },
    {
      id: 3,
      title: "Wear Breathable Fabrics",
      description: "Choose light-colored, loose cotton or linen clothes to allow air circulation and sweat evaporation.",
      icon: <FaTshirt className="text-amber-600" />,
      bgColor: "bg-amber-50"
    },
    {
      id: 4,
      title: "Eat Fresh & Light",
      description: "Incorporate seasonal fruits like watermelon and cucumber to maintain your body's natural cooling system.",
      icon: <FaLeaf className="text-green-500" />,
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
     
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Summer <span className="text-orange-500">Care Tips</span>
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Keep your summer fun and healthy with our simple yet effective daily care routine.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip) => (
            <div 
              key={tip.id}
              className={`p-8 rounded-3xl ${tip.bgColor} border hover:shadow-2xl shadow-xl border-transparent hover:border-orange-200 transition-all duration-300 group`}
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-6 text-2xl group-hover:scale-110 transition-transform">
                {tip.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{tip.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-white text-2xl md:text-3xl font-bold mb-2">Want more summer secrets?</h4>
            <p className="text-slate-400">Join our newsletter for weekly tips and exclusive discounts.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="input input-bordered w-full md:w-64 bg-slate-800 border-slate-700 text-white focus:border-orange-500" 
            />
            <button className="btn btn-primary bg-orange-500 hover:bg-orange-600 border-none text-white px-8">
              Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerCareTips;
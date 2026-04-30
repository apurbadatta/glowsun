import React from "react";
import ProductsCard from "./ProductsCard";

const TopProducts = async () => {
  const res = await fetch("https://glowsun.vercel.app/products.json");
  const products = await res.json();
  const topProducts = products.slice(0, 3);
  // console.log(topProducts)

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-end mb-10">
        <div>
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
            Top Picks
          </span>
          <h2 className="text-4xl font-bold text-slate-800">
            Popular Products
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topProducts.map((product) => (
          <ProductsCard key={product.id} product={product}>
            {" "}
          </ProductsCard>
        ))}
      </div>
    </section>
  );
};

export default TopProducts;

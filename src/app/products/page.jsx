import ProductsCard from '@/components/ProductsCard';
import React from 'react';

const AllProducts =async() => {
     const res = await fetch("https://glowsun.vercel.app/products.json");
  const products = await res.json();

    return (
        <section className="py-10 max-w-7xl mx-auto px-3">
            <h2 className="text-4xl font-bold text-slate-800 py-4 ">
            All Products
          </h2>

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {products.map(product=> <ProductsCard key={product.id} product={product} ></ProductsCard>)}
            </div>

        </div>
        </section>
    );
};

export default AllProducts;
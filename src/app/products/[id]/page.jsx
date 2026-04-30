import Link from "next/link";
import { FaStar, FaShoppingCart, FaArrowLeft, FaTruck, FaShieldAlt, FaUndo } from "react-icons/fa";
import { Button } from "@heroui/react";

const ProductDetailspage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://glowsun.vercel.app/products.json");
  const products = await res.json();
  const product =products.find(p=>p.id==id)

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product not found!</h2>
        <Link href="/products" className="text-orange-500 hover:underline">Return to Shop</Link>
      </div>
    );
  }

  return <div>
    
    <div className="min-h-screen bg-white py-10 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-600 mb-10 transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
          <span className="font-semibold">Explore All Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Product Image */}
          <div className="relative aspect-square bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 p-4 shadow-xl">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover rounded-[2rem] hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right: Details Section */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="bg-orange-100 text-orange-600 text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">
                {product.name}
              </h1>
              <div className="flex items-center gap-6">
                <p className="text-3xl font-black text-orange-600">${product.price}</p>
                <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 px-3 py-1 rounded-xl">
                  <FaStar className="text-yellow-500" />
                  <span className="text-slate-800 font-bold">{product.rating}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 border-t border-b py-6">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Description</p>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <p className="font-bold text-slate-900">Brand:</p>
                <p className="text-slate-500">{product.brand}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-slate-900">Availability:</p>
                <span className={`font-bold ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {product.stock > 0 ? `In Stock (${product.stock} units)` : 'Out of Stock'}
                </span>
              </div>
            </div>

          
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-slate-900 hover:bg-black text-white font-black h-16 flex-[2] rounded-2xl shadow-2xl transition-all active:scale-95 text-lg"
                isDisabled={product.stock === 0}
              >
                <FaShoppingCart /> Add to Cart
              </Button>
              <Button 
                size="lg"
                variant="bordered" 
                className="border-slate-200 hover:bg-slate-50 text-slate-800 font-bold h-16 flex-1 rounded-2xl text-lg"
              >
                Wishlist
              </Button>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
              <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <FaTruck className="text-orange-500 mb-2" size={20} />
                <p className="font-bold text-xs text-slate-800">Free Delivery</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <FaShieldAlt className="text-orange-500 mb-2" size={20} />
                <p className="font-bold text-xs text-slate-800">Secure Payment</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <FaUndo className="text-orange-500 mb-2" size={20} />
                <p className="font-bold text-xs text-slate-800">Easy Return</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    
    </div>;
};

export default ProductDetailspage;

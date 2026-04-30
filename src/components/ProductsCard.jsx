import React from 'react';
import {FaStar } from 'react-icons/fa';

const ProductsCard = ({product}) => {
    return (
        <div>
           
      

      <div >
        <div 
            key={product.id} 
            className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-yellow-50 group"
          >
          
            <figure className="relative h-64 overflow-hidden rounded-t-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                <FaStar className="text-yellow-400" size={14} />
                <span className="text-xs font-bold text-slate-700">{product.rating}</span>
              </div>
            </figure>

       
            <div className="card-body p-6">
              <div className="flex justify-between items-start mb-2">
                <p className="text-xs font-medium text-orange-500 uppercase tracking-wider">{product.brand}</p>
                <p className="text-xl font-bold text-slate-900">${product.price}</p>
              </div>
              
              <h3 className="card-title text-lg font-bold text-slate-800 mb-2">
                {product.name}
              </h3>
              
              <p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                {product.description}
              </p>

        
                  <button className="btn bg-orange-400 text-center hover:bg-orange-600 border-none text-white w-full rounded-xl  gap-2 cursor-pointer">
                    View Details
                  </button>
              
            </div>
          </div>
      </div>
    
        </div>
    );
};

export default ProductsCard;
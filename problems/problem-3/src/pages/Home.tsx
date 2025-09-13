import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import ShopByCategory from '../components/ShopByCategory';
import { useProducts } from '../context/ProductsContext';
import { findBestsellers } from '../utils/findBestsellers';
import ScrollCarousel from '../components/ScrollCarousel';
import bgImage from '../assets/homescreen.avif'
const FeatureCard = React.lazy(() => import('../components/FeatureCard'));

const Home : React.FC = () => {
  const productsWithImagesByCategory = useProducts();
  const bestSellers  = findBestsellers(productsWithImagesByCategory); 
  return (
    <div>
     <section
    className="w-full h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center flex items-center px-4 sm:px-6 md:px-12"
    style={{ backgroundImage: `url(${bgImage})` }}
    >
    <div className="p-4 sm:p-6 md:p-12 rounded-lg max-w-xl text-left">
     <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-black">
      Welcome to <span className="text-black">ShopEase</span>
     </h1>
     <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
      Your one stop shop for everything tech
     </p>
     <Link to="/products">
       <button className="px-6 py-3 bg-gray-500 text-black rounded-lg shadow-md hover:-translate-y-1 hover:scale-105 transition-transform duration-300">
        Shop Now
       </button>
      </Link>
    </div>
    </section>


    <section className="w-full max-w-10xl py-12 px-6  ">
      <h2 className="text-3xl sm:text-4xl  font-bold mb-6 flex justify-center ">Best Sellers</h2>
        <Suspense fallback={<div className="text-center py-10">Loading featured products...</div>}>
        <ScrollCarousel>
            {bestSellers.map((product) => (
              <FeatureCard key={product.id} product={product} />
            ))}
            </ScrollCarousel>
        </Suspense>
      </section>

      <ShopByCategory/>
    </div>
  );
};

export default Home;

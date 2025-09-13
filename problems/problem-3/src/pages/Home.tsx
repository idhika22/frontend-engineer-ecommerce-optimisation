import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import laptopImage from "../assets/laptop.jpg"
import smartwatchImage from "../assets/watch.jpg"
import phoneImage from "../assets/smartphone.jpg"
import cameraImage from "../assets/camera.jpg"
const FeatureCard = React.lazy(() => import('../components/FeatureCard'));
const Home : React.FC = () => {
 

  const products=[
    { id:1,  name:"Laptop",      price:89999,image:laptopImage},
    { id: 2, name: "Smartphone", price: 49999, image: phoneImage },
    { id: 3, name: "Smartwatch", price: 10999, image: smartwatchImage},
    { id: 4, name: "Camera", price: 55999, image: cameraImage },
    
    
  ];
  return (
    <div>
      <section className="w-full h-200 bg-cover bg-center py-12 px-6 text-center" style={{backgroundImage:`url(${bgImage})`}}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">Welcome to <span className="text-black">ShopEase</span></h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">Your one stop shop for everything tech</p>
        <Link to="/products">
          <button className="px-6 py-3 bg-gray-500 text-black rounded-lg shadow-md hover:-translate-y-1 hover:scale-110">
            Shop Now
          </button>
        </Link>
      </section>

      <section className="w-full max-w-10xl py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>

        <Suspense fallback={<div>Loading featured products...</div>}>
          <ScrollCarousel>
            {products.map((product) => (
              <FeatureCard key={product.id} product={product} />
            ))}
          </ScrollCarousel>
        </Suspense>
      </section>
    </div>
  );
};

export default Home;

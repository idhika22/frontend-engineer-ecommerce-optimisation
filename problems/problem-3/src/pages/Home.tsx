import React ,{Suspense}from 'react'
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
      {/*Hero Section*/}
      <section className="w-full bg-slate-300 py-12 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to <span className="text-gray-600">ShopEase</span></h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">Your one stop shop for everything tech</p>
        <Link to="/products"><button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md  transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">Shop Now</button></Link>
      </section>

      {/*Featured Products*/}
      <section className="w-full max-w-10xl py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Suspense fallback={<div className="text-center py-10">Loading featured products...</div>}>
            {products.map((product) => (
              <FeatureCard key={product.id} product={product} />
            ))}
          </Suspense>
        </div>
      </section>
    </div>
  )
}

export default Home
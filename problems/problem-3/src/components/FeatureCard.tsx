import React from 'react'

type Product={
  id:number;
  name:string;
  price:number;
  image:string;
}

type Props={
  product:Product;
}
const FeatureCard:React.FC<Props>= ({product}) => {
  return (
    <div className="bg-white p-4 rounded-3xl shadow-md hover:shadow-lg transition">
     <div className="w-full h-60 mb-4">
  <img
    src={product.image}
    alt={product.name}
    width={320}
    height={160}
    className="w-full h-full object-cover rounded-md"
    loading='lazy'
  />
</div>
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600 font-semibold">${product.price}</p>
      
    </div>
  )
}

export default FeatureCard


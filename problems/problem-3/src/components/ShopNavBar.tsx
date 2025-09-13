import {Link} from "react-router-dom";

function ShopNavBar() {
  return (
    <nav className="bg-[#e8e8e8] shadow-md sticky top-20 z-40 mb-15">
      <div className="container flex gap-6 items-center h-10 px-6 py-3 font-thin text-l">
        {/* Shop All */}
        <Link to="/products" className="text-gray-900">
          Shop All
        </Link>

        {/* Specific categories */}
        <Link to="/products/category/laptops" className="hover:text-blue-600">
          Laptops
        </Link>
        <Link to="/products/category/headphones" className="hover:text-blue-600">
          Headphones
        </Link>
        <Link to="/products/category/watches" className="hover:text-blue-600">
          Watches
        </Link>
      </div>
    </nav>

  )
}

export default ShopNavBar
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
const Navbar = () => {
  const cartItems=useSelector((state:RootState)=>state.cart.items);
 const distinctCount=cartItems.length;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/*Logo*/}
        <Link to="/" className="text-2xl font-bold text-gray-900">ShopEase</Link>

        {/*Links*/}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className=" text-lg  font-semibold  hover:text-blue-600">Home</Link>
          <Link to="/products" className="text-lg font-semibold hover:text-blue-600">Products</Link>
          <Link to="/checkout" className="text-lg font-semibold hover:text-blue-600">Checkout</Link>
        </div>

        {/*Cart Icon*/}
        <Link to="/checkout" className="relative">
        <span className="text-2xl">🛒</span>
        {distinctCount > 0 && ( <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-2">{distinctCount}</span>)}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
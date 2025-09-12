
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import { removeFromCart } from '../redux/cartSlice'
const Checkout = () => {
  const cartItems=useSelector((state:RootState)=>state.cart.items);
  const dispatch=useDispatch();

  const total=cartItems.reduce((sum,item)=>sum+item.price*item.quantity,0);
  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length===0 ?(<p className="text-gray-600">Your cart is empty</p>):(
        <div className="space-y-4">
          {cartItems.map(item=>(
            <div key={item.id} className="flex flex-col sm:flex-row items-center sm:justidy-between border p-4 rounded-lg shadow gap-4">
              {/*Product Details*/}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto ">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded"/>
                <div className="text-center sm:text-left">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}*{item.quantity}</p>
                </div>
              </div>
              {/*Remove */}
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full sm:w-auto" 
               onClick={()=>dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}
          {/*Total + Checkout button*/}
          <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-4 mt-4 gap-4">
            <h2 className="text-xl font-bold">Total:{total}</h2>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full sm:w-auto">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout
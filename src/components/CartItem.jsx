import { useCart } from "../context/CartContext";
import { Plus, Minus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="bg-gray-900 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-6 border border-gray-800 shadow-lg">
      <Link to={`/product/${item.id}`} className="shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-xl border border-gray-700"
        />
      </Link>
      
      <div className="flex-grow flex flex-col w-full">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${item.id}`}>
            <h3 className="text-xl font-bold text-white hover:text-orange-400 transition line-clamp-1">{item.name}</h3>
          </Link>
          <span className="text-xl font-extrabold text-orange-400 shrink-0 ml-4">
            ₹{(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-1">{item.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-3 bg-gray-800 rounded-full p-1 border border-gray-700">
            <button
              onClick={() => removeFromCart(item.id)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-bold text-white min-w-[1.5rem] text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => addToCart(item)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          <button
            onClick={() => removeFromCart(item.id, true)}
            className="text-gray-500 hover:text-red-500 transition p-2 flex items-center gap-1"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { addToCart, removeFromCart } from '../slices/cartSlice';


const CartScreen = () => {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);
  

  const addToCartHandler = (item,qty) =>{
    dispatch(addToCart ({...item,qty}))
  }

  const removeFromCartHandler = (id) =>{
    dispatch(removeFromCart(id))

  }

  return (
    <div>
      <Link to="/">
        <button className="btn my-2">Go back</button>
      </Link>

      <div className="Top_Cart ">
      <h3 className='text-3xl mx-3 font-style: italic font-bold text-cyan-500 text-decoration-line: underline'>My Cart</h3>
       <div className="Side_Cart flex justify-around">
       <h2 className="card-title text-zinc-500 ">Sub Total:{
                        cartItem.reduce((acc,item)=> 
                          acc + item.qty
                        ,0).toFixed()
                        }
                        </h2>
                        <h2 className="card-title text-zinc-500 "> Total Price:{
                        cartItem.reduce((acc,item)=> 
                          acc + item.qty * item.price
                        ,0).toFixed()
                        }
                        </h2>
                        <button className='btn btn-success'>Check Out</button>

       </div>
      </div>
      {cartItem.length === 0 ? <p>There is no item in the cart.</p> : (
        <div className=''>
          {cartItem.map((item) => (
            
              <div className="flex flex-col md:flex-row gap-4 p-3 border border-gray-200 rounded-lg shadow-sm my-4">
                <Link to={`/product/${item._id}`} key={item._id}>
                <div className="md:w-14/16">
                  <img width={"100%"} className="h-[300px] object-cover" src={`${item.image}`} alt="" />
                </div>
                </Link>

                <div className="flex flex-col md:w-2/3">
                  {/* Item Details Section */}
                  <div className="card mb-4">
                    <div className="card-body">
                      <h2 className="card-title">{item.name}</h2>
                      <p className='text-neutral-400'>{item.description}</p>
                      <p>Price: ₹{item.price}</p>
                      {item.countInstock > 0 && (
                        <div className='flex gap-5 items-center'>
                          <h4>Qty :</h4>
                          <form>
                            <select
                              className="select select-bordered w-full max-w-xs my-2"
                              value={item.qty}
                              onChange={(e) => {addToCartHandler(item,Number(e.target.value))}}
                            >
                              {[...Array(item.countInstock).keys()].map((item) => (
                                <option key={item + 1} value={item + 1}>
                                  {item + 1}
                                </option>
                              ))}
                            </select>
                          </form>
                          <button className="btn btn-outline btn-error" onClick={() => removeFromCartHandler(item._id)}>
                          <MdDelete style={{ color: 'red' }} size={24} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  
                 
                </div>
               
              </div>
            
          ))}
        </div>
      )}
    </div>
  )
}

export default CartScreen

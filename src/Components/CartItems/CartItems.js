import { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import Remove from '../Assets/cart_cross_icon.png'
import {useState,useEffect,useCallback} from 'react';

function CartItems () {
  const { productData, cartData, removeFromCart } = useContext(ShopContext)
  const [total,setTotal]=useState(0);


 const getTotal=useCallback(function()
 {
  let total=0;
  productData.map((item, index) => {
    if (cartData[item._id] > 0) {
      total+=item.price*cartData[item._id]
      
    }})

    setTotal(total);

 },[productData,cartData])

  useEffect(function()
  {
    getTotal();


  },[getTotal])

  return (
    <div className='cart-items'>
      <div className='cart-items-format-main'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {productData.map((item, index) => {
        if (cartData[item._id] > 0) {
          return (
            <div key={item._id} className='cart-item'>
              <div className='cart-items-format'>
                <img
                  src={process.env.REACT_APP_PUBLIC_URL+"/"+ item.productImage}
                  className='product'
                  alt='cart product'
                />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <button type='btn' className='cart-item-quantity'>
                  {cartData[item._id]}
                </button>
                <p>${item.price * cartData[item._id]}</p>
                <img
                  src={Remove}
                  className='remove-cart'
                  onClick={() => {
                    removeFromCart(item._id)
                  }}
                  alt='remove '
                />
                <hr />
              </div>
            </div>
          )
        }
        return null
      })}

      <div className='cart-items-down'>
        <div className='cart-items-total'>
          <h1>Total</h1>
          <div>
            <div className='cart-items-total-items'>
              <p>SubTotal</p>
              <p>${total}</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems

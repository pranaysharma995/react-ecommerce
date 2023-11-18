import { useContext } from 'react'
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext'
import Remove from '../Assets/cart_cross_icon.png'

function CartItems () {
  const { data, cartData, removeFromCart } = useContext(ShopContext)

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
      {data.map((item, index) => {
        if (cartData[item.id] > 0) {
          return (
            <div className='cart-item'>
              <div className='cart-items-format'>
                <img src={item.image} className='product' alt='cart icon' />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button type='btn' className='cart-item-quantity'>{cartData[item.id]}</button>
                <p>${item.new_price * cartData[item.id] }</p>
                <img
                  src={Remove}
                  className='remove-cart'
                  onClick={() => {
                    removeFromCart(item.id)
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
                    <p>${0}</p>
                </div>
                <hr />
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems

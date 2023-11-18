import './ProductDisplay.css'
import Star from '../Assets/star_icon.png'
import StarDull from '../Assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

function ProductDisplay ({ product }) {
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img src={process.env.REACT_APP_PUBLIC_URL+"/"+ product.productImage} alt='product' />
          <img src={process.env.REACT_APP_PUBLIC_URL+"/"+ product.productImage} alt='product' />
          <img src={process.env.REACT_APP_PUBLIC_URL+"/"+ product.productImage} alt='product' />
          <img src={process.env.REACT_APP_PUBLIC_URL+"/"+ product.productImage} alt='product' />
        </div>
        <div className='productdisplay-img'>
          <img src={process.env.REACT_APP_PUBLIC_URL+"/"+ product.productImage} alt='product' />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
          <img src={Star} alt='star' />
          <img src={Star} alt='star' />
          <img src={Star} alt='star' />
          <img src={Star} alt='star' />
          <img src={StarDull} alt='star' />
        </div>
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-old'>
            ${product.oldPrice}
          </div>
          <div className='productdisplay-right-price-new'>
            ${product.price}
          </div>
        </div>
        <div  className='productdisplay-right-description'>
            Lorep ipsum is simlu dummy text
        </div>
        <div  className='productdisplay-right-size'>
            <h1>Select Size</h1>
            <div  className='productdisplay-right-sizes'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            <button onClick={()=> {addToCart(product.id)}}>Add To Cart</button>
            <p className='productdisplay-right-category'>
                <span>Category : </span>{product.name}
            </p>
        </div>
      </div>
    </div>
  )
}
export default ProductDisplay

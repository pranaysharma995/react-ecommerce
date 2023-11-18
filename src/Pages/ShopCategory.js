import { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import sort from '../Components/Assets/dropdown_icon.png'

function ShopCategory (props) {
  const { productData } = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt='Page banner ' />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1 to 12</span>
          out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={sort} alt='sort' />
        </div>
      </div>
      <div className='shopcategory-products'>
        {productData.map((item, index) => {
          if (item.category === props.category) {
            return (
              <Item
                key={index}
                id={item._id}
                name={item.name}
                image={item.productImage}
                price={item.price}
                old_price={item.old_price}
              />
            )
          } else {
            return <></>
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory

import './CSS/ShopCategory.css'
import Item from '../Components/Item/Item'
import sort from '../Components/Assets/dropdown_icon.png'

function ShopCategory ({banner,category,data}) {
  return (
    <div className='shop-category'>
      <img src={banner} alt='Page banner ' />
      <div className='shopcategory-indexSort'>
        <p>
          <span>{data.length} </span>
          / {data.length} products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={sort} alt='sort' />
        </div>
      </div>
      <div className='shopcategory-products'>
        {data.map((item, index) => {
          if (item.category === category) {
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

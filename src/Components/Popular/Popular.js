import './Popular.css'
import Item from '../Item/Item'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Popular () {
  const [data, setData] = useState([])

  useEffect(function () {
    axios
      .get('http://localhost:7000/shop/offer')
      .then(res => {
        console.log(res.data.data);
        setData(res.data.data)
      })
      .catch(err => {
        setData([])
      })
  }, [])
  return (
    <div className='popular'>
      <h1>Heavy Discounts</h1>
      <hr />
      <div className='popular-item'>
        {data.map((item, index) => {
            if(item.offer === true)
            {
                return(
                <Item
                key={index}
                id={item._id}
                name={item.name}
                image={item.productImage}
                price={item.price}
                category={item.category}
                oldPrice={item.oldPrice}
              />)
            }
            else
            {
                return null
            }
        }
        )}
      </div>
    </div>
  )
}

export default Popular

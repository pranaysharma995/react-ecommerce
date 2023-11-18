import './NewCollection.css'
import Item from '../Item/Item'
import { useEffect, useState } from 'react'
import axios from 'axios'

function NewCollection () {
  const [data, setData] = useState([])

  useEffect(function () {
    axios
      .get('http://localhost:7000/shop/latest')
      .then(res => {
        setData(res.data.data)
      })
      .catch(err => {
        setData([])
      })
  }, [])
  return (
    <div className='new-collections'>
      <h1>New Collection</h1>
      <hr />
      <div className='collections'>
        {data.map((item, index) => (
          <Item
            key={index}
            id={item._id}
            name={item.name}
            image={item.productImage}
            price={item.price}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
    </div>
  )
}

export default NewCollection

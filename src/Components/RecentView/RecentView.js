import { useEffect, useState } from 'react'
import './RecentView.css'
import Item from '../Item/Item'

function RecentView (props) {
  const [data, setData] = useState([])
  useEffect(function () {
    let recent = JSON.parse(localStorage.getItem('recent'))
    setData(recent.reverse());
  }, [])
  return (
    <div className='recent'>
      <h1>Recenty View</h1>
      <hr />
      <div className='recent-item'>
        {data.map((item, index) => {
            if(index >3)
            {
                return(<></>);
            }
            return (
              <Item
                key={index}
                id={item.nid}
                name={item.name}
                image={item.image}
                price={item.price}
                category={item.category}
                oldPrice={item.oldPrice}
              />
            )
        })}
      </div>
    </div>
  )
}

export default RecentView

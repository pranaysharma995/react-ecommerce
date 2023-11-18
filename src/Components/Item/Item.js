import './Item.css'
import { Link } from 'react-router-dom'
function Item (props) {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          src={process.env.REACT_APP_PUBLIC_URL+"/"+ props.image}
          alt='item'
        />
        <p>{props.name}</p>
        <div className='item-prices'>
          <div className='item-prices-new'>${props.price}</div>
          {props.oldPrice ? (
            <div className='item-prices-old'>${props.oldPrice}</div>
          ) : null}
        </div>
      </Link>
    </div>
  )
}

export default Item

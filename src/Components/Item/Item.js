import './Item.css'
import { Link } from 'react-router-dom'
function Item (props) {

  const moveToTop=()=>
  {
    console.log("Item clicked");
    console.log(props);
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
    if(localStorage.getItem('recent'))
    {
      let recent=JSON.parse(localStorage.getItem("recent"));
      recent.push(props);
      localStorage.setItem("recent",JSON.stringify(recent));
    }
    else
    {
      let recent=[];
      localStorage.setItem("recent",JSON.stringify(recent));
      recent=JSON.parse(localStorage.getItem("recent"));
      recent.push(props);
      localStorage.setItem("recent",JSON.stringify(recent));
    }
  }
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img
          src={process.env.REACT_APP_PUBLIC_URL+"/"+ props.image}
          alt='item'
          onClick={() => {moveToTop()}}
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

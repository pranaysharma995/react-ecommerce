import './Breadcrum.css'
import arrow from '../Assets/breadcrum_arrow.png'

function Breadcrum (props) {
  const { product } = props
  return (
    <div className='breadcrum'>
      Home <img src={arrow} alt='arrow' /> Shop <img src={arrow} alt='arrow' />{product.category}<img src={arrow} alt='arrow' />
      {product.name}
    </div>
  )
}
export default Breadcrum

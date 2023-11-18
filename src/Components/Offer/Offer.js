import './Offer.css'
import exclusive from '../Assets/exclusive_image.png'

function Offer () {
  return (
    <div className='offer'>
      <div className='offer-left'>
        <h1>Exclusive</h1>
        <h1>Offer for you</h1>
        <p>Only on some product</p>
        <button type='button'>Check Now</button>
      </div>
      <div className='offer-right'>
        <img src={exclusive} alt='Exclusive' />
      </div>
    </div>
  )
}

export default Offer

import './DescriptionBox.css'

function DescriptionBox () {
  return (
    <div className='description-box'>
      <div className='description-box-navigator'>
        <div className='description-box-nav-box'>
            Description
        </div>
        <div className='description-box-nav-box fade'>
            Reviews
        </div>
      </div>
      <div className='description-box-description'>
        <p>Lorep ipsum is simply dummybtext</p>
      </div>
    </div>
  )
}
export default DescriptionBox

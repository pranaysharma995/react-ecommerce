import './NewsLetter.css';


function NewsLetter()
{
    return(
        <div className='newsletter'>
        <h1>Get exclusive offer on your email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type='email' name='email' placeholder='Email' />
            <button type='button'>Subscribe</button>
        </div>

        </div>
    )
}
export default NewsLetter
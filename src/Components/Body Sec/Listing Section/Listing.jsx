import React from 'react'
import './listing.css'

// Imported Icons ======>
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'

// Imported Images =====>
import img from '../../../Assets/image (1).png'
import img2 from '../../../Assets/image (3).png'
import img3 from '../../../Assets/image (4).png'
import img4 from '../../../Assets/image (5).png'
import img5 from '../../../Assets/image (6).png'
import img6 from '../../../Assets/image (7).png'
import img7 from '../../../Assets/image (8).png'
import img8 from '../../../Assets/image (9).png'
import img9 from '../../../Assets/image (10).png'
import img10 from '../../../Assets/image (2).png'

import user1 from '../../../Assets/user (1).jpg'
import user2 from '../../../Assets/user (2).jpg'
import user3 from '../../../Assets/user (3).jpg'

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="Img name" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={img2} alt="Img name" />
          <h3>Coffee Plant</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={img3} alt="Img name" />
          <h3>Button Fern</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img4} alt="Img name" />
          <h3>Spider Plant</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img5} alt="Img name" />
          <h3>Spider Plant</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img6} alt="Im name" />
          <h3>Spider Plant</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img7} alt="Img name" />
          <h3>Spider Plant</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img8} alt="Img name" />
          <h3>Spider Plant</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img9} alt="Img name" />
          <h3>Spider Plant</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img10} alt="Img name" />
          <h3>Spider Plant</h3>
        </div>

      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Img" />
              <img src={user2} alt="User Img" />
              <img src={user3} alt="User Img" />
              <img src={user1} alt="User Img" />
            </div>
            <div className="cardText">
              <span>
                14.566 Plants sold <br/>
                <small>
                  21 Sellers <span className='date'>7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user3} alt="User Img" />
              <img src={user1} alt="User Img" />
              <img src={user3} alt="User Img" />
              <img src={user1} alt="User Img" />
            </div>
            <div className="cardText">
              <span>
                28.566 Plants sold <br/>
                <small>
                  26 Sellers <span className='date'>31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Listing
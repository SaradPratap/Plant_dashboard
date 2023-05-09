import React from 'react'
import './sidebar.css'


import logo from '../../Assets/logo.png'


import { IoSpeedometer } from 'react-icons/io5'
import { MdDeliveryDining } from 'react-icons/md'
import { MdExplore   } from 'react-icons/md'
import { GiGroundSprout  } from 'react-icons/gi'
import {AiOutlinePieChart  } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import {MdPermContactCalendar  } from 'react-icons/md'
import { BsCreditCard2FrontFill } from 'react-icons/bs'
import { BsQuestionCircle } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>Plants.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <IoSpeedometer className="icon"/>
              <span className="smallText">
                Dashboard
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdDeliveryDining className="icon"/>
              <span className="smallText">
                My orders
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdExplore  className="icon"/>
              <span className="smallText">
                Explore
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <GiGroundSprout className="icon"/>
              <span className="smallText">
                Products
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <AiOutlinePieChart className="icon"/>
              <span className="smallText">
                Chart
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BiTrendingUp className="icon"/>
              <span className="smallText">
                Trends
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdPermContactCalendar className="icon"/>
              <span className="smallText">
                Contract
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsCreditCard2FrontFill className="icon"/>
              <span className="smallText">
                Billing
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon"/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>Having trouble in Plants, please contact us for more information.</p>
          <button className='btn'>Contact us</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header_logo' src={assets.amazon_clone} alt="" />
      </Link>

      <div className="header_search">
        <input className='header_searchInput' type="text" />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className='header_optionLineOne'>Hello Guest</span>
          <span className='header_optionLineTwo'>Sign In</span>
        </div>

        <div className="header_option">
          <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>
        </div>

        <div className="header_option">
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>

        <Link to='/checkout' >
          <div className="header_optionBasket">
            <ShoppingCartIcon />
            <span className="header_optionLineTwo header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
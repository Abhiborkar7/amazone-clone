import React from 'react'
import './Checkout.css';
import { assets } from '../../assets/assets';
import Subtotal from '../Subtotal/Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
      <div className="checkout_left">
        <img className="checkout_ad" src={assets.h_banner} alt="" />

        <div>
          <h2 className="checkout_title">Your shopping Basket</h2>
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal/>
      </div>
      
    </div>
  )

}
      
export default Checkout 
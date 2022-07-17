import {useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeShoeFromCart } from '../store/cart'

import '../styles/cart.css'

const Cart = () => {

    const dispatch = useDispatch()

    const {list,totalPrice} = useSelector(state => state.cart)


  return (
    <div className="cart-container">
        <div className="cart-wrapper">
            <div className="cart-left">
                <div className="cl-top">
                    <span> Free Shipping for Members. </span><br />
                    Become a Nike Member for fast and free shipping. <Link to={'/member/profile/login?continueUrl='+window.location.href}> Join us </Link> or <Link to={'/member/profile/login?continueUrl='+window.location.href} > Sign-in </Link>
                </div>

                <p className="cart-title">
                    Bag
                </p>

                <div className="cart-items_container">
                    <div className="cart-items_wrapper">
                        {
                            list.map((cartItem) => {
                                return (
                                    <div className="cart-item">
                                        <div className="cart-item_top">
                                            <div className="cart-item-left">
                                                <img src={cartItem.imageLink} alt="" />
                                            </div>
                                            <div className="cart-item-right">
                                                <div className="ci_name">
                                                    <span>{cartItem.shoename}</span>
                                                    <span>{cartItem.shoeprice}</span>
                                                </div>

                                                <div className="ci_cat">
                                                    <span>{cartItem.shoecat}</span>
                                                </div>

                                                <div className="ci-actions">
                                                    <div className="favorite-icon">
                                                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
                                                    </div>
                                                    <div className="favorite-icon" onClick={() => dispatch(removeShoeFromCart(cartItem))}>
                                                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3"></path></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cart-item_bottom">
                                            Shipping <br />
                                            Arrives Wed, Jul 27 - Fri, Jul 29 <Link to=""> Edit Location </Link>
                                            <br /><br />
                                            Free Pickup <br />
                                            <Link to="/"> Find a Store </Link>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="cart-right">

                <p className="summary">Summary</p>

                <div className="subtot_section">    
                    <div className="subtotal">
                        <span>Subtotal</span>
                        <span>${totalPrice}</span>
                    </div>
                    <div className="estim_shipping">
                        <span>Estimated Shipping &amp; Handling</span>
                        <span>$7.00</span>
                    </div>
                    <div className="subtotal">
                        <span>Estimated Tax</span>
                        <span>—</span>
                    </div>
                </div>

                <div className="tot-section">
                    <span>Total</span>
                    <span>${totalPrice + 7}</span>
                </div>

                <div className="checkout_actions">
                    <div className="ca-btn">Checkout</div>
                    <div className="ca-btn paypal-btn"><img src="https://www.nike.com/assets/experience/pet/payment-icons/paypal@2x.png" alt="" /></div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

const CartItem = () => {
    return(
        <></>
    )   
}

export default Cart
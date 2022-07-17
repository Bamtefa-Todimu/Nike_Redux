import {useRef,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartModalClosed } from '../store/cart'

import '../styles/subheader.css'

import closeIcon from '../assets/images/close-icon.svg'

const SubHeader = () => {

    const {recentItem,noOfItems,modal} = useSelector(state => state.cart)

    const [cartModalOpen,setCartModalOpen] = useState(false)

    const searchInputRef = useRef(null)
    const menuRef = useRef(null)
    const closeBtnRef = useRef(null)
    const periBtnRef = useRef(null)
    const shcref = useRef(null)
    const shwref = useRef(null)
    const popsearchRef = useRef(null)

    const [searchFocused,setSearchFocused] = useState(false)
    
    
    const handleSearchFocused = () => {
        if(searchFocused)
        {
            menuRef.current.classList.add('hidden')
            periBtnRef.current.classList.add('hidden')
            closeBtnRef.current.classList.remove('hidden')
            searchInputRef.current.classList.add('searchTriggered')
            searchInputRef.current.parentNode.parentNode.classList.add('sbwr-active')
            shcref.current.classList.add('subheader-container-active')
            shwref.current.classList.add('subheader-wrapper-active')
            popsearchRef.current.classList.remove('hidden')
        }
        else
        {
            menuRef.current.classList.remove('hidden')
            periBtnRef.current.classList.remove('hidden')
            closeBtnRef.current.classList.add('hidden')
            searchInputRef.current.classList.remove('searchTriggered')
            searchInputRef.current.parentNode.parentNode.classList.remove('sbwr-active')
            shcref.current.classList.remove('subheader-container-active')
            shwref.current.classList.remove('subheader-wrapper-active')
            popsearchRef.current.classList.add('hidden')


        }
    }


    useEffect(() => {
        handleSearchFocused()
    },[searchFocused,setSearchFocused])

    useEffect(() => {

        if(modal)
        {

        window.scrollTo({
        top: 0,
        behavior: 'auto',
        });

        setTimeout(() => {
            setCartModalOpen(true)
        },100)
        }

    },[recentItem,noOfItems,modal])



  return (
    <div className='subheader-container' ref={shcref}>
        <div className="subheader-wrapper" ref={shwref}>
            <Link to="/" style={{textDecoration:"none"}}>
                <div className="sbw-left">
                    <svg class="pre-logo-svg" height="60px" width="60px" fill="#111" viewBox="0 0 69 32"><path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path></svg>
                </div>
            </Link>
            <div className="sbw-middle" ref={menuRef}>
                <span>New &amp; Featured</span>
                <span>Men</span>
                <span>Women</span>
                <span>Kids</span>
                <span>Sale</span>
                <span>Back to School</span>
            </div>
            <div className="sbw-right">
                <div className="sbw-search-container">
                    <div className="sbw-search-wrapper" ref={searchInputRef}>
                        <div className="search-icon" onClick = {() => setSearchFocused(searchFocused => !searchFocused)}>
                        <svg  fill="#111" height="25px" width="25px" viewBox="0 0 24 24"><path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path></svg>
                        </div>
                        <input  type="text" name="" id="sbw-search" placeholder='Search' onFocus={() => setSearchFocused(searchFocused => !searchFocused)}/>
                    </div>

                    <div className="pop-searches hidden" ref={popsearchRef}>
                        <p>Popular Search Terms</p>
                        <ul>
                            <li>Air Force 1</li>
                            <li>Jordan</li>
                            <li>Air Max</li>
                            <li>Blazer</li>
                        </ul>
                    </div>

                </div>

                <div className="sbw-peri" ref={periBtnRef}>

                    <div className="sbw-heart">
                        <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24"><path d="M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z"></path></svg>
                    </div>

                    <Link to="/cart">
                    <div className="sbw-bag">
                        <span>{(noOfItems === 0)?null:noOfItems}</span>
                        <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24"><path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path><path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path></svg>
                    </div>
                    </Link>

                    

                </div>

                
            </div>

            <div className="close-search hidden" ref={closeBtnRef} onClick = {() => setSearchFocused(searchFocused => !searchFocused)}>
                    <svg fill="#111" height="12px" width="12px" viewBox="0 0 24 24"><path d="M15.04 12L24 2.96 21.04 0 12 8.96 3.04 0 0 2.96 9.04 12 0 20.96 3.04 24 12 14.96 21.04 24 24 20.96z"></path></svg>
            </div>
        </div>

        {cartModalOpen && <CartNotification recentItem={recentItem} noOfItems={noOfItems} handleCartModalOpen = {() => setCartModalOpen(false)}/>}
    </div>
  )
}


const CartNotification = ({recentItem,noOfItems,handleCartModalOpen}) => {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        

        
        document.body.style.overflow = "hidden"
        setTimeout(() => {
            document.body.style.overflow = "visible"
            handleCartModalOpen()
            dispatch(cartModalClosed({}))
        },3000)
    },[])

    return(
        <div className="cart-noti_container">
            <div className="cart-noti-wrapper">
                <div className="cnw-header">
                    <span>Added to Bag</span>
                    <span className="closeBtn" onClick={() => {handleCartModalOpen();document.body.style.overflow = "visible";dispatch(cartModalClosed({}))}}><img src={closeIcon} alt="" /></span>
                </div>

                <div className="cnw-body">
                    <div className="cnw-img">
                        <img src={recentItem.imageLink} alt="" />
                    </div>

                    <div className="cnw-info">
                        <p className="cnw-name">{recentItem.shoename}</p>
                        <p className="cnw-cat">{recentItem.shoecat}</p>
                        <p className="cnw-price">{recentItem.shoeprice}</p>
                    </div>
                </div>

                <div className="cnw-actions">
                    
                        <div className="cnw_view-bag" onClick={() => {navigate('/cart');handleCartModalOpen();document.body.style.overflow = "visible";dispatch(cartModalClosed({}))}}>
                            View Bag ({noOfItems})
                            </div>
                    
                    <div className="cnw_checkout">Checkout</div>
                </div>
            </div>

            <div className="cart-noti-close" onClick={() => {handleCartModalOpen();document.body.style.overflow = "visible";dispatch(cartModalClosed({}))}}>

            </div>
        </div>
    )
}

export default SubHeader
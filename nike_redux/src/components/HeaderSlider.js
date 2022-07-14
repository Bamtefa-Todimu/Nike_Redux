import React , {useState,useEffect,useRef}from 'react'
import '../styles/headerslider.css'


const HeaderSlider = () => {

    const [slideOffset,setSlideOffset] = useState(0)
    const [autoSlideOffset,setAutoSlideOffset] = useState(0)

    const sliderRef = useRef(null)

    const handleSlideChange = () => {

        console.log(slideOffset)
        if(slideOffset > 0)
        {
            sliderRef.current.style.marginLeft = "-1536px"
            setSlideOffset(-1536)
        }
        else if(slideOffset < -1536)
        {
            sliderRef.current.style.marginLeft = "0"
            setSlideOffset(0)
        }
        else
        {
            sliderRef.current.style.marginLeft = slideOffset+"px"
        }

        
        
        
    }

    useEffect(() => {
        handleSlideChange()
    },[slideOffset,setSlideOffset])

    // useEffect(() => {
    //     setInterval(() => { 
    //         setSlideOffset(slideOffset => slideOffset-768) 
    //     },5000)
    // },[])

    
  return (
    <div className='header-slider-container'>
        <div className="header-slider-wrapper">
            <div className="hsw-container" ref = {sliderRef}>

            <div className="hsw-slide hsws-1">
                <p>SAVE UP TO 60%</p>
                <a href="/">Log in and use code READY20 at checkout.</a>
            </div>
            <div className="hsw-slide hsws-2">
                <p>Free Shipping + Returns, Free Membership, Exclusive Products</p>
                <a href="/">Join Now</a>
            </div>
            <div className="hsw-slide hsws-3">
                <p>50% Off All Bras</p>
                <a href="/">Log in and use code BRA50 at checkout.</a>
            </div>
            </div>


            <div className="swipe-control swipe-left" onClick={() => setSlideOffset(slideOffset+768)}>
                <svg aria-hidden="true" fill="#acacac" height="15px" width="15px" viewBox="0 0 185.4 300"><path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"></path></svg>
            </div>
            <div className="swipe-control swipe-right" onClick={() => setSlideOffset(slideOffset-768)}>
                <svg aria-hidden="true" fill="#acacac" height="15px" width="15px" viewBox="0 0 185.4 300"><path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z"></path></svg>
            </div>
        </div>
    </div>
  )
}

export default HeaderSlider
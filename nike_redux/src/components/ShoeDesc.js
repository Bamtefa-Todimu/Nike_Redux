import {useState,useEffect,useRef} from 'react'

import {useSelector,useDispatch} from 'react-redux'
import { requestShoe } from '../store/shoe'


import shoeList from "../testShoes"
import heartIcon from '../assets/images/heart-icon.svg'
import upArrow from '../assets/images/up-arrow.svg'

import '../styles/shoeDesc.css'
import { useParams } from 'react-router-dom'

const ShoeDesc = () => {

    const {id} = useParams()
    
    const dispatch = useDispatch()
    
    const fsRef = useRef(null)
    const arrowRef = useRef(null)
    const fsRef1 = useRef(null)
    const arrowRef1 = useRef(null)
    
    const shoes = useSelector(state => state.shoes)
    const {list} = shoes

    const [specificShoe,setSpecificShoe] = useState([])
    const [currShoe,setCurrShoe] = useState({})
    const [fsop,setfsop] = useState(false)
    const [fsop1,setfsop1] = useState(false)


    const handleFsOpened = () => {
        
       if(fsop)
       {
           fsRef.current.classList.add('fs-opened')
           arrowRef.current.classList.remove('arrow-rotated')
        } 
        else
        {
            fsRef.current.classList.remove('fs-opened')
           arrowRef.current.classList.add('arrow-rotated')
        }
       

    }
    const handleFsOpened1 = () => {
        
       if(fsop1)
       {
           fsRef1.current.classList.add('fs-opened')
           arrowRef1.current.classList.remove('arrow-rotated')
        } 
        else
        {
            fsRef1.current.classList.remove('fs-opened')
           arrowRef1.current.classList.add('arrow-rotated')
        }
       

    }

    useEffect(() => {
        setCurrShoe(shoeList.find((shoe) => shoe.id === 1))
        dispatch(requestShoe())
    },[])

    useEffect(() => {
        
        if(fsRef.current)handleFsOpened()
        
    },[fsop,setfsop])

    useEffect(() => {
        
        if(fsRef1.current)handleFsOpened1()
        
    },[fsop1,setfsop1])

    useEffect(() => {
        if(list.data)
        {
            // console.log(list)
            // console.log(list.data.find((shoe) => shoe._id === id))
            let specShoe = list.data.find((shoe) => shoe._id === id)
            setSpecificShoe(specShoe)
        }
        
    },[list,id])
  return (
    <div className="shoe-desc-container">
        <div className="shoe-desc-wrapper">
            <div className="shoe-desc-pics">
                {
                    (specificShoe.displayPhotos)?
                    specificShoe.displayPhotos.map((dp,index) => {
                        return( <div key={index} className="sdp-container">
                            <img src={dp} alt=""  className="sdp-image"/>
                        </div>)
                    }):null
                }
            </div>

            {

                (specificShoe.shoename)?

            <div className="shoe-desc-info">
                <div className="sdi-header">
                    <p className="sdih-name">{specificShoe.shoename}</p>
                    <p className="sdih-cat">{specificShoe.shoecat}</p>
                    <p className="sdih-price">{specificShoe.shoeprice} <span>{specificShoe.shoepriceoff}</span></p>
                </div>

                <div className="sdi-sizes">
                    <div className="sdis-top">
                        <p>Select Size</p>
                        <p>Size Guide</p>
                    </div>

                    <div className="sdis-values">
                        <div className="sdisv">M 3.5/ W 5</div>
                        <div className="sdisv">M 4/ W 5.5</div>
                        <div className="sdisv">M 4.5/ W 6</div>
                        <div className="sdisv">M 5/ W 6.5</div>
                        <div className="sdisv">M 5.5/ W 7</div>
                        <div className="sdisv">M 6/ W 7.5</div>
                        <div className="sdisv">M 6.5/ W 8</div>
                        <div className="sdisv">M 7/ W 8.5</div>
                        <div className="sdisv">M 7.5/ W 9</div>
                        <div className="sdisv">M 8/ W 9.5</div>
                        <div className="sdisv">M 8.5/ W 10</div>
                        <div className="sdisv">M 9/ W 10.5</div>
                        <div className="sdisv">M 9.5/ W 11</div>
                        <div className="sdisv">M 10/ W 11.5</div>
                        <div className="sdisv">M 10.5/ W 12</div>
                        <div className="sdisv">M 11/ W 12.5</div>
                        <div className="sdisv">M 11.5/ W 13</div>
                        <div className="sdisv">M 12/ W 13.5</div>
                        <div className="sdisv">M 12.5/ W 14</div>
                        <div className="sdisv">M 13/ W 14.5</div>
                        <div className="sdisv size-invalid">M 13.5/ W 15</div>
                        <div className="sdisv">M 14/ W 15.5</div>
                        <div className="sdisv">M 14.5/ W 16.5</div>
                        <div className="sdisv">M 15/ W 17.5</div>
                        <div className="sdisv">M 15.5/ W 18.5</div>
                        <div className="sdisv">M 16/ W 19.5</div>
                    </div>
                </div>

                <div className="sdi-actions">
                    <p>4 interest-free payments of $40.00 with <span>Klarna.</span> <a href="/">Learn more
                        </a> </p>

                        <div className="sdia add-to-bag_btn">Add to Bag</div>
                        <div className="sdia favorite_btn">Favorite <img src={heartIcon} alt="" /></div>
                </div>

                <div className="sdi-info">
                    Shipping* <br />
                    To get accurate shipping information <span>Edit Location</span>
                    <br /><br />

                    Free Pickup <br />
                    <span>Find a Store</span>
                    <br /><br />
                    <span>* Faster Shipping options may be available</span>
                    <br /><br /><br />

                    LeBron plays less in the paint and more at the point, so it makes sense that he wants to feel a little quicker. His 19th signature gives you the feeling of containment but with a lower, lighter design that's ideal for fast, strong players like LeBron who stretch the court.
                    <br /><br />

                    <ul>
                        <li>Shown: White/Medium Blue/Siren Red/Black</li>
                        <li>Style: DH1270-100</li>
                    </ul>
                    <br />

                    <span>View Product Details</span>

                    
                </div>

                <div className="sdi-shipping_reviews">
                    <div className="fs_r" onClick={() => {setfsop(!fsop);console.log("jjs")}} ref={fsRef}>
                        <div className="f_r_head">
                            Free Shipping &amp; Returns

                            <img className = "arrow-rotated" src={upArrow} alt="" ref={arrowRef}/>
                        </div>
                        Free standard shipping and free 60-day returns for Nike Members. <span> Learn more. </span>  <span> Return policy exclusions apply. </span>

                        <br /><br />

                        <span> Pick-up available at select Nike Stores. </span>
                    </div>

                    <div className="fs_r" onClick={() => {setfsop1(!fsop1);console.log("jjs")}} ref={fsRef1}>
                        <div className="f_r_head">
                            Reviews (0)

                            <div className="fr_img_sect">
                                <div className="fri_stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14px" height="14px"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14px" height="14px"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14px" height="14px"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14px" height="14px"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14px" height="14px"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
                                </div>
                                <img className = "arrow-rotated" src={upArrow} alt="" ref={arrowRef1}/>
                            </div>
                        </div>
                        No Reviews <span> Learn more. </span>  <span> Return policy exclusions apply. </span>
                    </div>
                </div>
            </div>:null
            }

        </div>
        
    </div>
  )
}

export default ShoeDesc
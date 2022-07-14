import {Link } from 'react-router-dom';

import '../styles/shoe.css'

const Shoe = ({id,imageLink,shoename,shoecat,shoecolor,shoeprice,shoepriceoff,shoediscount}) => {
  return (
    <div className='shoe-container'>
      <Link to={"/t/"+id} style={{textDecoration:"none"}}>
        <div className="shoe-wrapper">
            <div className="shoe-img-container">
                <img src={imageLink} alt="" className="shoe-img" />
            </div>
            <div className="shoe-name">{shoename}</div>
            <div className="shoe-cat">{shoecat}</div>
            <div className="shoe-color_num">{shoecolor}</div>
            <div className="shoe-price">{shoeprice} &nbsp; <strike>{shoepriceoff}</strike></div>
            <div className="shoe-discount">{shoediscount}</div>
        </div>
      </Link>

    </div>
  )
}

export default Shoe
import {useRef,useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'


import configureStore from '../store/configureStore'
import { requestShoe } from '../store/shoe'

import '../styles/main.css'
import downArrowIcon from '../assets/images/down-arrow.svg'

import Filter from './Filter'
import Shoe from './Shoe'

import shoeList from '../testShoes'


const Main = () => {


  
  const dispatch = useDispatch()


  const shoes = useSelector(state => state.shoes)
  const {list} = shoes


  

  const [allShoes,setAllShoes] = useState([])
   const [stickySize,setStickySize] = useState(null)

  const stickyref = useRef(null)


  useEffect(()=>{
      dispatch(requestShoe())
  },[])

  useEffect(() => {
    console.log(allShoes.data)
    setAllShoes(list)
  },[list])
  


  

  useEffect(() => {

    if(stickyref.current)
    {

    document.addEventListener('scroll',() => {
      if(stickyref.current.getBoundingClientRect().top === 0)
      {
        // stickyref.current.style.fontSize = "1rem"
        console.log(stickyref.current.getBoundingClientRect().top)
        stickyref.current.classList.add('mw-topic-sticky')
        setStickySize("1.2rem")
      }
      else
      {
        stickyref.current.classList.remove('mw-topic-sticky')
        setStickySize(null)
      }
    })
    }

  },[])

  


  return (
    <div className='main-container'>
      <div className="main-wrapper">
        <p className='mw-breadcrumb'><span>Basketball</span> / <span>Shoes</span></p>

        <div className="mw-topic-container" ref={stickyref}>
          <p className="mw-topic " style={{fontSize:stickySize}}>Mens Basketball Shoes (41) </p>
          <div className="mw-toggle-actions ">
            <div className="hf-btn">Hide Filters 
              <svg aria-hidden="true" class="icon-filter-ds" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21 8.25H10m-5.25 0H3"></path><path stroke="currentColor" stroke-width="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path><path stroke="currentColor" stroke-width="1.5" d="M3 15.75h10.75m5 0H21"></path><path stroke="currentColor" stroke-width="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path></svg>
            </div>
            <div className="sb-btn">Sort By <img src={downArrowIcon} alt="" /></div>
          </div>
        </div>

        <div className="main-wrapper-body">
          <Filter/>

          <div className="shoes-section">
            <div className="shoes-wrapper">

              {
                allShoes.data?
                allShoes.data.map((shoe) => {
                  return (<Shoe key = {shoe._id} id={shoe._id} {...shoe}/>)
                }):null
              }
            </div>
          </div>
        </div>
          
      </div>
    </div>
  )
}

export default Main
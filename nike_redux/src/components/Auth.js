import {useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { handleRegister , handleLogin } from '../store/auth'

import '../styles/auth.css'

const Auth = () => {

    const [selected,setSelected] = useState("login")

    const handleSelectionChange = (selection) => {
        setSelected(selection)
    }

  return (
    <div className="auth-container">
        <div className="auth-wrapper">
            {
                (selected === "login")?
                <Login changeSelection = {handleSelectionChange}/>:<Register changeSelection = {handleSelectionChange}/>
            }
        </div>
    </div>
  )
}

const Login = ({changeSelection}) => {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const continueUrl = new URLSearchParams(location.search).get('continueUrl')

    const {errorMessageLog,firstname,token} = useSelector(state => state.auth)
    const [userRegisterInfo,setUserRegisterInfo] = useState({})


    const handleFormSubmit = () => {
        // console.log(userRegisterInfo)
        dispatch(handleLogin(userRegisterInfo))

        
    }

    useEffect(() => {
        if(!errorMessageLog && firstname && token)
        {
            console.log(errorMessageLog);
            window.location.href = continueUrl
        }
    },[errorMessageLog,firstname,token])
    return(
        <div className="login-container">
            <div className="login-wrapper">
                <div className="nike-logo"><img src="https://s3.nikecdn.com/unite/app/953/images/swoosh_black.png" alt="" /></div>
                <div className="login-head-text">YOUR ACCOUNT FOR  <br /> EVERYTHING NIKE</div>

                <div className="input-container email-input_container">
                    <input  type="email" name="" id="email" className="login-input " placeholder='Email address' onChange={(e) => setUserRegisterInfo({...userRegisterInfo,email:e.target.value})} value = {userRegisterInfo.email}/>
                </div>
                    {errorMessageLog ?  <p className="error-message-email">{errorMessageLog}</p>:null}

                <div className="input-container password-input_container">
                    <input type="password" name="" id="password" className='login-input'  placeholder='Password' onChange={(e) => setUserRegisterInfo({...userRegisterInfo,password:e.target.value})} value = {userRegisterInfo.password}/>
                    
                </div>
                {errorMessageLog ? <p className="error-message-password">{errorMessageLog}</p>:null}

                <div className="forgot-pass">
                    <div className="keep-me-signed">
                        <input type="checkbox" name="" id="kms" />
                        <label htmlFor="kms">Keep me signed in</label>
                    </div>

                    <div className="forgot-password">
                        Forgot password ? 
                    </div>
                </div>

                <div className="tos">
                    By logging in, you agree to Nike's <span> Privacy Policy. </span> and <span> Terms of Use. </span>
                </div>

                <div className="sign-in_btn" onClick={() => handleFormSubmit()}>
                    SIGN IN
                </div>

                <div className="sign-up_link">
                    Not a member? <span onClick={() => changeSelection("signUp")}>Join Us</span>
                </div>
            </div>
        </div>
    )
}

const Register = ({changeSelection}) => {

    const dispatch = useDispatch()
    const {errorMessageReg} = useSelector(state => state.auth)


    const [userRegisterInfo,setUserRegisterInfo] = useState({country:"Nigeria"})
    const [activeGender,setActiveGender] = useState("")


    const handleFormSubmit = () => {
        console.log("submitting")
        console.log(userRegisterInfo)
        dispatch(handleRegister(userRegisterInfo))
    }


    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="nike-logo"><img src="https://s3.nikecdn.com/unite/app/953/images/swoosh_black.png" alt="" /></div>
                <div className="login-head-text">BECOME A NIKE MEMBER</div>
                <div className="login-head-yarns">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</div>

                <div className="input-container email-input_container">
                    <input  type="email" name="" id="email" className="login-input " placeholder='Email address' onChange={(e) => setUserRegisterInfo({...userRegisterInfo,email:e.target.value})} value = {userRegisterInfo.email}/>
                </div>
                {errorMessageReg ?  <p className="error-message-email">{errorMessageReg} <span style={{color:"#111111",textDecoration:"underline",cursor:"pointer"}} onClick={() => changeSelection("login")}>Sign In</span></p>:null}


                <div className="input-container password-input_container">
                    <input type="password" name="" id="password" className='login-input'  placeholder='Password' onChange={(e) => setUserRegisterInfo({...userRegisterInfo,password:e.target.value})} value = {userRegisterInfo.password}/>
                    
                </div>
                <div className="input-container fname-input_container">
                    <input type="text" name="" id="fname" className='login-input'  placeholder='First Name' onChange={(e) => setUserRegisterInfo({...userRegisterInfo,firstname:e.target.value})} value = {userRegisterInfo.fname}/>
                    
                </div>
                <div className="input-container lname-input_container">
                    <input type="text" name="" id="lname" className='login-input'  placeholder='Last Name' onChange={(e) => setUserRegisterInfo({...userRegisterInfo,lastname:e.target.value})} value = {userRegisterInfo.lname}/>
                    
                </div>
                <div className="input-container dob-input_container">
                    <input type="text" name="" id="dob" className='login-input'  placeholder='Date Of Birth' onFocus={(e) => e.target.type = "date"} onChange={(e) => setUserRegisterInfo({...userRegisterInfo,dob:e.target.value})} value = {userRegisterInfo.dob}/>
                    
                </div>

                <div id="birthday_message">Get a Nike Member Reward every year on your Birthday.</div>

                <div className="input-container password-input_container">
                    <input type="text" name="" id="country" className='login-input'  placeholder='Country' value="Nigeria" readOnly/>
                    
                </div>
                <div className="input-container gender-input_container">
                    <div className= {"gender-btn male "+(activeGender === "m"?" active":null)} onClick={() => {setUserRegisterInfo({...userRegisterInfo,gender:"male"});setActiveGender("m")}}> 
                        
                        {(activeGender === "m"?<img src="https://s3.nikecdn.com/unite/app/953/images/checkmark.svg" alt="" />:null)}
                        Male
                    </div>
                    <div className= {"gender-btn female "+(activeGender === "f"?" active":null)} onClick={() => {setUserRegisterInfo({...userRegisterInfo,gender:"female"});setActiveGender("f")}} >
                        {(activeGender === "f"?<img src="https://s3.nikecdn.com/unite/app/953/images/checkmark.svg" alt="" />:null)}
                        Female
                    </div>
                    
                </div>

                <div className="keep-me-signed">
                        <input type="checkbox" name="" id="kms" />
                        <label htmlFor="kms">Sign up for emails to get updates from Nike on products, offers, and your Member benefits</label>
                    </div>

                <div className="tos">
                    By creating an account, you agree to Nike's<span> Privacy Policy. </span> and <span> Terms of Use. </span>
                </div>

                <div className="sign-in_btn" onClick={() => handleFormSubmit()}>
                    JOIN US
                </div>

                <div className="sign-up_link">
                    Already a member? <span onClick={() => changeSelection("login")}>Sign In</span>
                </div>
                
            </div>
        </div>
    )
}


export default Auth
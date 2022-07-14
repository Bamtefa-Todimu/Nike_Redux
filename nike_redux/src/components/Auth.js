import {useState,useEffect} from 'react'

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
    return(
        <div className="login-container">
            <div className="login-wrapper">
                <div className="nike-logo"><img src="https://s3.nikecdn.com/unite/app/953/images/swoosh_black.png" alt="" /></div>
                <div className="login-head-text">YOUR ACCOUNT FOR  <br /> EVERYTHING NIKE</div>

                <div className="input-container email-input_container">
                    <input  type="email" name="" id="email" className="login-input " placeholder='Email address'/>
                </div>
                    <p className="error-message-email">Please enter a valid email address.</p>

                <div className="input-container password-input_container">
                    <input type="password" name="" id="password" className='login-input'  placeholder='Password'/>
                    
                </div>
                <p className="error-message-password">Please enter a valid password.</p>

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

                <div className="sign-in_btn">
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
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="nike-logo"><img src="https://s3.nikecdn.com/unite/app/953/images/swoosh_black.png" alt="" /></div>
                <div className="login-head-text">BECOME A NIKE MEMBER</div>
                <div className="login-head-yarns">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</div>

                <div className="input-container email-input_container">
                    <input  type="email" name="" id="email" className="login-input " placeholder='Email address'/>
                </div>
                    <p className="error-message-email">Please enter a valid email address.</p>

                <div className="input-container password-input_container">
                    <input type="password" name="" id="password" className='login-input'  placeholder='Password'/>
                    
                </div>
                <div className="input-container fname-input_container">
                    <input type="text" name="" id="fname" className='login-input'  placeholder='First Name'/>
                    
                </div>
                <div className="input-container lname-input_container">
                    <input type="password" name="" id="lname" className='login-input'  placeholder='Last Name'/>
                    
                </div>
                <div className="input-container dob-input_container">
                    <input type="text" name="" id="dob" className='login-input'  placeholder='Date Of Birth' onFocus={(e) => e.target.type = "date"}/>
                    
                </div>

                <div id="birthday_message">Get a Nike Member Reward every year on your Birthday.</div>

                <div className="input-container password-input_container">
                    <input type="text" name="" id="country" className='login-input'  placeholder='Country' value="Nigeria" readOnly/>
                    
                </div>
                <div className="input-container gender-input_container">
                    <div className="gender-btn male">Male</div>
                    <div className="gender-btn female">Female</div>
                    
                </div>

                <div className="keep-me-signed">
                        <input type="checkbox" name="" id="kms" />
                        <label htmlFor="kms">Sign up for emails to get updates from Nike on products, offers, and your Member benefits</label>
                    </div>

                <div className="tos">
                    By creating an account, you agree to Nike's<span> Privacy Policy. </span> and <span> Terms of Use. </span>
                </div>

                <div className="sign-in_btn">
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
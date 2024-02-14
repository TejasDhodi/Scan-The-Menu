import React, { useState } from 'react'
import { loginCredentials } from '../../Service/User'
import UserInputComponent from '../../components/User/UserInputComponent';
import OtpComponent from '../../components/User/OtpComponent';
import { NavLink } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';

const Login = () => {

  const [showVerification, setShowVerification] = useState(false);

  const [loginInputs, setLoginInputs] = useState({
    phone: '',
    password: ''
  });

  const [oneTimePassword, setOneTimePassword] = useState({
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
  })

  const handleLoginInputs = (e) => {
    const { value, name } = e.target;
    setLoginInputs({
      ...loginInputs,
      [name]: value
    });

    setOneTimePassword({
      ...oneTimePassword,
      [name]: value
    })
  }
  return (
    <div className='formContainer'>
      <form className='form'>
        <div className={showVerification ? "inputField loginInputField hideInputField" : "inputField loginInputField"}>
          <div className="authHeader linkIcons">
            <FaUserCircle />
            <h3>Login</h3>
          </div>
          {
            loginCredentials.map((currElem, index) => {
              const { id, name, type, heading } = currElem;
              return (
                <UserInputComponent
                  id={id}
                  name={name}
                  type={type}
                  heading={heading}
                  key={index}
                  handleInputs={handleLoginInputs}
                  Inputs={loginInputs}
                />
              )
            })
          }
          <div className="controls">
            <button type='button' className='btn' onClick={() => setShowVerification(true)}>Next</button>
          </div>
          <div className="askAccount">
            <p>Don't have an Account?? <NavLink to='/signup'>Click Here</NavLink> </p>
          </div>
        </div>

        <div className={showVerification ? "verificationField showVerificationField" : "verificationField"}>
          <OtpComponent
            setShowVerification={setShowVerification}
            oneTimePassword={oneTimePassword}
            handleInputs={handleLoginInputs}
          />
        </div>

      </form>
    </div>
  )
}

export default Login

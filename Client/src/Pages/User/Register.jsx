import React, { useState } from 'react'
import UserInputComponent from '../../components/User/UserInputComponent'
import { registerCredentials } from '../../Service/User'
import OtpComponent from '../../components/User/OtpComponent'
import { NavLink } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";

const Register = () => {
    const [registerInputs, setRegisterInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        cPassword: ''
    });

    const [oneTimePassword, setOneTimePassword] = useState({
        digit1: '',
        digit2: '',
        digit3: '',
        digit4: '',
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showVerification, setShowVerification] = useState(false);

    const handleRegisterInputs = (e) => {
        const { value, name } = e.target;
        setRegisterInputs({
            ...registerInputs,
            [name]: value
        });
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log(registerInputs);
    };

    return (
        <div className='formContainer'>
            <form className="form" onSubmit={handleRegisterSubmit}>
                <div className={showVerification ? "inputField hideInputField" : "inputField"}>
                    <div className="authHeader linkIcons">
                        <FaUserCircle />
                        <h3>Register</h3>
                    </div>
                    {
                        registerCredentials.map((currElem, index) => {
                            const { id, name, type, heading } = currElem;
                            return (
                                <UserInputComponent
                                    id={id}
                                    name={name}
                                    type={name === 'cPassword' && showPassword ? 'text' : type}
                                    heading={heading}
                                    key={index}
                                    handleInputs={handleRegisterInputs}
                                    Inputs={registerInputs}
                                />
                            )
                        })
                    }
                    <div className="showPasswordCheckbox">
                        <input
                            type="checkbox"
                            id="showPassword"
                            onChange={handleTogglePasswordVisibility}
                        />
                        <label htmlFor="showPassword">Show Password</label>
                    </div>
                    <div className="controls">
                        <button type='button' className='btn' onClick={() => setShowVerification(true)}>Next</button>
                    </div>
                    <div className="askAccount">
                        <p>Already have an Account?? <NavLink to='/signin'>Click Here</NavLink> </p>
                    </div>
                </div>
                
                <div className={showVerification ? "verificationField showVerificationField" : "verificationField"}>
                    <OtpComponent
                        setShowVerification={setShowVerification}
                        oneTimePassword={oneTimePassword}
                        handleInputs={handleRegisterInputs}
                    />
                </div>
            </form>
        </div>
    );
};

export default Register;

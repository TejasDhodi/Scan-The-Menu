import React, { useState } from 'react'
import axios from 'axios'

const AdminAuthentication = () => {

    const [inputs, setInputs] = useState({
        userName: '',
        password: ''
    })

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:3000/api/v1/adminAuth', inputs, {
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            const data = response.data;
            if (response.status === 201) {
                alert('Success')
            }
            console.log(`inputs : ${data}`);
        } catch (error) {
            alert('Catch Error')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name='userName' value={inputs.userName} onChange={handleInputs} />
                <input type="password" name='password' value={inputs.password} onChange={handleInputs} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default AdminAuthentication

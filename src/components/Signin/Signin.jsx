import React, { useState } from 'react'
import './Signin.css'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate()
    const [details, setDetails] = useState({ email: "", password: "" })
    const [userData, setUserData] = useState('')
    const [admin, setAdmin] = useState('')
    const [err, setErr] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
    }


    return (
        <form onSubmit={handleLogin}>
            <div className='form-container'>
                <div className="form-inner">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <input type="submit" value="LOGIN" />
                    <span
                        onClick={() => navigate('/signup')}
                    >Don't have an account?</span>
                    {(err !== "") ? (<div className="error">{err}</div>) : ""}
                </div>
            </div>
        </form >
    )
}

export default Signin
import React, { useState } from 'react'
import Banner from '../../images/school2.jpg';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            if (response.data.success) {
                localStorage.getItem('isAuthenticated', 'true');
                setError('');
                navigate('/dashboard');
            }
        } catch (err) {
            setError("Invalid credentials");
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Banner} className="d-block w-100 admin-img" alt="..." />
                                    <div className="overlay"></div>
                                </div>
                            </div>
                            <div className="admin-form">
                                <h2 className='text-center fs-3 mb-4'>Admin Login</h2>
                                <form onSubmit={handleLogin}>
                                    <div className="row align-items-center">
                                        <div className="col-4 mb-4">
                                            <label className='form-label'>Username:</label>
                                        </div>
                                        <div className="col-8 mb-4">
                                            <input type="text" className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Username' required />
                                        </div>
                                        <div className="col-4 mb-4">
                                            <label className='form-label'>Password:</label>
                                        </div>
                                        <div className="col-8 mb-4">
                                            <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' required />
                                        </div>
                                        <div className="col-12 text-center mt-3">
                                            <button type="submit" className="btn btn-primary w-50">Login</button>
                                        </div>
                                    </div>
                                    {/* <button type="submit">Login</button> */}
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
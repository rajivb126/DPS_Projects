import React, { useState } from 'react';
import Banner from '../../images/school2.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../config';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('Admin'); // Track active tab
    const navigate = useNavigate();

    const LOGIN_ENDPOINTS = {
        admin: `${API_BASE_URL}/login`,
        tc: `${API_BASE_URL}/tc-login`,
        event: `http://localhost:5000/event-login`, // Explicit local URL for Event login
    };    

    const handleLogin = async (e) => {
        e.preventDefault();
        const endpoint = LOGIN_ENDPOINTS[activeTab.toLowerCase()];

        try {
            const response = await axios.post(endpoint, { username, password });
            if (response.data.success) {
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('role', response.data.role); // Fallback role
                console.log(response.data.role);
                setError('');
                navigate('/dashboard');
            } else {
                setError(response.data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'Something went wrong. Please try again.');
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
                                <ul className="nav nav-tabs justify-content-center mb-4">
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === 'admin' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('Admin')}
                                        >
                                            Admin
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === 'tc' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('TC')}
                                        >
                                            TC
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === 'event' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('Event')}
                                        >
                                            Event
                                        </button>
                                    </li>
                                </ul>
                                <h2 className='text-center fs-3 mb-4'>{activeTab} Login</h2>
                                <form onSubmit={handleLogin}>
                                    <div className="row align-items-center">
                                        <div className="col-4 mb-4">
                                            <label className='form-label'>Username:</label>
                                        </div>
                                        <div className="col-8 mb-4">
                                            <input
                                                type="text"
                                                className='form-control'
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                placeholder='Enter Username'
                                                required
                                            />
                                        </div>
                                        <div className="col-4 mb-4">
                                            <label className='form-label'>Password:</label>
                                        </div>
                                        <div className="col-8 mb-4">
                                            <input
                                                type="password"
                                                className='form-control'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder='Enter Password'
                                                required
                                            />
                                        </div>
                                        <div className="col-12 text-center mt-3">
                                            <button type="submit" className="btn btn-primary w-50">Login</button>
                                        </div>
                                    </div>
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;

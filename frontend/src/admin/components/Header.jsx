import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ Toggle }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout actions (e.g., clearing authentication tokens)
        console.log('Logged out');
        navigate('/admin-dps'); // Navigate to the login page
    };

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-white" style={{ padding: '10px' }}>
                <i
                    className="navbar-brand bi bi-justify-left fs-4"
                    onClick={Toggle}
                    style={{ color: 'black', cursor: 'pointer' }}
                ></i>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button
                                className="btn btn-danger"
                                onClick={handleLogout}
                                style={{ marginLeft: 'auto' }}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;
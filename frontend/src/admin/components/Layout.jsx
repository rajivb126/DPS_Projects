import React from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from './Sidebar';
import Header from './Header';

function Layout() {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (!isAuthenticated) {
            navigate('/admin/login');
        }
    }, [navigate]);

    const Toggle = () => {
        setToggle(!toggle);
    };


    return (
        <>
            <div className="container-fluid min-vh-100">
                <div className="row">
                    {toggle && (
                        <div className="col-4 col-md-2" style={{background:'rgb(48, 42, 42)', height:'auto'}}>
                            <Sidebar />
                        </div>
                    )}
                    <div className="col p-0">
                        <Header Toggle={Toggle} />
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
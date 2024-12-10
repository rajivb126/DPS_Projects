import React from 'react'

function Header({Toggle}) {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-white" style={{padding:'10px'}}>
                <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle} style={{color:'black'}}></i>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#" role="button">
                                Admin
                            </a>
                        </li>
                    </ul>
                </div> */}
            </nav>
        </>
    )
}

export default Header
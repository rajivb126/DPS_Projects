import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faMapLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faWhatsapp, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Footer_logo from '../images/DPSJODHPUR WHITE.png'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            {/* Footer Section */}
            <footer className="sticky-bottom" style={{ animation: 'fadeIn 1s ease-in-out' }}>
                <div className="container-fluid">
                    <div className="row align-items-center footer">
                        <div className="col-lg-3 col-l2 pt-lg-0 pt-5">
                            <div className="footer-image">
                                <Link to={'https://dpsjodhpur.in/'}>
                                    <img src={Footer_logo} alt="" className="img-fluid" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-l2 get-in-touch text-justify">
                            <h6 className="fw-bold">GET IN TOUCH</h6>
                            <ul className="address">
                                <li>
                                    <a href=""><strong>Address:</strong> Bypass Road Pal, Jodhpur, 342014</a>
                                </li>
                                <li>
                                    <a href="tel:0291-2766886"><strong>Phone:</strong> 0291-2766886, </a>
                                    <a href="tel:0291-2766887">0291-2946887</a>
                                </li>
                                <li>
                                    <a href="mailto:info@dpsjodhpur.in"><strong>Email:</strong> info@dpsjodhpur.in</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-l2">
                            <h6 className="fw-bold text-center">QUICK LINKS</h6>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="quick-links">
                                        <li>
                                            <Link to={'/download'}>Downloads</Link>
                                        </li>
                                        <li>
                                            <Link to={'/newsletter'}>Newsletter</Link>
                                        </li>
                                        <li>
                                            <Link to={''}>School Planner</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="quick-links">
                                        <li>
                                            <Link to={'/fee-structure'}>Fee Structure</Link>
                                        </li>
                                        <li>
                                            <Link to={'/virtual-tour'}>Virtual Tour</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-l2 ps-lh-5 ps-0">
                            <h6 className="text-uppercase text-center fw-bold pb-3">Connect with us</h6>
                            <ul className="connect-us">
                                <li>
                                    <a href="https://www.youtube.com/channel/UC7oJPEebMcsc9Cl0wQJ3SoA" target="_blank">
                                        <FontAwesomeIcon className="fs-3" icon={faYoutube} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/DPSJOD" target="_blank">
                                        <FontAwesomeIcon className="fs-3" icon={faXTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/DelhiPublicSchoolJodhpur" target="_blank">
                                        <FontAwesomeIcon className="fs-3" icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/dpsjodhpurofficial" target="_blank">
                                        <FontAwesomeIcon className="fs-2" icon={faInstagram} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer >

            {/*  */}
            < section >
                <div className="container-fluid bottom-layer">
                    <div className="row">
                        <div className="col-4 p-0 mx-auto" style={{ borderRight: '1px solid #fff' }}>
                            <button className="btn" type="button">
                                <a href="tel:02912766886">
                                    <FontAwesomeIcon icon={faPhone} style={{ paddingRight: '3px' }} />
                                    Call
                                </a>
                            </button>
                        </div>
                        <div className="col-4 p-0 mx-auto" style={{ borderRight: '1px solid #fff' }}>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <FontAwesomeIcon icon={faEnvelope} style={{ paddingRight: '3px' }} />
                                    Enquire
                                </a>
                            </button>
                        </div>
                        <div className="col-4 p-0 mx-auto" style={{ borderRight: '1px solid #fff' }}>
                            <button className="btn" type="button">
                                <a href="https://maps.app.goo.gl/ozvecvBxT2YnvcLq9" target="_blank">
                                    <FontAwesomeIcon icon={faLocationDot} style={{ paddingRight: '3px' }} />
                                    Location
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Footer;
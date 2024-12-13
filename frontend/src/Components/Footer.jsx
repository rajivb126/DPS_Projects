import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faWhatsapp, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Footer_logo from '../images/DPSJODHPUR WHITE.png'

function Footer() {
    const sendMessage = () => {
        const phoneNumber = '7737880141';
        const message = encodeURIComponent('Hello!');

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl);
    };


    return (
        <>
            {/* Footer Section */}
            <footer style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row align-items-center footer">
                            <div className="col-lg-3 col-l2 pt-lg-0 pt-5">
                                <div className="footer-image">
                                    <img src={Footer_logo} alt="" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-l2 get-in-touch text-justify">
                                <h6 className="fw-bold">GET IN TOUCH</h6>
                                <ul className="address">
                                    <li>
                                        <a href=""><strong>Address:</strong> Bypass Road Pal, Pal Gaon, Jodhpur, 342014</a>
                                    </li>
                                    <li>
                                        <a href="tel:0291-2766886"><strong>Phone:</strong> 0291-2766886/887, 2946886/887 </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@dpsjodhpur.in"><strong>Email:</strong> info@dpsjodhpur.in</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-l2">
                                <h6 className="fw-bold text-center">QUICK LINKS</h6>
                                <ul className="quick-links text-center">
                                    <span>
                                        <a href="#">School Planner</a>
                                    </span>
                                    <span>
                                        <a href="#">Notice & Circular</a>
                                    </span>
                                    <span>
                                        <a href="#">Fee Structure</a>
                                    </span>
                                    <span>
                                        <a href="">Virtual Tour</a>
                                    </span>
                                </ul>
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
                </div>
            </footer>

            {/*  */}
            <section>
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
                                <a href="#" onClick={sendMessage} target="_blank">
                                    <FontAwesomeIcon icon={faWhatsapp} style={{ paddingRight: '3px' }} />
                                    Message
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer;
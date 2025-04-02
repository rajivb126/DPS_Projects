import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dpslogo from '../images/dpslogo.png';
import dpslogopng1024x1024 from '../images/dpslogopng1024x1024.png'
import logo from '../images/logo.png'
import { faArrowUp, faEnvelope, faHouse, faLocationDot, faPhone, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useRef, useState } from 'react';
import API_BASE_URL from '../config'

function Header() {
    const [eName, setEname] = useState('');
    const [email, setEmail] = useState('');
    const [eMobile, setEmobile] = useState('');
    const [eComment, setEcomment] = useState('');
    const [eFile, seEfile] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const marqueeRef = useRef(null);

    const handleMouseOver = () => {
        if (marqueeRef.current) {
            marqueeRef.current.stop();
        }
    };

    const handleMouseOut = () => {
        if (marqueeRef.current) {
            marqueeRef.current.start();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('ename', eName);
        formData.append('email', email);
        formData.append('emobile', eMobile);
        formData.append('ecomment', eComment);
        formData.append('efile', eFile);

        try {
            const response = await axios.post(`${API_BASE_URL}/api/enquiry/add`, formData);
            const newEnquiry = response.data;
            console.log('New enquiry:', newEnquiry);
            setEname('');
            setEmail('');
            setEmobile('')
            setEcomment('')
            document.getElementById("fileInput").value = "";

            setSuccessMessage('News added successfully!');

            // Clear the success message after 3 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error('Error adding news:', error);
            setError(error.response?.data || 'Failed to add news.');

            // Clear error message after 3 seconds
            setTimeout(() => {
                setError('');
            }, 3000);
        }
    };

    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/news/view`)
            .then(function (response) {
                console.log(response.data.data[0]);
                setNewsData(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])

    const currentDate = new Date();

    // Filter news based on category and date range
    const marqueeNews = newsData.filter(news =>
        news.news_category === 'marquee news' &&
        new Date(news.start_date) <= currentDate &&
        new Date(news.end_date) >= currentDate
    );

    return (
        <>
            {/* Model Section */}
            <section>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 ps-lg-5" id="exampleModalLabel">
                                    <img src={dpslogo} alt="" className="img-fluid" />
                                    <a href="index.html"></a>
                                </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="modalform">
                                            <h2 className="text-center fs-4">Send your query</h2>
                                            <form method="post" onSubmit={handleSubmit}>
                                                <div className='pb-3'>
                                                    <label htmlFor="">Name:</label>
                                                    <input type="text" name='ename' value={eName} className="form-control" placeholder="Your Name" onChange={(e) => setEname(e.target.value)} />
                                                </div>
                                                <div className='pb-3'>
                                                    <label htmlFor="">Email:</label>
                                                    <input type="text" name='email' value={email} className="form-control" placeholder="Your Email" required onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                                <div className='pb-3'>
                                                    <label htmlFor="">Mobile Number:</label>
                                                    <input type="tel" name='emobile' value={eMobile} className="form-control " title="Please Enter 10 Digit Number" placeholder="Enter Mobile Number" pattern="[1-9]{1}[0-9]{9}" required="required" onChange={(e) => setEmobile(e.target.value)} />
                                                </div>
                                                <div className='pb-3'>
                                                    <label htmlFor="">Comment:</label>
                                                    <textarea className="w-100 form-control" name='ecomment' value={eComment} rows="4" placeholder="Comment" required="required" onChange={(e) => setEcomment(e.target.value)}></textarea>
                                                </div>
                                                <div>
                                                    <input type="file" id="fileInput" onChange={(e) => seEfile(e.target.files[0])} />
                                                </div>
                                                <div className="mx-auto mt-3 text-center">
                                                    <button type="submit" className="btn btn-outline-dark" >Submit</button>
                                                </div>
                                            </form>
                                            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                                            {error && <div className="alert alert-danger mt-3">{error}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media Icons Section */}
            <section>
                <div className="icons">
                    <div className="twittericons">
                        <a href="https://twitter.com/DPSJOD" target="_blank">
                            <FontAwesomeIcon icon={faXTwitter} style={{ color: 'white', border: 'none' }} />
                        </a>
                    </div>
                    <div className="youtubeicon">
                        <a href="https://www.youtube.com/channel/UC7oJPEebMcsc9Cl0wQJ3SoA" target='_blank'>
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                    <div className="facebookicons">
                        <a href="https://www.facebook.com/DelhiPublicSchoolJodhpur/" target="_blank">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </div>
                </div>
            </section>

            {/*  */}
            <section className="sticky-top" style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className="container-fluid marquees sticky-top">
                    <div className="row">
                        <div className="col-12">
                            <marquee ref={marqueeRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} width="100%" direction="left" scrollamount="4" scrolldelay="0">
                                {marqueeNews.length > 0 ? (
                                    marqueeNews.map((news, index) => (
                                        <a href={`${API_BASE_URL}/uploads/${news.nlink}`} target='_blank'>
                                            <span style={{ color: 'yellow' }}> &nbsp;&nbsp;.:::.&nbsp;&nbsp; </span>
                                            <b>{news.nname}</b>
                                            <span style={{ color: 'yellow' }}> &nbsp;&nbsp;.:::.&nbsp;&nbsp; </span>
                                        </a>
                                    ))
                                ) : (
                                    <p></p>
                                )}
                            </marquee>
                        </div>
                    </div>
                </div>

                <div className="container-fluid top-header pb-0 contact-header sticky-top">
                    <div className="row text-center">
                        <div className="col-xxl-9 col-lg-8 col-md-8 p-0">
                            <ul className="d-flex align-items-center">
                                <li>
                                    <a href="tel:+0291-2766886">
                                        <FontAwesomeIcon icon={faPhone} className='pe-2' />0291-2766886/887, 2946886/887
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} className='px-2' />
                                    <a href="mailto:info@dpsjodhpur.in">info@dpsjodhpur.in</a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCircleQuestion} className='px-2' />
                                    <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquiry</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-md-4 laptop me-0">
                            <ul className="d-flex align-items-center ">
                                <li>
                                    <a href="https://www.facebook.com/DelhiPublicSchoolJodhpur/" target="_blank">                                                               <FontAwesomeIcon icon={faFacebookF} style={{ borderRight: '2px  solid #fff', paddingRight: '10px' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UC7oJPEebMcsc9Cl0wQJ3SoA" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} style={{ color: '#f50000', borderRight: '2px solid #fff', paddingRight: '10px' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/DPSJOD" target="_blank">
                                        <FontAwesomeIcon icon={faXTwitter} style={{ borderRight: '2px solid #fff', paddingRight: '10px' }} />
                                    </a>
                                </li>
                                <li>
                                    <a className="fw-bolder" href="https://octopod.co.in/student/admission/35ee747ac5f346411f328ae87f426ff7" target="_blank" style={{ fontSize: '14px', borderRight: '2px solid #fff', paddingRight: '10px' }}>PAY FEE</a>
                                </li>
                                <li>
                                    <Link to={'https://octopod.co.in/'} className="fw-bolder" style={{ color: 'yellow', fontSize: '14px' }}>ERP LOGIN
                                        <FontAwesomeIcon icon={faSignIn} style={{ paddingLeft: '5px', color: 'yellow', fontSize: '16px' }} /><i className="fa fa-sign-in" aria-hidden="true" ></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container-fluid header-navbar bg-light">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="https://dpsjodhpur.in/">
                            <img src={dpslogo} alt="DPS Jodhpur" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">
                                        <FontAwesomeIcon icon={faHouse} style={{ fontSize: '18px', color: '#002100' }} />
                                    </Link>
                                </li>
                                <li className="nav-item dropdown dropdown-slide dropdown-hover">
                                    <Link className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        About us
                                    </Link>
                                    <ul className="dropdown-menu" style={{ position: 'absolute', left: '-87px' }}>
                                        <div className="container">
                                            <div className="row" style={{ width: '800px' }}>
                                                <div className="col-lg-4 py-3">
                                                    <img src={dpslogopng1024x1024} className="img-fluid" alt="" style={{ padding: '0 20px' }} />
                                                </div>
                                                <div className="col-lg-4 py-3 text-center">
                                                    <h3 className="fs-4">Delhi Public School</h3>
                                                    <p><strong>Affilated to CBSE<br />(Affiliation.No.1730156)</strong></p>
                                                </div>
                                                <div className="col-lg-4 py-3">
                                                    <ul className="about-section fs-6">
                                                        <li><Link to={'/at-a-glance'}>At a Glance</Link></li>
                                                        <li><Link to={'/authorities-message'}>Authorities Messages</Link></li>
                                                        <li><Link to={'/school-management'}>Management Committee</Link></li>
                                                        <li><Link to={'/faculty'}>Faculty Zone</Link></li>
                                                        <li><Link to={'/mission-vision'}>Vision & Mission</Link></li>
                                                        <li><Link to={'/infrastructure'}>Infrastructure</Link></li>
                                                        <li><Link to={'/virtual-tour'}>Virtual Tour</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        admission
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to={'/admission-procedure'} className="dropdown-item">Admission Procedure</Link></li>
                                        <li><Link to={'/exam-policy'} className="dropdown-item">Exam Policy</Link></li>
                                        <li><Link to={'/hostel-policy'} className="dropdown-item">Hostel Policy</Link></li>
                                        <li><Link to={'/fee-structure'} className="dropdown-item">Fee Structure</Link></li>
                                        <li><Link to={'subject-combination'} className='dropdown-item'>Subject Combination for Class XI</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        notice board
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to={'/school-news'} className="dropdown-item" href="#">School News</Link></li>
                                        <li><Link to={'/event'} className="dropdown-item">Event Photo Gallery</Link></li>
                                        <li><Link to={'/newsletter'} className="dropdown-item">Newsletter</Link></li>
                                        <li><Link to={'/school-magazine'} className="dropdown-item" href="#">School Magazine-Quest</Link></li>
                                        <li><Link to={'/achievement?tab=academic'} className="dropdown-item">Academic Achievements</Link></li>
                                        <li><Link to={'/achievement?tab=co-curricular'} className="dropdown-item">Co-Curricular Achievements</Link></li>
                                        <li><Link to={'/achievement?tab=sports'} className="dropdown-item">Sports Achievements</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        CBSE Corner
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to={'/mandatory-public-disclosure'} className="dropdown-item" target='_blank'>Mandatory Public
                                                Disclosure</Link>
                                        </li>
                                        <li>
                                            <Link to={'https://cbseacademic.nic.in/circulars.html'} className="dropdown-item" target='_blank'>CBSE General Circulars</Link>
                                        </li>
                                        <li>
                                            <Link to={'https://www.cbse.gov.in/cbsenew/examination_Circular.html'} className="dropdown-item" target="_blank">CBSE Examination Circulars</Link>
                                        </li>
                                        <li>
                                            <Link to={'https://www.cbse.gov.in/cbsenew/question-paper.html'} className="dropdown-item" target='_blank'>CBSE Previous Year QP (X & XII)</Link>
                                        </li>
                                        <li>
                                            <Link to={'https://www.cbse.gov.in/cbsenew/model-answer.html'} className="dropdown-item" target='_blank'>CBSE Model Answer (X & XII)</Link>
                                        </li>
                                        <li>
                                            <Link to={'/transfer-certificate'} className="dropdown-item" target='_blank'>Validate Transfer Certificate</Link>
                                        </li>
                                        <li>
                                            <a className="dropdown-item">Academic Curriculum</a>
                                        </li>
                                        {/* <li>
                                            <a className="dropdown-item">Board Results</a>
                                        </li> */}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Students corner
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to={'https://dpsjodhpur.in/backend/uploads/Almanac_2025_(Imp_Pages).pdf'} className="dropdown-item">School Almanac</Link></li>
                                        <li><Link to={'/download'} className="dropdown-item">Downloads</Link></li>
                                        <li><Link to={'/student-circular'} className="dropdown-item" >School Circulars</Link></li>
                                        <li><Link to={'/school-rules'} className="dropdown-item">School Rules</Link></li>
                                        <li><Link to={'/student-council'} className="dropdown-item" >Student Council</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        alumni
                                    </Link>
                                    <ul className="dropdown-menu" style={{ position: 'absolute', left: '-8px', top: '145%', minWidth: '176.5px' }}>
                                        <li><Link to={'/alumni-register'} className="dropdown-item">Register</Link></li>
                                        <li><a className="dropdown-item" href="#">Prestigious Alumni</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown contact-header">
                                    <Link to={''} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        contact
                                    </Link>
                                    <ul className="dropdown-menu" style={{ position: 'absolute', left: '-707px' }}>
                                        <div className="container">
                                            <div className="row" style={{ width: '800px' }}>
                                                <div className="col-lg-4 py-3">
                                                    <h3 style={{ fontSize: '18px' }}>FIND US ON GOOGLE MAP</h3>
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.1819385428707!2d72.96465817510106!3d26.22327727706479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394189384a6aab61%3A0x65574cfc6e1f07a8!2sDPS%20Jodhpur!5e0!3m2!1sen!2sin!4v1684765372029!5m2!1sen!2sin"
                                                        width="100%" height="250" style={{ border: '0' }} allowFullScreen=""
                                                        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                </div>
                                                <div className="contact-details col-lg-4 py-3">
                                                    <h3 style={{ fontSize: '18px' }}>CONTACT DETAILS</h3><br />
                                                    <p><strong>Communication For-</strong></p>
                                                    <p>Admissions-<br /> <a href="mailto:admission@dpsjodhpur.in">admission@dpsjodhpur.in</a></p>
                                                    <p>Recruitments- <a href="mailto:recruitment@dpsjodhpur.in">recruitment@dpsjodhpur.in</a></p>
                                                    <p>Transport-<br /> <a href="mailto:transport@dpsjodhpur.in">transport@dpsjodhpur.in</a></p>
                                                    <p>General Query-<br /> <a href="mailto:info@dpsjodhpur.in">info@dpsjodhpur.in</a></p>
                                                </div>
                                                <div className="col-lg-4 py-3">
                                                    <h3 style={{ fontSize: '18px' }}>ADDRESS</h3><br />
                                                    <p style={{ fontSize: '18px' }}><strong>Delhi Public School</strong></p>
                                                    <div style={{ fontSize: '14px' }}>
                                                        <p style={{ margin: '0', paddingBottom: '8px' }}><strong>Address:</strong> Bypass Road Pal, Jodhpur, Rajasthan, India</p>
                                                        <p style={{ margin: '0', paddingBottom: '8px' }}><strong>Pincode:</strong> 342014</p>
                                                        <p style={{ margin: '0', paddingBottom: '8px' }}><strong>Phone:</strong><a href='tel:0291-2766886' style={{textDecoration:'none', color:'black'}}> 0291-2766886, </a><a href='tel:0291-2766887' style={{textDecoration:'none', color:'black'}}> 0291-2766887</a></p>
                                                    </div>
                                                    <div className="text-start me-2">
                                                        <a href="contact-us.html" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="">
                                                            <button type="button" style={{ backgroundColor: 'red', color: '#fff', border: 'none', fontSize: '15px', padding: '8px 40px' }}>
                                                                <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{color:'white', textDecoration:'none'}}> ENQUIRY
                                                                </a>
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"
                        aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasRightLabel">
                                <a className="navbar-brand" href="https://dpsjodhpur.in/">
                                    <img src={logo} width="50" alt="DPS Jodhpur" />
                                </a>
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">
                                        <FontAwesomeIcon icon={faHouse} style={{ fontSize: '18px', color: '#002100' }} />
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'/about'} className="nav-link fw-bolder dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        About Us
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to={'/at-a-glance'} className="dropdown-item">At a Glance</Link>
                                        </li>
                                        <li>
                                            <Link to={'/authorities-message'} className="dropdown-item">Authorities Messages</Link>
                                        </li>
                                        <li>
                                            <Link to={'/school-management'} className="dropdown-item">Management Committee</Link>
                                        </li>
                                        <li>
                                            <Link to={'/faculty'} className="dropdown-item">Faculty Zone</Link>
                                        </li>
                                        <li>
                                            <Link to={'/mission-vision'} className="dropdown-item">Vision & Mission</Link>
                                        </li>
                                        <li>
                                            <Link to={'/infrastructure'} className="dropdown-item">Infrastructure</Link>
                                        </li>
                                        <li>
                                            <Link to={'/virtual-tour'} className="dropdown-item">Virtual Tour</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        admission
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to={'/admission-procedure'} className="dropdown-item">Admission Procedure</Link></li>
                                        <li><Link to={'/exam-policy'} className="dropdown-item">Exam Policy</Link></li>
                                        <li><Link to={'/hostel-policy'} className="dropdown-item">Hostel Policy</Link></li>
                                        <li><Link to={'/fee-structure'} className="dropdown-item">Fee Structure</Link></li>
                                        <li><Link to={'subject-combination'} className='dropdown-item'>Subject Combination for Class XI</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        notice board
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to={'/school-news'} className="dropdown-item" href="#">School News</Link></li>
                                        <li><Link to={'/event'} className="dropdown-item">Event Photo Gallery</Link></li>
                                        <li><Link to={'/newsletter'} className="dropdown-item">Newsletter</Link></li>
                                        <li><Link to={'/school-magazine'} className="dropdown-item" href="#">School Magazine-Quest</Link></li>
                                        <li><Link to={'/achievement?tab=academic'} className="dropdown-item">Academic Achievements</Link></li>
                                        <li><Link to={'/achievement?tab=co-curricular'} className="dropdown-item">Co-Curricular Achievements</Link></li>
                                        <li><Link to={'/achievement?tab=sports'} className="dropdown-item">Sports Achievements</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        CBSE Corner
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to={'/mandatory-public-disclosure'} className="dropdown-item" target='_blank'>Mandatory Public
                                                Disclosure</Link>
                                        </li>
                                        <li>
                                            <Link to={'https://cbseacademic.nic.in/circulars.html'} className="dropdown-item" target='_blank'>CBSE General Circulars</Link>
                                        </li>
                                        <li>
                                            <Link to={'https://www.cbse.gov.in/cbsenew/examination_Circular.html'} className="dropdown-item" target="_blank">CBSE Examination Circulars</Link>
                                        </li>
                                        <li>
                                            <Link to={'https://www.cbse.gov.in/cbsenew/question-paper.html'} className="dropdown-item" target='_blank'>CBSE Previous Year QP (X & XII)</Link>
                                        </li>
                                        <li>
                                            <Link to={'https://www.cbse.gov.in/cbsenew/model-answer.html'} className="dropdown-item" target='_blank'>CBSE Model Answer (X & XII)</Link>
                                        </li>
                                        <li>
                                            <Link to={'/transfer-certificate'} className="dropdown-item" target='_blank'>Validate Transfer Certificate</Link>
                                        </li>
                                        <li>
                                            <a className="dropdown-item">Academic Curriculum</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item">Board Results</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Students corner
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to={'/download'} className="dropdown-item">Downloads</Link></li>
                                        {/* <li><Link className="dropdown-item" >School Almanac</Link></li> */}
                                        <li><Link to={'/student-circular'} className="dropdown-item" >School Circulars</Link></li>
                                        <li><Link to={'/school-rules'} className="dropdown-item">School Rules</Link></li>
                                        <li><Link to={'/student-council'} className="dropdown-item" >Student Council</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        alumni
                                    </Link>
                                    <ul className="dropdown-menu" style={{ position: 'absolute', left: '-3px', top: '145%', minWidth: '176.5px' }}>
                                        <li><Link to={'/alumni-register'} className="dropdown-item">Registers</Link></li>
                                        <li><a className="dropdown-item" href="#">Prestigious Alumni</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bolder" href="tel:02912766886">
                                        <FontAwesomeIcon icon={faPhone} className='pe-2' />0291-2766886/887, 2946886/887
                                    </a>
                                </li>
                                <li className="nav-item p-0">
                                    <a className="nav-link fw-bolder" href="mailto:info@dpsjodhpur.in" style={{textTransform:'lowercase'}}>
                                        <FontAwesomeIcon icon={faEnvelope} className='pe-2' />info@dpsjodhpur.in
                                    </a>
                                </li>
                                <li className="nav-item fw-bolder">
                                    <FontAwesomeIcon icon={faCircleQuestion} className='pe-2' />
                                    <a href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ textDecoration: 'none', color: '#002100' }}>Enquiry</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <button type="button" style={{ border: '0', backgroundColor: '#002147' }}>
                                        <a className="nav-link fw-bolder" href="https://octopod.co.in/student/admission/35ee747ac5f346411f328ae87f426ff7"
                                            target="_blank" style={{ color: '#fff', padding: '10px', fontSize: '14px' }} >PAY FEE</a>
                                    </button>
                                </li>
                                <li className="nav-item my-2">
                                    <button type="button" style={{ border: '0', backgroundColor: '#002147', padding: '10px' }}>
                                        <a className="fw-bolder" href="https://octopod.co.in/" style={{ color: 'yellow', fontSize: '14px', textDecoration: 'none' }} >ERP LOGIN
                                            <i className="fa fa-sign-in" aria-hidden="true" style={{ color: 'yellow', fontSize: '16px' }}></i>
                                        </a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Header;

import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

import AOS from "aos";
import 'aos/dist/aos.css';
import 'animate.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "video-react/dist/video-react.css";
import affiliation from '../images/lOGO FOR WEBSITES/1.png';
import collabaration from '../images/lOGO FOR WEBSITES/2.png';
import membership from '../images/lOGO FOR WEBSITES/3.png';
import accrediation from '../images/lOGO FOR WEBSITES/4.png';
import infra1 from '../images/infra-1.jpg';
import infra2 from '../images/infra-2.jpg';
import infra3 from '../images/infra-3.jpg';
import achieve1 from '../images/achieve-1.png';
import achieve2 from '../images/achieve-2.png';
import achieve3 from '../images/achieve-3.png';
import achieve4 from '../images/achieve-4.png';
import Popup from '../images/Popup.jpg'
import { Player } from "video-react";
import NumberCounter from 'number-counter';
import Banner from '../images/SiteSlider.mp4'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from '../config'

function Home() {
    const [newsData, setNewsData] = useState([])
    const marqueeRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        setShowModal(true);
    }, []);

    const handleClose = () => {
        setShowModal(false);
    };

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

    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/news/view`)
            .then(function (response) {
                console.log(response.data.data[0]);
                setNewsData(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const currentDate = new Date();

    // Filter news based on category and date range
    const newsUpdate = newsData.filter(news =>
        news.news_category === 'news update' &&
        new Date(news.start_date) <= currentDate &&
        new Date(news.end_date) >= currentDate
    );

    const noticeCircular = newsData.filter(news =>
        news.news_category === 'notice circular' &&
        new Date(news.start_date) <= currentDate &&
        new Date(news.end_date) >= currentDate
    );

    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            offset: 100,
        });
    }, []);

    const [event, setEvent] = useState([])
    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/events/view`)
            .then(function (response) {
                console.log(response.data.data[0]);
                setEvent(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const [assembly, setAssembly] = useState([])
    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/assembly/view`)
            .then(function (response) {
                console.log(response.data.data[0]);
                setAssembly(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = ('0' + date.getDate()).slice(-2);
        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();

        // Function to get the ordinal suffix
        const getOrdinalSuffix = (day) => {
            if (day > 3 && day < 21) return 'th'; // For 4th to 20th, always 'th'
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };

        const dayWithSuffix = parseInt(day) + getOrdinalSuffix(parseInt(day)); // Append the suffix to the day

        // Return each part of the date in a separate <div>
        return (
            <div className="text-center">
                <div>{dayWithSuffix} {month}</div>
                {/* <div>{month}</div> */}
                <div>{year}</div>
            </div>
        );
    };

    const filteredEvents = event.filter(item =>
        new Date(item.start_date) <= currentDate &&
        new Date(item.end_date) >= currentDate
    );

    const filteredAssembly = assembly.filter(item =>
        new Date(item.start_date) <= currentDate &&
        new Date(item.end_date) >= currentDate
    );

    const formattDate = (dateString) => {
        const date = new Date(dateString);
        const day = ('0' + date.getDate()).slice(-2);
        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return (
            <>
                <div className="card-date" style={{padding:'10px'}}>
                    <div className="day">{day}</div>
                    <div className="month">{month}</div>
                    <div className="year">{year}</div>
                </div>
            </>
        );
    };

    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Change based on how many slides you want visible at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>

            <Header />

            <div className="popup">
                {/* Modal */}
                {showModal && (
                    <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body p-0 position-relative">
                                    <button type="button" className="btn-close btn-close-white" onClick={handleClose} aria-label="Close"></button>
                                    <img src={Popup} alt="" className="img-fluid" />
                                </div>
                                <div className="modal-footer justify-content-center">
                                    <button type="button" className="btn btn-primary">
                                        <Link to={'https://dpsjodhpur.in/DPSJodhpur/UserSpace/UserName/admin/DynamicFolder/2025-26/Admissions/Adm%20for%20Nur-KG-I-25_26_with%20dates.html'} target="_blank" style={{ color: 'white', textDecoration: 'none' }}>Click here to Proceed</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Slider Section Starts of DPS */}
            <section style={{ animation: 'fadeIn 1s ease-in-out' }}>
                <div className="container-fluid slider px-0" style={{ backgroundColor: 'black' }}>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-inner">
                            <Player src={Banner} className="d-block w-100" autoPlay={true} muted />
                        </div>
                    </div>
                </div>
            </section>

            {/* News Update Section Start of DPS */}
            <section style={{ animation: 'fadeIn 1s ease-in-out' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-12 text-center news-update">
                            <h3 className="">News Update</h3>
                        </div>
                        <div className="col-lg-10 col-12 news-update-list">
                            <marquee ref={marqueeRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} width="100%" direction="left" scrollamount="4" scrolldelay="0">
                                <ul>
                                    {newsUpdate.length > 0 ? (
                                        newsUpdate.map((news, index) => (
                                            <li key={index}>
                                                <a href={`${API_BASE_URL}/uploads/${news.nlink}`} target="_blank">{news.nname}</a>
                                            </li>
                                        ))
                                    ) : (
                                        <p className="text-white" style={{paddingTop:'5px'}}>No News Update available.</p>
                                    )}
                                </ul>
                            </marquee>
                        </div>
                    </div>
                </div>
            </section>

            {/* Welcome Section Of DPS */}
            <section style={{ animation: 'fadeIn 1s ease-in-out' }}>
                <div className="container">
                    <div className="row m-auto">
                        <div className="col-lg-8 col-12 welcome-dps">
                            <p className="py-4">The Beginning of Delhi Public School Jodhpur dates back to 1998 when the long
                                cherished dream of
                                Mr. Dinesh Chand Kothari, Pro Vice Chairman, DPS Jodhpur, materialised in the form of a school.
                                The motivational force behind this noble endeavour of Mr. Kothari was Mr. D.R. Mehta, the then
                                Chairman, SEBI, Who encouraged Mr. Kothari to open an educational institution for the children
                                of Jodhpur to equip them to face the challenges of our ever changing global word. The herculean
                                task loomed large and was to be completed. At this juncture, the DPS Society, pioneer in the
                                field of education, reached out and provide the propelling force, the motivation and guidance to
                                Mr. D.C. Kothari, supporting him with everything that they could, to make it possible for him to
                                realise his dream in setting up the school. Thus the school stands today the dream child of Mr.
                                D.C. Kothari nurtured by the able guidance of the DPS Society. DPS Jodhpur which is promoted by
                                Shugan Chandra Kothari trust and managed by Delhi Public School Society because functional on
                                20th April 1998 at Ratanada with 280 children enrolled initially. The institution offering
                                comprehensive education for the school children gradually progressed and shifted to its own
                                building at Pal in the year 2001. Today the school stands proud amidst 15 acres of lush green
                                landscape, houses approx. 5000 students, and promises to give to the world learned &
                                intellectual citizens of tomorrow.</p>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="notice-circular">
                                <div className="inside-notice-circular">
                                    <h3>Notices & Circulars</h3>
                                </div>
                                <div className="holder px-2" style={{ border: '2px groove darkblue' }}>
                                    <marquee ref={marqueeRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} direction="up" scrollamount="2" scrolldelay="10" style={{ height: '300px' }}>
                                        <ul className="p-0">
                                            {noticeCircular.length > 0 ? (
                                                noticeCircular.map((news, index) => (
                                                    <div className="d-flex align-items-center" key={index} style={{ borderBottom: 'solid 1px #e9ecef', paddingTop: '10px' }}>
                                                        <li className="me-3">{formattDate(news.start_date)}</li>
                                                        <li>
                                                            <a target="_blank" href={`${API_BASE_URL}/uploads/${news.nlink}`}>{news.nname}</a>
                                                        </li>
                                                    </div>
                                                ))
                                            ) : (
                                                <p>No Notice Circular available.</p>
                                            )}
                                        </ul>
                                    </marquee>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 pt-lg-0 pt-4">
                            <div className="text-center about-img">
                                <img src={affiliation} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 pt-lg-0 pt-4">
                            <div className="text-center about-img">
                                <img src={collabaration} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 pt-lg-0 pt-2">
                            <div className="text-center about-img">
                                <img src={membership} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 pt-lg-0 pt-2">
                            <div className="text-center about-img">
                                <img src={accrediation} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure Section */}
            <section style={{ animation: 'fadeIn 1s ease-in-out' }}>
                <div className="container">
                    <div className="row pt-4">
                        <div className="col-lg-4 col-md-6 col-12 pb-lg-0 pb-3">
                            <div className="blogs">
                                <div className="blog-img">
                                    <Link to={'/primary-wing'}>
                                        <img src={infra1} className="img-fluid w-100" alt="" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        <Link to={'/primary-wing'}> PRIMARY BLOCK</Link>
                                    </p>
                                    <p className="mt-0" style={{ color: 'green', fontSize: '18px', fontWeight: '600' }}>
                                        <Link to={'/primary-wing'}>CLASS NURSERY, KG, PREP, I-III</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pb-lg-0 pb-3">
                            <div className="blogs">
                                <div className="blog-img">
                                    <Link to={'/middle-wing'}>
                                        <img src={infra2} className="img-fluid w-100" alt="" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        <Link to={'/middle-wing'}>MIDDLE BLOCK</Link>
                                    </p>
                                    <p className="mt-0" style={{ color: 'green', fontSize: '18px', fontWeight: '600' }}>
                                        <Link to={'/middle-wing'}>CLASSES IV-VIII</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="blogs">
                                <div className="blog-img">
                                    <Link to={'/senior-wing'}>
                                        <img src={infra3} className="img-fluid w-100" alt="" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        <Link to={'/senior-wing'}>SENIOR BLOCK</Link>
                                    </p>
                                    <p className="mt-0" style={{ color: 'green', fontSize: '18px', fontWeight: '600' }}>
                                        <Link to={'/senior-wing'}>CLASSES IX-XII</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slick Slider of Events Gallery Section */}
            <section className="event_gallery mt-5 pb-5" style={{ animation: 'fadeIn 1s ease-in-out' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center">Events <span style={{ color: '#00a651' }}>Gallery</span></h2>
                        </div>
                        <div className="col-12">
                            {event.length > 0 ? (
                                <Slider {...sliderSettings}>
                                    {event.map((item, index) => (
                                        <div key={index} className="item">
                                            <div className="events">
                                                <div className="event-img">
                                                    <a href={`/events/${item.slug}`}>
                                                        <img
                                                            src={`${API_BASE_URL}/uploads/${item.thumbnail_image}`}
                                                            className="img-fluid w-100"
                                                            alt={`${item.title} Thumbnail`}
                                                        />
                                                    </a>
                                                    <div className="event-date-wrap">
                                                        <span className="event-date">{formatDate(item.event_date)}</span>
                                                    </div>
                                                </div>
                                                <div className="event-content">
                                                    <h3>
                                                        <a href={`/events/${item.slug}`}>{item.title}</a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            ) : (
                                <p>No events available at the moment.</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="event_gallery pb-5" style={{ animation: 'fadeIn 1s ease-in-out' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center">Assembly <span style={{ color: '#00a651' }}>Gallery</span></h2>
                        </div>
                        {filteredAssembly.length > 0 ? (
                            filteredAssembly.map((item, index) => (
                                <div className="col-lg-4 col-md-6 col-12" key={index}>
                                    <div className="item">
                                        <div className="events">
                                            <div className="event-img">
                                                <Link to={`/assembly/${item.slug}`} >
                                                    <img src={`${API_BASE_URL}/uploads/${item.thumbnail_image}`} className="img-fluid w-100" alt={`${item.title} Thumbnail`}
                                                    />
                                                </Link>
                                                <div className="event-date-wrap">
                                                    <span className="event-date">{formatDate(item.assembly_date)}</span>
                                                </div>
                                            </div>
                                            <div className="event-content">
                                                <h3>
                                                    <Link to={`/assembly/${item.slug}`}>{item.title}</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No Assembly available at the moment.</p>
                        )}
                    </div>
                </div>
            </section>

            {/* Achievement Section */}
            <section style={{ animation: 'fadeIn 1s ease-in-out' }}>
                <div className="container-fluid pt-5">
                    <div className="container text-center">
                        <div className="row m-auto">
                            <div className="col-lg-3 col-md-6 col-12 pb-lg-0 pb-md-5 pb-0">
                                <div className="counter counter-one">
                                    <div className="counter-img">
                                        <img src={achieve1} alt="" />
                                    </div>
                                    <div className="counter-content">
                                        <h2>4.5K +</h2>
                                        <span>STUDENTS</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="counter-two counter">
                                    <div className="counter-img">
                                        <img src={achieve2} alt="" />
                                    </div>
                                    <div className="counter-content">
                                        <h2><NumberCounter end={175} className="increment" /></h2>
                                        <span>TEACHERS</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="counter-three counter">
                                    <div className="counter-img">
                                        <img src={achieve3} alt="" />
                                    </div>
                                    <div className="counter-content">
                                        <h2>1K +</h2>
                                        <span>AWARDS</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="counter-four counter">
                                    <div className="counter-img">
                                        <img src={achieve4} alt="" />
                                    </div>
                                    <div className="counter-content">
                                        <h2><NumberCounter end={120} className="increment" /></h2>
                                        <span>SMART CLASSES</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Us Section */}
            <section style={{ animation: 'fadeIn 1s ease-in-out' }}>
                <div className="container explore-us">
                    <div className="row pt-5">
                        <div className="col-lg-6 col-12">
                            <div className="dps-location pb-3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.1819385428707!2d72.96465817510106!3d26.22327727706479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394189384a6aab61%3A0x65574cfc6e1f07a8!2sDPS%20Jodhpur!5e0!3m2!1sen!2sin!4v1684765372029!5m2!1sen!2sin"
                                    width="100%" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="dps-videos pb-3">
                                <iframe width="100%" height="450" src="https://www.youtube.com/embed/eJG1noHnV-4"
                                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home;
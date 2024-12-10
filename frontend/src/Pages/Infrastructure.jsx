import React, { useEffect, useState } from 'react';
import Infra1 from '../images/infra-1.jpg'
import Infra2 from '../images/infra-2.jpg'
import Infra3 from '../images/infra-3.jpg'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import axios from 'axios';

function Infrastructure() {
    const [data, setData] = useState([]); // State to hold the data fetched from the API

    // Fetch data from API when the component is mounted
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:5000/api/infrastructure/view")
            .then(response => {
                console.log(response.data.data);
                setData(response.data.data.reverse());
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    // const currentDate = new Date();

    // // Filter news based on category and date range
    // const generalInfrastructure = data.filter(news =>
    //     news.infrastructure_category === 'general' &&
    //     new Date(news.start_date) <= currentDate &&
    //     new Date(news.end_date) >= currentDate
    // );

    // const primaryInfrastructure = data.filter(news =>
    //     news.infrastructure_category === 'primary' &&
    //     new Date(news.start_date) <= currentDate &&
    //     new Date(news.end_date) >= currentDate
    // );

    // const middleInfrastructure = data.filter(news =>
    //     news.infrastructure_category === 'middle' &&
    //     new Date(news.start_date) <= currentDate &&
    //     new Date(news.end_date) >= currentDate
    // );

    // const seniorInfrastructure = data.filter(news =>
    //     news.infrastructure_category === 'senior' &&
    //     new Date(news.start_date) <= currentDate &&
    //     new Date(news.end_date) >= currentDate
    // );

    // const hostelInfrastructure = data.filter(news =>
    //     news.infrastructure_category === 'hostel' &&
    //     new Date(news.start_date) <= currentDate &&
    //     new Date(news.end_date) >= currentDate
    // );

    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            buttons: [
                "slideShow",
                "thumbs",
                "zoom",
                "fullScreen",
                "download",
                "share",
                "close"
            ],
            loop: false,
            protect: true
        });

        // Clean up Fancybox bindings when the component unmounts
        return () => {
            Fancybox.destroy();
        };
    }, []);

    const filterByCategory = (category) => {
        return data.filter(
            (infrastructure) => infrastructure.infrastructure_category === category
        );
    };

    return (
        <>
            <Header />

            <section style={{animation:'fadeIn 1s ease-in-out'}}>
                <div>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/eJG1noHnV-4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </div>
            </section>

            <section className='infrastructure' style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className='container-fluid mb-3' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Infrastructure & Facilities</h4>
                        </div>
                    </div>
                </div>
                <div className='row mx-auto'>
                    <div className='col-lg-3 col-md-12'>
                        <div className='pt-lg-5'>
                            <ul className="nav nav-pills flex-column" role="tablist">
                                <li>
                                    <a className="nav-link active" id="general-tab" data-bs-toggle="tab" data-bs-target="#general" role="tab" aria-controls="general" aria-selected="true">General</a>
                                </li>
                                <li>
                                    <a className="nav-link" id="primary-tab" data-bs-toggle="tab" data-bs-target="#primary" role="tab" aria-controls="primary" aria-selected="false">Primary</a>
                                </li>
                                <li>
                                    <a className="nav-link" id="middle-tab" data-bs-toggle="tab" data-bs-target="#middle" role="tab" aria-controls="middle" aria-selected="false">Middle</a>
                                </li>
                                <li>
                                    <a className="nav-link" id="senior-tab" data-bs-toggle="tab" data-bs-target="#senior" role="tab" aria-controls="senior" aria-selected="false">Senior</a>
                                </li>
                                <li>
                                    <a className="nav-link" id="hostel-tab" data-bs-toggle="tab" data-bs-target="#hostel" role="tab" aria-controls="hostel" aria-selected="false">Hostel</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-9 col-md-12'>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                                <h3>General</h3>
                                <div className="row">
                                    {filterByCategory("general").map((infrastructure, index) =>
                                        infrastructure.infrastructure_image.map((image, imgIndex) => (
                                            <div key={`${index}-${imgIndex}`} className="col-md-4 col-12 mb-4">
                                                <a data-fancybox="gallery" href={`http://localhost:5000/uploads/${image}`}>
                                                    <img src={`http://localhost:5000/uploads/${image}`} alt="General" className="img-fluid" />
                                                </a>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="primary" role="tabpanel" aria-labelledby="primary-tab">
                                <h3>Primary</h3>
                                <div className="row">
                                    {filterByCategory("primary").map((infrastructure, index) =>
                                        infrastructure.infrastructure_image.map((image, imgIndex) => (
                                            <div key={`${index}-${imgIndex}`} className="col-md-4 col-12 mb-4">
                                                <a data-fancybox="gallery" href={`http://localhost:5000/uploads/${image}`}>
                                                    <img src={`http://localhost:5000/uploads/${image}`} alt="Primary" className="img-fluid" />
                                                </a>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="middle" role="tabpanel" aria-labelledby="middle-tab">
                                <h3>Middle</h3>
                                <div className="row">
                                    {filterByCategory("middle").map((infrastructure, index) =>
                                        infrastructure.infrastructure_image.map((image, imgIndex) => (
                                            <div key={`${index}-${imgIndex}`} className="col-md-4 col-12 mb-4">
                                                <a data-fancybox="gallery" href={`http://localhost:5000/uploads/${image}`}>
                                                    <img src={`http://localhost:5000/uploads/${image}`} alt="Middle" className="img-fluid" />
                                                </a>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="senior" role="tabpanel" aria-labelledby="senior-tab">
                                <h3>Senior</h3>
                                <div className="row">
                                    {filterByCategory("senior").map((infrastructure, index) =>
                                        infrastructure.infrastructure_image.map((image, imgIndex) => (
                                            <div key={`${index}-${imgIndex}`} className="col-md-4 col-12 mb-4">
                                                <a data-fancybox="gallery" href={`http://localhost:5000/uploads/${image}`}>
                                                    <img src={`http://localhost:5000/uploads/${image}`} alt="Senior" className="img-fluid" />
                                                </a>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="hostel" role="tabpanel" aria-labelledby="hostel-tab">
                                <h3>Hostel</h3>
                                <div className="row">
                                    {filterByCategory("hostel").map((infrastructure, index) =>
                                        infrastructure.infrastructure_image.map((image, imgIndex) => (
                                            <div key={`${index}-${imgIndex}`} className="col-md-4 col-12 mb-4">
                                                <a data-fancybox="gallery" href={`http://localhost:5000/uploads/${image}`}>
                                                    <img src={`http://localhost:5000/uploads/${image}`} alt="Hostel" className="img-fluid" />
                                                </a>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Infrastructure;

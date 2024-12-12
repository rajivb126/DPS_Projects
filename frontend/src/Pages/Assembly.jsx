import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../config'

function Assembly() {
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

    const currentDate = new Date();

    const filteredAssembly = assembly.filter(item =>
        new Date(item.start_date) <= currentDate &&
        new Date(item.end_date) >= currentDate
    );

    return (
        <>
            <Header />

            <section style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-center">Assembly <span style={{ color: '#00a651' }}>Gallery</span></h3>
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

            <Footer />
        </>
    )
}

export default Assembly
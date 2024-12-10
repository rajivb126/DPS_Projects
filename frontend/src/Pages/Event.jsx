import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Event() {
    const [event, setEvent] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/api/events/view")
            .then(function (response) {
                console.log(response.data.data[0]);
                setEvent(response.data.data);
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

    const filteredEvents = event.filter(item =>
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
                            <h2 className="text-center">Events <span style={{ color: '#00a651' }}>Gallery</span></h2>
                        </div>
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map((item, index) => (
                                <div className="col-lg-4 col-md-6 col-12" key={index}>
                                    <div className="item">
                                        <div className="events">
                                            <div className="event-img">
                                                <a href={`/events/${item.slug}`}>
                                                    <img
                                                        src={`http://localhost:5000/uploads/${item.thumbnail_image}`}
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
                                </div>
                            ))
                        ) : (
                            <p>No events available at the moment.</p>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Event;
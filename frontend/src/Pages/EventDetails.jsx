import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';


export default function EventDetails() {
    const { slug } = useParams(); // Get slug from the URL
    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch the event data when the component mounts
    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                // Make a GET request to the server to fetch event details
                const response = await axios.get(`http://localhost:5000/api/events/view/${slug}`);

                // Set the event data in state
                setEvent(response.data);
                setLoading(false); // Set loading to false once data is fetched
            } catch (err) {
                // Handle error if the event is not found or request fails
                setError('Event not found or unable to fetch data');
                setLoading(false);
            }
        };

        fetchEventDetails();
    }, [slug]);

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

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <Header />

            <div className="container" style={{animation:'fadeIn 1s ease-in-out'}}>
                {event ? (
                    <div>
                        <h3 className='text-center'>{event.title}</h3>
                        <p className='text-center'>{event.description}</p>

                        {/* Bootstrap grid system for 3 images per row */}
                        <div className="row">
                            {event.event_files && event.event_files.length > 0 ? (
                                event.event_files.map((file, index) => (
                                    <div className="col-md-4" key={index}>
                                        {/* Use Fancybox to wrap images */}
                                        <a data-fancybox="gallery" href={`http://localhost:5000/uploads/${file}`} >
                                            <img src={`http://localhost:5000/uploads/${file}`} alt={`Event File ${index + 1}`} className='img-fluid mb-4' />
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <p>No event files available</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <p>No event found</p>
                )}
            </div>

            <Footer />
        </>
    );
}
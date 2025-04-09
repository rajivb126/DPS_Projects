import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import API_BASE_URL from '../config'

function TCIssue() {
    const [tcs, setTcs] = useState([]);
    const [filterTC, setFilterTC] = useState('');
    const [error, setError] = useState(null);

    const handleViewTC = () => {
        if (filterTC) {
            axios.get(`${API_BASE_URL}/api/transferCertificate/filter/${filterTC}`)
                .then(function (response) {
                    console.log(response.data.data);
                    setTcs(response.data.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setError(error);
                });
        }
    };

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

    return (
        <>
            <Header />

            <section className='TramsferCertificate' style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className='container-fluid mb-3' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Validate Transfer Certificate</h4>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <label className='fs-5'>
                        TC Number:
                        <input type="search" onChange={(e) => setFilterTC(e.target.value)} className='mx-3 px-2 py-1' />
                    </label><br /><br />
                    <button className='btn btn-primary px-5 py-2' onClick={handleViewTC}>View TC</button>
                </div>
            </section>
            <section>
                <div>
                    {tcs.map(tc => (
                        <div className='container text-center' key={tc._id}>
                            <div className='row mx-auto'>
                                <div className='col-12'>
                                    <div className='lightbox_image_tc'>
                                        <a data-fancybox="gallery" href={`${API_BASE_URL}/uploads/${tc.tc_image}`}>
                                            <img src={`${API_BASE_URL}/uploads/${tc.tc_image}`} alt="TC" width={300} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    )
}

export default TCIssue
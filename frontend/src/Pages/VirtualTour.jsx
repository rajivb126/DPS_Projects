import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function VirtualTour() {
    return (
        <>
            <Header />

            <section style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className='container-fluid mb-3' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Virtual Tour</h4>
                        </div>
                    </div>
                </div>
                <div className="container virtualTour" id="virtualtour">
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <iframe width="100%" height="500" src="https://www.youtube.com/embed/eJG1noHnV-4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
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

export default VirtualTour
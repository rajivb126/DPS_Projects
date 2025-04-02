import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import MissionandVision from '../images/Mission and Vision for Site.png'

function MissinVission() {
    return (
        <>
            <Header />

            <section className="vision_and_mission py-2 my-3" style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className='container-fluid' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Mission & Vision</h4>
                        </div>
                    </div>
                </div>
                <div className="container" id="visionandMission">
                    <div className="row mb-4">
                        <div className='mission_vision_image'>
                            <img src={MissionandVision} alt="" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default MissinVission
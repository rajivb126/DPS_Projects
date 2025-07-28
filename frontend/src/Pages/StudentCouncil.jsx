import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function StudentCouncil() {
    return (
        <>
            <Header />

            <section className="py-2 my-3" style={{ animation: 'fadeIn 1s ease-in-out' }}>
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
                            <img src={`https://dpsjodhpur.in/backend/uploads/studentcouncil.png`} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}   

export default StudentCouncil
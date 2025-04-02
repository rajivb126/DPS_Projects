import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Almanac() {
    return (
        <>
            <Header />

            <section style={{ animation: 'fadeIn 1s ease-in-out' }}>
                <div className='container-fluid mb-3' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>School Almanac</h4>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row mx-auto'>
                        <div className='col-12'>
                            <div className='school-magazine pt-lg-5 py-3'>
                                <iframe src="https://online.anyflip.com/aaycz/tzrq/index.html" seamless="seamless" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Almanac
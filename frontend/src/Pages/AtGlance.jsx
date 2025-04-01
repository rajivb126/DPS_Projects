import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ACCREDITATION_IDS from '../images/ACCREDITATION_IDS.jpg';
import Banner from '../images/SCHOOL BUILDING.jpg'

function AtGlance() {
    return (
        <>
            <Header />

            <section style={{ animation: 'fadeIn 1s ease-in-out' }}>
                <section style={{ animation: 'fadeIn 1s ease-in-out' }}>
                    <div className="container-fluid slider px-0" style={{ backgroundColor: 'black' }}>
                        <div id="carouselExampleIndicators" className="carousel slide">
                            <div className="carousel-inner">
                                <img src={Banner} className="d-block w-100" />
                            </div>
                        </div>
                    </div>
                </section>
                <div className='container-fluid mb-3' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>At A Glance</h4>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mx-auto">
                        <div className="col-12">
                            <div className="atglance">
                                <p>A magnificent temple of learning amidst the rich and cultural heritage of Rajasthan, Delhi Public School Jodhpur stands tall as a guiding light of educational excellence. DPS, a Co-Ed school affiliated and accredited to Central Board of Secondary Education (CBSE) was established in the year 1998 and is officiated by Delhi Public School Society. Set on a sprawling 15-acre campus with the installation of the solar panel, adorned with superabundant green trees, the school's environment is conducive to open and expansive learning comprising approx. 5000 students and 250 staff members. The institution is under the umbrella of certification with the memberships of National Progressive School’s Conference (NPSC) and the School Innovation Council (SIC) respectively.</p>

                                {/* <img src={ACCREDITATION_IDS} alt="" className="ataglance-responsive-image img-fluid" /> */}

                                <p>The campus under the Video Surveillance of CCTV, promises an impressive infrastructure with four meticulously designed blocks. Three of these blocks are dedicated to different wings: the Junior block for classes Nursery-III, the Middle block for classes IV-VIII blended with an integrated lab called STEM, teaching an amalgamated knowledge of Science, Technology, Engineering and Mathematics which is essential for preparing students for future trans-disciplinary career demands. It also features an elevator specifically for disabled children; and the Senior block for classes IX-XII, all equipped with front rank smart boards. The separate Lab and Library Block is a hub of intellectual activity. It characterises smart boards, four state-of-the-art Science Labs (Biology, Biotech, Chemistry, Physics), an Atal Tinkering Lab, Specialised Information and Communication Technology (ICT) lab, Mathematics, and Geography labs. The teachers have an access to a well-appointed Resource Lab, and the campus includes an air-conditioned Conference Hall, a pulsating Art Gallery, and an air-conditioned Auditorium with a seating capacity of more than 600 students. Workshops on Capacity Building Programme are often conducted with an aim to develop and strengthen the skills, instincts and abilities of teachers with the purpose to have responsible citizens of tomorrow.</p>

                                {/* <img src={ACCREDITATION_IDS} alt="" className="ataglance-responsive-image img-fluid" /> */}


                                <p>DPS Jodhpur is renowned for its comprehensive sports infrastructure, which includes expansive outdoor facilities such as football and cricket grounds, basketball, volleyball, and handball courts, a tennis court, a lawn tennis court, skating track and extensive indoor facilities for table tennis, carrom, chess, a gym, and yoga. The campus also features a residential block with three centrally air-conditioned hostels, a mess block, and staff quarters. Separate hostels for boys and girls ensure comfort and safety along with a well-stocked mess with modern gadgets, a spacious dining hall, and dedicated staff that caters to the nutritional needs of students 24/7.  In our commitment to safety, the school has installed fire-fighting equipment throughout the campus for which frequent drills are conducted. These proactive measures help ensure an effective fire safety system, along with the security staff that intends to implement safety protocols providing a secure environment. An infirmary along with counsellors is too at service that is meant to provide aid and find solutions to the problems of students. In addition to that, the campus provides an ample and ideal space for car parking.</p>

                                {/* <img src={ACCREDITATION_IDS} alt="" className="ataglance-responsive-image img-fluid" /> */}


                                <p>In a nutshell, DPS Jodhpur is not just a school; it is a nurturing ground for the leaders of tomorrow, blending tradition with modernity to provide an unparalleled educational experience under the guidance of the faculty members.</p>

                                {/* <img src={ACCREDITATION_IDS} alt="" className="ataglance-responsive-image img-fluid" /> */}

                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-12">
                            <div className="atgalnce-images">
                                <div className="Images">
                                    <img src={ACCREDITATION_IDS} alt="" className="pt-lg-5 pb-lg-4" />
                                    <img src={ACCREDITATION_IDS} alt="" className="pb-lg-4" />
                                    <img src={ACCREDITATION_IDS} alt="" className="pb-lg-4" />
                                    <img src={ACCREDITATION_IDS} alt="" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default AtGlance
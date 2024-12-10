import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function MissinVission() {
    return (
        <>
            <Header />

            <section className="vision_and_mission py-2 my-3" style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className='container-fluid mb-3' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Vision & Mission</h4>
                        </div>
                    </div>
                </div>
                <div className="container" id="visionandMission">
                    <div className="row mb-4">
                        <div className="col-md-3" style={{ backgroundColor: 'cyan' }}>
                            <div className="mission">
                                <h2>Mission</h2>
                                <p>The Mission of Delhi Public School Jodhpur is to empower students and teachers enabling them
                                    to blossom their potential to the optimum level for the good of the society and also
                                    students develop their skills and competencies essential to succeed in emerging creative
                                    economy and environment. To train minds to live in harmony and friendship.</p>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="mission_list">
                                <div className="row">
                                    <div className="col-lg-3 col-6 p-0">
                                        <div className="mission_box">
                                            <p>Leader Imbibe strong ethics, rational decision making and leadership with a sense
                                                of team work.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 p-0">
                                        <div className="mission_box">
                                            <p>Learner Take responsibility for learning, develop intellectual curiosity and
                                                become life-long learners.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 p-0">
                                        <div className="mission_box">
                                            <p>Thinker Be a creative, innovative and logical thinker.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 p-0">
                                        <div className="mission_box">
                                            <p>Communication Think, speak and write with precision, clarity and fluency.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 p-0">
                                        <div className="mission_box">
                                            <p>Discipline Practice self-discipline be organized and lead a healthy and balanced
                                                life.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 p-0">
                                        <div className="mission_box">
                                            <p>Perseverance The tenacity to hold on to your aspirations against all odds.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 p-0">
                                        <div className="mission_box">
                                            <p>Empathy Understand others perspective and grow along.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 p-0">
                                        <div className="mission_box">
                                            <p>Integrity Adhering to principles and righteousness.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-md-9">
                            <div className="vision_list">
                                <div className="row">
                                    <div className="col-6 p-0">
                                        <div className="vision_box">
                                            <p>Envisioning the growth at global level, DPS Jodhpur will work upon developing
                                                intelligence, curiosity and a sense of responsibility amongst its learners to
                                                help the community at large.</p>
                                        </div>
                                    </div>
                                    <div className="col-6 p-0">
                                        <div className="vision_box">
                                            <p>Values of collaboration, ethical decision making, service to society will be of
                                                paramount importance so as to prepare the students to work harmoniously in
                                                intensive environs.</p>
                                        </div>
                                    </div>
                                    <div className="col-6 p-0">
                                        <div className="vision_box">
                                            <p>To ensure that the teachers remain committed to the welfare of the students
                                                thereby enabling them to develop their creativity in any field of their choice
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-6 p-0">
                                        <div className="vision_box">
                                            <p>The parents to be empowered through interactions so that they bring up their
                                                children with the right values.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3" style={{ backgroundColor: 'cyan' }}>
                            <div className="vision">
                                <h2>Vision</h2>
                                <p>"Connecting, engaging, and empowering our community through innovation and user-friendly
                                    experiences."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default MissinVission
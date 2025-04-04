import React from 'react';
import provicechairman from '../images/pro-vice-chairman.jpg';
import Director from '../images/Director.jpg';
import Principal from '../images/Principal.jpg';
import VicePrincipal from '../images/vicep.png';
import Headmistress_Middle from '../images/hm_middle.jpg';
import Headmistress_Primary from '../images/Hm_primary.jpeg'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function AuthoritiesMessage() {
    return (
        <>
            <Header />

            {/* Authorities Message Section */}
            <section style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className='container-fluid mb-3' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Messages By Mentor</h4>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pb-5" id="authoritiesMessages">
                    <div className="container authorities_message">
                        <div>
                            <div className="row">
                                <div className="col-md-2 ">
                                    <div className='image'></div>
                                    <img src={provicechairman} alt="Pro Vice Chairman" />
                                </div>

                                <div className="col-md-10 message">
                                    <h2><i>Education prepares the young to educate themselves throughout their lives.</i></h2>

                                    <p>It is with immense pride and joy that I reflect on the journey of Delhi Public School Jodhpur, since its inception in April 1998. Our school is a torch-bearer of educational excellence, deeply rooted in values and committed to nurturing the students pragmatically.</p>

                                    <p>Set on a sprawling 15-acre campus, our school is a sanctuary of knowledge and growth. The lush green surroundings and state-of-the-art infrastructure provide an inspiring and open learning environment. These facilities symbolise our unwavering dedication to offering a world-class education.</p>

                                    <p className="pb-2">At DPS Jodhpur, we believe in shaping well-rounded individuals who understand that 'The most important thing in life is to learn how to give out love, and to let it come in. Our mission extends beyond academic achievement; we strive to cultivate compassionate, humane individuals who value integrity, embrace the power of skills, and facilitate a lifelong passion for learning. We are committed to preparing our students to contribute meaningfully in an ever-evolving technological era. Living by the school’s motto, ‘Service Before Self’, we strive to instil responsibility and empathy in our students towards all living beings.</p>

                                    <p>As we continue this remarkable journey, I extend my heartfelt gratitude to our dedicated staff, supportive parents, and enthusiastic students. Together, we create a vibrant and inclusive community that embodies the true spirit of DPS Jodhpur.</p>

                                    <div className='text-end'>
                                        <h2>DINESH C. KOTHARI</h2>
                                        <h3>(Pro Vice Chairman)</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container blue_authorities_message">
                        <div className="row authorities_message pt-5">
                            <div className="col-md-2">
                                <div className='image'>
                                    <img src={Director} alt="Director" className='director-image' />
                                </div>
                            </div>

                            <div className="col-md-10 message">
                                <h2><i>Through the windows of education, we see the world in all its colours.</i></h2>

                                <p>At Delhi Public School Jodhpur, our role transcends traditional education, focusing on all-inclusive development and character building. Our magnificent campus, rich with cultural heritage, nurtures students into future leaders. With top-notch facilities, including advanced labs, sports infrastructure, and residential blocks, we provide a comprehensive learning experience.</p>

                                <p>At Delhi Public School Jodhpur, our role transcends traditional education, focusing on all-inclusive development and character building. Our magnificent campus, rich with cultural heritage, nurtures students into future leaders. With top-notch facilities, including advanced labs, sports infrastructure, and residential blocks, we provide a comprehensive learning experience.</p>

                                <p>At DPS Jodhpur, we believe in the power of education to transform lives. By instilling values of integrity and acceptance, we prepare our students to excel in a dynamic global society, ensuring they become compassionate and responsible citizens. Our academic achievements testify to our unwavering commitment to excellence, and I am proud to be a part of this journey, guiding our school to greater heights.</p>

                                <p>As we continue to advance, we remain steadfast in our mission to cultivate a learning environment that inspires innovation, creativity, and a lifelong love for knowledge. The students here are empowered to be learners, thinkers, doers, and leaders of tomorrow. Together, we strive to create a brighter future, championing a community where education knows no bounds and every student can realise their full potential.</p>

                                <div className='text-end'>
                                    <h2>BIKRAM SINGH YADAV</h2>
                                    <h3>(Director)</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container authorities_message bisque_authoritites_message">
                        <div className="row">
                            <div className="col-md-2">
                                <div className='image'>
                                    <img src={Principal} alt="Principal" />
                                </div>
                            </div>

                            <div className="col-md-10 message">
                                <h2><i>Education is the compass that points us towards the stars of our potential.</i></h2>

                                <p>Greetings and a heartfelt welcome to DPS Jodhpur, where the landscape of education, is woven with threads of tradition and innovation. Our illustrious institution, nestled in the heart of Rajasthan's vibrant culture, is more than just a school; it is a haven of learning and growth. With all the contemporary facilities, including smart boards, specialised labs, extensive sports amenities and an expansive library, we provide a stimulating and nurturing environment.</p>

                                <p>In the hallowed halls of DPS Jodhpur, we cultivate not just minds, but also hearts. Our pursuit of knowledge is likewise an odyssey that transforms raw uncut stones of curiosity into brilliant diamonds of wisdom. With a curriculum that mingles the rigour of academia with the creativity of the arts, we ensure our students are well-versed in the lingua franca of the global village.</p>

                                <p className="pb-2">We believe in, 'Per aspera ad astra' - through hardships to the stars – this encapsulates our belief that every challenge is an opportunity in disguise. We encourage our students to embrace this philosophy, becoming resilient, adaptable, and lifelong learners. As custodians of the future, we are committed to empowering our students with the skills and values that will enable them to navigate the complexities of the modern world with grace and intelligence.</p>

                                <p>Welcome to a journey of enlightenment, excellence, and endless possibilities.</p>

                                <div className='text-end'>
                                    <h2>ABHILASHA SHAW</h2>
                                    <h3>(Principal)</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container blue_authorities_message">
                        <div className="row authorities_message pt-5">
                            <div className="col-md-2">
                                <div className='image'>
                                    <img src={VicePrincipal} alt="Vice Principal" className='director-image' />
                                </div>
                            </div>

                            <div className="col-md-10 message">
                                <h2><i>Through the prism of education, the light of knowledge refracts into a spectrum of understanding.</i></h2>

                                <p>Delhi Public School Jodhpur is dedicated to cultivating an environment that determines academic excellence, creativity, and personal growth. Our commitment is to provide a holistic education that furthers every student's potential, preparing them for future challenges.</p>

                                <p>Our curriculum is designed to inspire intellectual curiosity and encourage students to excel academically and in extracurricular activities equally. We believe that a growth mindset is crucial, and we strive to instil this in our students, helping them embrace challenges, work collaboratively, and develop resilience.</p>

                                <p>Our experienced and passionate staff is pivotal in creating a supportive and stimulating learning environment. We ensure that each student receives personalised attention, allowing them to thrive and reach their full potential. Our strong academic record is a testament to our commitment to excellence, with our students consistently achieving success in top institutions worldwide.</p>

                                <p>Beyond academics, we value performing arts and undertake unique programs like pitching start-ups, MUNs, and Robotics, enriching the students' educational experience, critical thinking and love for learning. Additionally, the school clubs offer students ample opportunities to explore their interests and talents.</p>

                                <p>We are dedicated to creating a culture of respect, equality, empathy and understanding in our students to equip them to contribute to the world.</p>

                                <div className='text-end'>
                                    <h2 className='text-uppercase'><i>Ms Kaajal Kanwar Bhati</i></h2>
                                    <h3>(Vice Principal)</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container authorities_message bisque_authoritites_message">
                        <div className="row">
                            <div className="col-md-2">
                                <div className='image'>
                                    <img src={Headmistress_Middle} alt="Headmistress Middle" />
                                </div>
                            </div>

                            <div className="col-md-10 message">
                                <h2><i>The pen of education writes the story of our future on the pages of today.</i></h2>

                                <p>Delhi Public School Jodhpur sincerely endeavours to polish the students and equip them with the skills needed to survive in the competitive world. The school aims to provide a stimulating and supportive environment, encouraging students to outshine themselves and develop a lifelong love for learning.</p>

                                <p>In the Middle Block, we offer a wide-ranging curriculum that challenges students academically while refining their creativity and critical thinking skills. Our dedicated teachers are zealous about their subjects and are committed to providing high-quality education. They encourage students to explore new ideas, ask questions, and engage in meaningful discussions, helping them to become independent and confident learners.</p>

                                <p>We believe that education extends beyond the classroom. Activities, including sports, arts, music and drama among others, allow students to explore their interests and talents. Through these collaborative and concerted activities, the school offers a plethora of opportunities for the students to develop heuristically.</p>

                                <p>Values such as respect, kindness, and integrity lie at the core of the school’s ethos. We are committed to fostering a community where students feel safe, respected, and empowered to achieve their best.</p>

                                <p>Our committed teachers ensure that each student receives the support and guidance they need to succeed.</p>

                                <div className='text-end'>
                                    <h2 className='text-uppercase'><i>Ms Pallavi Das</i></h2>
                                    <h3>(Headmistress Middle)</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container blue_authorities_message">
                        <div className="row authorities_message pt-5">
                            <div className="col-md-2">
                                <div className='image'>
                                    <img src={Headmistress_Primary} alt="Headmistress Primary Block" className='director-image' />
                                </div>
                            </div>

                            <div className="col-md-10 message">
                                <h2><i>There are two lasting begets we can give our children. One is roots, the other wings.</i></h2>

                                <p>The first step into school is that giant step forward, where children embark on the great adventure of discovering the wide world outside and the depth of the world within. As we hold the little fingers of the young ones and guide them forward, we realise our responsibility of nurturing their curiosity, igniting their minds to pierce the skies, helping them discover the world of books and richness of experience, ponder on the “mystery of birds in the sky, the bees in the sun and the flowers on a green hill”, and today, ‘master the magic of technology and the limitless span of cyberspace.’</p>

                                <p>The Primary Block of Delhi Public School Jodhpur is a place where we lay the foundation for a lifetime of learning and growth. Our dedicated teachers deliver exceptional education tailored to young children, focusing on curiosity, critical thinking, and problem-solving through captivating lessons and hands-on activities. We emphasise a well-rounded education, offering in-school activities in sports, arts, music, and drama, along with unique programs like Grandparents’ Day, donation drives and festivals to promote respect for the culture and heritage of their country. Besides producing highly proficient professionals, we also dedicate ourselves to developing them holistically by giving them a strong foundation.</p>

                                <p>We prioritise a supportive and inclusive culture, ensuring each student feels valued and respected, promoting kindness, respect, and integrity. Health and well-being are paramount, emphasising good eating habits and physical activity. We lay a lot of prominence on teacher-parent partnership and to make the system more effective and dynamic, the teachers and parents regularly interact and monitor the child’s progress. This combined effort helps children to be the best in every field.</p>

                                <div className='text-end'>
                                    <h2 className='text-uppercase'><i>Ms Purnima Rajvi</i></h2>
                                    <h3>(Headmistress Primary Block)</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default AuthoritiesMessage
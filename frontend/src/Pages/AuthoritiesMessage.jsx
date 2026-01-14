import React from 'react';
import provicechairman from '../images/pro-vice-chairman.jpg';
import Director from '../images/Director.jpg';
import Principal from '../images/Principal.jpg';
import VicePrincipal from '../images/vicep.png';
import Headmistress_Middle from '../images/hm_middle.jpg';
import Headmistress_Primary from '../images/Hm_primary.jpeg'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

function AuthoritiesMessage() {
    return (
        <>
            <Header />

            {/* Authorities Message Section */}
            <section style={{ animation: 'fadeIn 1s ease-in-out' }}>
                <div className='container-fluid mb-3' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Messages By Mentors</h4>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pb-5" id="authoritiesMessages">
                    <div className="container authorities_message">
                        <div>
                            <div className="row">
                                <div className="col-lg-2 ">
                                    <div className='images'>
                                        <img src={provicechairman} alt="Pro Vice Chairman" className='pro_vice_chairman_image' />
                                    </div>
                                </div>

                                <div className="col-lg-10 message">
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
                            <div className="col-lg-2">
                                <div className='image'>
                                    <img src={Director} alt="Director" className='director-image' />
                                </div>
                                <div className='icon pt-2 pb-1'>
                                    <a href="https://www.youtube.com/@bsyadav-mythoughts/videos" target='_blank'>
                                        <FontAwesomeIcon icon={faYoutube} className='youtube_icon' />
                                    </a>

                                    <a href="https://bsyadav-mythoughts.blogspot.com/">
                                        <FontAwesomeIcon icon={faBlog} className='blog_icon' />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-10 message">
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
                            <div className="col-lg-2">
                                <div className='image'>
                                    <img src={Principal} alt="Principal" />
                                </div>
                            </div>

                            <div className="col-lg-10 message">
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

                    <div className="container authorities_message bisque_authoritites_message">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className='image'>
                                    <img src={VicePrincipal} alt="Vice Principal" className='director-image' />
                                </div>
                            </div>

                            <div className="col-lg-10 message">
                                <h2><i>Through the prism of education, the light of knowledge refracts into a spectrum of understanding.</i></h2>
                                
                                <p>Delhi Public School, Jodhpur is committed to nurturing an environment that fosters academic excellence, creativity, and personal growth. The school's mission is to provide a holistic education that unlocks every student's potential and equips learners to meet future challenges with confidence and competence.</p>

                                <p>The thoughtfully designed curriculum inspires intellectual curiosity and encourages students to excel both academically and in co-curricular pursuits. A strong belief in cultivating a growth mindset empowers students to embrace challenges, collaborate effectively, and develop resilience as lifelong learners.</p>

                                <p>The foundation of the school's success lies in its experienced, dedicated, and passionate faculty, who create a supportive and stimulating learning environment. Through personalised attention and mentorship, every student is guided towards achieving their highest potential. Consistent academic achievements and placements in prestigious institutions worldwide stand as a testament to the pursuit of excellence.</p>

                                <p>Beyond the classroom, strong emphasis is placed on the performing arts, along with distinctive programmes such as start-up pitching, Model United Nations (MUNs), and Robotics. These initiatives enrich the learning experience, strengthen critical thinking, and nurture a genuine love for learning. A diverse range of school clubs further provides students with opportunities to explore interests and showcase talents.</p>

                                <p>Delhi Public School, Jodhpur is deeply committed to fostering a culture rooted in respect, equality, empathy, and understanding—preparing students not only for academic success but also to become responsible, compassionate, and impactful global citizens.</p>

                                <div className='text-end'>
                                    <h2 className='text-uppercase'><i>Ms Kaajal Kanwar Bhati</i></h2>
                                    <h3>(Vice Principal)</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container authorities_message bisque_authoritites_message">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className='image'>
                                    <img src={Headmistress_Middle} alt="Headmaster Middle Block" className='director-image' />
                                </div>
                            </div>

                            <div className="col-lg-10 message">
                                <h2><i>“The pen of education writes the story of our future on the pages of today.”</i></h2>
                                <p>At Delhi Public School Jodhpur, we sincerely endeavour to shape young minds and equip them with the skills required to thrive in an ever-evolving and competitive world. Learning here is guided by timeless principles—curiosity that prompts inquiry, observation that sharpens understanding, reasoning that brings clarity, and application that gives knowledge its true purpose. When these elements converge, education transcends the mere accumulation of information and becomes a way of interpreting the world with insight and balance.</p>
                                <p>In the Middle Block, we offer a comprehensive and dynamic curriculum that challenges students academically while nurturing creativity and critical thinking. Our classrooms are spaces where questions are welcomed, ideas are examined, and exploration is encouraged. Dedicated teachers, deeply invested in their disciplines, guide students to think independently, articulate confidently and approach learning with both precision and imagination.</p>
                                <p>We firmly believe that meaningful learning extends beyond the classroom. Engagement in sports, arts, music, drama and co-curricular pursuits allows students to test their abilities, collaborate with peers and grow through experience. These opportunities foster adaptability, resilience and discovery—skills best developed through active participation and reflection.</p>
                                <p>At the heart of our institution lie the values of respect, kindness and integrity. We are committed to nurturing a safe, inclusive and supportive environment where every child feels valued and empowered to realise their potential. With committed mentors offering guidance and direction, students learn to strike a thoughtful balance between knowledge and wisdom, discipline and creativity, structure and freedom.</p>
                                <p>Together, we aspire to nurture learners who are inquisitive in thought, grounded in values and prepared to face the future with confidence and clarity.</p>

                                
                                <div className='text-end'>
                                    <h2 className='text-uppercase'><i>Mr Darshan Lal</i></h2>
                                    <h3>(Headmaster Middle Block)</h3>
                                </div>
                            </div>
                        </div>
                    </div>




                    
                    <div className="container blue_authorities_message">
                        <div className="row authorities_message pt-5">
                            <div className="col-lg-2">
                                <div className='image'>
                                    <img src={Headmistress_Primary} alt="Headmistress Primary Block" className='director-image' />
                                </div>
                            </div>

                            <div className="col-lg-10 message">
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import provicechairman from '../images/pro-vice-chairman.jpg';
import Director from '../images/Director.jpg';
import Principal from '../images/Principal.jpg';
import VicePrincipal from '../images/vicep.png';
import Headmistress_Middle from '../images/hm_middle.jpg';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import infra1 from '../images/infra-1.jpg'
import infra2 from '../images/infra-2.jpg';
import infra3 from '../images/infra-3.jpg';
// import hostel from '../images/hostel.jpg';
import { Link } from 'react-router-dom';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function About() {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle button visibility based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll back to the top of the page
    const scrollToTop = () => {
        const totalScrollDistance = window.scrollY;
        const duration = 3000; // 3 seconds
        const intervalTime = 20; // milliseconds
        const scrollStep = totalScrollDistance / (duration / intervalTime);

        const scrollInterval = setInterval(() => {
            if (window.scrollY > 0) {
                window.scrollBy(0, -scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, intervalTime);
    };

    return (
        <>
            <Header />

            {/*  */}
            <section className="container-fluid py-5" id="authoritiesMessages">
                <div className="container authorities_message">
                    <h3>Authorities <span>Messages</span></h3>
                    <div style={{ backgroundColor: 'bisque' }}>
                        <div className="row m-auto">
                            <div className="col-md-8 message">
                                <h2><i>Education prepares the young to educate themselves throughout their lives.</i></h2>

                                <p>It is with immense pride and joy that I reflect on the journey of Delhi Public School Jodhpur, since its inception in April 1998. Our school is a torch-bearer of educational excellence, deeply rooted in values and committed to nurturing the students pragmatically.</p>

                                <p>Set on a sprawling 15-acre campus, our school is a sanctuary of knowledge and growth. The lush green surroundings and state-of-the-art infrastructure provide an inspiring and open learning environment. These facilities symbolise our unwavering dedication to offering a world-class education.</p>

                                <p className="pb-2">At DPS Jodhpur, we believe in shaping well-rounded individuals who understand that 'The most important thing in life is to learn how to give out love, and to let it come in. Our mission extends beyond academic achievement; we strive to cultivate compassionate, humane individuals who value integrity, embrace the power of skills, and facilitate a lifelong passion for learning. We are committed to preparing our students to contribute meaningfully in an ever-evolving technological era. Living by the school’s motto, ‘Service Before Self’, we strive to instil responsibility and empathy in our students towards all living beings.</p>

                                <p>As we continue this remarkable journey, I extend my heartfelt gratitude to our dedicated staff, supportive parents, and enthusiastic students. Together, we create a vibrant and inclusive community that embodies the true spirit of DPS Jodhpur.</p>
                            </div>
                            <div className="col-md-4 image">
                                <img src={provicechairman} alt="" />
                                <h2>DINESH C. KOTHARI</h2>
                                <h3>(Pro Vice Chairman)</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container blue_authorities_message">
                    <div className="row m-auto authorities_message pt-5">
                        <div className="col-md-4 image">
                            <img src={Director} alt="Director & Principal" className='director-image' />
                            <h2>BIKRAM SINGH YADAV</h2>
                            <h3 className='text-light'>(Director)</h3>
                        </div>
                        <div className="col-md-8 message">
                            <h2><i>Through the windows of education, we see the world in all its colours.</i></h2>

                            <p>At Delhi Public School Jodhpur, our role transcends traditional education, focusing on all-inclusive development and character building. Our magnificent campus, rich with cultural heritage, nurtures students into future leaders. With top-notch facilities, including advanced labs, sports infrastructure, and residential blocks, we provide a comprehensive learning experience.</p>

                            <p>At Delhi Public School Jodhpur, our role transcends traditional education, focusing on all-inclusive development and character building. Our magnificent campus, rich with cultural heritage, nurtures students into future leaders. With top-notch facilities, including advanced labs, sports infrastructure, and residential blocks, we provide a comprehensive learning experience.</p>

                            <p>At DPS Jodhpur, we believe in the power of education to transform lives. By instilling values of integrity and acceptance, we prepare our students to excel in a dynamic global society, ensuring they become compassionate and responsible citizens. Our academic achievements testify to our unwavering commitment to excellence, and I am proud to be a part of this journey, guiding our school to greater heights.</p>

                            <p>As we continue to advance, we remain steadfast in our mission to cultivate a learning environment that inspires innovation, creativity, and a lifelong love for knowledge. The students here are empowered to be learners, thinkers, doers, and leaders of tomorrow. Together, we strive to create a brighter future, championing a community where education knows no bounds and every student can realise their full potential.</p>
                        </div>
                    </div>
                </div>

                <div className="container authorities_message bisque_authoritites_message">
                    <div className="row m-auto">
                        <div className="col-md-8 message">
                            <h2><i>Education is the compass that points us towards the stars of our potential.</i></h2>

                            <p>Greetings and a heartfelt welcome to DPS Jodhpur, where the landscape of education, is woven with threads of tradition and innovation. Our illustrious institution, nestled in the heart of Rajasthan's vibrant culture, is more than just a school; it is a haven of learning and growth. With all the contemporary facilities, including smart boards, specialised labs, extensive sports amenities and an expansive library, we provide a stimulating and nurturing environment.</p>

                            <p>In the hallowed halls of DPS Jodhpur, we cultivate not just minds, but also hearts. Our pursuit of knowledge is likewise an odyssey that transforms raw uncut stones of curiosity into brilliant diamonds of wisdom. With a curriculum that mingles the rigour of academia with the creativity of the arts, we ensure our students are well-versed in the lingua franca of the global village.</p>

                            <p className="pb-2">We believe in, 'Per aspera ad astra' - through hardships to the stars – this encapsulates our belief that every challenge is an opportunity in disguise. We encourage our students to embrace this philosophy, becoming resilient, adaptable, and lifelong learners. As custodians of the future, we are committed to empowering our students with the skills and values that will enable them to navigate the complexities of the modern world with grace and intelligence.</p>

                            <p>Welcome to a journey of enlightenment, excellence, and endless possibilities.</p>
                        </div>
                        <div className="col-md-4 image">
                            <img src={Principal} alt="Principal" />
                            <h2>ABHILASHA SHAW</h2>
                            <h3>(Principal)</h3>
                        </div>
                    </div>
                </div>

                <div className="container blue_authorities_message">
                    <div className="row m-auto authorities_message pt-5">
                        <div className="col-md-4 image">
                            <img src={VicePrincipal} alt="Director & Principal" className='director-image' />
                            <h2 className='text-uppercase'><i>Ms Kaajal Kanwar Bhati</i></h2>
                            <h3 className='text-light'>(Vice Principal)</h3>
                        </div>
                        <div className="col-md-8 message">
                            <h2><i>Through the prism of education, the light of knowledge refracts into a spectrum of understanding.</i></h2>

                            <p>Delhi Public School Jodhpur is dedicated to cultivating an environment that determines academic excellence, creativity, and personal growth. Our commitment is to provide a holistic education that furthers every student's potential, preparing them for future challenges.</p>

                            <p>Our curriculum is designed to inspire intellectual curiosity and encourage students to excel academically and in extracurricular activities equally. We believe that a growth mindset is crucial, and we strive to instil this in our students, helping them embrace challenges, work collaboratively, and develop resilience.</p>

                            <p>Our experienced and passionate staff is pivotal in creating a supportive and stimulating learning environment. We ensure that each student receives personalised attention, allowing them to thrive and reach their full potential. Our strong academic record is a testament to our commitment to excellence, with our students consistently achieving success in top institutions worldwide.</p>

                            <p>Beyond academics, we value performing arts and undertake unique programs like pitching start-ups, MUNs, and Robotics, enriching the students' educational experience, critical thinking and love for learning. Additionally, the school clubs offer students ample opportunities to explore their interests and talents.</p>

                            <p>We are dedicated to creating a culture of respect, equality, empathy and understanding in our students to equip them to contribute to the world.</p>
                        </div>
                    </div>
                </div>

                <div className="container authorities_message bisque_authoritites_message">
                    <div className="row m-auto">
                        <div className="col-md-8 message">
                            <h2><i>The pen of education writes the story of our future on the pages of today.</i></h2>

                            <p>Delhi Public School Jodhpur sincerely endeavours to polish the students and equip them with the skills needed to survive in the competitive world. The school aims to provide a stimulating and supportive environment, encouraging students to outshine themselves and develop a lifelong love for learning.</p>

                            <p>In the Middle Block, we offer a wide-ranging curriculum that challenges students academically while refining their creativity and critical thinking skills. Our dedicated teachers are zealous about their subjects and are committed to providing high-quality education. They encourage students to explore new ideas, ask questions, and engage in meaningful discussions, helping them to become independent and confident learners.</p>

                            <p>We believe that education extends beyond the classroom. Activities, including sports, arts, music and drama among others, allow students to explore their interests and talents. Through these collaborative and concerted activities, the school offers a plethora of opportunities for the students to develop heuristically.</p>

                            <p>Values such as respect, kindness, and integrity lie at the core of the school’s ethos. We are committed to fostering a community where students feel safe, respected, and empowered to achieve their best.</p>

                            <p>Our committed teachers ensure that each student receives the support and guidance they need to succeed.</p>
                        </div>
                        <div className="col-md-4 image">
                            <img src={Headmistress_Middle} alt="Principal" />
                            <h2 className='text-uppercase'><i>Ms Pallavi Das</i></h2>
                            <h3>(Headmistress Middle)</h3>
                        </div>
                    </div>
                </div>
            </section>


            <section className="vision_and_mission py-2 my-3" id="">
                <div className="container" id="visionandMission">
                    <div className="row">
                        <h3>Vission <span>& Mission</span></h3>
                    </div>
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

            <section>
                <div className="container infrastructure pb-4" id="infrastructure">
                    <div className="row">
                        <h3>DPS <span>Infrastructure</span></h3>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12 px-1 mb-3">
                            <div className="blogs">
                                <div className="blog-img">
                                    <Link to={'/primary-wing'} target="_blank">
                                        <img src={infra1} className="img-fluid w-100" alt="" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        <Link to={'/primary-wing'} target="_blank"> PRIMARY BLOCK</Link>
                                    </p>
                                    <p className="mt-0" style={{ color: 'green', fontSize: '18px', fontWeight: '600' }}>
                                        <Link to={'/primary-wing'}>CLASSNclassName NURSERY, KG, PREP, I-III</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 px-1 mb-3">
                            <div className="blogs">
                                <div className="blog-img">
                                    <Link to={'/middle-wing'} target="_blank">
                                        <img src={infra2} className="img-fluid w-100" alt="" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        <Link to={'/middle-wing'} target="_blank">MIDDLE BLOCK</Link>
                                    </p>
                                    <p className="mt-0" style={{ color: 'green', fontSize: '18px', fontWeight: '600' }}>
                                        <Link to={'/middle-wing'}>CLASSNclassNameES IV-VIII</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 px-1 mb-3">
                            <div className="blogs">
                                <div className="blog-img">
                                    <Link to={'/senior-wing'} target="_blank">
                                        <img src={infra3} className="img-fluid w-100" alt="" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        <Link to={'/senior-wing'} target="_blank">SENIOR BLOCK</Link>
                                    </p>
                                    <p className="mt-0" style={{ color: 'green', fontSize: '18px', fontWeight: '600' }}>
                                        <Link to={'/senior-wing'}>CLASSNclassNameES IX-XII</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 px-1 mb-3">
                            <div className="blogs">
                                <div className="blog-img">
                                    <Link to={'/hostel'} target="_blank">
                                        <img src={infra1} className="img-fluid w-100" alt="" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        <Link to={'/hostel'} target="_blank">HOSTEL BLOCK</Link>
                                    </p>
                                    <p className="mt-0" style={{ color: 'green', fontSize: '18px', fontWeight: '600' }}>
                                        <Link to={'/hostel'}>FOR ALL STUDENTS</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container virtualTour" id="virtualtour">
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <h3>Virtual<span>Tour</span></h3>
                            </div>
                            <div>
                                <iframe width="100%" height="500" src="https://www.youtube.com/embed/eJG1noHnV-4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                {isVisible && (
                    <button onClick={scrollToTop} className="back-to-top-btn">
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                )}
            </div>

            <Footer />
        </>
    )
}

export default About;
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// THE FRATERNITY OF DPS JODHPUR
import pro_vice_chairman from '../images/pro-vice-chairman.jpg'
import Principal from '../images/Principal.jpg';
import Director from '../images/Director.jpg';
// import Headmistress_Senior from '../images/hm_senior.jpg';
import Vice_Principal from '../images/vicep.png';
import Headmistress_Middle from '../images/hm_middle.jpg';
import Headmistress_Primary from '../images/Hm_primary.jpeg';
import { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from '../config'

function Faculty() {
    const [teacherData, setTeacherData] = useState([])
    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/faculty/view`)
            .then(function (response) {
                console.log(response.data.data[0]);
                setTeacherData(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Filter news based on category only (ignoring dates)
    const primaryWing = teacherData
        .filter(faculty => faculty.teacher_wing === 'primary wing')
        .sort((a, b) => a.teacher_name.localeCompare(b.teacher_name));

    const middleWing = teacherData
        .filter(faculty => faculty.teacher_wing === 'middle wing')
        .sort((a, b) => a.teacher_name.localeCompare(b.teacher_name));

    const seniorWing = teacherData
        .filter(faculty => faculty.teacher_wing === 'senior wing')
        .sort((a, b) => a.teacher_name.localeCompare(b.teacher_name));

    return (
        <>
            <Header />

            <section style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className='container-fluid mb-3' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Our Team</h4>
                        </div>
                    </div>
                </div>
                <div className="container fraternity py-5">
                    <div className="row" style={{ textAlign: 'center' }}>
                        <div className="col-12">
                            <h2>THE FRATERNITY OF DPS JODHPUR</h2>
                        </div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-2 col-6">
                            <div className="py-3">
                                <img src={pro_vice_chairman} className="img-fluid" alt="" />
                                <h6 className="pt-2 teacher-name">DINESH C. KOTHARI</h6>
                                <h6>Pro Vice Chairman</h6>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="py-3">
                                <img src={Director} className="img-fluid" alt="" />
                                <h6 className="pt-2 teacher-name">BIKRAM SINGH YADAV</h6>
                                <h6>Director</h6>
                            </div>
                        </div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-2 col-md-3">
                            <div className="py-3">
                                <img src={Principal} className="img-fluid" alt="" />
                                <h6 className="pt-2 teacher-name">ABHILASHA SHAW</h6>
                                <h6>Principal</h6>
                            </div>
                        </div>
                        {/* <div className="col-lg-2 col-md-3">
                            <div className="py-3">
                                <img src={Headmistress_Senior} className="img-fluid" alt="" />
                                <h6 className="pt-2 teacher-name">SANGEETA YADAV</h6>
                                <h6>Senior Headmistress<br />
                                    (Senior Wing)</h6>
                            </div>
                        </div> */}
                        <div className="col-lg-2 col-md-3">
                            <div className="py-3">
                                <img src={Vice_Principal} className="img-fluid" alt="" />
                                <h6 className="pt-2 teacher-name">KAAJAL KANWAR BHATI</h6>
                                <h6>Vice Principal</h6>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="py-3">
                                <img src={Headmistress_Middle} className="img-fluid" alt="" />
                                <h6 className="pt-2 teacher-name">PALLAVI DAS</h6>
                                <h6 className="">Headmistress<br /> (Middle Wing)</h6>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="py-3">
                                <img src={Headmistress_Primary} className="img-fluid" alt="" />
                                <h6 className="pt-2 teacher-name">PURNIMA RAJVI</h6>
                                <h6 className="">Headmistress<br />(Primary Wing)</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="container">
                        <div className="row m-auto">
                            <div className="col-12">
                                <div className="teacher-wings-button text-center">
                                    <ul className="nav justify-content-center" role="tablist">
                                        <li>
                                            <a className="nav-link active" data-bs-toggle="tab" href="#senior-wing" role="tab"
                                                aria-controls="senior-wing" aria-selected="true">Senior Wing</a>
                                        </li>
                                        <li>
                                            <a className="nav-link" data-bs-toggle="tab" href="#middle-wing" role="tab"
                                                aria-controls="middle-wing" aria-selected="false">Middle Wing</a>
                                        </li>
                                        <li>
                                            <a className="nav-link" data-bs-toggle="tab" href="#primary-wing" role="tab"
                                                aria-controls="primary-wing" aria-selected="false">Primary Wing</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content ps-lg-0 ps-3 my-5">
                                        <div className="tab-pane fade show active" id="senior-wing" role="tabpanel">
                                            <div className="container">
                                                {/* <div className="row justify-content-center m-auto">
                                                    <div className="col-lg-2 col-md-3 col-6">
                                                        <div className="wings-contents">
                                                            <img src={Poornima_Purohit} className="img-fluid" alt="" />
                                                            <h6 className="teachers-name pt-3">PURNIMA PUROHIT</h6>
                                                            <h6>Hindi/Sanskrit</h6>
                                                            <p>
                                                                <a href="mailto:purnimapurohit@dpsjodhpur.in">
                                                                    <FontAwesomeIcon icon={faEnvelope} style={{ paddingRight: '5px' }} />Send Mail<br />
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-3 col-6">
                                                        <div className="wings-contents">
                                                            <img src={Vikas_Saran} className="img-fluid" alt="" />
                                                            <h6 className="teachers-name pt-3">VIVEK MISHRA</h6>
                                                            <h6>Mathematics</h6>
                                                            <p>
                                                                <a href="mailto:vivekmishra@dpsjodhpur.in">
                                                                    <FontAwesomeIcon icon={faEnvelope} style={{ paddingRight: '5px' }} />Send Mail<br />
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                <div className="row justify-content-center m-auto">
                                                    {seniorWing.map((teacher, index) => (
                                                        <div key={index} className="col-lg-2 col-md-3 col-6">
                                                            <div className="wings-contents">
                                                                <img src={`${API_BASE_URL}/uploads/${teacher.teacher_image}`} className="img-fluid" alt={teacher.name}
                                                                />
                                                                <h6 className="teachers-name text-uppercase pt-3">{teacher.teacher_name}</h6>
                                                                <h6>{teacher.teacher_subject}</h6>
                                                                <p>
                                                                    <a href={`mailto:${teacher.teacher_email}`}>
                                                                        Send Mail
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="middle-wing" role="tabpanel">
                                            <div className="container">
                                                <div className="row justify-content-center m-auto">
                                                    {middleWing.map((teacher, index) => (
                                                        <div key={index} className="col-lg-2 col-md-3 col-6">
                                                            <div className="wings-contents">
                                                                <img src={`${API_BASE_URL}/uploads/${teacher.teacher_image}`} className="img-fluid" alt={teacher.name}
                                                                />
                                                                <h6 className="teachers-name text-uppercase pt-3">{teacher.teacher_name}</h6>
                                                                <h6>{teacher.teacher_subject}</h6>
                                                                <p>
                                                                    <a href={`mailto:${teacher.teacher_email}`}> Send Mail</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="primary-wing" role="tabpanel">
                                            <div className="container">
                                                <div className="row justify-content-center m-auto">
                                                    {primaryWing.map((teacher, index) => (
                                                        <div key={index} className="col-lg-2 col-md-3 col-6">
                                                            <div className="wings-contents">
                                                                <img src={`${API_BASE_URL}/uploads/${teacher.teacher_image}`} className="img-fluid" alt={teacher.name}
                                                                />
                                                                <h6 className="teachers-name text-uppercase pt-3">{teacher.teacher_name}</h6>
                                                                <h6>{teacher.teacher_subject}</h6>
                                                                <p>
                                                                    <a href={`mailto:${teacher.teacher_email}`}>
                                                                        Send Mail
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <Footer />
        </>
    )
}

export default Faculty;
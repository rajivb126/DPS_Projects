import React from 'react';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from 'react-router-dom';

function AdmissionProcedure() {
    return (
        <>
            <Header />

            <section style={{ animation: 'fadeIn 1s ease-in-out' }}>
                <div>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/eJG1noHnV-4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </div>
            </section>

            <section className='admission-procedure' style={{ animation: 'fadeIn 1s ease-in-out' }}>
                <div className='container-fluid mb-3' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontWeight: 'bold' }}>Admission Procedure</h4>
                        </div>
                    </div>
                </div>
                <div className='row mx-auto'>
                    <div className='col-lg-3 col-md-12'>
                        <div className='pt-lg-5'>
                            <ul className="nav nav-pills flex-column" role="tablist">
                                <li>
                                    <a className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" role="tab" aria-controls="overview" aria-selected="true">Admission Overview</a>
                                </li>
                                <li>
                                    <a className="nav-link" id="procedure-tab" data-bs-toggle="tab" data-bs-target="#procedure" role="tab" aria-controls="procedure" aria-selected="false">Admission Guideline</a>
                                </li>
                                <li>
                                    <a className="nav-link" id="documents-tab" data-bs-toggle="tab" data-bs-target="#documents" role="tab" aria-controls="documents" aria-selected="false">Required Documents</a>
                                </li>
                                <li>
                                    <a className="nav-link" id="application-tab" data-bs-toggle="tab" data-bs-target="#application" role="tab" aria-controls="application" aria-selected="false">Application Form</a>
                                </li>
                                <li>
                                    <Link to={'/fee-structure'} target='_blank' className="nav-link">Fee Structure</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-9 col-md-12'>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                <h3>Admission Overview</h3>
                                <p className='fs-5' style={{ color: '#074c9f', fontWeight: 'bold' }}>Welcome to the Admission Process for the session 2026-27.</p>

                                <p>DPS Jodhpur is dedicated to fostering the growth of young minds through a balanced approach that integrates academics, co-curricular activities, and essential life skills. With modern facilities, a skilled faculty, and a dynamic learning atmosphere, we provide every student with a fulfilling and enriching educational experience.</p>

                                <p>DPS Jodhpur follows the CBSE curriculum, offering classes from Nursery-KG-Prep to Grade 12. We seek individuals who can not only contribute positively to the school community but also take full advantage of the facilities available to them.<br />
                                Our academic year begins in April.</p>

                                <h4 style={{ color: '#074c9f', fontWeight: 'bold' }}>Age Criteria For Admission</h4>
                                <ul className='p-0' style={{listStyle:'none'}}>
                                    <li>Eligible Age as on March 31, 2026</li>
                                    <li><strong>Class Nursery :</strong> Minimum 3 years & Maximum less than 4 years (DOB between 1 April 2022 and 31 March 2023)</li>
                                    <li><strong>Class KG :</strong> Minimum 4 years & Maximum less than 5 years (DOB between 1 April 2021 and 31 March 2022)</li>
                                    <li><strong>Class Prep :</strong> Minimum 5 years & Maximum less than 6 years (DOB between 1 April 2020 and 31 March 2021)</li>
                                    
                                </ul>

                                <ol className='ps-3'>
                                    <li>Successful registration does not in any way guarantee the admission of a candidate. As number of seats available are limited, selection will be based on age criteria, i.e. older children will be given preference. <br /> For example a child born on 15 Aug 2022 (3 Years, 7 Months, 16 Days) will get preference over child born on 11 Dec 2022 (3 Years, 3 Months, 20 Days)
                                    </li>
                                    <li>Preference will be given to siblings (real brother or sister) of students already studying in the school.</li>
                                </ol>
                                 <p className='fs-5' style={{ color: '#960606ff', fontWeight: 'bold', textDecoration: 'underline', textAlign: 'center' }}>Dates for the Admission will be announced shortly for the session 2026-27.</p>
                            </div>
                            <div className="tab-pane fade" id="procedure" role="tabpanel" aria-labelledby="procedure-tab">
                                <h3>Admission Guideline</h3>
                                <h5>GUIDELINES FOR FILLING THE ONLINE REGISTRATION FORM:</h5>
                                <ol>
                                    <li>Registration form is to be filled only through the school website <a href="https://dpsjodhpur.in">www.dpsjodhpur.in</a></li>

                                    <li><strong>The Registration Fee INR 3000/- (rupees three thousand only) is payable through online mode only and is non - refundable.</strong></li>

                                    <li>Your registration will be complete only after the submission of duly filled form and payment of requisite registration fee <strong>(INR 3000/-).</strong> Incomplete and unpaid registration will not be accepted.</li>

                                    <li>After the registration form appears, read and fill it carefully. All fields marked with red colour asterisk (star) are mandatory. Incomplete forms will not be accepted by the software.</li>

                                    <li>You are advised to kindly mention your own email address and not of a cyber cafe or your friends or your relatives. If required, you must create an email ID before filling the form. It is mandatory to mention the correct email address and mobile phone no. as same will be used by school for future correspondence.</li>

                                    <li>The following information should be entered exactly as per the birth certificate.
                                        <ul>
                                            <li>First Name, Middle Name and Last Name of the child.</li>
                                            <li>Date of Birth of the child.</li>
                                            <li>Father's Name and Mother's Name.</li>
                                        </ul>
                                    </li>

                                    <li>In case a sibling (real brother or sister only) of the candidate is currently a student at DPS Jodhpur, the sibling’s full name, admission number and current class will have be to filled in the form.</li>

                                    <li>After completing the information in each tab press Save and Next button to proceed for the next Tab.</li>

                                    <li>Before depositing the requisite registration fee, kindly click on the ‘preview’ button to view and check all the entries and edit if needed. You will not be able to make any changes after the final submission.</li>

                                    <li>The final submission of the form will be possible only after the payment of requisite registration fee. You shall receive an email on your registered email ID after the final submission to confirm your registration as successful.</li>

                                    <li>Confirmation of selection will be notified individually to the parents’ of selected candidates only, via SMS and / or email.</li>

                                    <li>To promote a balanced educational environment and foster gender equality, our school is committed to maintaining a healthy ratio of boys and girls in admissions. We encourage equal representation to enhance the learning experience for all students.</li>
                                </ol>

                                

                                <h6 className='fs-6 text-danger text-center'>
                                    <i><u>Note: False information / incomplete form will be rejected. No request for correction will be entertained.</u></i>
                                </h6>
                                {/* <h4 className='fs-1 text-center pt-2' style={{ color: 'maroon' }}>
                                    <u>Dates for Registration will be announced shortly.</u>
                                </h4> */}
                            </div>
                            <div className="tab-pane fade" id="documents" role="tabpanel" aria-labelledby="documents-tab">
                                <h3>Required Documents</h3>
                                <h5>DOCUMENTS TO BE BROUGHT TO SCHOOL AT THE TIME OF ADMISSION (DEPOSITING SCHOOL FEE):</h5>
                                <ul>
                                    <li><strong>Printed Registration Form,</strong>signed by both parents alongwith the passport size photographs pasted on it.</li>

                                    <li>Photocopy & Original -
                                        <ul>
                                            <li>Birth Certificate of the child</li>
                                            <li>Aadhaar card of the child (If Available)</li>
                                            <li>Aadhaar card/ PAN card/ Passport of both parents</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="application" role="tabpanel" aria-labelledby="application-tab">
                                <h3>Application Form</h3>
                               <br/><br/> <p className='fs-5' style={{ color: '#960606ff', fontWeight: 'bold', textAlign: 'center' }}>Application Form will be availabe shortly for the session 2026-27.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default AdmissionProcedure
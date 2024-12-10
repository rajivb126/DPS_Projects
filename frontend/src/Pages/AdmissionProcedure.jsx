import React from 'react';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from 'react-router-dom';

function AdmissionProcedure() {
    return (
        <>
            <Header />

            <section style={{animation:'fadeIn 1s ease-in-out'}}>
                <div>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/eJG1noHnV-4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </div>
            </section>

            <section className='admission-procedure' style={{animation:'fadeIn 1s ease-in-out'}}>
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
                                    <a className="nav-link" id="procedure-tab" data-bs-toggle="tab" data-bs-target="#procedure" role="tab" aria-controls="procedure" aria-selected="false">Admission Procedure</a>
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
                                <p className='fs-5' style={{ color: '#074c9f', fontWeight: 'bold' }}>Welcome to DELHI PRIVATE SCHOOL JODHPUR. Thank you for making our school your first choice for a wonderful educational experience.</p>

                                <p>The DPS Jodhpur student community is a potpourri of cultures from across the city, state and country and we attract students from various echelons of society.</p>

                                <p>DPS Jodhpur follows the Indian CBSE curriculum, from PRE KG to Grade 12, wherein students write a board exam in Grades 10 and 12 conducted by the CBSE.</p>

                                <p>We are open to accepting students from any curriculum who are dynamic and demonstrate their ability to fit into the school system with ease and not only contribute to the school in a positive way, but also take the initiative to absorb and utilize the facilities to their maximum benefit.</p>

                                <p>Our academic session starts in the month of April.  We have a robust on-going admission policy which also allows students to enrol in our institution throughout the year, subject to vacancies.</p>
                            </div>
                            <div className="tab-pane fade" id="procedure" role="tabpanel" aria-labelledby="procedure-tab">
                                <h3>Admission Procedure</h3>
                                <h5>GUIDELINES FOR FILLING THE ONLINE REGISTRATION FORM:</h5>
                                <ol>
                                    <li>Registration form is to be filled only through the school website <a href="https://dpsjodhpur.in/dpsjodhpur">www.dpsjodhpur.in</a></li>

                                    <li>Read all the instructions carefully and click on the button given at the bottom of this page to begin the registration process. Before you proceed make sure that the Pop-Up blocker of your browser is disabled.
                                    </li>

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

                                    <li>he final submission of the form will be possible only after the payment of requisite registration fee. You shall receive an email on your registered email ID after the final submission to confirm your registration as successful.</li>

                                    <li>Confirmation of selection will be notified individually to the parents’ of selected candidates only, via SMS and / or email.</li>

                                    <li>To promote a balanced educational environment and foster gender equality, our school is committed to maintaining a healthy ratio of boys and girls in admissions. We encourage equal representation to enhance the learning experience for all students.</li>
                                </ol>

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

                                <h6 className='fs-6 text-danger text-center'>
                                    <i><u>Note: False information / incomplete form will be rejected. No request for correction will be entertained.</u></i>
                                </h6>
                                <h4 className='fs-1 text-center pt-2' style={{ color: 'maroon' }}>
                                    <u>Dates for Registration will be announced shortly.</u>
                                </h4>
                            </div>
                            <div className="tab-pane fade" id="documents" role="tabpanel" aria-labelledby="documents-tab">
                                <h3>Required Documents</h3>
                                <p>Content for Required Documents.</p>
                            </div>
                            <div className="tab-pane fade" id="application" role="tabpanel" aria-labelledby="application-tab">
                                <h3>Application Form</h3>
                                <p>Content for Application Form.</p>
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
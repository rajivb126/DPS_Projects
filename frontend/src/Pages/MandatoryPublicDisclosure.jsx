import Footer from "../Components/Footer"
import Header from "../Components/Header"
import MPD from '../images/MPD/Affiliation Letter.pdf'

function MandatoryPublicDisclosure() {
    return (
        <>
            <Header />

            {/*  */}
            <section style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className='container-fluid' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Mandatory Public Disclosures</h4>
                        </div>
                    </div>
                </div>
                <div className="container mpd">
                    <div className="col-lg-12">
                        <div className="py-5">
                            <h3>A. GENERAL INFORMATION</h3>
                            <table align="center" className="table table-striped table-bordered table-hover nowrap">
                                <thead style={{ backgroundColor: 'maroon', color: 'white' }}>
                                    <tr className="success">
                                        <th>S.NO.</th>
                                        <th>INFORMATION</th>
                                        <th>DETAILS</th>
                                    </tr>
                                </thead>
                                <tbody style={{ fontWeight: '600' }}>
                                    <tr>
                                        <td align="center">1.</td>
                                        <td align="left">Name of the School</td>
                                        <td align="left">
                                            <h4 style={{ color: 'darkgreen', fontWeight: '500' }}>
                                                DELHI PUBLIC SCHOOL JODHPUR
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center">2.</td>
                                        <td align="left">Affiliation No.</td>
                                        <td align="left">1730156</td>
                                    </tr>
                                    <tr>
                                        <td align="center">3.</td>
                                        <td align="left">School Code</td>
                                        <td align="left">10470</td>
                                    </tr>
                                    <tr>
                                        <td align="center">4.</td>
                                        <td align="left">Address.</td>
                                        <td align="left">BYPASS ROAD, PAL, JODHPUR (RAJ)<br />
                                            PIN-342014</td>
                                    </tr>
                                    <tr>
                                        <td align="center">5.</td>
                                        <td align="left">Principal Name &<br />
                                            Qualification</td>
                                        <td align="left">MS ABHILASHA SHAW<br />
                                            B. ED., M. A. (ENGLISH),<br />
                                            </td>
                                    </tr>
                                    <tr>
                                        <td align="center">6.</td>
                                        <td align="left">School Email ID</td>
                                        <td align="left">info@dpsjodhpur.in</td>
                                           
                                    </tr>
                                    <tr>
                                        <td align="center">7.</td>
                                        <td align="left">Contact Details</td>
                                        <td align="left">0291-276886/887, 2946886/887</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-12 pb-5">
                        <h3>B. DOCUMENTS AND INFORMATION</h3>
                        <table align="center" className="table table-striped table-bordered table-hover nowrap">
                            <thead style={{ backgroundColor: 'maroon', color: 'white' }}>
                                <tr>
                                    <th style={{ textAlign: 'center' }}>S.NO.</th>
                                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                        DOCUMENTS/INFORMATION
                                    </th>
                                    <th style={{ textAlign: 'center' }}>UPLOADED DOCUMENTS</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontWeight: '600' }}>
                                <tr>
                                    <td align="center">1.</td>
                                    <td align="left">COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT
                                        EXTENTION
                                        OF AFFILIATION, IF ANY</td>
                                    <td align="Center">
                                        <a href={MPD}
                                            target="_blank">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">2.</td>
                                    <td align="left">COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL
                                        CERTIFICATE, AS APPLICABLE</td>
                                    <td align="Center">
                                        <a href="https://www.dpsjod.in/DPSJodhpur/UserSpace/UserName/admin/DynamicFolder/2021-22/CBSE%20Disclosure/Licence%20Agreement.pdf"
                                            target="_blank">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">3.</td>
                                    <td align="left">COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF
                                        APPLICABLE BY
                                        THE STATE GOVT./UT</td>
                                    <td align="Center">
                                        <a href="https://www.dpsjod.in/DPSJodhpur/UserSpace/UserName/admin/DynamicFolder/2021-22/CBSE%20Disclosure/NOC%20DEO.pdf"
                                            target="_blank">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">4.</td>
                                    <td align="left">COPIES OF RECOGNTIION CERTIFICATE UNDER RTE ACT 2009 AND
                                        ITS
                                        RENEWAL, IF APPLICABLE</td>
                                    <td align="Center">
                                        <a href="https://www.dpsjod.in/DPSJodhpur/UserSpace/UserName/admin/DynamicFolder/2021-22/CBSE%20Disclosure/RTE.pdf"
                                            target="_blank">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">5.</td>
                                    <td align="left">COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE
                                        NATIONAL
                                        BUILDING CODE</td>
                                    <td align="Center">
                                        <a href="https://www.dpsjod.in/DPSJodhpur/UserSpace/UserName/admin/DynamicFolder/2021-22/CBSE%20Disclosure/BUILDING.pdf"
                                            target="_blank">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">6.</td>
                                    <td align="left">COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE
                                        COMPETENT
                                        AUTHORITY</td>
                                    <td align="Center">
                                        <a href="https://www.dpsjod.in/DPSJodhpur/UserSpace/UserName/admin/DynamicFolder/2021-22/CBSE%20Disclosure/FIRE%20and%20SAFETY.pdf"
                                            target="_blank">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">7.</td>
                                    <td align="left">COPY OF THE DEO CERTICIATE SUBMITTED BY THE SCHOOL FOR
                                        AFFILIATION/UPGRADATION/ EXTENSION OF AFFILIATION FOR SELF CERTIFICATION
                                        BY
                                        SCHOOL</td>
                                    <td align="Center">
                                        <a href="https://www.dpsjod.lin/DPSJodhpur/UserSpace/UserName/admin/DynamicFolder/2021-22/CBSE%20Disclosure/DEO%20FORM.pdf"
                                            target="_blank">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">8.</td>
                                    <td align="left">COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES
                                    </td>
                                    <td align="Center">
                                        <a href="https://www.dpsjod.in/DPSJodhpur/UserSpace/UserName/admin/DynamicFolder/2021-22/CBSE%20Disclosure/WATER.pdf"
                                            target="_blank">View</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className="col-12 pb-5">
                        <h3>C. RESULTS AND ACADEMICS</h3>
                        <table align="center" className="table table-striped table-bordered table-hover nowrap">
                            <thead style={{ backgroundColor: 'maroon', color: 'white' }}>
                                <tr>
                                    <th style={{ textAlign: 'center' }}>S.NO.</th>
                                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                        DOCUMENTS/INFORMATION
                                    </th>
                                    <th style={{ textAlign: 'center' }}>UPLOADED DOCUMENTS</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontWeight: '600' }}>
                                <tr>
                                    <td align="center">1.</td>
                                    <td align="left">FEE STRUCTURE OF THE SCHOOL</td>
                                    <td align="Center">
                                        <a href="https://www.dpsjod.in/DPSJodhpur/UserSpace/UserName/admin/DynamicFolder/2021-22/CBSE%20Disclosure/FEE%20STRUCUTRE.pdf"
                                            target="_blank">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">2.</td>
                                    <td align="left">ANNUAL ACADEMIC CALENDAR</td>
                                    <td align="Center">
                                        <a href="https://dpsjod.in/DPSJodhpur/UserSpace/UserName/admin/DynamicFolder/2021-22/CBSE%20Disclosure/School_calendar.pdf"
                                            target="_blank">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">3.</td>
                                    <td align="left">LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td>
                                    <td align="Center">
                                        <a href="#smc">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">4.</td>
                                    <td align="left">LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td>
                                    <td align="Center">
                                        <a href="https://www.dpsjod.in/DPSJodhpur/UserSpace/UserName/admin/DynamicFolder/2021-22/CBSE%20Disclosure/PTA.pdf"
                                            target="_blank">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">5.</td>
                                    <td align="left">LAST THREE YEAR RESULT OF THE BOARD EXAMINATION AS PER
                                        APPLICABILITY</td>
                                    <td align="Center">
                                        <a href="#result">View</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="pb-5">
                        <h3>RESULT - CLASS X</h3>
                        <table align="center" className="table table-striped table-bordered table-hover nowrap">
                            <thead style={{ backgroundColor: 'maroon', color: 'white' }}>
                                <tr>
                                    <th style={{ textAlign: 'center' }}>S.NO.</th>
                                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>YEAR</th>
                                    <th style={{ textAlign: 'center' }}>NO.OF REGISTERED STUDENTS</th>
                                    <th style={{ textAlign: 'center' }}>NO OF STUDENTS PASSED</th>
                                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>PASS PERCENTAGE</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontWeight: '600', textAlign: 'center' }}>
                                <tr>
                                    <td align="center">1.</td>
                                    <td>2021-22</td>
                                    <td>358</td>
                                    <td>358</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td align="center">2.</td>
                                    <td>2020-21</td>
                                    <td>337</td>
                                    <td>337</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td align="center">3.</td>
                                    <td>2019-20</td>
                                    <td>337</td>
                                    <td>337</td>
                                    <td>100%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-12 pb-5">
                        <h3>RESULT - CLASS XII</h3>
                        <table align="center" className="table table-striped table-bordered table-hover nowrap">
                            <thead style={{ backgroundColor: 'maroon', color: 'white' }}>
                                <tr>
                                    <th style={{ textAlign: 'center' }}>S.NO.</th>
                                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>YEAR</th>
                                    <th style={{ textAlign: 'center' }}>NO.OF REGISTERED STUDENTS</th>
                                    <th style={{ textAlign: 'center' }}>NO OF STUDENTS PASSED</th>
                                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>PASS PERCENTAGE</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontWeight: '600', textAlign: 'center' }}>
                                <tr>
                                    <td align="center">1.</td>
                                    <td>2021-22</td>
                                    <td>359</td>
                                    <td>358</td>
                                    <td>99.7%</td>
                                </tr>
                                <tr>
                                    <td align="center">2.</td>
                                    <td>2020-21</td>
                                    <td>345</td>
                                    <td>345</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td align="center">3.</td>
                                    <td>2019-20</td>
                                    <td>320</td>
                                    <td>317</td>
                                    <td>99.1%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-12 pb-5">
                        <h3>D. STAFF (TEACHING)</h3>
                        <table align="center" className="table table-striped table-bordered table-hover nowrap">
                            <thead style={{ backgroundColor: 'maroon', color: 'white' }}>
                                <tr>
                                    <th style={{ textAlign: 'center' }}>S.NO.</th>
                                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>INFORMATION</th>
                                    <th style={{ textAlign: 'center' }}>DETAILS</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontWeight: '600' }}>
                                <tr>
                                    <td align="center">1.</td>
                                    <td align="left">DIRECTOR</td>
                                    <td align="center">1</td>
                                </tr>
                                <tr>
                                    <td align="center">2.</td>
                                    <td align="left">PRINCIPAL</td>
                                    <td align="center">1</td>
                                </tr>
                                <tr>
                                    <td align="center">3.</td>
                                    <td align="left">VICE PRINCIPAL</td>
                                    <td align="center">1</td>
                                </tr>
                                <tr>
                                    <td align="center">4.</td>
                                    <td align="left">HM & Class I/Cs</td>
                                    <td align="center">4</td>
                                </tr>
                                <tr>
                                    <td align="center">5.</td>
                                    <td align="left">NO. OF TEACHERS</td>
                                    <td align="center"></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td align="left">
                                        <ul>
                                            <li>PGT</li>
                                            <li>TGT</li>
                                            <li>PRT</li>
                                        </ul>
                                    </td>
                                    <td align="center">
                                        28<br />
                                        47<br />
                                        103
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">4.</td>
                                    <td align="left">TEACHERS SECTION RATIO</td>
                                    <td align="center">1.5:1</td>
                                </tr>
                                <tr>
                                    <td align="center">5.</td>
                                    <td align="left">DETAILS OF SPECIAL EDUCATOR</td>
                                    <td align="center">-</td>
                                </tr>
                                <tr>
                                    <td align="center">6.</td>
                                    <td align="left">DETAILS OF COUNSELLOR & WELLNESS TEACHER</td>
                                    <td align="center">1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-12 pb-5">
                        <h3>E. SCHOOL INFRASTRUCTURE</h3>
                        <table align="center" className="table table-striped table-bordered table-hover nowrap">
                            <thead style={{ backgroundColor: 'maroon', color: 'white' }}>
                                <tr>
                                    <th style={{ textAlign: 'center' }}>S.NO.</th>
                                    <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>INFORMATION</th>
                                    <th style={{ textAlign: 'center' }}>DETAILS</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontWeight: '600' }}>
                                <tr>
                                    <td align="center">1.</td>
                                    <td align="left">TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE METER)</td>
                                    <td align="Center">59562 sq mtr</td>
                                </tr>
                                <tr>
                                    <td align="center">2.</td>
                                    <td align="left">NO. AND SIZE OF CLASSROOMS (IN SQUARE METER)</td>
                                    <td align="left">36 Rooms : 51.09 sq mtr<br />
                                        40 Rooms : 46.45 sq mtr<br />
                                        40 Rooms : 45.89 sq mtr
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">3.</td>
                                    <td align="left">NO. AND SIZE OF LABORATORIES (INCLUDING COMPUTER LABS (IN
                                        SQ
                                        MTR)</td>
                                    <td align="left">Physics : 116.13 sq. mtr<br />
                                        Chemistry : 116.13 sq. mtr<br />
                                        Biology : 116.13 sq. mtr<br />
                                        Computer(2): 116.13 sq mtr<br />
                                        Computer(1) : 92.9 sq mtr<br />
                                        Computer(1) : 45.89 sq mtr<br />
                                        Geography : 116.13 q mtr<br />
                                        ATL : 116.13 sq mtr<br />
                                        STEM Lab : 104. 05 sq mtr<br />
                                        EVS Lab : 45.89 sq mtr
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">4.</td>
                                    <td align="left">INTERNET FACILITY</td>
                                    <td align="Center">YES</td>
                                </tr>
                                <tr>
                                    <td align="center">5.</td>
                                    <td align="left">NO. OF GIRLS TOILETS</td>
                                    <td align="Center">59</td>
                                </tr>
                                <tr>
                                    <td align="center">6.</td>
                                    <td align="left">NO. OF BOYS TOILETS</td>
                                    <td align="Center">109</td>
                                </tr>
                                <tr>
                                    <td align="center">7.</td>
                                    <td align="left">LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING
                                        THE
                                        INFRASTRUCTURE OF THE SCHOOL</td>
                                    <td align="Center">NA</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-12">
                        <h3>SCHOOL MANAGING COMMITTEE</h3>
                        <table align="center" className="table table-striped table-bordered table-hover nowrap">
                            <thead style={{ backgroundColor: 'maroon', color: 'white' }}>
                                <tr>
                                    <th style={{ textAlign: 'center' }}>NAME</th>
                                    <th style={{ textAlign: 'center' }}>DESIGNATION</th>
                                    <th style={{ textAlign: 'center' }}>ADDRESS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td align="left">Ms Namita Pradhan</td>
                                    <td align="left">Chairperson</td>
                                    <td align="left">DPS Society, F-Block, East of Kailash, New Delhi</td>
                                </tr>
                                <tr>
                                    <td align="left">Mr Kaushik Dutta</td>
                                    <td align="left">Vice Chairperson</td>
                                    <td align="left">C-843, Lavy Pinto Block Asian Games Village New Delhi</td>
                                </tr>
                                <tr>
                                    <td align="left">Mr Dinesh Kothari</td>
                                    <td align="left">Pro-Vice Chairman</td>
                                    <td align="left">Delhi Public School Bypass Road, Pal Jodhpur (Raj.)</td>
                                </tr>
                                <tr>
                                    <td align="left">Ms Amita Khanna</td>
                                    <td align="left">Member</td>
                                    <td align="left">294-296 Tagore Nagar, Ajmer Road, Jaipur (Raj)
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left">Dr A.K. Sacheti</td>
                                    <td align="left">Member</td>
                                    <td align="left">F-2, Friendrs Apartment, L-1 Road, Bhopalpura,
                                        Udaipur-313001
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left">Mr Abhimanyu Singh</td>
                                    <td align="left">Member</td>
                                    <td align="left">44A, Suraj Nagar (West), Keshav Path, Civil Lines, Jaipur
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left">Mr Amit Kothari</td>
                                    <td align="left">Member</td>
                                    <td align="left">Delhi Public School Bypass Road, Pal Jodhpur (Raj.)</td>
                                </tr>
                                <tr>
                                    <td align="left">Mr P S Dasgupta</td>
                                    <td align="left">Member</td>
                                    <td align="left">J-1810, C R Park, New Delhi</td>
                                </tr>
                                <tr>
                                    <td align="left">Prof (Dr) U R Daga</td>
                                    <td align="left">Member</td>
                                    <td align="left">1- A -24, Nandanvan, CHB Near PNB, Jodhpur</td>
                                </tr>
                                <tr>
                                    <td align="left">Ms Abhilasha Shaw</td>
                                    <td align="left">Secretary</td>
                                    <td align="left">Principal, Delhi Public School, Jodhpur</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section >

            <Footer />
        </>
    )
}

export default MandatoryPublicDisclosure

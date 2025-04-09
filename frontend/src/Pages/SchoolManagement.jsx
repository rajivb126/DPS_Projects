import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function SchoolManagement() {
    return (
        <>
            <Header />

            <section style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className='container-fluid mb-3' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>SCHOOL MANAGING COMMITTEE</h4>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row mx-auto'>
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
                                        <td align="left">Mr Abhimanyu Singh</td>
                                        <td align="left">Member</td>
                                        <td align="left">44A, Suraj Nagar (West), Keshav Path, Civil Lines, Jaipur
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
                                        <td align="left">Ms Amita Khanna</td>
                                        <td align="left">Member</td>
                                        <td align="left">294-296 Tagore Nagar, Ajmer Road, Jaipur (Raj)
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
                </div>
            </section>

            <Footer />
        </>
    )
}

export default SchoolManagement
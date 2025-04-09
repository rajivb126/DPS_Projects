import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import API_BASE_URL from '../config'

function SchoolNews() {
    const [schoolNewsData, setSchoolNewsData] = useState([])
    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/schoolnews/view`)
            .then(function (response) {
                console.log(response.data.data[0]);
                setSchoolNewsData(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = ('0' + date.getDate()).slice(-2);
        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return (
            <>
                <div className="card-date">
                    <div className="year">{year}</div>
                    <div className="month">{month}</div>
                    <div className="day">{day}</div>
                </div>
            </>
        );
    };

    return (
        <>
            <Header />

            <section className='school_news' style={{ animation: 'fadeIn 1s ease-in-out' }}>
                <div className='container-fluid mb-3' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>School News</h4>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='school-circular'>
                                <table className='table table-bordered' style={{ borderColor: 'black' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '100px' }}>Date</th>
                                            <th>School News Heading</th>
                                            <th className='action'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ verticalAlign: 'middle' }}>
                                        {schoolNewsData.length > 0 ? (
                                            schoolNewsData.map((news, index) => (
                                                <tr key={index._id}>
                                                    <td className='text-center' style={{ width: '80px' }}>{formatDate(news.start_date)}</td>
                                                    <td className='schoolnews_heading text-center'><strong>{news.schoolnews_heading}</strong><br /><i>{news.schoolnews_description}</i></td>
                                                    <td style={{ width: '100px' }}>
                                                        <a href={`${API_BASE_URL}/uploads/${news.schoolnews_link}`} target='_blank' rel="noreferrer">
                                                            <button className='viewbutton bi bi-eye-fill btn btn-primary'></button>
                                                        </a>
                                                        <a href={`${API_BASE_URL}/uploads/${news.schoolnews_link}`} target="_blank" rel="noreferrer" >
                                                            <button className='bi bi-download btn btn-danger'
                                                            ></button>
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <p>No School News available.</p>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default SchoolNews
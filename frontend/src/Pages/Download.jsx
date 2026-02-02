import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import API_BASE_URL from '../config'

function Download() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/download/view`)
            .then(function (response) {
                console.log(response.data.data[0]);
                setData(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const currentDate = new Date();

    // Filter download based on date range
        const dlData = data.filter(Download =>
        new Date(Download.start_date) <= currentDate && 
        new Date(Download.end_date) >= currentDate
    );
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = ('0' + date.getDate()).slice(-2);
        const monthNames = ["Jan", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "Dec"];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return (
            <>
                <div className="card-date">
                    <div className="day">{day}</div>
                    <div className="month">{month}</div>
                    <div className="year">{year}</div>
                </div>
            </>
        );
    };

    return (
        <>
            <Header />

            <section className='download' style={{ animation: 'fadeIn 1s ease-in-out' }}>
                <div className='container-fluid mb-3' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Downloads</h4>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='school-circular'>
                                <table className='table table-bordered' style={{ borderColor: 'black' }}>
                                    {/* <thead>
                                        <tr>
                                            <th style={{ width: '100px', backgroundColor:'orange' }}>Date</th>
                                            <th style={{backgroundColor:'orange'}}>Download Heading</th>
                                            <th className='action' style={{backgroundColor:'orange'}}>Action</th>
                                        </tr>
                                    </thead> */}
                                    <tbody style={{ verticalAlign: 'middle' }}>
                                        {dlData.length > 0 ? (
                                            [...dlData]
                                                .sort((a, b) => new Date(b.start_date) - new Date(a.start_date))
                                                .map((news, index) => (
                                                    <tr key={news._id}> {/* key fix */}
                                                        <td className='text-center' style={{ width: '80px' }}>{formatDate(news.start_date)}</td>
                                                        <td className='download_heading text-center'>{news.download_heading}</td>
                                                        <td style={{ width: '100px' }} className="text-center">
                                                            <a href={`${API_BASE_URL}/uploads/${news.download_link}`} target='_blank' rel="noreferrer">
                                                                <button className='viewbutton bi bi-eye-fill btn btn-primary me-1'></button>
                                                            </a>
                                                            <a href={`${API_BASE_URL}/uploads/${news.download_link}`} target="_blank" rel="noreferrer">
                                                                <button className='bi bi-download btn btn-danger'></button>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="text-center">No Download available.</td>
                                            </tr>
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

export default Download
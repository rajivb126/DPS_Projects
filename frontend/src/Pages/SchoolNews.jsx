import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import API_BASE_URL from '../config'

function SchoolNews() {
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/news/view`)
            .then(function (response) {
                console.log(response.data.data[0]);
                setNewsData(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const currentDate = new Date();

    // Filter news based on category and date range
    const newsUpdate = newsData.filter(news =>
        news.news_category === 'news update' &&
        new Date(news.start_date) <= currentDate &&
        new Date(news.end_date) >= currentDate
    );

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
                                            <th>Heading</th>
                                            <th className='action'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ verticalAlign: 'middle' }}>
                                        {newsUpdate.length > 0 ? (
                                            [...newsUpdate]
                                                .sort((a, b) => new Date(b.start_date) - new Date(a.start_date))
                                                .map((news, index) => (
                                                    <tr key={news._id}>
                                                        <td className='text-center'>{formatDate(news.start_date)}</td>
                                                        <td className='schoolnews_heading text-center'>
                                                            <strong>{news.nname}</strong><br />
                                                        </td>
                                                        <td align='center'>
                                                            <a href={`${API_BASE_URL}/uploads/${news.nlink}`} target='_blank' rel="noreferrer">
                                                                <button className='viewbutton bi bi-eye-fill btn btn-primary'></button>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="text-center">No School News available.</td>
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

export default SchoolNews
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function SchoolNews() {
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/api/news/view")
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

            <section style={{animation:'fadeIn 1s ease-in-out'}}>
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
                                        {newsUpdate.length > 0 ? (
                                            newsUpdate.map((news, index) => (
                                                <tr key={index._id}>
                                                    <td className='text-center'>{formatDate(news.start_date)}</td>
                                                    <td className='text-center' >{news.nname}</td>
                                                    <td style={{ width: '120px' }}>
                                                        <a href={`http://localhost:5000/uploads/${news.nlink}`} target='_blank' rel="noreferrer">
                                                            <button className='viewbutton bi bi-eye-fill btn btn-primary'></button>
                                                        </a>
                                                        <a href={`http://localhost:5000/uploads/${news.nlink}`} target="_blank" rel="noreferrer" >
                                                            <button className='bi bi-download btn btn-danger'
                                                            ></button>
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <p>No Notice Circular News available.</p>
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
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { useLocation } from 'react-router-dom';

function Achievement() {
    const location = useLocation();
    const [data, setData] = useState([]); // Achievement data
    const [likes, setLikes] = useState({}); // Likes for each achievement
    const [isLiked, setIsLiked] = useState({}); // Like toggle for each achievement
    const [activeTab, setActiveTab] = useState('academic-achievement');

    useEffect(() => {
        // Fetch achievements from API
        axios.get("http://localhost:5000/api/achievement/view")
            .then(response => {
                const fetchedData = response.data.data;
                setData(fetchedData);

                // Initialize state for likes,visibility
                const initialLikes = {};
                const initialIsLiked = {};

                fetchedData.forEach(item => {
                    initialLikes[item._id] = 0;
                    initialIsLiked[item._id] = false;
                });

                setLikes(initialLikes);
                setIsLiked(initialIsLiked);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const tab = query.get('tab');
        if (tab) {
            if (tab === 'academic') setActiveTab('academic-achievement');
            if (tab === 'co-curricular') setActiveTab('co-curricular-achievement');
            if (tab === 'sports') setActiveTab('sports-achievement');
        }
    }, [location.search]);

    const currentDate = new Date();

    // Filter news based on category and date range
    const academicAchievement = data.filter(news =>
        news.achievement_category === 'academic achievement' &&
        new Date(news.start_date) <= currentDate &&
        new Date(news.end_date) >= currentDate
    );

    const coCurricularAchievement = data.filter(news =>
        news.achievement_category === 'co-curricular achievement' &&
        new Date(news.start_date) <= currentDate &&
        new Date(news.end_date) >= currentDate
    );

    const sportsAchievement = data.filter(news =>
        news.achievement_category === 'sports achievement' &&
        new Date(news.start_date) <= currentDate &&
        new Date(news.end_date) >= currentDate
    );

    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            buttons: [
                "slideShow",
                "thumbs",
                "zoom",
                "fullScreen",
                "download",
                "share",
                "close"
            ],
            loop: false,
            protect: true
        });

        // Clean up Fancybox bindings when the component unmounts
        return () => {
            Fancybox.destroy();
        };
    }, []);

    // Toggle like functionality for a specific achievement
    const handleLike = (id) => {
        setLikes(prev => ({
            ...prev,
            [id]: isLiked[id] ? prev[id] - 1 : prev[id] + 1,
        }));
        setIsLiked(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <>
            <Header />

            {/* Achievement Section Start */}
            <section style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className='container-fluid mb-3' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize:'20px', fontWeight: 'bold' }}>Achievements</h4>
                        </div>
                    </div>
                </div>
                <div className='container Achievement'>
                    <div className='row mx-auto'>
                        <div className='col-12'>
                            <div className='all-achievement'>
                                <ul className="nav justify-content-center" role="tablist">
                                    <li>
                                        <a className={`nav-link ${activeTab === 'academic-achievement' ? 'active' : ''}`} data-bs-toggle="tab" href="#academic-achievement" role="tab" zaria-controls="academic-achievement" aria-selected={activeTab === 'academic-achievement'}>
                                            Academic
                                        </a>
                                    </li>
                                    <li>
                                        <a className={`nav-link ${activeTab === 'co-curricular-achievement' ? 'active' : ''}`} data-bs-toggle="tab" href="#co-curricular-achievement" role="tab" aria-controls="co-curricular-achievement" aria-selected={activeTab === 'co-curricular-achievement'}>
                                            Co-Curricular
                                        </a>
                                    </li>
                                    <li>
                                        <a className={`nav-link ${activeTab === 'sports-achievement' ? 'active' : ''}`} data-bs-toggle="tab" href="#sports-achievement"
                                            role="tab" aria-controls="sports-achievement" aria-selected={activeTab === 'sports-achievement'}>
                                            Sports
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content ps-lg-0 ps-3 my-5">
                                    <div className={`tab-pane fade ${activeTab === 'academic-achievement' ? 'show active' : ''}`} id="academic-achievement" role="tabpanel">
                                        <div className="container">
                                            <div className="row justify-content-center m-auto">
                                                {academicAchievement.map((achievement, index) => (
                                                    <div key={index} className="col-md-4 col-12">
                                                        <div className='achievement-img mb-3'>
                                                            {/* Achievement Image */}
                                                            <a data-fancybox="gallery" href={`http://localhost:5000/uploads/${achievement.achievement_file}`}>
                                                                <img src={`http://localhost:5000/uploads/${achievement.achievement_file}`} alt="" className='img-fluid' />
                                                            </a>

                                                            {/* Like and Comment Section */}
                                                            <div className='row mt-2'>
                                                                {/* Like Button */}
                                                                <div className='col-12'>
                                                                    <button onClick={() => handleLike(achievement._id)} style={{ border: 'none', background: 'none', padding: '0 10px' }} >
                                                                        <i style={{ fontSize: '20px', color: isLiked[achievement._id] ? 'blue' : 'inherit', }}
                                                                            className={isLiked[achievement._id] ? "bi bi-hand-thumbs-up-fill" : "bi-hand-thumbs-up"}
                                                                        ></i>
                                                                        <span style={{ marginLeft: "10px" }}>
                                                                            {likes[achievement._id] || 0}
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-pane fade ${activeTab === 'co-curricular-achievement' ? 'show active' : ''}`} id="co-curricular-achievement" role="tabpanel">
                                        <div className='container'>
                                            <div className="row justify-content-center m-auto">
                                                {coCurricularAchievement.map((achievement, index) => (
                                                    <div key={index} className="col-md-4 col-12">
                                                        <div className='achievement-img mb-3'>
                                                            {/* Achievement Image */}
                                                            <a data-fancybox="gallery" href={`http://localhost:5000/uploads/${achievement.achievement_file}`}>
                                                                <img src={`http://localhost:5000/uploads/${achievement.achievement_file}`} alt="" className='img-fluid' />
                                                            </a>

                                                            {/* Like and Comment Section */}
                                                            <div className='row mt-2'>
                                                                {/* Like Button */}
                                                                <div className='col-12'>
                                                                    <button onClick={() => handleLike(achievement._id)} style={{ border: 'none', background: 'none', padding: '0 10px' }} >
                                                                        <i style={{ fontSize: '20px', color: isLiked[achievement._id] ? 'blue' : 'inherit', }}
                                                                            className={isLiked[achievement._id] ? "bi bi-hand-thumbs-up-fill" : "bi-hand-thumbs-up"}
                                                                        ></i>
                                                                        <span style={{ marginLeft: "10px" }}>
                                                                            {likes[achievement._id] || 0}
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-pane fade ${activeTab === 'sports-achievement' ? 'show active' : ''}`} id="sports-achievement" role="tabpanel">
                                        <div className='container'>
                                            <div className="row justify-content-center m-auto">
                                                {sportsAchievement.map((achievement, index) => (
                                                    <div key={index} className="col-md-4 col-12">
                                                        <div className='achievement-img mb-3'>
                                                            {/* Achievement Image */}
                                                            <a data-fancybox="gallery" href={`http://localhost:5000/uploads/${achievement.achievement_file}`}>
                                                                <img src={`http://localhost:5000/uploads/${achievement.achievement_file}`} alt="" className='img-fluid' />
                                                            </a>

                                                            {/* Like and Comment Section */}
                                                            <div className='row mt-2'>
                                                                {/* Like Button */}
                                                                <div className='col-12'>
                                                                    <button onClick={() => handleLike(achievement._id)} style={{ border: 'none', background: 'none', padding: '0 10px' }} >
                                                                        <i style={{ fontSize: '20px', color: isLiked[achievement._id] ? 'blue' : 'inherit', }}
                                                                            className={isLiked[achievement._id] ? "bi bi-hand-thumbs-up-fill" : "bi-hand-thumbs-up"}
                                                                        ></i>
                                                                        <span style={{ marginLeft: "10px" }}>
                                                                            {likes[achievement._id] || 0}
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* {data.map((achievement) => {
                            return (
                                <div className='col-4' key={achievement._id}>
                                    <div className='achievement-img mb-3'>
                                        
                                        <a data-fancybox="gallery" href={`http://localhost:5000/uploads/${achievement.achievement_file}`}>
                                            <img src={`http://localhost:5000/uploads/${achievement.achievement_file}`} alt="" className='img-fluid' />
                                        </a>

                                        
                                        <div className='row mt-2'>
                                            
                                            <div className='col-12'>
                                                <button onClick={() => handleLike(achievement._id)} style={{ border: 'none', background: 'none', padding: '0 10px' }} >
                                                    <i style={{ fontSize: '20px', color: isLiked[achievement._id] ? 'red' : 'inherit', }}
                                                        className={isLiked[achievement._id] ? "bi bi-heart-fill" : "bi bi-heart"}
                                                    ></i>
                                                    <span style={{ marginLeft: "10px" }}>
                                                        {likes[achievement._id] || 0}
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })} */}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Achievement;
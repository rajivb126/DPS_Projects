import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';

function StudentCouncil() {
    const [image, setImage] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/api/studentimage/view")
            .then(function (response) {
                console.log(response.data.data[0]);
                setImage(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const currentDate = new Date();

    // Filter news based on category and date range
    const headBoy = image.filter(news =>
        news.student_image_category === 'head boy' &&
        new Date(news.start_date) <= currentDate &&
        new Date(news.end_date) >= currentDate
    );

    const headGirl = image.filter(news =>
        news.student_image_category === 'head girl' &&
        new Date(news.start_date) <= currentDate &&
        new Date(news.end_date) >= currentDate
    );

    const deputyHeadBoy1 = image.filter(news =>
        news.student_image_category === 'deputy head boy1' &&
        new Date(news.start_date) <= currentDate &&
        new Date(news.end_date) >= currentDate
    );

    const deputyHeadBoy2 = image.filter(news =>
        news.student_image_category === 'deputy head boy2' &&
        new Date(news.start_date) <= currentDate &&
        new Date(news.end_date) >= currentDate
    );

    const deputyHeadGirl1 = image.filter(news =>
        news.student_image_category === 'deputy head girl1' &&
        new Date(news.start_date) <= currentDate &&
        new Date(news.end_date) >= currentDate
    );

    const deputyHeadGirl2 = image.filter(news =>
        news.student_image_category === 'deputy head girl2' &&
        new Date(news.start_date) <= currentDate &&
        new Date(news.end_date) >= currentDate
    );

    return (
        <>
            <Header />

            <section style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className='container-fluid mb-3' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontWeight: 'bold' }}>Student Council</h4>
                        </div>
                    </div>
                </div>
                <div className='container student-council'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='student-council-paragraph'>
                                <p>The eight houses of the school are named on the basis of the sacred rivers of the country. Chenab, Ganges, Jamuna, Jhelum, Krishna, Ravi, Saraswati and Sutlej are the eight houses of the school. Few responsibilities were trusted upon the young but strong shoulders of our students, considering the over all performance.</p>
                            </div>
                            <div className='student-council-image'>
                                <div className='row justify-content-center text-center'>
                                    <div className='col-lg-2 col-12'>
                                        {/* <img src={Head_boy} alt="" className='img-fluid' /> */}
                                        {headBoy.length > 0 ? (
                                            headBoy.map((news, index) => (
                                                <div key={index}>
                                                    <img src={news.student_council_image} alt="" className='img-fluid' />
                                                </div>
                                            ))
                                        ) : (
                                            <p>No Head Boy News available.</p>
                                        )}
                                    </div>
                                    <div className='col-lg-2 col-12'>
                                        {headGirl.length > 0 ? (
                                            headGirl.map((news, index) => (
                                                <div key={index}>
                                                    <img src={news.student_council_image} alt="" className='img-fluid' />
                                                </div>
                                            ))
                                        ) : (
                                            <p>No Head Girl News available.</p>
                                        )}
                                    </div>
                                </div>
                                <div className='row justify-content-center text-center mt-3'>
                                    <div className='col-lg-2'>
                                        {deputyHeadBoy1.length > 0 ? (
                                            deputyHeadBoy1.map((news, index) => (
                                                <div key={index}>
                                                    <img src={news.student_council_image} alt="" className='img-fluid' />
                                                </div>
                                            ))
                                        ) : (
                                            <p>No Deputy Head Boy1 News available.</p>
                                        )}
                                    </div>
                                    <div className='col-lg-2'>
                                        {deputyHeadBoy2.length > 0 ? (
                                            deputyHeadBoy2.map((news, index) => (
                                                <div key={index}>
                                                    <img src={news.student_council_image} alt="" className='img-fluid' />
                                                </div>
                                            ))
                                        ) : (
                                            <p>No Deputy Head Boy2 News available.</p>
                                        )}
                                    </div>
                                    <div className='col-lg-2'>
                                        {deputyHeadGirl1.length > 0 ? (
                                            deputyHeadGirl1.map((news, index) => (
                                                <div key={index}>
                                                    <img src={news.student_council_image} alt="" className='img-fluid' />
                                                </div>
                                            ))
                                        ) : (
                                            <p>No Deputy Head Girl1 News available.</p>
                                        )}
                                    </div>
                                    <div className='col-lg-2'>
                                        {deputyHeadGirl2.length > 0 ? (
                                            deputyHeadGirl2.map((news, index) => (
                                                <div key={index}>
                                                    <img src={news.student_council_image} alt="" className='img-fluid' />
                                                </div>
                                            ))
                                        ) : (
                                            <p>No Deputy Head Girl2 News available.</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className='student_council_table my-4'>
                                <h5 className='text-center fw-bold'>House Prefects 2024-25</h5>
                                <table align='center' className="table table-bordered border-dark">
                                    <thead>
                                        <tr>
                                            <th className='text-uppercase'>Houses</th>
                                            <th className='text-uppercase'>Captain</th>
                                            <th className='text-uppercase'>Vice-Captain</th>
                                            <th className='text-uppercase'>Literary Captain</th>
                                            <th className='text-uppercase'>Sports Captain</th>
                                            <th className='text-uppercase'>Cultural Captain</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold' }}>Chenab</td>
                                            <td align='center'>Hardik Jain <br /> XII H</td>
                                            <td align='center'>Aarna Varshney <br /> XII D</td>
                                            <td align='center'>Parth Jain <br /> XII E</td>
                                            <td align='center'>Yuvraj Singh Rathore <br /> XII B</td>
                                            <td align='center'>Aadi Chhajer <br /> XII G </td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold' }}>Ganges</td>
                                            <td align='center'>Yashvi Rajpurohit <br /> XII D</td>
                                            <td align='center'>Kavya  Dhariwal <br /> XII E</td>
                                            <td align='center'>Priyadarshni Khichi <br /> XII J</td>
                                            <td align='center'>Samiksha Garg <br /> XII H</td>
                                            <td align='center'>Kashvi Singhvi <br /> XII F</td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold' }}>Jamuna</td>
                                            <td align='center'>Mahi Gautam <br /> XII D</td>
                                            <td align='center'>Krati Mundra <br /> XII H</td>
                                            <td align='center'>Srushti Baheti <br /> XII E</td>
                                            <td align='center'>Pranay Parakh <br /> XII E</td>
                                            <td align='center'>Suman Choudhary <br /> XII J</td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold' }}>Jhelum</td>
                                            <td align='center'>Jatin Ramawat <br /> XII A</td>
                                            <td align='center'>Briddhi Majumdar <br /> XII D</td>
                                            <td align='center'>Bhavishya Chandak <br /> XII E</td>
                                            <td align='center'>Kavya  Jain <br /> XII D</td>
                                            <td align='center'>Angel Chhajer <br /> XII J</td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold' }}>Krishna</td>
                                            <td align='center'>Tanvi Maheshwari <br /> XII E</td>
                                            <td align='center'>Krishna <br /> XII B</td>
                                            <td align='center'>Tanishka  Singh <br /> XII B</td>
                                            <td align='center'>Rajveer Singh Rajpurohit <br /> XII G</td>
                                            <td align='center'>Harshit Jain <br /> XII G</td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold' }}>Ravi</td>
                                            <td align='center'>Mehak Singhal <br /> XII H</td>
                                            <td align='center'>Vrati Jain <br /> XII G</td>
                                            <td align='center'>Kashish Singhvi <br /> XII G</td>
                                            <td align='center'>Hardik Dave <br /> XII B</td>
                                            <td align='center'>Pari Mehta <br /> XII F</td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold' }}>Saraswati</td>
                                            <td align='center'>Chhavi Chopra <br /> XII G</td>
                                            <td align='center'>Sunidhi Kothari <br /> XII J</td>
                                            <td align='center'>Vedika Mody <br /> XII D</td>
                                            <td align='center'>Sambhav Choudhary <br /> XII J</td>
                                            <td align='center'>Devanshi Kabra <br /> XII E</td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold' }}>Sutlej</td>
                                            <td align='center'>Kirti Singh <br /> XII D</td>
                                            <td align='center'>Anushka Khatri <br /> XII J</td>
                                            <td align='center'>Sayna Pugalia <br /> XII G</td>
                                            <td align='center'>Akshat Bharti <br /> XII B</td>
                                            <td align='center'>Ananya Rathi <br /> XII H</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table align='center' className="table table-bordered border-dark">
                                    <thead>
                                        <tr>
                                            <th className='text-uppercase'>Committees</th>
                                            <th className='text-uppercase'>President</th>
                                            <th className='text-uppercase'>Secretary</th>
                                            <th className='text-uppercase'>Member</th>
                                            <th className='text-uppercase'>Member</th>
                                            <th className='text-uppercase'>Member</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold', textTransform:'uppercase' }}>Cultural</td>
                                            <td align='center'>Tanvi Upadhyaya <br /> XII E</td>
                                            <td align='center'>Charmi Virat <br /> XII H</td>
                                            <td align='center'>Phalak Dodani <br /> XII F</td>
                                            <td align='center'>Purvai Singhvi <br /> XII E</td>
                                            <td align='center'>Jia Daga <br /> XII D</td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold', textTransform:'uppercase' }}>Literary</td>
                                            <td align='center'>Tanushree Jain <br /> XII E</td>
                                            <td align='center'>Soumya Parihar <br /> XII F</td>
                                            <td align='center'>Prisha Tyagi <br /> XII D</td>
                                            <td align='center'>Vanshika Gandhi <br /> XII E</td>
                                            <td align='center'>-</td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold', textTransform:'uppercase' }}>Info Tech</td>
                                            <td align='center'>Darsh Surana <br /> XII F</td>
                                            <td align='center'>Aarav Vishnoi <br /> XII G</td>
                                            <td align='center'>Tanish Bafna <br /> XII A</td>
                                            <td align='center'>Aayush Parihar <br /> XII A</td>
                                            <td align='center'>Raunak Vyas <br /> XII H</td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold', textTransform:'uppercase' }}>Sports</td>
                                            <td align='center'>Aditya Sharma <br /> XII B</td>
                                            <td align='center'>Nitya Agarwal <br /> XII E</td>
                                            <td align='center'>Vidhi Parakh <br /> XII F</td>
                                            <td align='center'>Divyanshu Ojha <br /> XII G</td>
                                            <td align='center'>Aaditya Choudhary <br /> XII J</td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold', textTransform:'uppercase' }}>Welfare</td>
                                            <td align='center'>Archi  Gupta <br /> XII E</td>
                                            <td align='center'>Princy Chandak <br /> XII E</td>
                                            <td align='center'>Nandini Bhansali <br /> XII F</td>
                                            <td align='center'>Divyanshu <br /> XII B</td>  
                                            <td align='center'>Lochana Gupta <br /> XII H</td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold', textTransform:'uppercase' }}>Discipline</td>
                                            <td align='center'>Ibha  Rathore <br /> XII F</td>
                                            <td align='center'>Zunera Nawab Khan <br /> XII B</td>
                                            <td align='center'>Raghvendra Singh Inda <br /> XII J</td>
                                            <td align='center'>Taranay Saxena <br /> XII B</td>
                                            <td align='center'>Jiya Ansari <br /> XII E</td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold', textTransform:'uppercase' }}>Snappers</td>
                                            <td align='center'>Aarav Sharma <br /> XII B</td>
                                            <td align='center'>Chandra Prakash Choudhary <br /> XII G</td>
                                            <td align='center'>Vinayak Dhawan <br /> XII B</td>
                                            <td align='center'>Arjav Choudhary <br /> XII H</td>
                                            <td align='center'>-</td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold', textTransform:'uppercase' }}>Press Corps</td>
                                            <td align='center'>Avisha  Goyal <br /> XII D</td>
                                            <td align='center'>Purvi  Lunia <br /> XII H</td>
                                            <td align='center'>Bhoomi Arora <br /> XII H</td>
                                            <td align='center'>Rutvi Porwal <br /> XII G</td>
                                            <td align='center'>-</td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold', textTransform:'uppercase' }}>Transport Mgmt.</td>
                                            <td align='center'>Jainam Singhvi <br /> XII E</td>
                                            <td align='center'>Lalit Prajapat <br /> XII G</td>
                                            <td align='center'>Sandeep Kumar <br /> XII B</td>
                                            <td align='center'>Arnay Advani <br /> XII B</td>
                                            <td align='center'>Khushmeet Chouhan <br /> XII A</td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold', textTransform:'uppercase' }}>Event Mgmt.</td>
                                            <td align='center'>Harshita Datwani <br /> XII G</td>
                                            <td align='center'>Vanya Surana <br /> XII F</td>
                                            <td align='center'>Ishita Goyal <br /> XII E</td>
                                            <td align='center'>Aliza <br /> XII A</td>
                                            <td align='center'>Kavish Jain <br /> XII F</td>
                                        </tr>
                                        <tr>
                                            <td className='house-name' style={{ width: '180px', backgroundColor: 'orange', fontWeight: 'bold', textTransform:'uppercase' }}>Assembly</td>
                                            <td align='center'>Yashvi Salecha <br /> XII E</td>
                                            <td align='center'>Bhawisha Jain <br /> XII E</td>
                                            <td align='center'>Garvit Lalwani <br /> XII F</td>
                                            <td align='center'>Neha Parihar <br /> XII F</td>
                                            <td align='center'>-</td>
                                        </tr>
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

export default StudentCouncil
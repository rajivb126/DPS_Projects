import React, { useState, useEffect } from 'react';
import dpslogo from '../../images/dpslogo.png';
import axios from 'axios';
import API_BASE_URL from '../../config'

function Dashboard() {
    const [data, setData] = useState([]);
    const [enquiry, setEnquiry] = useState([]);
    const [alumni, setAlumni] = useState([]);
    const [tc, setTC] = useState([]);
    const [event, setEvent] = useState({ totalEvents: 0, activeEvents: 0 });
    const [newsletter, setNewsletter] = useState({ totalNewsletter: 0, activeNewsletter: 0 });
    const [assembly, setAssembly] = useState({ totalAssembly: 0, activeAssembly: 0 });
    const [counts, setCounts] = useState({ total: 0, primary: 0, middle: 0, senior: 0 });

    useEffect(() => {
        fetchData();
        fetchEnquiry();
        fetchAlumni();
        fetchTC();
        fetchDashboardStats();
        fetchDashboardStatsNewsletter();
        fetchDashboardStatsAssembly();
    }, []);

    const fetchEnquiry = () => {
        axios.get(`${API_BASE_URL}/api/enquiry/view`)
            .then(response => {
                console.log(response.data.data);
                setEnquiry(response.data.data.reverse());
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const fetchAlumni = () => {
        axios.get(`${API_BASE_URL}/api/alumniform/view`)
            .then(response => {
                console.log(response.data.data);
                setAlumni(response.data.data.reverse());
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const fetchTC = () => {
        axios.get(`${API_BASE_URL}/api/transfercertificate/view`)
            .then(response => {
                setTC(response.data.data.reverse());
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const fetchDashboardStats = () => {
        axios.get(`${API_BASE_URL}/api/events/dashboard-stats`)
            .then(response => {
                setEvent(response.data); // Set totalEvents and activeEvents in state
                console.log(response.data)
            })
            .catch(error => {
                console.error("Error fetching dashboard stats:", error);
            });
    };

    const fetchDashboardStatsNewsletter = () => {
        axios.get(`${API_BASE_URL}/api/newsletter/dashboard-stats-newsletter`)
            .then(response => {
                setNewsletter(response.data); // Set totalEvents and activeEvents in state
                console.log(response.data)
            })
            .catch(error => {
                console.error("Error fetching dashboard stats:", error);
            });
    };

    const fetchDashboardStatsAssembly = () => {
        axios.get(`${API_BASE_URL}/api/assembly/dashboard-stats-assembly`)
            .then(response => {
                setAssembly(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error("Error fetching dashboard stats:", error);
            });
    };

    const fetchData = () => {
        axios.get(`${API_BASE_URL}/api/faculty/view`)
            .then(response => {
                const facultyData = response.data.data;
                setData(facultyData);

                // Calculate counts
                const counts = facultyData.reduce(
                    (acc, item) => {
                        acc.total += 1;
                        if (item.teacher_wing === 'primary wing') acc.primary += 1;
                        if (item.teacher_wing === 'middle wing') acc.middle += 1;
                        if (item.teacher_wing === 'senior wing') acc.senior += 1;
                        return acc;
                    },
                    { total: 0, primary: 0, middle: 0, senior: 0 }
                );
                setCounts(counts);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };


    return (
        <>
            <div className='container my-2'>
                <div className=' text-center mb-5'>
                    <img src={dpslogo} alt="LOGO" className='img-fluid' />
                </div>
                <div className='row text-center border-bottom border-dark mb-3 pb-3'>
                    <div className='col-md-4'>
                        {/* Total TC */}
                        <div className="col-12">
                            <div className="card bg-primary text-white">
                                <div className="card-body">
                                    <h5 className="card-title">Total No. of TC's </h5>
                                    <h4 className="card-text">{tc.length}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        {/* Total Enquiries */}
                        <div className="col-12">
                            <div className="card bg-success text-white">
                                <div className="card-body">
                                    <h5 className="card-title">Total No. of Enquiry's </h5>
                                    <h4 className="card-text">{enquiry.length}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        {/* Total Alumni */}
                        <div className="col-12">
                            <div className="card bg-warning text-white">
                                <div className="card-body">
                                    <h5 className="card-title">Total No. of Alumni's </h5>
                                    <h4 className="card-text">{alumni.length}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Faculty Details */}
                <div className="row text-center border-bottom border-dark mb-3 pb-3">
                    <h3 className='text-center text-dark pb-3'>Faculty</h3>
                    {/* Total Teachers */}
                    <div className="col-md-3">
                        <div className="card bg-primary text-white">
                            <div className="card-body">
                                <h5 className="card-title">Total No. of Teacher's </h5>
                                <h4 className="card-text">{counts.total}</h4>
                            </div>
                        </div>
                    </div>
                    {/* Primary Wing */}
                    <div className="col-md-3">
                        <div className="card bg-success text-white">
                            <div className="card-body">
                                <h5 className="card-title">Primary Wing Teacher's</h5>
                                <h4 className="card-text">{counts.primary}</h4>
                            </div>
                        </div>
                    </div>
                    {/* Middle Wing */}
                    <div className="col-md-3">
                        <div className="card bg-warning text-white">
                            <div className="card-body">
                                <h5 className="card-title">Middle Wing Teacher's</h5>
                                <h4 className="card-text">{counts.middle}</h4>
                            </div>
                        </div>
                    </div>
                    {/* Senior Wing */}
                    <div className="col-md-3">
                        <div className="card bg-danger text-white">
                            <div className="card-body">
                                <h5 className="card-title">Senior Wing Teacher's</h5>
                                <h4 className="card-text">{counts.senior}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Event and Assembly Details */}
                <div className='row text-center border-bottom border-dark pb-3'>
                    <div className='col-md-6'>
                        <div className='row'>
                            <h3 className='text-center text-dark pb-3'>Event</h3>
                            <div className="col-md-6">
                                <div className="card bg-primary text-white">
                                    <div className="card-body">
                                        <h5 className="card-title">Total Events</h5>
                                        <h4 className="card-text">{event.totalEvents}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card bg-success text-white">
                                    <div className="card-body">
                                        <h5 className="card-title">Active Events</h5>
                                        <h4 className="card-text">{event.activeEvents}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='row'>
                            <h3 className='text-center text-dark pb-3'>Assembly</h3>
                            <div className="col-md-6">
                                <div className="card bg-primary text-white">
                                    <div className="card-body">
                                        <h5 className="card-title">Total Assembly</h5>
                                        <h4 className="card-text">{assembly.totalAssembly}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card bg-success text-white">
                                    <div className="card-body">
                                        <h5 className="card-title">Active Assembly</h5>
                                        <h4 className="card-text">{assembly.activeAssembly}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-md-3">
                        <div className="card bg-primary text-white">
                            <div className="card-body">
                                <h5 className="card-title">Total Newsletter</h5>
                                <h4 className="card-text">{newsletter.totalNewsletter}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-success text-white">
                            <div className="card-body">
                                <h5 className="card-title">Active Newsletter</h5>
                                <h4 className="card-text">{newsletter.activeNewsletter}</h4>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Dashboard;

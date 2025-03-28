import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dpslogo from '../../images/DPSJODHPUR WHITE.png';

function Sidebar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [role, setRole] = useState('');

    useEffect(() => {
        const userRole = localStorage.getItem('role');
        console.log(userRole);
        setRole(userRole); // Set the role based on logged-in user
    }, []);

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    return (
        <>
            <div className='sidebar p-2'>
                <div className='m-2'>
                    <img src={dpslogo} alt="LOGO" className='img-fluid' />
                </div>
                <div className='list-group list-group-flush'>
                    <Link to={'dashboard'} className='list-group-item py-2'>
                        <i className="bi bi-house fs-5 me-3"></i>
                        <span>Dashboard</span>
                    </Link>

                    {role === 'tc-incharge' && (
                        <>
                            <div className='list-group-item py-2' onClick={() => toggleDropdown('tc')}>
                                <i className="bi bi-envelope-paper fs-5 me-3"></i>
                                <span>TC</span>
                                <i className={`bi ${activeDropdown === 'tc' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                            </div>
                            {activeDropdown === 'tc' && (
                                <div className='ms-5'>
                                    <Link to={'tc/add'} className='list-group-item py-2'>
                                        <span>Add</span>
                                    </Link>
                                    <Link to={'tc/view'} className='list-group-item py-2'>
                                        <span>View</span>
                                    </Link>
                                </div>
                            )}
                        </>
                    )}

                    {role === 'event-incharge' && (
                        <>
                            <div className='list-group-item py-2' onClick={() => toggleDropdown('event')}>
                                <i className="bi bi-calendar-event fs-5 me-3"></i>
                                <span>Event</span>
                                <i className={`bi ${activeDropdown === 'event' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                            </div>
                            {activeDropdown === 'event' && (
                                <div className='ms-5'>
                                    <Link to={'event/add'} className='list-group-item py-2'>
                                        <span>Add</span>
                                    </Link>
                                    <Link to={'event/view'} className='list-group-item py-2'>
                                        <span>View</span>
                                    </Link>
                                </div>
                            )}

                            <div className='list-group-item py-2' onClick={() => toggleDropdown('assembly')}>
                                <i className="bi bi-calendar-event fs-5 me-3"></i>
                                <span>Assembly</span>
                                <i className={`bi ${activeDropdown === 'assembly' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                            </div>
                            {activeDropdown === 'assembly' && (
                                <div className='ms-5'>
                                    <Link to={'assembly/add'} className='list-group-item py-2'>
                                        <span>Add</span>
                                    </Link>
                                    <Link to={'assembly/view'} className='list-group-item py-2'>
                                        <span>View</span>
                                    </Link>
                                </div>
                            )}
                        </>
                    )}

                    {role === 'admin' && (
                        <>
                            {/* Document Dropdown */}
                            <div className='list-group-item py-2' onClick={() => toggleDropdown('tc')}>
                                <i className="bi bi-envelope-paper fs-5 me-3"></i>
                                <span>TC</span>
                                <i className={`bi ${activeDropdown === 'tc' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                            </div>
                            {activeDropdown === 'tc' && (
                                <div className='ms-5'>
                                    <Link to={'tc/add'} className='list-group-item py-2'>
                                        <span>Add</span>
                                    </Link>
                                    <Link to={'tc/view'} className='list-group-item py-2'>
                                        <span>View</span>
                                    </Link>
                                </div>
                            )}

                            {/* Enquiry Dropdown */}
                            <Link to={'/enquiry'} className='list-group-item py-2'>
                                <i className="bi bi-envelope fs-5 me-3"></i>
                                <span>Enquiry</span>
                            </Link>


                            {/* Alumni Dropdown */}
                            <Link to={'/alumni'} className='list-group-item py-2'>
                                <i className="bi bi-file-earmark fs-5 me-3"></i>
                                <span>Alumni</span>
                            </Link>

                            {/* News Dropdown */}
                            <div className='list-group-item py-2' onClick={() => toggleDropdown('news')}>
                                <i className="bi bi-newspaper fs-5 me-3"></i>
                                <span>News</span>
                                <i className={`bi ${activeDropdown === 'news' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                            </div>
                            {activeDropdown === 'news' && (
                                <div className='ms-5'>
                                    <Link to={'news/add'} className='list-group-item py-2'>
                                        <span>Add</span>
                                    </Link>
                                    <Link to={'news/view'} className='list-group-item py-2'>
                                        <span>View</span>
                                    </Link>
                                </div>
                            )}

                            {/* Newsetter Dropdown */}
                            <div className='list-group-item py-2' onClick={() => toggleDropdown('newsletter')}>
                                <i className="bi bi-newspaper fs-5 me-3"></i>
                                <span>Newsletter</span>
                                <i className={`bi ${activeDropdown === 'newsletter' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                            </div>
                            {activeDropdown === 'newsletter' && (
                                <div className='ms-5'>
                                    <Link to={'newsletter/add'} className='list-group-item py-2'>
                                        <span>Add</span>
                                    </Link>
                                    <Link to={'newsletter/view'} className='list-group-item py-2'>
                                        <span>View</span>
                                    </Link>
                                </div>
                            )}

                            {/* School News Dropdown */}
                            <div className='list-group-item py-2' onClick={() => toggleDropdown('schoolnews')}>
                                <i className="bi bi-speedometer2 fs-5 me-3"></i>
                                <span>School News</span>
                                <i className={`bi ${activeDropdown === 'schoolnews' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                            </div>
                            {activeDropdown === 'schoolnews' && (
                                <div className='ms-5'>
                                    <Link to={'schoolnews/add'} className='list-group-item py-2'>
                                        <span>Add</span>
                                    </Link>
                                    <Link to={'schoolnews/view'} className='list-group-item py-2'>
                                        <span>View</span>
                                    </Link>
                                </div>
                            )}

                            {/* Download Dropdown */}
                            <div className='list-group-item py-2' onClick={() => toggleDropdown('download')}>
                                <i className="bi bi-cloud-arrow-down-fill fs-5 me-3"></i>
                                <span>Download</span>
                                <i className={`bi ${activeDropdown === 'download' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                            </div>
                            {activeDropdown === 'download' && (
                                <div className='ms-5'>
                                    <Link to={'download/add'} className='list-group-item py-2'>
                                        <span>Add</span>
                                    </Link>
                                    <Link to={'download/view'} className='list-group-item py-2'>
                                        <span>View</span>
                                    </Link>
                                </div>
                            )}

                            {/* Event Dropdown */}
                            <div className='list-group-item py-2' onClick={() => toggleDropdown('event')}>
                                <i className="bi bi-calendar-event fs-5 me-3"></i>
                                <span>Event</span>
                                <i className={`bi ${activeDropdown === 'event' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                            </div>
                            {activeDropdown === 'event' && (
                                <div className='ms-5'>
                                    <Link to={'event/add'} className='list-group-item py-2'>
                                        <span>Add</span>
                                    </Link>
                                    <Link to={'event/view'} className='list-group-item py-2'>
                                        <span>View</span>
                                    </Link>
                                </div>
                            )}

                            {/* Assembly Dropdown */}
                            <div className='list-group-item py-2' onClick={() => toggleDropdown('assembly')}>
                                <i className="bi bi-calendar-event fs-5 me-3"></i>
                                <span>Assembly</span>
                                <i className={`bi ${activeDropdown === 'assembly' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                            </div>
                            {activeDropdown === 'assembly' && (
                                <div className='ms-5'>
                                    <Link to={'assembly/add'} className='list-group-item py-2'>
                                        <span>Add</span>
                                    </Link>
                                    <Link to={'assembly/view'} className='list-group-item py-2'>
                                        <span>View</span>
                                    </Link>
                                </div>
                            )}

                            {/* Academic Achievement Dropdown */}
                            <div className='list-group-item py-2' onClick={() => toggleDropdown('achievement')}>
                                <i className="bi bi-award fs-5 me-3"></i>
                                <span>Achievement</span>
                                <i className={`bi ${activeDropdown === 'achievement' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                            </div>
                            {activeDropdown === 'achievement' && (
                                <div className='ms-5'>
                                    <Link to={'achievement/add'} className='list-group-item py-2'>
                                        <span>Add</span>
                                    </Link>
                                    <Link to={'achievement/view'} className='list-group-item py-2'>
                                        <span>View</span>
                                    </Link>
                                </div>
                            )}

                            {/* Academic Faculty Dropdown */}
                            <div className='list-group-item py-2' onClick={() => toggleDropdown('faculty')}>
                                <i className="bi bi-person fs-5 me-3"></i>
                                <span>Faculty</span>
                                <i className={`bi ${activeDropdown === 'faculty' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                            </div>
                            {activeDropdown === 'faculty' && (
                                <div className='ms-5'>
                                    <Link to={'faculty/add'} className='list-group-item py-2'>
                                        <span>Add</span>
                                    </Link>
                                    <Link to={'faculty/viewall'} className='list-group-item py-2'>
                                        <span>View</span>
                                    </Link>
                                </div>
                            )}

                            {/* Infrastructure Dropdown */}
                            <div className='list-group-item py-2' onClick={() => toggleDropdown('infrastructure')}>
                                <i className="bi bi-person fs-5 me-3"></i>
                                <span>infrastructure</span>
                                <i className={`bi ${activeDropdown === 'infrastructure' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                            </div>
                            {activeDropdown === 'infrastructure' && (
                                <div className='ms-5'>
                                    <Link to={'infrastructure/add'} className='list-group-item py-2'>
                                        <span>Add</span>
                                    </Link>
                                    <Link to={'infrastructure/view'} className='list-group-item py-2'>
                                        <span>View</span>
                                    </Link>
                                </div>
                            )}

                            {/* Student Council Dropdown */}
                            <div className='list-group-item' onClick={() => toggleDropdown('studentcouncil')}>
                                <i className="bi bi-person fs-5 me-3"></i>
                                <span>Student Council</span>
                                <i className={`bi ${activeDropdown === 'studentcouncil' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                            </div>
                            {activeDropdown === 'studentcouncil' && (
                                <div className='ms-5'>
                                    <Link to={'studentcouncil/add'} className='list-group-item py-2'>
                                        <span>Add</span>
                                    </Link>
                                    <Link to={'studentcouncil/view'} className='list-group-item py-2'>
                                        <span>View</span>
                                    </Link>
                                </div>
                            )}

                            {/* Popup Dropdown */}
                            <div className='list-group-item' onClick={() => toggleDropdown('popup')}>
                                <i className="bi bi-person fs-5 me-3"></i>
                                <span>Popup</span>
                                <i className={`bi ${activeDropdown === 'popup' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                            </div>
                            {activeDropdown === 'popup' && (
                                <div className='ms-5'>
                                    <Link to={'popup/add'} className='list-group-item py-2'>
                                        <span>Add</span>
                                    </Link>
                                    <Link to={'popup/view'} className='list-group-item py-2'>
                                        <span>View</span>
                                    </Link>
                                </div>
                            )}

                            {/* Site Image Dropdown */}
                            <div className='list-group-item' onClick={() => toggleDropdown('siteimage')}>
                                <i className="bi bi-person fs-5 me-3"></i>
                                <span>Site Image</span>
                                <i className={`bi ${activeDropdown === 'siteimage' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                            </div>
                            {activeDropdown === 'siteimage' && (
                                <div className='ms-5'>
                                    <Link to={'siteimage/add'} className='list-group-item py-2'>
                                        <span>Add</span>
                                    </Link>
                                    <Link to={'siteimage/view'} className='list-group-item py-2'>
                                        <span>View</span>
                                    </Link>
                                </div>
                            )}
                        </>
                    )}

                    {/* Document Dropdown */}
                    {/* <div className='list-group-item py-2' onClick={() => toggleDropdown('tc')}>
                        <i className="bi bi-envelope-paper fs-5 me-3"></i>
                        <span>TC</span>
                        <i className={`bi ${activeDropdown === 'tc' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                    </div>
                    {activeDropdown === 'tc' && (
                        <div className='ms-5'>
                            <Link to={'tc/add'} className='list-group-item py-2'>
                                <span>Add</span>
                            </Link>
                            <Link to={'tc/view'} className='list-group-item py-2'>
                                <span>View</span>
                            </Link>
                        </div>
                    )} */}

                    {/* Enquiry Dropdown */}
                    {/* <Link to={'/enquiry'} className='list-group-item py-2'>
                        <i className="bi bi-envelope fs-5 me-3"></i>
                        <span>Enquiry</span>
                    </Link> */}


                    {/* Alumni Dropdown */}
                    {/* <Link to={'/alumni'} className='list-group-item py-2'>
                        <i className="bi bi-file-earmark fs-5 me-3"></i>
                        <span>Alumni</span>
                    </Link> */}

                    {/* News Dropdown */}
                    {/* <div className='list-group-item py-2' onClick={() => toggleDropdown('news')}>
                        <i className="bi bi-newspaper fs-5 me-3"></i>
                        <span>News</span>
                        <i className={`bi ${activeDropdown === 'news' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                    </div>
                    {activeDropdown === 'news' && (
                        <div className='ms-5'>
                            <Link to={'news/add'} className='list-group-item py-2'>
                                <span>Add</span>
                            </Link>
                            <Link to={'news/view'} className='list-group-item py-2'>
                                <span>View</span>
                            </Link>
                        </div>
                    )} */}

                    {/* Newsetter Dropdown */}
                    {/* <div className='list-group-item py-2' onClick={() => toggleDropdown('newsletter')}>
                        <i className="bi bi-newspaper fs-5 me-3"></i>
                        <span>Newsletter</span>
                        <i className={`bi ${activeDropdown === 'newsletter' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                    </div>
                    {activeDropdown === 'newsletter' && (
                        <div className='ms-5'>
                            <Link to={'newsletter/add'} className='list-group-item py-2'>
                                <span>Add</span>
                            </Link>
                            <Link to={'newsletter/view'} className='list-group-item py-2'>
                                <span>View</span>
                            </Link>
                        </div>
                    )} */}

                    {/* School News Dropdown */}
                    {/* <div className='list-group-item py-2' onClick={() => toggleDropdown('schoolnews')}>
                        <i className="bi bi-speedometer2 fs-5 me-3"></i>
                        <span>School News</span>
                        <i className={`bi ${activeDropdown === 'schoolnews' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                    </div>
                    {activeDropdown === 'schoolnews' && (
                        <div className='ms-5'>
                            <Link to={'schoolnews/add'} className='list-group-item py-2'>
                                <span>Add</span>
                            </Link>
                            <Link to={'schoolnews/view'} className='list-group-item py-2'>
                                <span>View</span>
                            </Link>
                        </div>
                    )} */}

                    {/* Download Dropdown */}
                    {/* <div className='list-group-item py-2' onClick={() => toggleDropdown('download')}>
                        <i className="bi bi-cloud-arrow-down-fill fs-5 me-3"></i>
                        <span>Download</span>
                        <i className={`bi ${activeDropdown === 'download' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                    </div>
                    {activeDropdown === 'download' && (
                        <div className='ms-5'>
                            <Link to={'download/add'} className='list-group-item py-2'>
                                <span>Add</span>
                            </Link>
                            <Link to={'download/view'} className='list-group-item py-2'>
                                <span>View</span>
                            </Link>
                        </div>
                    )} */}

                    {/* Event Dropdown */}
                    {/* <div className='list-group-item py-2' onClick={() => toggleDropdown('event')}>
                        <i className="bi bi-calendar-event fs-5 me-3"></i>
                        <span>Event</span>
                        <i className={`bi ${activeDropdown === 'event' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                    </div>
                    {activeDropdown === 'event' && (
                        <div className='ms-5'>
                            <Link to={'event/add'} className='list-group-item py-2'>
                                <span>Add</span>
                            </Link>
                            <Link to={'event/view'} className='list-group-item py-2'>
                                <span>View</span>
                            </Link>
                        </div>
                    )} */}

                    {/* Assembly Dropdown */}
                    {/* <div className='list-group-item py-2' onClick={() => toggleDropdown('assembly')}>
                        <i className="bi bi-calendar-event fs-5 me-3"></i>
                        <span>Assembly</span>
                        <i className={`bi ${activeDropdown === 'assembly' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                    </div>
                    {activeDropdown === 'assembly' && (
                        <div className='ms-5'>
                            <Link to={'assembly/add'} className='list-group-item py-2'>
                                <span>Add</span>
                            </Link>
                            <Link to={'assembly/view'} className='list-group-item py-2'>
                                <span>View</span>
                            </Link>
                        </div>
                    )} */}

                    {/* Academic Achievement Dropdown */}
                    {/* <div className='list-group-item py-2' onClick={() => toggleDropdown('achievement')}>
                        <i className="bi bi-award fs-5 me-3"></i>
                        <span>Achievement</span>
                        <i className={`bi ${activeDropdown === 'achievement' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                    </div>
                    {activeDropdown === 'achievement' && (
                        <div className='ms-5'>
                            <Link to={'achievement/add'} className='list-group-item py-2'>
                                <span>Add</span>
                            </Link>
                            <Link to={'achievement/view'} className='list-group-item py-2'>
                                <span>View</span>
                            </Link>
                        </div>
                    )} */}

                    {/* Academic Faculty Dropdown */}
                    {/* <div className='list-group-item py-2' onClick={() => toggleDropdown('faculty')}>
                        <i className="bi bi-person fs-5 me-3"></i>
                        <span>Faculty</span>
                        <i className={`bi ${activeDropdown === 'faculty' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                    </div>
                    {activeDropdown === 'faculty' && (
                        <div className='ms-5'>
                            <Link to={'faculty/add'} className='list-group-item py-2'>
                                <span>Add</span>
                            </Link>
                            <Link to={'faculty/viewall'} className='list-group-item py-2'>
                                <span>View</span>
                            </Link>
                        </div>
                    )} */}

                    {/* Infrastructure Dropdown */}
                    {/* <div className='list-group-item py-2' onClick={() => toggleDropdown('infrastructure')}>
                        <i className="bi bi-person fs-5 me-3"></i>
                        <span>infrastructure</span>
                        <i className={`bi ${activeDropdown === 'infrastructure' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                    </div>
                    {activeDropdown === 'infrastructure' && (
                        <div className='ms-5'>
                            <Link to={'infrastructure/add'} className='list-group-item py-2'>
                                <span>Add</span>
                            </Link>
                            <Link to={'infrastructure/view'} className='list-group-item py-2'>
                                <span>View</span>
                            </Link>
                        </div>
                    )} */}

                    {/* Student Council Dropdown */}
                    {/* <div className='list-group-item' onClick={() => toggleDropdown('studentcouncil')}>
                        <i className="bi bi-person fs-5 me-3"></i>
                        <span>studentcouncil</span>
                        <i className={`bi ${activeDropdown === 'studentcouncil' ? 'bi-caret-up' : 'bi-caret-down'} ms-2`}></i>
                    </div>
                    {activeDropdown === 'studentcouncil' && (
                        <div className='ms-5'>
                            <Link to={'studentcouncil/add'} className='list-group-item py-2'>
                                <span>Add</span>
                            </Link>
                            <Link to={'studentcouncil/view'} className='list-group-item py-2'>
                                <span>View</span>
                            </Link>
                        </div>
                    )} */}
                </div>
            </div>
        </>
    );
}

export default Sidebar;
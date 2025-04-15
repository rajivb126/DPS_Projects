import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config'

function ViewNews() {
    const [data, setData] = useState([]);
    const [modalData, setModalData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [mode, setMode] = useState('view');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`${API_BASE_URL}/api/news/view`)
            .then(response => {
                setData(response.data.data.reverse());
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const deleteDocument = (id) => {
        const confirm = window.confirm("Would you like to delete");
        if (confirm) {
            axios.delete(`${API_BASE_URL}/api/news/delete/${id}`)
                .then(response => {
                    setData(data.filter(doc => doc._id !== id));
                    console.log(response);
                }).catch(error => console.log(error));
        }
    };

    const updateDocument = (updatedData) => {
        const { _id, nlink_file, ...rest } = updatedData;

        if (nlink_file) {
            const formData = new FormData();
            formData.append("nlink", nlink_file);

            Object.entries(rest).forEach(([key, value]) => {
                formData.append(key, value);
            });

            axios.put(`${API_BASE_URL}/api/news/update/${_id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            })
                .then(response => {
                    setData(data.map(doc => (doc._id === _id ? response.data.result : doc)));
                    handleCloseModal();
                })
                .catch(error => {
                    console.error('Error updating document:', error);
                });
        } else {
            axios.put(`${API_BASE_URL}/api/news/update/${_id}`, rest)
                .then(response => {
                    setData(data.map(doc => (doc._id === _id ? response.data.result : doc)));
                    handleCloseModal();
                })
                .catch(error => {
                    console.error('Error updating document:', error);
                });
        }
    };

    const handleViewClick = (item) => {
        setModalData(item);
        setMode('view'); // Set mode to 'view' for viewing
        setShowModal(true);
    };

    const handleEditClick = (item) => {
        setModalData(item);
        setMode('edit'); // Set mode to 'edit' for editing
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateDocument(modalData);
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "nlink" && files?.length > 0) {
            setModalData(prevData => ({
                ...prevData,
                nlink_file: files[0]
            }));
        } else {
            setModalData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-12'>
                        <h3 className='text-center text-dark pb-3'>View News Data</h3>

                        {/* Pagination */}
                        <nav>
                            <ul className="pagination justify-content-start">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
                                </li>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                        <button className="page-link" onClick={() => paginate(i + 1)}>{i + 1}</button>
                                    </li>
                                ))}
                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
                                </li>
                            </ul>
                        </nav>
                        
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th>S. NO.</th>
                                    <th style={{ width: '250px' }}>News Title Name</th>
                                    <th>News Category</th>
                                    <th>News Link Path</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item, index) => (
                                    <tr key={item._id}>
                                        <td className='text-center'>{indexOfFirstItem + index + 1}.</td>
                                        <td className='text-center'>{item.nname}</td>
                                        <td className='text-center'>{item.news_category}</td>
                                        <td>{item.nlink}</td>
                                        <td>{new Date(item.start_date).toLocaleDateString()}</td>
                                        <td>{new Date(item.end_date).toLocaleDateString()}</td>
                                        <td>
                                            <button
                                                className='bi bi-eye-fill btn btn-primary my-1'
                                                style={{ width: '30%', marginRight: '5px' }}
                                                onClick={() => handleViewClick(item)}
                                            ></button>
                                            <button
                                                className='bi bi-pencil-square btn btn-warning my-1'
                                                style={{ width: '33%', marginRight: '5px' }}
                                                onClick={() => handleEditClick(item)}
                                            ></button>
                                            <button className='bi bi-trash3 btn btn-danger' style={{ width: '30%' }} onClick={() => deleteDocument(item._id)}></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {showModal && modalData && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{mode === 'view' ? 'View News Details' : 'Edit News Details'}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                            </div>
                            <form onSubmit={handleFormSubmit}>
                                <div className="modal-body">
                                    <div className="form-group mb-3">
                                        <label htmlFor="nname" className="form-label">News Title Name</label>
                                        <input type="text" className="form-control" id="nname" name="nname" value={modalData?.nname || ''} onChange={handleInputChange} readOnly={mode === 'view'} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="news_category" className="form-label">News Category</label>
                                        <input type="text" className="form-control" id="news_category" name="news_category" value={modalData?.news_category || ''} onChange={handleInputChange} readOnly={mode === 'view'} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="nlink" className="form-label">News Link Path</label>
                                        {mode === 'view' ? (
                                            <input type="text" className="form-control" id="nlink" name="nlink" value={modalData?.nlink || ''} readOnly />
                                        ) : (
                                            <input type="file" className="form-control" id="nlink" name="nlink" onChange={handleInputChange} />
                                        )}
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="start_date" className="form-label">Start Date</label>
                                        <input type="date" className="form-control" id="start_date" name="start_date" value={modalData?.start_date?.substring(0, 10) || ''} onChange={handleInputChange} readOnly={mode === 'view'} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="end_date" className="form-label">End Date</label>
                                        <input type="date" className="form-control" id="end_date" name="end_date" value={modalData?.end_date?.substring(0, 10) || ''} onChange={handleInputChange} readOnly={mode === 'view'} />
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                                    {mode === 'edit' && <button type="submit" className="btn btn-primary">Update</button>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ViewNews;
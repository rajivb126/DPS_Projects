import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_BASE_URL from '../../config'

function ViewInfrastructure() {
    const [data, setData] = useState([]); // State to hold the data fetched from the API
    const [modalData, setModalData] = useState(null); // Store data for modal
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [mode, setMode] = useState('view');
    const [infrastructureCategory, setInfrastructureCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;


    // Fetch data from API when the component is mounted
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`${API_BASE_URL}/api/infrastructure/view`)
            .then(response => {
                console.log(response.data.data);
                setData(response.data.data.reverse());
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const deleteDocument = (id) => {
        const confirm = window.confirm("Would you like to delete");
        if (confirm) {
            axios.delete(`${API_BASE_URL}/api/infrastructure/delete/${id}`)
                .then(response => {
                    console.log(response.data);
                    // Filter out the deleted document from the state
                    setData(data.filter(doc => doc._id !== id));
                }).catch(error => console.log(error));
        }
    };

    const handleDeleteFile = async (fileName) => {
        try {
            // Make DELETE request to delete the event file by name
            const response = await axios.delete(`${API_BASE_URL}/api/infrastructure/deleteImage/${fileName}`);

            if (response.status === 200) {
                // On success, notify user and remove the deleted file from the UI
                alert("File deleted successfully");

                // Update the state to remove the deleted file (adjust state as per your code)
                // For example:
                setModalData(prevState => ({
                    ...prevState,
                    infrastructure_image: prevState.infrastructure_image.filter(file => file !== fileName) // Remove the deleted file
                }));
            }
        } catch (error) {
            console.error("Error deleting file:", error);
            alert("An error occurred while deleting the file.");
        }
    };

    const updateDocument = (updatedData) => {
        const { _id, infrastructure_image, ...rest } = updatedData;

        // If there's a file to upload, handle it separately
        if (infrastructure_image) {
            const formData = new FormData();
            formData.append("infrastructure_image", infrastructure_image);

            // Append other data
            Object.entries(rest).forEach(([key, value]) => {
                formData.append(key, value);
            });

            axios.put(`${API_BASE_URL}/api/infrastructure/update/${_id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            })
                .then(response => {
                    setData(data.map(doc => (doc._id === _id ? response.data.result : doc)));
                    handleCloseModal(); // Close modal
                })
                .catch(error => {
                    console.error('Error updating document:', error);
                    alert('Failed to update document. Please try again.'); // User-friendly error handling
                });
        } else {
            // If no file upload, just update the other fields
            axios.put(`${API_BASE_URL}/api/infrastructure/update/${_id}`, rest)
                .then(response => {
                    setData(data.map(doc => (doc._id === _id ? response.data.result : doc)));
                    handleCloseModal(); // Close modal
                })
                .catch(error => {
                    console.error('Error updating document:', error);
                    alert('Failed to update document. Please try again.'); // User-friendly error handling
                });
        }
    };

    const handleViewClick = (item) => {
        setModalData(item);
        setMode('view');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModalData(null); // Reset modal data
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateDocument(modalData);
    };

    const handleEditClick = (item) => {
        setModalData(item);
        setMode('edit');
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "infrastructure_image" && files?.length > 0) {
            // Store the file for upload
            setModalData(prevData => ({
                ...prevData,
                infrastructure_image: files[0] // Ensure the name matches what you're uploading
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
                        <h3 className='text-center text-dark pb-3'>View Infrastructure Data</h3>

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
                                    <th>Infrastructure Category</th>
                                    <th>Infrastructure Link Path</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th style={{ width: '200px' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item, index) => (
                                    <tr key={item._id}>
                                        <td className='text-center'>{indexOfFirstItem + index + 1}.</td>
                                        <td className='text-center'>{item.infrastructure_category}</td>
                                        <td className='text-center'>{item.infrastructure_image}</td>
                                        <td className='text-center'>{new Date(item.start_date).toLocaleDateString()}</td>
                                        <td className='text-center'>{new Date(item.end_date).toLocaleDateString()}</td>
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

            {/* Modal for viewing and editing data */}
            {showModal && modalData && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{mode === 'view' ? 'View Infrastructure Details' : 'Edit Infrastructure Details'}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                            </div>
                            <form onSubmit={handleFormSubmit}>
                                <div className="modal-body">
                                    <div className="form-group mb-3">
                                        {mode === 'edit' ? (
                                            <select name="infrastructure_category" className="form-select" value={modalData?.infrastructure_category || infrastructureCategory} onChange={(e) => { setInfrastructureCategory(e.target.value); handleInputChange(e); }}>
                                                <option value="">Select Infrastructure Category</option>
                                                <option value="general">General</option>
                                                <option value="primary">Primary</option>
                                                <option value="middle">Middle</option>
                                                <option value="senior">Senior</option>
                                                <option value="hostel">Hostel</option>
                                            </select>
                                        ) : (
                                            <div className="form-group mb-3">
                                                <label htmlFor="infrastructure_category" className="form-label">Infrastructure Category</label>
                                                <input type="text" className="form-control" id="infrastructure_category" name="infrastructure_category" value={modalData?.infrastructure_category || ''} readOnly />
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="infrastructure_image" className="form-label">Infrastructure Images</label>
                                        {mode === 'view' ? (
                                            modalData?.infrastructure_image && modalData.infrastructure_image.length > 0 ? (
                                                <div className="row">
                                                    {modalData.infrastructure_image.map((file, index) => (
                                                        <div key={index} className="col-3 mb-3">
                                                            <div className="file-container">
                                                                <a href={`${API_BASE_URL}/uploads/${file}`} data-fancybox="gallery" data-caption={`Event File ${index + 1}`}>
                                                                    <img
                                                                        src={`${API_BASE_URL}/uploads/${file}`}
                                                                        alt={`Event File ${index + 1}`}
                                                                        className="img-fluid"
                                                                        style={{ maxWidth: '100%', height: 'auto' }}
                                                                    />
                                                                </a>
                                                                {/* Delete Button for each file */}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-danger mt-2"
                                                                    onClick={() => handleDeleteFile(file)}
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p>No event files available</p>
                                            )
                                        ) : (
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="infrastructure_image"
                                                name="infrastructure_image"
                                                multiple
                                                onChange={handleInputChange}
                                            />
                                        )}
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="start_date" className="form-label">Start Date</label>
                                        <input type="date" className="form-control" id="start_date" name="start_date" value={modalData?.start_date?.substring(0, 10) || ''} onChange={handleInputChange} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="end_date" className="form-label">End Date</label>
                                        <input type="date" className="form-control" id="end_date" name="end_date" value={modalData?.end_date?.substring(0, 10) || ''} onChange={handleInputChange} />
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
    )
}

export default ViewInfrastructure
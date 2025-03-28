import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config'

function ViewPopup() {
    const [data, setData] = useState([]); // State to hold the data fetched from the API
    const [modalData, setModalData] = useState(null); // Store data for modal
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [mode, setMode] = useState('view'); // For viewing/editing modes

    // Fetch data from API when the component is mounted
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`${API_BASE_URL}/api/popup/view`) // Change endpoint to /popup/view
            .then(response => {
                console.log(response.data.data);
                setData(response.data.data.reverse());
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const deletePopup = (id) => {
        const confirm = window.confirm("Would you like to delete this popup?");
        if (confirm) {
            axios.delete(`${API_BASE_URL}/api/popup/delete/${id}`) // Change endpoint to /popup/delete
                .then(response => {
                    console.log(response.data);
                    // Filter out the deleted popup from the state
                    setData(data.filter(popup => popup._id !== id));
                })
                .catch(error => console.log(error));
        }
    };

    const updatePopup = (updatedData) => {
        const { _id, popup_image, ...rest } = updatedData;

        // If there's a file to upload, handle it separately
        if (popup_image) {
            const formData = new FormData();
            formData.append("popup_image", popup_image); // Add image field

            // Append other data
            Object.entries(rest).forEach(([key, value]) => {
                formData.append(key, value);
            });

            axios.put(`${API_BASE_URL}/api/popup/update/${_id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            })
                .then(response => {
                    setData(data.map(popup => (popup._id === _id ? response.data.result : popup)));
                    handleCloseModal(); // Close modal
                })
                .catch(error => {
                    console.error('Error updating popup:', error);
                });
        } else {
            // If no file upload, just update the other fields
            axios.put(`${API_BASE_URL}/api/popup/update/${_id}`, rest)
                .then(response => {
                    setData(data.map(popup => (popup._id === _id ? response.data.result : popup)));
                    handleCloseModal(); // Close modal
                })
                .catch(error => {
                    console.error('Error updating popup:', error);
                });
        }
    };

    const handleViewClick = (popup) => {
        setModalData(popup); 
        setMode('view');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updatePopup(modalData);
    };

    const handleEditClick = (popup) => {
        setModalData(popup);
        setMode('edit');
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "popup_image" && files?.length > 0) {
            // Set the file in modalData to be uploaded later
            setModalData(prevData => ({
                ...prevData,
                popup_image: files[0] // Store the file for upload
            }));
        } else {
            setModalData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    return (
        <>
            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-12'>
                        <h3 className='text-center text-dark pb-3'>View Popups</h3>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th>S. NO.</th>
                                    <th style={{ width: '250px' }}>Popup Header</th>
                                    <th>Popup Link</th>
                                    <th>IsVisible</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((popup, index) => (
                                    <tr key={popup._id}>
                                        <td className='text-center'>{index + 1}.</td>
                                        <td className='text-center'>{popup.popup_header}</td>
                                        <td>{popup.popup_link}</td>
                                        <td>{popup.isVisible ? "ON" : "OFF"}</td>
                                        <td>{new Date(popup.start_date).toLocaleDateString()}</td>
                                        <td>{new Date(popup.end_date).toLocaleDateString()}</td>
                                        <td>
                                            <button
                                                className='bi bi-eye-fill btn btn-primary my-1'
                                                style={{ width: '30%', marginRight: '5px' }}
                                                onClick={() => handleViewClick(popup)}
                                            ></button>
                                            <button
                                                className='bi bi-pencil-square btn btn-warning my-1'
                                                style={{ width: '33%', marginRight: '5px' }}
                                                onClick={() => handleEditClick(popup)}
                                            ></button>
                                            <button className='bi bi-trash3 btn btn-danger' style={{ width: '30%' }} onClick={() => deletePopup(popup._id)}></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal for viewing and editing popup data */}
            {showModal && modalData && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{mode === 'view' ? 'View Popup Details' : 'Edit Popup Details'}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                            </div>
                            <form onSubmit={handleFormSubmit}>
                                <div className="modal-body">
                                    <div className="form-group mb-3">
                                        <label htmlFor="popup_header" className="form-label">Popup Header</label>
                                        <input type="text" className="form-control" id="popup_header" name="popup_header" value={modalData?.popup_header || ''} onChange={handleInputChange} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="popup_link" className="form-label">Popup Link</label>
                                        <input type="text" className="form-control" id="popup_link" name="popup_link" value={modalData?.popup_link || ''} onChange={handleInputChange} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="popup_image" className="form-label">Popup Image</label>
                                        {mode === 'view' ? (
                                            <img src={`${API_BASE_URL}/uploads/${modalData.popup_image}`} alt="Popup" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
                                        ) : (
                                            <input type="file" className="form-control" id="popup_image" name="popup_image" onChange={handleInputChange} />
                                        )}
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="isVisible" className="form-label">Is Visible</label>
                                        <select className="form-control" id="isVisible" name="isVisible" value={modalData?.isVisible || false} onChange={handleInputChange}>
                                            <option value={true}>ON</option>
                                            <option value={false}>OFF</option>
                                        </select>
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

export default ViewPopup;
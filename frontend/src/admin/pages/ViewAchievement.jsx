import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config'

function ViewAchievement() {
    const [data, setData] = useState([]); // State to hold the data fetched from the API
    const [modalData, setModalData] = useState(null); // Store data for modal
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [mode, setMode] = useState('view');
    const [achievementCategory, setAchievementCategory] = useState('');

    // Fetch data from API when the component is mounted
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`${API_BASE_URL}/api/achievement/view`)
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
            axios.delete(`${API_BASE_URL}/api/achievement/delete/${id}`)
                .then(response => {
                    console.log(response.data);
                    // Filter out the deleted document from the state
                    setData(data.filter(doc => doc._id !== id));
                }).catch(error => console.log(error));
        }
    };

    const updateDocument = (updatedData) => {
        const { _id, achievement_file_file, ...rest } = updatedData;

        // If there's a file to upload, handle it separately
        if (achievement_file_file) {
            const formData = new FormData();
            formData.append("achievement_file", achievement_file_file);

            // Append other data
            Object.entries(rest).forEach(([key, value]) => {
                formData.append(key, value);
            });

            axios.put(`${API_BASE_URL}/api/achievement/update/${_id}`, formData, {
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
            axios.put(`${API_BASE_URL}/api/achievement/update/${_id}`, rest)
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

        if (name === "achievement_file" && files?.length > 0) {
            // Store the file for upload
            setModalData(prevData => ({
                ...prevData,
                achievement_file_file: files[0] // Ensure the name matches what you're uploading
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
                        <h3 className='text-center text-dark pb-3'>View Achievement Data</h3>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th>S. NO.</th>
                                    <th>Achievement Category</th>
                                    <th>Achievement Link Path</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th style={{ width: '200px' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item._id}>
                                        <td className='text-center'>{index + 1}.</td>
                                        <td className='text-center'>{item.achievement_category}</td>
                                        <td className='text-center'>{item.achievement_file}</td>
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
                                <h5 className="modal-title">{mode === 'view' ? 'View Achievement Details' : 'Edit Achievement Details'}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                            </div>
                            <form onSubmit={handleFormSubmit}>
                                <div className="modal-body">
                                    <div className="form-group mb-3">
                                        {mode === 'edit' ? (
                                            <select
                                                name="achievement_category"
                                                className="form-select"
                                                value={modalData?.achievement_category || achievementCategory}
                                                onChange={(e) => {
                                                    setAchievementCategory(e.target.value);
                                                    handleInputChange(e); // Ensure the modalData is updated on change
                                                }}
                                            >
                                                <option value="">Select Achievement Category</option>
                                                <option value="academic achievement">Academic Achievement</option>
                                                <option value="co-curricular achievement">Co-Curricular Achievement</option>
                                                <option value="sports achievement">Sports Achievement</option>
                                            </select>
                                        ) : (
                                            <div className="form-group mb-3">
                                                <label htmlFor="achievement_category" className="form-label">Achievement Category</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="achievement_category"
                                                    name="achievement_category"
                                                    value={modalData?.achievement_category || ''}
                                                    readOnly
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="achievement_file" className="form-label">Achievement Link Path</label>
                                        {mode === 'view' ? (
                                            <input type="text" className="form-control" id="achievement_file" name="achievement_file" value={modalData?.achievement_file || ''} readOnly />
                                        ) : (
                                            <input type="file" className="form-control" id="achievement_file" name="achievement_file" onChange={handleInputChange} />
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

export default ViewAchievement
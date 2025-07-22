import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config'

function ViewResult() {
    const [data, setData] = useState([]); // State to hold the data fetched from the API
    const [modalData, setModalData] = useState(null); // Store data for modal
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [mode, setMode] = useState('view'); // For viewing/editing modes

    // Fetch data from API when the component is mounted
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`${API_BASE_URL}/api/result/view`) // Change endpoint to /popup/view
            .then(response => {
                console.log(response.data.data);
                setData(response.data.data.reverse());
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const deleteResult = (id) => {
        const confirm = window.confirm("Would you like to delete this popup?");
        if (confirm) {
            axios.delete(`${API_BASE_URL}/api/result/delete/${id}`) // Change endpoint to /popup/delete
                .then(response => {
                    console.log(response.data);
                    // Filter out the deleted popup from the state
                    setData(data.filter(result => result._id !== id));
                })
                .catch(error => console.log(error));
        }
    };

    const updateResult = (updatedData) => {
        const { _id, result_file, ...rest } = updatedData;

        // If there's a file to upload, handle it separately
        if (result_file) {
            const formData = new FormData();
            formData.append("result_file", result_file); // Add image field

            // Append other data
            Object.entries(rest).forEach(([key, value]) => {
                formData.append(key, value);
            });

            axios.put(`${API_BASE_URL}/api/result/update/${_id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            })
                .then(response => {
                    setData(data.map(result => (result._id === _id ? response.data.result : result)));
                    handleCloseModal(); // Close modal
                })
                .catch(error => {
                    console.error('Error updating result:', error);
                });
        } else {
            // If no file upload, just update the other fields
            axios.put(`${API_BASE_URL}/api/result/update/${_id}`, rest)
                .then(response => {
                    setData(data.map(slider => (slider._id === _id ? response.data.result : slider)));
                    handleCloseModal(); // Close modal
                })
                .catch(error => {
                    console.error('Error updating slider:', error);
                });
        }
    };

    const handleViewClick = (slider) => {
        setModalData(slider);
        setMode('view');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateResult(modalData);
    };

    const handleEditClick = (slider) => {
        setModalData(slider);
        setMode('edit');
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "result_file" && files?.length > 0) {
            // Set the file in modalData to be uploaded later
            setModalData(prevData => ({
                ...prevData,
                result_file: files[0] // Store the file for upload
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
                        <h3 className='text-center text-dark pb-3'>View Board Result</h3>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th>S. NO.</th>
                                    <th>Board Result File</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((slider, index) => (
                                    <tr key={slider._id}>
                                        <td className='text-center'>{index + 1}.</td>
                                        <td className='text-center'>{slider.result_file}</td>
                                        <td>
                                            <button
                                                className='bi bi-eye-fill btn btn-primary my-1'
                                                style={{ width: '30%', marginRight: '5px' }}
                                                onClick={() => handleViewClick(slider)}
                                            ></button>
                                            <button
                                                className='bi bi-pencil-square btn btn-warning my-1'
                                                style={{ width: '33%', marginRight: '5px' }}
                                                onClick={() => handleEditClick(slider)}
                                            ></button>
                                            <button className='bi bi-trash3 btn btn-danger' style={{ width: '30%' }} onClick={() => deleteResult(slider._id)}></button>
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
                                <h5 className="modal-title">{mode === 'view' ? 'View Result Details' : 'Edit Result Details'}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                            </div>
                            <form onSubmit={handleFormSubmit}>
                                <div className="modal-body">
                                    <div className="form-group mb-3">
                                        <label htmlFor="result_file" className="form-label">Board Result File Uplaod</label>
                                        {mode === 'view' ? (
                                            <img src={`${API_BASE_URL}/uploads/${modalData.result_file}`} alt="Result" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
                                        ) : (
                                            <input type="file" className="form-control" id="result_file" name="result_file" onChange={handleInputChange} />
                                        )}
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

export default ViewResult
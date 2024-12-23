import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config'

function ViewImage() {
    const [data, setData] = useState([]);
    const [modalData, setModalData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [mode, setMode] = useState('view');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`${API_BASE_URL}/api/site-image/view`)
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
            axios.delete(`${API_BASE_URL}/api/site-image/delete/${id}`)
                .then(response => {
                    setData(data.filter(doc => doc._id !== id));
                    console.log(response);
                }).catch(error => console.log(error));
        }
    };

    const updateDocument = (updatedData) => {
        const { _id, site_image_file_file, ...rest } = updatedData;

        if (site_image_file_file) {
            const formData = new FormData();
            formData.append("site_image_file", site_image_file_file);

            Object.entries(rest).forEach(([key, value]) => {
                formData.append(key, value);
            });

            axios.put(`${API_BASE_URL}/api/site-image/update/${_id}`, formData, {
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
            axios.put(`${API_BASE_URL}/api/site-image/update/${_id}`, rest)
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

        if (name === "site_image_file" && files?.length > 0) {
            setModalData(prevData => ({
                ...prevData,
                site_image_file_file: files[0]
            }));
        } else {
            setModalData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const copyToClipboard = () => {
        if (modalData?.site_image_file) {
            navigator.clipboard.writeText(modalData.site_image_file);
            alert('Image URL copied to clipboard!');
        }
    };

    return (
        <>
            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-12'>
                        <h3 className='text-center text-dark pb-3'>View News Data</h3>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th style={{ width: '80px' }}>S. NO.</th>
                                    <th>Site Image File</th>
                                    <th style={{ width: '200px' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item._id}>
                                        <td className='text-center'>{index + 1}.</td>
                                        <td>{item.site_image_file}</td>
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
                                <h5 className="modal-title">{mode === 'view' ? 'View Site Images Details' : 'Edit News Details'}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                            </div>
                            <form onSubmit={handleFormSubmit}>
                                <div className="modal-body">
                                    <div className="form-group mb-3">
                                        <label htmlFor="site_image_file" className="form-label">News Link Path</label>
                                        {mode === 'view' && (
                                            <div>
                                                {modalData?.site_image_file ? (
                                                    <div className="text-center">
                                                        <a href={`${modalData.site_image_file}`} data-fancybox="gallery" data-caption="Thumbnail Image">
                                                            <img src={`${modalData.site_image_file}`} alt="siteImage" className="img-fluid" style={{ maxWidth: '30%', height: 'auto' }} />
                                                        </a>
                                                        <button type="button" className="btn btn-secondary mt-2" onClick={copyToClipboard}>
                                                            <i className='bi bi-copy'></i>
                                                        </button>

                                                    </div>
                                                ) : (
                                                    <p>No Images available</p>
                                                )}
                                            </div>
                                        )}
                                        {mode === 'edit' && (
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="site_image_file"
                                                name="site_image_file"
                                                onChange={handleInputChange}
                                            />
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

export default ViewImage
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import API_BASE_URL from '../../config'

function ViewFaculty() {
    const [data, setData] = useState([]);
    const [modalData, setModalData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [mode, setMode] = useState('view');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`${API_BASE_URL}/api/faculty/view`)
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
            axios.delete(`${API_BASE_URL}/api/faculty/delete/${id}`)
                .then(response => {
                    setData(data.filter(doc => doc._id !== id));
                    console.log(response);
                }).catch(error => console.log(error));
        }
    };

    const updateDocument = (updatedData) => {
        const { _id, teacher_image_file, ...rest } = updatedData;

        if (teacher_image_file) {
            const formData = new FormData();
            formData.append("teacher_image", teacher_image_file);

            Object.entries(rest).forEach(([key, value]) => {
                formData.append(key, value);
            });

            axios.put(`${API_BASE_URL}/api/faculty/update/${_id}`, formData, {
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
            axios.put(`${API_BASE_URL}/api/faculty/update/${_id}`, rest)
                .then(response => {
                    setData(data.map(doc => (doc._id === _id ? response.data.result : doc)));
                    handleCloseModal();
                })
                .catch(error => {
                    console.error('Error updating document:', error);
                });
        }
    };

    useEffect(() => {
        // Bind Fancybox with desired settings and event listeners
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
            protect: true,
            on: {
                ready: () => setShowModal(false)  // Close modal when Fancybox opens
            }
        });

        // Clean up Fancybox bindings when the component unmounts
        return () => {
            Fancybox.destroy();
        };
    }, []);

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

        if (name === "teacher_image" && files?.length > 0) {
            setModalData(prevData => ({
                ...prevData,
                teacher_image_file: files[0]
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
                        <h3 className='text-center text-dark pb-3'>View Teachers Faculty Data</h3>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th>S. NO.</th>
                                    <th style={{ width: '200px' }}>Teacher Name</th>
                                    <th>Teacher Email</th>
                                    <th style={{ width: '160px' }}>teacher Subject</th>
                                    <th>Teacher Wing</th>
                                    <th style={{ width: '300px' }}>Teacher Image Path</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item._id}>
                                        <td className='text-center'>{index + 1}.</td>
                                        <td className='text-center'>{item.teacher_name}</td>
                                        <td className='text-center'>{item.teacher_email}</td>
                                        <td className='text-center'>{item.teacher_subject}</td>
                                        <td className='text-center'>{item.teacher_wing}</td>
                                        <td>{item.teacher_image}</td>
                                        <td>
                                            <button
                                                className='bi bi-eye-fill btn btn-primary my-1'
                                                style={{ width: '30%', marginRight: '5px' }}
                                                onClick={() => handleViewClick(item)}
                                            ></button>
                                            <button
                                                className='bi bi-pencil-square btn btn-warning my-1'
                                                style={{ width: '30%', marginRight: '5px' }}
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
                                <h5 className="modal-title">{mode === 'view' ? 'Faculty News Details' : 'Edit Faculty Details'}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                            </div>
                            <form onSubmit={handleFormSubmit}>
                                <div className="modal-body">
                                    <div className="form-group mb-3">
                                        <label htmlFor="teacher_name" className="form-label">Teacher Name</label>
                                        <input type="text" className="form-control" id="teacher_name" name="teacher_name" value={modalData?.teacher_name || ''} onChange={handleInputChange} readOnly={mode === 'view'} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="teacher_email" className="form-label">Teacher Email</label>
                                        <input type="text" className="form-control" id="teacher_email" name="teacher_email" value={modalData?.teacher_email || ''} onChange={handleInputChange} readOnly={mode === 'view'} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="teacher_email" className="form-label">Teacher Subject</label>
                                        <input type="text" className="form-control" id="teacher_subject" name="teacher_subject" value={modalData?.teacher_subject || ''} onChange={handleInputChange} readOnly={mode === 'view'} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="teacher_wing" className="form-label">Teacher Wing</label>
                                        {mode === 'view' ? (
                                            <input type="text" className="form-control" id="teacher_wing" name="teacher_wing" value={modalData?.teacher_wing || ''} readOnly />
                                        ) : (
                                            <select className="form-select" name="teacher_wing" value={modalData?.teacher_wing || ''} onChange={handleInputChange}>
                                                <option value="">Select Wing</option>
                                                <option value="primary wing">Primary Wing</option>
                                                <option value="middle wing">Middle Wing</option>
                                                <option value="senior wing">Senior Wing</option>
                                            </select>
                                        )}
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="teacher_image" className="form-label">Thumbnail Image</label>
                                        {mode === 'view' ? (
                                            modalData?.teacher_image ? (
                                                <a href={`${API_BASE_URL}/uploads/${modalData.teacher_image}`} data-fancybox="gallery" data-caption="Thumbnail Image">
                                                    <img src={`${modalData.teacher_image}`} alt="Thumbnail" className="img-fluid" style={{ maxWidth: '30%', height: 'auto' }} />
                                                </a>
                                            ) : (
                                                <p>No Teacher's Image available</p>
                                            )
                                        ) : (
                                            <input type="file" className="form-control" id="teacher_image" name="teacher_image" onChange={handleInputChange} />
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

export default ViewFaculty

{/* <div className="form-group mb-3">
                                        <label htmlFor="teacher_image" className="form-label">Teacher Image Path</label><br />
                                        {mode === 'view' ? (
                                            modalData?.teacher_image ? (
                                                <a href={`${API_BASE_URL}/uploads/${modalData.teacher_image}`} data-fancybox="gallery" data-caption="Site Image">
                                                    <img src={`${API_BASE_URL}/uploads/${modalData.teacher_image}`} alt="siteImage" className="img-fluid" style={{ maxWidth: '30%', height: 'auto' }} />
                                                </a>
                                            ) : (
                                                <p>No Teachers Images available</p>
                                            )
                                        ) : (
                                            <input type="file" className="form-control" id="teacher_image" name="teacher_image" onChange={handleInputChange} />
                                        )}
                                    </div> */}
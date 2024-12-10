import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewTC() {
    const [data, setData] = useState([]);
    const [modalData, setModalData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false); // Track if in edit mode

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:5000/api/transfercertificate/view")
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
            axios.delete(`http://localhost:5000/api/transfercertificate/delete/${id}`)
                .then(response => {
                    setData(data.filter(doc => doc._id !== id));
                }).catch(error => console.log(error));
        }
    };

    const updateDocument = (updatedData) => {
        const { _id, tc_image_file, ...rest } = updatedData;

        if (tc_image_file) {
            const formData = new FormData();
            formData.append("tc_image", tc_image_file);

            Object.entries(rest).forEach(([key, value]) => {
                formData.append(key, value);
            });

            axios.put(`http://localhost:5000/api/transfercertificate/update/${_id}`, formData, {
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
            axios.put(`http://localhost:5000/api/transfercertificate/update/${_id}`, rest)
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
        setIsEditMode(false); // Set view mode
        setShowModal(true);
    };

    const handleEditClick = (item) => {
        setModalData(item);
        setIsEditMode(true); // Set edit mode
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsEditMode(false); // Reset mode on close
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateDocument(modalData);
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "tc_image" && files?.length > 0) {
            setModalData(prevData => ({
                ...prevData,
                tc_image_file: files[0]
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
                        <h3 className='text-center text-dark pb-3'>View TC Data</h3>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th>S. NO.</th>
                                    <th>TC SName</th>
                                    <th>Tc Number</th>
                                    <th style={{ width: '450px' }}>TC Path</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item._id}>
                                        <td className='text-center'>{index + 1}.</td>
                                        <td className='text-center'>{item.tc_sname}</td>
                                        <td className='text-center'>{item.tc_number}</td>
                                        <td>{item.tc_image}</td>
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
                                <h5 className="modal-title">{isEditMode ? 'Edit Document Details' : 'View Document'}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                            </div>
                            <form onSubmit={handleFormSubmit}>
                                <div className="modal-body">
                                    <div className="form-group mb-3">
                                        <label htmlFor="tc_image" className="form-label">TC Student Name</label>
                                        <input type="text" className="form-control" id="tc_sname" name="tc_sname" value={modalData?.tc_sname || ''} onChange={handleInputChange} readOnly={!isEditMode} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="tc_number" className="form-label">TC Number</label>
                                        <input type="number" className="form-control" id="tc_number" name="tc_number" value={modalData?.tc_number || ''} onChange={handleInputChange} readOnly={!isEditMode} />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="tc_image" className="form-label">TC Image</label>
                                        {isEditMode ? (
                                            <input type="file" className="form-control" id="tc_image" name="tc_image" onChange={handleInputChange} />
                                        ) : (
                                            modalData?.tc_image && <img src={`http://localhost:5000/uploads/${modalData.tc_image}`} alt="TC Document" style={{ width: '100%' }} />
                                        )}
                                    </div>
                                </div>

                                {isEditMode && (
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                            Close
                                        </button>
                                        <button type="submit" className="btn btn-primary">
                                            Update
                                        </button>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ViewTC;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import API_BASE_URL from '../../config'

function ViewAssembly() {
    const [assembly, setAssembly] = useState([]);
    const [modalData, setModalData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [mode, setMode] = useState('view');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`${API_BASE_URL}/api/assembly/view`)
            .then(response => {
                console.log(response.data.data);
                setAssembly(response.data.data.reverse());
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const deleteDocument = (id) => {
        if (window.confirm("Would you like to delete?")) {
            axios.delete(`${API_BASE_URL}/api/assembly/delete/${id}`)
                .then(response => {
                    console.log(response.data);
                    setAssembly(assembly.filter(doc => doc._id !== id));
                }).catch(error => console.log(error));
        }
    };

    const handleDeleteFile = async (fileName) => {
        try {
            // Make DELETE request to delete the assembly file by name
            const response = await axios.delete(`${API_BASE_URL}/api/assembly/deleteImage/${fileName}`);

            if (response.status === 200) {
                // On success, notify user and remove the deleted file from the UI
                alert("File deleted successfully");

                // Update the state to remove the deleted file (adjust state as per your code)
                // For example:
                setModalData(prevState => ({
                    ...prevState,
                    assembly_files: prevState.assembly_files.filter(file => file !== fileName) // Remove the deleted file
                }));
            }
        } catch (error) {
            console.error("Error deleting file:", error);
            alert("An error occurred while deleting the file.");
        }
    };


    const updateDocument = (updatedData) => {
        const { _id, thumbnail_image, assembly_files, ...rest } = updatedData;

        // Check if there's any file to upload (either thumbnail_image or multiple assembly_files)
        if (thumbnail_image instanceof File || (Array.isArray(assembly_files) && assembly_files.length > 0)) {
            const formData = new FormData();

            // Append the thumbnail image if it exists
            if (thumbnail_image instanceof File) {
                formData.append("thumbnail_image", thumbnail_image);
            }

            // Append each file in the assembly_files array if it exists
            if (Array.isArray(assembly_files)) {
                assembly_files.forEach((file, index) => {
                    formData.append("assembly_files", file); // Append each file with the key "assembly_files"
                });
            }

            // Append other data fields
            Object.entries(rest).forEach(([key, value]) => {
                formData.append(key, value);
            });

            axios.put(`${API_BASE_URL}/api/assembly/update/${_id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            })
                .then(response => {
                    setAssembly(assembly.map(doc => (doc._id === _id ? response.data.result : doc)));
                    handleCloseModal(); // Close modal
                })
                .catch(error => {
                    console.error('Error updating document:', error.response || error.message);
                });
        } else {
            // If no file upload, just update the other fields
            axios.put(`${API_BASE_URL}/api/assembly/update/${_id}`, rest)
                .then(response => {
                    setAssembly(assembly.map(doc => (doc._id === _id ? response.data.result : doc)));
                    handleCloseModal(); // Close modal
                })
                .catch(error => {
                    console.error('Error updating document:', error.response || error.message);
                });
        }
    };

    useEffect(() => {
        // Bind Fancybox with desired settings and assembly listeners
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
        setMode('view');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
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

        if (files && files.length > 0) {
            setModalData(prevData => ({
                ...prevData,
                [name]: name === 'thumbnail_image' ? files[0] : Array.from(files)
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
    const currentItems = assembly.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(assembly.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
        <>
            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-12'>
                        <h3 className='text-center text-dark pb-3'>View Assembly Data</h3>

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
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Slug</th>
                                    <th>Thumbnail Image Path</th>
                                    <th>Assembly Date</th>
                                    <th>Assembly File Path</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item, index) => (
                                    <tr key={item._id}>
                                        <td className='text-center'>{indexOfFirstItem + index + 1}.</td>
                                        <td className='text-center'>{item.title}</td>
                                        <td>{item.description
                                            .split(' ')
                                            .slice(0, 10)
                                            .join(' ')}{item.description.split(' ').length > 10 && '...'}</td>
                                        <td className='text-center'>{item.slug}</td>
                                        <td>{item.thumbnail_image}</td>
                                        <td>{new Date(item.assembly_date).toLocaleDateString()}</td>
                                        <td>
                                            {item.assembly_files.slice(0, 5).join(' ')}
                                            {item.assembly_files.length > 5 && '...'}
                                        </td>
                                        <td>{new Date(item.start_date).toLocaleDateString()}</td>
                                        <td>{new Date(item.end_date).toLocaleDateString()}</td>
                                        <td className='text-center'>
                                            <button
                                                className='bi bi-eye-fill btn btn-primary my-1'
                                                style={{ width: '100%', marginRight: '5px' }}
                                                onClick={() => handleViewClick(item)}
                                            ></button>
                                            <button
                                                className='bi bi-pencil-square btn btn-warning my-1'
                                                style={{ width: '100%', marginRight: '5px' }}
                                                onClick={() => handleEditClick(item)}
                                            ></button>
                                            <button className='bi bi-trash3 btn btn-danger' style={{ width: '100%' }} onClick={() => deleteDocument(item._id)}></button>
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
                                <h5 className="modal-title">{mode === 'view' ? 'View Assembly Details' : 'Edit Assembly Details'}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                            </div>
                            <form onSubmit={handleFormSubmit}>
                                <div className="modal-body">
                                    <div className="form-group mb-3">
                                        <label htmlFor="nname" className="form-label">Assembly Title</label>
                                        <input type="text" className="form-control" id="title" name="title" value={modalData?.title || ''} onChange={handleInputChange} />
                                    </div>

                                    {/* Assembly Description */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="nname" className="form-label">Assembly Description</label>
                                        <input type="text" className="form-control" id="description" name="description" value={modalData?.description || ''} onChange={handleInputChange} />
                                    </div>

                                    {/* Assembly Slug Name */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="nname" className="form-label">Assembly Slug Name</label>
                                        <input type="text" className="form-control" id="slug" name="slug" value={modalData?.slug || ''} onChange={handleInputChange} />
                                    </div>

                                    {/* Assembly Thumbnail Image */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="thumbnail_image" className="form-label">Thumbnail Image</label>
                                        {mode === 'view' ? (
                                            modalData?.thumbnail_image ? (
                                                <a href={`${API_BASE_URL}/uploads/${modalData.thumbnail_image}`} data-fancybox="gallery" data-caption="Thumbnail Image">
                                                    <img src={`${API_BASE_URL}/uploads/${modalData.thumbnail_image}`} alt="Thumbnail" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
                                                </a>
                                            ) : (
                                                <p>No thumbnail available</p>
                                            )
                                        ) : (
                                            <input type="file" className="form-control" id="thumbnail_image" name="thumbnail_image" onChange={handleInputChange} />
                                        )}
                                    </div>


                                    {/* Assembly Date */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="nname" className="form-label">Assembly Date:</label>
                                        <input type="text" className="form-control" id="assembly_date" name="assembly_date" value={modalData?.assembly_date || ''} onChange={handleInputChange} />
                                    </div>

                                    {/* Assembly Files Array */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="assembly_files" className="form-label">Assembly Files</label>
                                        {mode === 'view' ? (
                                            modalData?.assembly_files && modalData.assembly_files.length > 0 ? (
                                                <div className="row">
                                                    {modalData.assembly_files.map((file, index) => (
                                                        <div key={index} className="col-3 mb-3">
                                                            <div className="file-container">
                                                                <a href={`${API_BASE_URL}/uploads/${file}`} data-fancybox="gallery" data-caption={`Assembly File ${index + 1}`}>
                                                                    <img
                                                                        src={`${API_BASE_URL}/uploads/${file}`}
                                                                        alt={`Assembly File ${index + 1}`}
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
                                                <p>No Assembly files available</p>
                                            )
                                        ) : (
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="assembly_files"
                                                name="assembly_files"
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

export default ViewAssembly
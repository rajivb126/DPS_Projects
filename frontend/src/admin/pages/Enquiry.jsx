import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_BASE_URL from '../../config'

function Enquiry() {
    const [data, setData] = useState([]); // State to hold the data fetched from the API
    const [modalData, setModalData] = useState(null); // Store data for modal
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    // Fetch data from API when the component is mounted
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`${API_BASE_URL}/api/enquiry/view`)
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
            axios.delete(`${API_BASE_URL}/api/enquiry/delete/${id}`)
                .then(response => {
                    console.log(response.data);
                    // Filter out the deleted document from the state
                    setData(data.filter(doc => doc._id !== id));
                }).catch(error => console.log(error));
        }
    };

    const handleViewClick = (item) => {
        setModalData(item); // Set the selected row data
        setShowModal(true);  // Show the modal
    };

    const handleCloseModal = () => {
        setShowModal(false);  // Hide the modal
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', modalData);
        handleCloseModal();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setModalData({
            ...modalData,
            [name]: value,
        });
    };

    console.log("Modal Data:", modalData); // Check modalData contents

    const downloadFile = (filename) => {
        const fileUrl = `${API_BASE_URL}/uploads/${filename}`;
        const link = document.createElement('a'); // Create an anchor element
        link.href = fileUrl; // Set the file URL as the href
        link.download = filename; // Specify the filename to download
        link.click(); // Trigger the download
    };

    const handlePrint = () => {
        // Use window.print() to print the current page
        window.print();
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
                        <h3 className='text-center pb-3 text-dark'>Enquiry Data</h3>

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
                                    <th>EName</th>
                                    <th>Email</th>
                                    <th>EMobile</th>
                                    <th style={{ width: '300px' }}>EComment</th>
                                    <th style={{ width: '300px' }}>EFile</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className='text-center'>{indexOfFirstItem + index + 1}.</td>
                                        <td className='text-center'>{item.ename}</td>
                                        <td className='text-center'>{item.email}</td>
                                        <td className='text-center'>{item.emobile}</td>
                                        <td>{item.ecomment
                                            .split(' ')
                                            .slice(0, 15)
                                            .join(' ')}
                                            {item.ecomment.split(' ').length > 15 && '...'}</td>
                                        <td>{item.efile}</td>
                                        <td>
                                            <button className='bi bi-eye-fill btn btn-primary my-1' style={{ width: '30%', marginRight: '5px' }} onClick={() => handleViewClick(item)}
                                            ></button>
                                            <button className='bi bi-download btn btn-secondary' style={{ width: '40px', marginRight: '5px' }} onClick={() => downloadFile(item.efile)}></button>
                                            <button className='bi bi-trash3 btn btn-danger' style={{ width: '30%' }} onClick={() => deleteDocument(item._id)}></button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal for viewing data */}
            {showModal && modalData && (
                <div className='modal show d-block' tabIndex="-1" role="dialog">
                    <div className='modal-dialog' role="document">
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title'>Edit Document Details</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                            </div>
                            <form onSubmit={handleFormSubmit}>
                                <div className='modal-body'>
                                    <div className='form-group'>
                                        <label htmlFor='category'>Ename</label>
                                        <input type='text' className='form-control' id='category' name='category' value={modalData?.ename || ''} onChange={handleInputChange} />
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='classes'>Email</label>
                                        <input type='text' className='form-control' id='classes' name='classes' value={modalData?.email || ''} onChange={handleInputChange} />
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='subject'>Emobile</label>
                                        <input type='text' className='form-control' id='subject' name='subject' value={modalData?.emobile || ''} onChange={handleInputChange} />
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='subject'>Ecomment</label>
                                        <textarea className='form-control' id='subject' name='subject' value={modalData?.ecomment || ''} onChange={handleInputChange} style={{ height: '200px' }} />
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='efile'>Document File</label>
                                        <input type="text" className="form-control" id="efile" value={modalData?.efile || ''} name="efile" onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className='modal-footer'>
                                    <button className="btn btn-primary" onClick={handlePrint}>
                                        Print
                                    </button>
                                    <button type='button' className='btn btn-secondary' onClick={handleCloseModal}>
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Enquiry
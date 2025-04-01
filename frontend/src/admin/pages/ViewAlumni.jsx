import React, { useEffect, useState } from 'react';
import axios from 'axios'
import API_BASE_URL from '../../config'

function ViewAlumni() {
  const [data, setData] = useState([]); // State to hold the data fetched from the API
    const [modalData, setModalData] = useState(null); // Store data for modal
    const [showModal, setShowModal] = useState(false); // Modal visibility state

    // Fetch data from API when the component is mounted
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`${API_BASE_URL}/api/alumniform/view`)
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
            axios.delete(`${API_BASE_URL}/api/alumniform/delete/${id}`)
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

    const handleUpdateClick = (item) => {
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

  return (
    <>
      <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-12'>
                        <h3 className='text-center pb-3'>View Alumni Data</h3>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th>S. NO.</th>
                                    <th>SName</th>
                                    <th>FName</th>
                                    <th>Year of Passout</th>
                                    <th>No. of Year School</th>
                                    <th>Address</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Present Position</th>
                                    <th>Ref. Teacher</th>
                                    <th>Ref. Principal</th>
                                    <th>Photo Path</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {data.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className='text-center'>{index + 1}.</td>
                                        <td className='text-center'>{item.sname}</td>
                                        <td className='text-center'>{item.fname}</td>
                                        <td className='text-center'>{item.yearofpassout}</td>
                                        <td className='text-center'>{item.nyearschool}</td>
                                        <td className='text-center'>{item.address}</td>
                                        <td className='text-center'>{item.contact}</td>
                                        <td className='text-center'>{item.aemail}</td>
                                        <td className='text-center'>{item.presentpos}</td>
                                        <td className='text-center'>{item.refteachers}</td>
                                        <td className='text-center'>{item.refprincipal}</td>
                                        <td>{item.photo}</td>
                                        <td>
                                            <button
                                                className='bi bi-eye-fill btn btn-primary my-1'
                                                style={{ width: '50%' }}
                                                onClick={() => handleViewClick(item)}
                                            ></button>
                                            <button className='bi bi-trash3 btn btn-danger' style={{ width: '50%' }} onClick={() => deleteDocument(item._id)}></button>
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
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Document Details</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                            </div>
                            <form onSubmit={handleFormSubmit}>
                                <div className="modal-body">
                                    {/* Student Name */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="tc_sname" className="form-label">Student Name</label>
                                        <input type="text" className="form-control" id="tc_sname" name="tc_sname" value={modalData?.tc_sname || ''} onChange={handleInputChange}/>
                                    </div>

                                    {/* Father's Name */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="tc_number" className="form-label">Father's Name</label>
                                        <input type="text" className="form-control" id="tc_number" name="tc_number" value={modalData?.tc_number || ''} onChange={handleInputChange}/>
                                    </div>

                                    {/* Year of Passout */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="tc_number" className="form-label">Year of Passout</label>
                                        <input type="number" className="form-control" id="tc_number" name="tc_number" value={modalData?.tc_number || ''} onChange={handleInputChange}/>
                                    </div>

                                    {/* No. of Years of Our School */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="tc_number" className="form-label">No. of Years in Our School</label>
                                        <input type="number" className="form-control" id="tc_number" name="tc_number" value={modalData?.tc_number || ''} onChange={handleInputChange}/>
                                    </div>
                                    
                                    {/* Present Address */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="tc_sname" className="form-label">Present Address</label>
                                        <input type="text" className="form-control" id="tc_sname" name="tc_sname" value={modalData?.tc_sname || ''} onChange={handleInputChange}/>
                                    </div>

                                    {/* Contact Number */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="tc_sname" className="form-label">Contact Number</label>
                                        <input type="number" className="form-control" id="tc_sname" name="tc_sname" value={modalData?.tc_sname || ''} onChange={handleInputChange}/>
                                    </div>

                                    {/* Email Address */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="tc_sname" className="form-label">Email Address</label>
                                        <input type="email" className="form-control" id="tc_sname" name="tc_sname" value={modalData?.tc_sname || ''} onChange={handleInputChange}/>
                                    </div>

                                    {/* Present Position */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="tc_sname" className="form-label">Present Position</label>
                                        <input type="text" className="form-control" id="tc_sname" name="tc_sname" value={modalData?.tc_sname || ''} onChange={handleInputChange}/>
                                    </div>

                                    {/* Reference of Teacher's */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="tc_sname" className="form-label">Reference of Teacher's</label>
                                        <input type="text" className="form-control" id="tc_sname" name="tc_sname" value={modalData?.tc_sname || ''} onChange={handleInputChange}/>
                                    </div>
                                    
                                    {/* Reference of Principals */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="tc_sname" className="form-label">Reference of Principa;</label>
                                        <input type="text" className="form-control" id="tc_sname" name="tc_sname" value={modalData?.tc_sname || ''} onChange={handleInputChange}/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="tc_image" className="form-label">Photo Uplaod Path</label>
                                        <input type="text" className="form-control" id="tc_image" name="tc_image" value={modalData?.tc_image || ''} onChange={handleInputChange}/>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
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

export default ViewAlumni
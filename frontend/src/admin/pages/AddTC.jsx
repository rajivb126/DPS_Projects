import React, { useState } from 'react';
import axios from 'axios'

function AddTC() {
    const [tcSname, setTcSname] = useState('')
    const [tcNumber, setTcNumber] = useState('');
    const [tcImage, setTcImage] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    // Function to handle form submission for creating a new transfer certificate
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('tc_sname', tcSname)
        formData.append('tc_number', tcNumber);
        formData.append('tc_image', tcImage);

        try {
            const response = await axios.post('http://localhost:5000/api/transfercertificate/add', formData);
            const newTC = response.data;
            console.log('New transfer certificate:', newTC);
            setTcSname('');
            setTcNumber('');
            setTcImage('');
            document.getElementById("fileInput").value = "";


            setSuccessMessage('Transfer Certificate added successfully!');

            // Clear the success message after 3 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
            // Optionally, update state or perform other actions after successful creation
        } catch (error) {
            console.error('Error creating transfer certificate:', error);
            setError('Failed to add transfer certificate.');
        }
    };

    return (
        <>
            <div className='conatiner'>
                <div className='row mx-auto'>
                    <div className='col-12'>
                        <h3 className='text-center'>Add Transfer Certificate</h3>
                        <div className='document-form-1'>
                            <form onSubmit={handleSubmit}>
                                <div className="row align-items-center">
                                    <div className="col-4 mb-4">
                                        <label>TC Student Name:</label>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input type="text" value={tcSname} className='form-control' onChange={(e) => setTcSname(e.target.value)} placeholder='Enter TC Student Name' />
                                    </div>

                                    <div className="col-4 mb-4">
                                        <label>TC Number:</label>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input type="number" value={tcNumber} className='form-control' onChange={(e) => setTcNumber(e.target.value)} placeholder='Enter TC Number' />
                                    </div>

                                    <div className='col-4 mb-4'>
                                        <label htmlFor="fileInput">TC Upload</label>
                                    </div>
                                    <div className='col-8 mb-4'>
                                        <input type="file" id="fileInput" onChange={(e) => setTcImage(e.target.files[0])} />
                                    </div>

                                    <div className="col-12 text-center mt-5">
                                        <button type="submit" className="btn btn-primary w-50">Add TC File</button>
                                    </div>
                                </div>
                            </form>

                            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                            {error && <div className="alert alert-danger mt-3">{error}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTC
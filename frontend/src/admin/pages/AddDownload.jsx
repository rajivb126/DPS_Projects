import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config'

function AddDownload() {
    const [download, setDownload] = useState('');
    const [downloadLink, setDownloadLink] = useState('');
    const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10)); // Current date as default
    const [endDate, setEndDate] = useState(new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().substring(0, 10)); // Next month's same date
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('download_heading', download);
        formData.append('download_link', downloadLink);
        formData.append('start_date', startDate); // Add start date
        formData.append('end_date', endDate); // Add end date

        try {
            const response = await axios.post(`${API_BASE_URL}/api/download/add`, formData);
            const newNews = response.data;
            console.log('New news:', newNews);
            setDownload('');
            setDownloadLink('');
            setStartDate(new Date().toISOString().substring(0, 10)); // Reset start date
            setEndDate(new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().substring(0, 10)); // Reset end date
            document.getElementById("fileInput").value = "";

            setSuccessMessage('News added successfully!');

            // Clear the success message after 3 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error('Error adding news:', error);
            setError(error.response?.data || 'Failed to add news.');

            // Clear error message after 3 seconds
            setTimeout(() => {
                setError('');
            }, 3000);
        }
    };
    return (
        <>
            <div className='container'>
                <div className='row mx-auto'>
                    <div className='col-12'>
                        <h3 className='text-center text-dark pt-3'>Add Download Details</h3>
                        <div className='document-form-1'>
                            <form onSubmit={handleSubmit}>
                                <div className="row align-items-center">
                                    <div className="col-4 mb-4">
                                        <label>Download Heading Name:</label>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input type="text" value={download} className='form-control' onChange={(e) => setDownload(e.target.value)} placeholder='Enter Download Name' />
                                    </div>

                                    {/*  */}
                                    <div className='col-4 mb-4'>
                                        <label htmlFor="fileInput">Download File Upload</label>
                                    </div>
                                    <div className='col-8 mb-4'>
                                        <input type="file" id="fileInput" onChange={(e) => setDownloadLink(e.target.files[0])} />
                                    </div>

                                    <div className="col-4 mb-4">
                                        <label>Start Date:</label>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input type="date" value={startDate} className='form-control' onChange={(e) => setStartDate(e.target.value)} />
                                    </div>

                                    <div className="col-4 mb-4">
                                        <label>End Date:</label>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input type="date" value={endDate} className='form-control' onChange={(e) => setEndDate(e.target.value)} />
                                    </div>

                                    <div className="col-12 text-center mt-5">
                                        <button type="submit" className="btn btn-primary w-50">Upload File</button>
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

export default AddDownload
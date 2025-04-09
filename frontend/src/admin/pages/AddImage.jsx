import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config'

function AddImage() {
    const [siteImageLink, setSiteImageLink] = useState('');
    const [uploadDate, setUploadDate] = useState(new Date().toISOString().substring(0, 10));
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('site_image_file', siteImageLink);
        formData.append('upload_date', uploadDate); // Add start date

        try {
            const response = await axios.post(`${API_BASE_URL}/api/site-image/add`, formData);
            const newSiteImage = response.data;
            console.log('New site image:', newSiteImage);
            setSiteImageLink('');
            setUploadDate(new Date().toISOString().substring(0, 10));
            document.getElementById("fileInput").value = "";

            setSuccessMessage('Site Image added successfully!');

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
                        <h3 className='text-center text-dark pt-3'>Add Site Image Details</h3>
                        <div className='document-form-1'>
                            <form onSubmit={handleSubmit}>
                                <div className="row align-items-center">
                                    <div className='col-4 mb-4'>
                                        <label htmlFor="fileInput">Site Image File Upload</label>
                                    </div>
                                    <div className='col-8 mb-4'>
                                        <input type="file" id="fileInput" onChange={(e) => setSiteImageLink(e.target.files[0])} />
                                    </div>

                                    <div className="col-4 mb-4">
                                        <label>Upload Date:</label>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input type="date" value={uploadDate} className='form-control' onChange={(e) => setUploadDate(e.target.value)} />
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

export default AddImage
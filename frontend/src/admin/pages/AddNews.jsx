import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config'

function AddNews() {
    const [Name, setName] = useState('');
    const [newsCategory, setNewsCategory] = useState('');
    const [newsLink, setNewsLink] = useState('');
    const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10)); // Current date as default
    const [endDate, setEndDate] = useState(new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().substring(0, 10)); // Next month's same date
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nname', Name);
        formData.append('news_category', newsCategory);
        formData.append('nlink', newsLink);
        formData.append('start_date', startDate); // Add start date
        formData.append('end_date', endDate); // Add end date

        try {
            const response = await axios.post(`${API_BASE_URL}/api/news/add`, formData);
            const newNews = response.data;
            console.log('New news:', newNews);
            setName('');
            setNewsCategory('');
            setNewsLink('');
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
                        <h3 className='text-center'>Add News</h3>
                        <div className='document-form-1'>
                            <form onSubmit={handleSubmit}>
                                <div className="row align-items-center">
                                    <div className="col-4 mb-4">
                                        <label>News Title Name:</label>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input type="text" value={Name} className='form-control' onChange={(e) => setName(e.target.value)} placeholder='Enter News Title' />
                                    </div>

                                    <div className="col-4 mb-4">
                                        <label>News Category:</label>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <select name="category" className="form-select" value={newsCategory} onChange={(e) => setNewsCategory(e.target.value)}>
                                            <option value="">Select Category</option>
                                            <option value="marquee news">Marquee News</option>
                                            <option value="news update">News Update</option>
                                            <option value="notice circular">Notice & Circular</option>
                                        </select>
                                    </div>

                                    <div className='col-4 mb-4'>
                                        <label htmlFor="fileInput">News File Link Upload</label>
                                    </div>
                                    <div className='col-8 mb-4'>
                                        <input type="file" id="fileInput" onChange={(e) => setNewsLink(e.target.files[0])} />
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
    );
}

export default AddNews;
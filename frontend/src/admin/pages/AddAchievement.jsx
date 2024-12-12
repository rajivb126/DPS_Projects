import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config'

function AddAchievement() {
    const [achievementCategory, setAchievementCategory] = useState('')
    const [achievementLink, setAchievementLink] = useState('');
    const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10)); // Current date as default
    const [endDate, setEndDate] = useState(new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().substring(0, 10)); // Next month's same date
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('achievement_category', achievementCategory);
        formData.append('achievement_file', achievementLink);
        formData.append('start_date', startDate); // Add start date
        formData.append('end_date', endDate); // Add end date

        try {
            const response = await axios.post(`${API_BASE_URL}/api/achievement/add`, formData);
            const newAchievement = response.data;
            console.log('New Achievement:', newAchievement);
            setAchievementCategory('')
            setAchievementLink('');
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
                        <h3 className='text-center'>Add Achievement</h3>
                        <div className='document-form-1'>
                            <form onSubmit={handleSubmit}>
                                <div className="row align-items-center">
                                    <div className="col-4 mb-4">
                                        <label>Achievement Category:</label>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <select name="category" className="form-select" value={achievementCategory} onChange={(e) => setAchievementCategory(e.target.value)}>
                                            <option value="">Select Achievement Category</option>
                                            <option value="academic achievement">Academic Achievement</option>
                                            <option value="co-curricular achievement">Co-Curricular Achievement</option>
                                            <option value="sports achievement">Sports Achievement</option>
                                        </select>
                                    </div>

                                    <div className='col-4 mb-4'>
                                        <label htmlFor="fileInput">Achievement File Link Upload</label>
                                    </div>
                                    <div className='col-8 mb-4'>
                                        <input type="file" id="fileInput" onChange={(e) => setAchievementLink(e.target.files[0])} />
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

export default AddAchievement
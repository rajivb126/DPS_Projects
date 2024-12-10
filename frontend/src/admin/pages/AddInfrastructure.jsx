import axios from 'axios';
import React, { useState } from 'react';

function AddInfrastructure() {
    const [infrastructureCategory, setInfrastructureCategory] = useState('');
    const [infrastructureImage, setInfrastructureImage] = useState([]);
    const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10));
    const [endDate, setEndDate] = useState(new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().substring(0, 10));
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('infrastructure_category', infrastructureCategory);
        formData.append('start_date', startDate);
        formData.append('end_date', endDate);

        // Append uploaded files
        for (let i = 0; i < infrastructureImage.length; i++) {
            formData.append('infrastructure_image', infrastructureImage[i]);
        }

        try {
            const response = await axios.post('http://localhost:5000/api/infrastructure/add', formData);
            console.log('New Infrastructure:', response.data);

            // Reset form
            setInfrastructureCategory('');
            setInfrastructureImage([]);
            setStartDate(new Date().toISOString().substring(0, 10));
            setEndDate(new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().substring(0, 10));
            document.getElementById('infrastructureImg').value = '';

            setSuccessMessage('Infrastructure added successfully!');

            // Clear the success message after 3 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error('Error adding Infrastructure:', error);
            setError(error.response?.data || 'Failed to add Infrastructure.');

            // Clear error message after 3 seconds
            setTimeout(() => {
                setError('');
            }, 3000);
        }
    };

    

    return (
        <>
            <div className="container">
                <div className="row mx-auto">
                    <div className="col-12">
                        <h3 className="text-center">Add Infrastructure</h3>
                        <div className="document-form-1">
                            <form onSubmit={handleSubmit}>
                                <div className="row align-items-center">
                                    <div className="col-4 mb-4">
                                        <label>Infrastructure Category:</label>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <select name="category" className="form-select" value={infrastructureCategory} onChange={(e) => setInfrastructureCategory(e.target.value)} >
                                            <option value="">Select Infrastructure Category</option>
                                            <option value="general">General</option>
                                            <option value="primary">Primary</option>
                                            <option value="middle">Middle</option>
                                            <option value="senior">Senior</option>
                                            <option value="hostel">Hostel</option>
                                        </select>
                                    </div>

                                    <div className="col-4 mb-4">
                                        <label htmlFor="fileInput">Infrastructure Image Upload</label>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input type="file" id="infrastructureImg" multiple onChange={(e) => setInfrastructureImage(e.target.files)} className="form-control" />
                                    </div>

                                    <div className="col-4 mb-4">
                                        <label>Start Date:</label>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input
                                            type="date"
                                            value={startDate}
                                            className="form-control"
                                            onChange={(e) => setStartDate(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-4 mb-4">
                                        <label>End Date:</label>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input
                                            type="date"
                                            value={endDate}
                                            className="form-control"
                                            onChange={(e) => setEndDate(e.target.value)}
                                        />
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

export default AddInfrastructure;
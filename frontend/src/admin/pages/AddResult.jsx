import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config'

function AddResult() {
    const [resultCategory, setResultCategory] = useState('');
    const [resultFile, setResultFile] = useState("");
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (e) => {
        setResultFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('result_category', resultCategory);
        formData.append("result_file", resultFile);
        try {
            const response = await axios.post(`${API_BASE_URL}/api/result/add`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setSuccessMessage(response.data.message);
            setResultCategory('');
            setResultFile('');
        } catch (error) {
            setErrorMessage("Error adding result");
        }
    };
    return (
        <>
            <div className='container'>
                <div className='row mx-auto'>
                    <div className='col-12'>
                        <h3 className='text-dark text-center pt-3'>Add Board Result</h3>
                        <div className='document-form-1'>
                            <form onSubmit={handleSubmit}>
                                <div className="row align-items-center">
                                    {/* Result Category */}
                                    <div className="col-4 mb-4">
                                        <label>Result Category:</label>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <select name="category" className="form-select" value={resultCategory} onChange={(e) => setResultCategory(e.target.value)}>
                                            <option value="">Select Category</option>
                                            <option value="Xth Result">Xth Result</option>
                                            <option value="XIIth Result">XIIth Result</option>
                                        </select>
                                    </div>

                                    {/* Upload Image */}
                                    <div className="col-4 mb-4">
                                        <label>Result File Upload:</label>
                                    </div>
                                    <div className="col-8 mb-4">
                                        <input type="file" className="form-control" onChange={handleFileChange} required />
                                    </div>

                                    <div className="col-12 text-center mt-5">
                                        <button type="submit" className="btn btn-primary">Add Board Result</button>
                                    </div>
                                </div>
                            </form>
                            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddResult
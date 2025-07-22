import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config'

function AddSlider() {
    const [sliderUrl, setSliderUrl] = useState("");
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (e) => {
        setSliderUrl(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("video_url", sliderUrl);
        try {
            const response = await axios.post(`${API_BASE_URL}/api/slider/add`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setSuccessMessage(response.data.message);
            setSliderUrl(null);
        } catch (error) {
            setErrorMessage("Error adding popup");
        }
    };

    return (
        <>
            <div className='container'>
                <div className='row mx-auto'>
                    <div className='col-12'>
                        <h3 className='text-dark text-center pt-3'>Add Slider</h3>
                        <div className='document-form-1'>
                            <form onSubmit={handleSubmit}>
                                <div className="row align-items-center">
                                    {/* Upload Image */}
                                    <div className="col-5 mb-4">
                                        <label>Slider Video URL:</label>
                                    </div>
                                    <div className="col-7 mb-4">
                                        <input type="file" className="form-control" onChange={handleFileChange} required />
                                    </div>

                                    <div className="col-12 text-center mt-5">
                                        <button type="submit" className="btn btn-primary">Add Slider</button>
                                    </div>
                                </div>
                            </form>
                            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container mt-4">
                <h2>Add New Popup</h2>
                {message && <div className="alert alert-info">{message}</div>}
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-3">
                        <label>Popup Header:</label>
                        <input type="text" className="form-control" value={popupHeader} onChange={(e) => setPopupHeader(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label>Popup Link:</label>
                        <input type="text" className="form-control" value={popupLink} onChange={(e) => setPopupLink(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label>Start Date:</label>
                        <input type="date" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label>End Date:</label>
                        <input type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label>Upload Image:</label>
                        <input type="file" className="form-control" onChange={handleFileChange} required />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" checked={isVisible} onChange={() => setIsVisible(!isVisible)} />
                        <label className="form-check-label">Show Popup (ON/OFF)</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Popup</button>
                </form>
            </div> */}
        </>
    )
}

export default AddSlider

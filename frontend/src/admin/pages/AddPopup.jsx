import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config'

function AddPopup() {
    const [popupHeader, setPopupHeader] = useState("");
    const [popupLink, setPopupLink] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [popupImage, setPopupImage] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (e) => {
        setPopupImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("popup_header", popupHeader);
        formData.append("popup_link", popupLink);
        formData.append("start_date", startDate);
        formData.append("end_date", endDate);
        formData.append("popup_image", popupImage);
        formData.append("isVisible", isVisible);

        try {
            const response = await axios.post(`${API_BASE_URL}/api/popup/add`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setSuccessMessage(response.data.message);
            setPopupHeader("");
            setPopupLink("");
            setStartDate("");
            setEndDate("");
            setPopupImage(null);
            setIsVisible(false);
        } catch (error) {
            setErrorMessage("Error adding popup");
        }
    };

    return (
        <>
            <div className='container'>
                <div className='row mx-auto'>
                    <div className='col-12'>
                        <h3 className='text-dark text-center pt-3'>Add Popup</h3>
                        <div className='document-form-1'>
                            <form onSubmit={handleSubmit}>
                                <div className="row align-items-center">
                                    <div className="col-5 mb-4">
                                        <label className='form-label'>Popup Header:</label>
                                    </div>
                                    <div className="col-7 mb-4">
                                        <input type="text" className="form-control" placeholder='Enter Popup Header' value={popupHeader} onChange={(e) => setPopupHeader(e.target.value)} required />
                                    </div>

                                    {/* POpup Link */}
                                    <div className='col-5 mb-4'>
                                        <label>Popup Link:</label>
                                    </div>
                                    <div className='col-7 mb-4'>
                                        <input type="text" className="form-control" placeholder='Enter Popup Link' value={popupLink} onChange={(e) => setPopupLink(e.target.value)} />
                                    </div>

                                    {/* Upload Image */}
                                    <div className="col-5 mb-4">
                                        <label>Upload Image:</label>
                                    </div>
                                    <div className="col-7 mb-4">
                                        <input type="file" className="form-control" onChange={handleFileChange} required />
                                    </div>

                                    {/* Show Popup Button */}
                                    <div className="col-5 mb-4">
                                        <label className="form-check-label">Show Popup (ON/OFF)</label>
                                    </div>
                                    <div className="col-7 mb-4">
                                        <input type="checkbox" className="form-check-input" checked={isVisible} onChange={() => setIsVisible(!isVisible)} />
                                    </div>

                                    {/* Starting Date */}
                                    <div className="col-5 mb-4">
                                        <label>Start Date:</label>
                                    </div>
                                    <div className="col-7 mb-4">
                                        <input type="date" placeholder="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className='form-control' required />
                                    </div>

                                    <div className="col-5 mb-4">
                                        <label>End Date:</label>
                                    </div>
                                    <div className="col-7 mb-4">
                                        <input type="date" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className='form-control' required />
                                    </div>

                                    <div className="col-12 text-center mt-5">
                                        <button type="submit" className="btn btn-primary">Add Popup</button>
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

export default AddPopup

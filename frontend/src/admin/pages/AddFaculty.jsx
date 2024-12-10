import React, { useState } from 'react';
import axios from 'axios';

function AddFaculty() {
    const [teacherName, setTeacherName] = useState('');
    const [teacherEmail, setTeacherEmail] = useState('');
    const [teacherSubject, setTeacherSubject] = useState('');
    const [teacherWing, setTeacherWing] = useState('');
    const [teacherImage, setTeacherImage] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('teacher_name', teacherName);
        formData.append('teacher_email', teacherEmail);
        formData.append('teacher_subject', teacherSubject);
        formData.append('teacher_wing', teacherWing);
        formData.append('teacher_image', teacherImage);

        try {
            const response = await axios.post('http://localhost:5000/api/faculty/add', formData);
            const newFaculty = response.data;
            console.log('New Faculty:', newFaculty);
            setTeacherName('');
            setTeacherEmail('');
            setTeacherSubject('');
            setTeacherWing('');
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
            <section>
                <div className="container">
                    <div className="row">
                        <div className='col-12'>
                            <h3 className='text-dark text-center pt-3'>Add Teachers Faculty</h3>
                            <div className='document-form-1'>
                                <form onSubmit={handleSubmit}>
                                    <div className="row align-items-center">
                                        <div className="col-4 mb-4">
                                            <label>Teacher Name:</label>
                                        </div>
                                        <div className="col-8 mb-4">
                                            <input type="text" value={teacherName} className='form-control' onChange={(e) => setTeacherName(e.target.value)} placeholder='Enter Teacher Name' />
                                        </div>

                                        {/* Teacher Subject */}
                                        <div className="col-4 mb-4">
                                            <label>Teacher Subject:</label>
                                        </div>
                                        <div className="col-8 mb-4">
                                            <input type="text" value={teacherSubject} className='form-control' onChange={(e) => setTeacherSubject(e.target.value)} placeholder='Enter Teacher Subject' />
                                        </div>

                                        {/* Teacher Email */}
                                        <div className="col-4 mb-4">
                                            <label>Teacher Email:</label>
                                        </div>
                                        <div className="col-8 mb-4">
                                            <input type="text" value={teacherEmail} className='form-control' onChange={(e) => setTeacherEmail(e.target.value)} placeholder='Enter Teacher Email' />
                                        </div>


                                        {/* Teacher wing */}
                                        <div className="col-4 mb-4">
                                            <label>Teacher Wing:</label>
                                        </div>
                                        <div className="col-8 mb-4">
                                            <select name="category" className="form-select" value={teacherWing} onChange={(e) => setTeacherWing(e.target.value)}>
                                                <option value="">Select Wing</option>
                                                <option value="primary wing">Primary Wing</option>
                                                <option value="middle wing">Middle Wing</option>
                                                <option value="senior wing">Senior Wing</option>
                                            </select>
                                        </div>

                                        {/* Teacher File Link */}
                                        <div className='col-4 mb-4'>
                                            <label htmlFor="fileInput">Teacher Image File Upload</label>
                                        </div>
                                        <div className='col-8 mb-4'>
                                            <input type="file" id="fileInput" onChange={(e) => setTeacherImage(e.target.files[0])} />
                                        </div>

                                        {/* <div className="col-4 mb-4">
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
                                        </div> */}

                                        <div className="col-12 text-center mt-5">
                                            <button type="submit" className="btn btn-primary w-50">Add Faculty</button>
                                        </div>
                                    </div>
                                </form>

                                {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                                {error && <div className="alert alert-danger mt-3">{error}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddFaculty
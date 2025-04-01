import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config'

function AddEvent() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [slug, setSlug] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [eventDate, setEventDate] = useState('');
    const [eventFiles, setEventFiles] = useState([]);
    const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10));
    const [endDate, setEndDate] = useState(new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().substring(0, 10));
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [areImagesValid, setAreImagesValid] = useState(true); // State to track image validity

    const today = new Date().toISOString().substring(0, 10);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if images are valid before submitting
        if (!areImagesValid) {
            setErrorMessage('Please ensure all images meet the required dimensions (1600x900 pixels).');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('slug', slug);
        formData.append('event_date', eventDate);
        formData.append('start_date', startDate);
        formData.append('end_date', endDate);

        // Append thumbnail
        if (thumbnail) {
            formData.append('thumbnail_image', thumbnail);
        }

        // Append event files
        for (let i = 0; i < eventFiles.length; i++) {
            formData.append('event_files', eventFiles[i]);
        }

        try {
            const response = await axios.post(`${API_BASE_URL}/api/events/add`, formData);
            console.log(response.data);

            // Clear form fields
            setTitle('');
            setDescription('');
            setSlug('');
            setEventDate('');
            setStartDate(new Date().toISOString().substring(0, 10));
            setEndDate(new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().substring(0, 10));
            setThumbnail(null);
            setEventFiles([]);
            document.getElementById("thumbnailImg").value = "";
            document.getElementById("eventsImg").value = "";

            setSuccessMessage('Event added successfully!');
            setErrorMessage(''); // Clear any previous error message

            // Clear the success message after 3 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error('Error adding event:', error);
            setSuccessMessage(''); // Clear any previous success message
            if (error.response && error.response.status === 400) {
                setErrorMessage('Error: Event with this slug already exists');
            } else {
                setErrorMessage('Error: Unable to add event');
            }
        }
    };

    const validateImageDimensions = (file) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            const reader = new FileReader();

            reader.onload = (e) => {
                img.src = e.target.result;
                img.onload = () => {
                    // Check if dimensions match
                    if (img.width === 1600 && img.height === 900) {
                        resolve(true);
                    } else {
                        reject(new Error(`Image dimensions for "${file.name}" should be 1600x900. Current dimensions: ${img.width}x${img.height}`));
                    }
                };
            };

            reader.readAsDataURL(file);
        });
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            validateImageDimensions(file)
                .then(() => {
                    setThumbnail(file);
                    setAreImagesValid(true); // Set valid since thumbnail is valid
                    setErrorMessage(""); // Clear any previous error message
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                    setThumbnail(null);
                    setAreImagesValid(false); // Set invalid since thumbnail failed
                });
        }
    };

    const handleEventFilesChange = (e) => {
        const files = Array.from(e.target.files);
        Promise.all(files.map(file => validateImageDimensions(file)))
            .then(() => {
                setEventFiles(files);
                setAreImagesValid(true); // Set valid since all event files are valid
                setErrorMessage(""); // Clear any previous error message
            })
            .catch((error) => {
                setErrorMessage(error.message);
                setEventFiles([]);
                setAreImagesValid(false); // Set invalid since at least one file failed
            });
    };

    return (
        <div className='container'>
            <div className='row mx-auto'>
                <div className='col-12'>
                    <h3 className='text-dark text-center pt-3'>Add Event</h3>
                    <div className='document-form-1'>
                        <form onSubmit={handleSubmit}>
                            <div className="row align-items-center">
                                <div className="col-5 mb-4">
                                    <label className='form-label'>Event Title:</label>
                                </div>
                                <div className="col-7 mb-4">
                                    <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} className='form-control' required />
                                </div>

                                {/* Event Description */}
                                <div className='col-5 mb-4'>
                                    <label>Event Description</label>
                                </div>
                                <div className='col-7 mb-4'>
                                    <textarea
                                        placeholder="Event Description" value={description} onChange={(e) => setDescription(e.target.value)} className='form-control' required />
                                </div>

                                {/* Event Slug */}
                                <div className="col-5 mb-4">
                                    <label>Event Slug:</label>
                                </div>
                                <div className="col-7 mb-4">
                                    <input type="text" placeholder="Event Slug" value={slug} onChange={(e) => setSlug(e.target.value)} className='form-control' required />
                                </div>

                                {/* Event Thumbnail Image */}
                                <div className="col-5 mb-4">
                                    <label>Event Thumbnail Image (1600 * 900 pixel):</label>
                                </div>
                                <div className="col-7 mb-4">
                                    <input type="file" id='thumbnailImg' onChange={handleThumbnailChange} className='form-control' />
                                </div>

                                {/* Event Date */}
                                <div className="col-5 mb-4">
                                    <label>Event Date:</label>
                                </div>
                                <div className="col-7 mb-4">
                                    <input type="date" placeholder="Event Date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className='form-control' max={today} required />
                                </div>

                                {/* Event Event Multiple Image */}
                                <div className="col-5 mb-4">
                                    <label>Events Image (1600 * 900 pixel) Max 1MB:</label>
                                </div>
                                <div className="col-7 mb-4">
                                    <input type="file" id='eventsImg' multiple onChange={handleEventFilesChange} className='form-control' />
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
                                    <button type="submit" className="btn btn-primary w-50">Add Events</button>
                                </div>
                            </div>
                        </form>
                        {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                        {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEvent;
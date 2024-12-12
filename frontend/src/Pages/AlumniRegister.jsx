import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "axios";
import API_BASE_URL from '../config'

function AlumniRegister() {
    const data = { sname: "", fname: "", yearofpassout: "", nyearschool: "", address: "", contact: "", aemail: "", presentpos: "", refteachers: "", refprincipal: "", photo: "" };
    const [alumniFormData, setAlumniFormData] = useState(data);

    const handleData = (e) => {
        setAlumniFormData({ ...alumniFormData, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_BASE_URL}/api/alumniform/add`, alumniFormData)
            .then(function (response) {
                console.log(response);
            })
            .catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data); // Log the response data
                    console.log(error.response.status); // Log the status code
                    console.log(error.response.headers); // Log the response headers
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
    }

    const handleReset = (e) => {
        setAlumniFormData(
            { sname: "", fname: "", yearofpassout: "", nyearschool: "", address: "", contact: "", aemail: "", presentpos: "", refteachers: "", refprincipal: "", photo: "" }
        )

        e.preventDefault()
    }

    return (
        <>
            <Header />

            {/* Alumni Register Section */}
            <section style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className='container-fluid mb-3' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Register Alumni </h4>
                        </div>
                    </div>
                </div>
                <div className="container alumni-register">
                    <div className="row">
                        <div className="col-lg-8 pt-5" style={{ margin: 'auto' }}>
                            <form action="">
                                <label>Enter Students Name<span>*</span></label><br />
                                <input type="text" name="sname" value={alumniFormData.sname} pattern="[a-zA-Z]+" placeholder="Enter Student Name" onChange={handleData} required />

                                <label>Enter Father's Name<span>*</span></label><br />
                                <input type="text" name="fname" value={alumniFormData.fname} pattern="[a-zA-Z]+" placeholder="Enter Father Name" onChange={handleData} required />

                                <label>Year of Passout<span>*</span></label>
                                <input type="text" name="yearofpassout" value={alumniFormData.yearofpassout} pattern="[0-9]" placeholder="Enter Year of Passout" onChange={handleData} required />

                                <label>No. of Years in Our School<span>*</span></label>
                                <input type="text" name="nyearschool" value={alumniFormData.nyearschool} placeholder="Enter No. of Years" onChange={handleData} required />

                                <label>Present Address<span>*</span></label>
                                <input type="text" name="address" value={alumniFormData.address} placeholder="Enter Present Address" onChange={handleData} required />

                                <label>Contact No.<span>*</span></label>
                                <input type="text" name="contact" value={alumniFormData.contact} pattern="[789][0-9]{9}" placeholder="Enter Contact No." onChange={handleData} required />

                                <label>Email Address<span>*</span></label>
                                <input type="email" name="aemail" value={alumniFormData.aemail} placeholder="Enter Email Id" onChange={handleData} required />

                                <label>Present Position<span>*</span></label>
                                <label style={{ fontSize: '11px' }}>(Studying/Occupation)</label>
                                <input type="text" name="presentpos" value={alumniFormData.presentpos} placeholder="Enter Present Position" onChange={handleData} required />

                                <label>Reference Of Teachers<span>*</span></label>
                                <label style={{ fontSize: '11px' }}>(Names of Teachers you remember)</label>
                                <input type="text" name="refteachers" value={alumniFormData.refteachers} placeholder="Enter Reference Of Teacher" onChange={handleData} required />

                                <label>Reference Of Principals<span>*</span></label>
                                <label style={{ fontSize: '11px' }}>(Names of Principals you remember)</label>
                                <input type="text" name="refprincipal" value={alumniFormData.refprincipal} placeholder="Enter Reference Of Principal" onChange={handleData} required />

                                <label>Recent Photo<span>*</span></label>
                                <label style={{ fontSize: '11px' }}>(Only Upoload .jpg/.png file)</label>
                                <input type="file" name="photo" value={alumniFormData.photo} onChange={handleData} multiple style={{ border: '0', padding: '0' }} />

                                <div className="text-end form-button">
                                    <input type="submit" value="Reset" className="btn btn-default" onClick={handleReset} />
                                    <input type="submit" value="Submit" className="btn btn-success" onClick={handleSubmit} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default AlumniRegister;
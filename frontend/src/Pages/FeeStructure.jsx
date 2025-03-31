// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
// import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function FeeStructure() {
    return (
        <>
            <Header />

            {/*  */}
            <section style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className='container-fluid' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontWeight: 'bold' }}>Fee Structure</h4>
                        </div>
                    </div>
                </div>
                <div className="container fee-structure mx-auto">
                    <div className="row">
                        <div className="col-12 pt-3 text-center">
                            <div>
                                <h3>Fee structure for Day Scholar<br />
                                    Session 2025 - 2026
                                </h3>
                                <h6 className="pb-5">
                                    REGISTRATION CHARGES (at the time of submission of registration form) :
                                    <span style={{ fontWeight: '700' }}>Rs. 3000/- (Non Refundable)</span>
                                </h6>
                            </div>
                        </div>
                        <div className="col-lg-10 text-center" style={{ margin: 'auto' }}>
                            <table align="center" className="table table-striped table-bordered table-hover table-condensed" style={{ width: '80%', margin: 'auto', fontSize: '15px' }}>
                                <thead>
                                    <tr>
                                        <th colSpan={3}>
                                            <h6>(A)<br />FOR NEW ADMISSION (ONE TIME FEE)-CLASSES NURSERY TO XII
                                            </h6>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align="left">Admission Fee</td>
                                        <td>Rs.20000/-</td>
                                        <td align="left">(Non Refundable)</td>
                                    </tr>
                                    <tr>
                                        <td align="left">Infrastructure Charges</td>
                                        <td>Rs.15000/-</td>
                                        <td align="left">(Non Refundable)</td>
                                    </tr>
                                    <tr>
                                        <td align="left">Caution Money</td>
                                        <td>Rs.12000/-</td>
                                        <td align="left">(Refundable as per rule)</td>
                                    </tr>
                                    <tr style={{ fontWeight: 'bold' }}>
                                        <td align="left">Total</td>
                                        <td>Rs.47000/-</td>
                                        <td align="left"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-10 pt-5 text-center" style={{ margin: 'auto' }}>
                            <table align="center" className="table table-striped table-bordered table-hover table-condensed" style={{ width: '80%', margin: 'auto', fontSize: '15px' }}>
                                <thead>
                                    <tr>
                                        <th colSpan={3}>
                                            <h6>(B)<br />ANNUAL FEE (FOR THE ACADEMIC SESSION)
                                            </h6>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align="left">NURSERY TO V</td>
                                        <td>Rs. 71300/-</td>
                                    </tr>
                                    <tr>
                                        <td align="left">VI TO X</td>
                                        <td>Rs. 77000/-</td>
                                    </tr>
                                    <tr>
                                        <td align="left">XI & XII ( Com.& Arts )</td>
                                        <td>Rs. 83400/-</td>
                                    </tr>
                                    <tr>
                                        <td align="left">XI & XII ( Com.- I.P. )</td>
                                        <td>Rs. 83850/-</td>
                                    </tr>
                                    <tr>
                                        <td align="left">XI & XII ( Science )</td>
                                        <td>Rs. 85650/-</td>
                                    </tr>
                                    <tr>
                                        <td align="left">XI & XII ( Science - Bio )</td>
                                        <td>Rs. 86200/-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-lg-12 pt-5">
                            <div className="mx-lg-5">
                                <h4 className="text-center">PAYMENT SCHEDULE</h4>
                                <ul className="mx-lg-5">
                                    <li>Amount mentioned in <strong>Point A</strong> is payable at the time of Admission only.
                                    </li>
                                    <li>Amount mentioned in <strong>Point B</strong> is payable as following-</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-10 pt-5 text-center" style={{ margin: 'auto' }}>
                            <table align="center" className="table table-striped table-bordered table-hover table-condensed" style={{ width: '80%', margin: 'auto', fontSize: '13.5px' }}>
                                <thead>
                                    <tr>
                                        <th rowSpan={3}>CLASS</th>
                                        <th colSpan={3}>FEE INSTALLMENTS</th>
                                        <th rowSpan={3}>TOTAL<br />(In Rs.)</th>
                                    </tr>
                                    <tr>
                                        <th>I</th>
                                        <th>II</th>
                                        <th>III</th>
                                    </tr>
                                    <tr>
                                        <th>Alongwith One time Fee<br />(In Rs.)</th>
                                        <th>Due on (July 2025)<br />(In Rs.)</th>
                                        <th>Due on (November 2025)<br />(In Rs.)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: 'left' }}>NURSERY TO V</td>
                                        <td>24500</td>
                                        <td>23500</td>
                                        <td>23300</td>
                                        <td>71300</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'left' }}>VI TO X</td>
                                        <td>26500</td>
                                        <td>25500</td>
                                        <td>25000</td>
                                        <td>77000</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'left' }}>XI & XII ( Com.& Arts )</td>
                                        <td>28200</td>
                                        <td>28200</td>
                                        <td>27000</td>
                                        <td>83400</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'left' }}>XI & XII ( Com. - I.P. )</td>
                                        <td>28200</td>
                                        <td>28200</td>
                                        <td>27450</td>
                                        <td>83850</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'left' }}>XI & XII ( Science - Maths )</td>
                                        <td>29000</td>
                                        <td>29000</td>
                                        <td>27650</td>
                                        <td>85650</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'left' }}>XI & XII ( Science - Bio)</td>
                                        <td>29000</td>
                                        <td>29000</td>
                                        <td>28200</td>
                                        <td>86200</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-lg-12 pt-3 payment-note">
                            <div className="mx-lg-5 pt-2">
                                <p className="mx-lg-5"><span>Note:</span> <i><u>Students of Class XI & XII who take practical
                                    subject(s) will pay Rs. 1000/- an additional fee for each practical subject. This
                                    fee is payble with first installment of the session or at the time of
                                    admission.</u></i></p>
                                <div className="mx-lg-5">
                                    <ul className="mx-lg-4">
                                        <li>Fee can be deposited online through our website also.<a href="https://octopod.co.in/student/admission/35ee747ac5f346411f328ae87f426ff7" rel="noreferrer" target="_blank">Online Fee Payment
                                            Link</a></li>
                                    </ul>
                                    <hr />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 pt-4 text-center">
                            <div>
                                <h3>Fee structure for Day Hostellers<br />
                                    Session 2025 - 2026
                                </h3>
                                <h6 className="pb-5">
                                    REGISTRATION CHARGES (at the time of submission of registration form) :
                                    <span style={{ fontWeight: '700' }}>Rs. 3500/- (Non Refundable)</span>
                                </h6>
                            </div>
                        </div>

                        <div className="col-lg-10 text-center" style={{ margin: 'auto' }}>
                            <table align="center" className="table table-striped table-bordered table-hover table-condensed" style={{ width: '80%', margin: 'auto', fontSize: '15px' }}>
                                <thead>
                                    <tr>
                                        <th colSpan={3}>
                                            <h6>(A)<br />FOR NEW ADMISSION (ONE TIME FEE)-CLASSS VI - XII
                                            </h6>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align="left">Admission Fee</td>
                                        <td>Rs.20000/-</td>
                                        <td align="left">(Non Refundable)</td>
                                    </tr>
                                    <tr>
                                        <td align="left">Infrastructure Charges</td>
                                        <td>Rs.23000/-</td>
                                        <td align="left">(Non Refundable)</td>
                                    </tr>
                                    <tr>
                                        <td align="left">Caution Money</td>
                                        <td>Rs.18500/-</td>
                                        <td align="left">(Refundable as per rule)</td>
                                    </tr>
                                    <tr style={{ fontWeight: 'bold' }}>
                                        <td align="left">Total</td>
                                        <td>Rs.61500/-</td>
                                        <td align="left"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-lg-10 text-center mt-4" style={{ margin: 'auto' }}>
                            <table align="center" className="table table-striped table-bordered table-hover table-condensed" style={{ width: '80%', margin: 'auto', fontSize: '15px' }}>
                                <thead>
                                    <tr>
                                        <th colSpan={3}>
                                            <h6>(B)<br />IMPREST MONEY</h6>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align="left">IMPREST MONEY</td>
                                        <td>Rs.20000/-</td>
                                        <td align="left">(Payable with one time fee)</td>
                                    </tr>
                                    <tr style={{ fontWeight: 'bold' }}>
                                        <td align="left">GRAND TOTAL (A+B)</td>
                                        <td>Rs.81500/-</td>
                                        <td align="left"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-lg-10 text-center mt-4" style={{ margin: 'auto' }}>
                            <table align="center" className="table table-striped table-bordered table-hover table-condensed" style={{ width: '80%', margin: 'auto', fontSize: '14px' }}>
                                <thead>
                                    <tr>
                                        <th colSpan={5}>
                                            <h6>(C)<br />ANNUAL FEE FOR HOSTELLERS</h6>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th rowSpan={3}>CLASS</th>
                                        <th colSpan={3}>FEE INSTALLMENTS</th>
                                        <th rowSpan={3}>TOTAL<br />(In Rs.)</th>
                                    </tr>
                                    <tr>
                                        <th>I</th>
                                        <th>II</th>
                                        <th>III</th>
                                    </tr>
                                    <tr>
                                        <th>Alongwith One time Fee<br />(In Rs.)</th>
                                        <th>Due on (July 2025)<br />(In Rs.)</th>
                                        <th>Due on (November 2025)<br />(In Rs.)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Upto X</td>
                                        <td>106000</td>
                                        <td>105500</td>
                                        <td>105000</td>
                                        <td>316500</td>
                                    </tr>
                                    <tr>
                                        <td>XI & XII</td>
                                        <td>110000</td>
                                        <td>109000</td>
                                        <td>108000</td>
                                        <td>327000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-lg-12 pt-3 payment-note">
                            <div className="mx-lg-5 pt-2">
                                <p className="mx-lg-5"><span>Note:</span> <i><u>Students of Class XI & XII who take practical
                                    subject(s) will pay Rs. 1000/- an additional fee for each practical subject. This
                                    fee is payble with first installment of the session or at the time of
                                    admission.</u></i></p>
                                <div className="mx-lg-5">
                                    <ul className="mx-lg-4">
                                        <li>Caution Money is refundable at the time of leaving the School.</li>
                                        <li>Imprest money will be used for students personal expenses during the session.</li>
                                        <li>Fee can be deposited online through our website also. <a href="https://octopod.co.in/student/admission/35ee747ac5f346411f328ae87f426ff7">Online Fee Payment Link</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <center>
                                <button type="button" className="px-2 my-4" style={{ fontWeight: 'bold' }}>RULES FOR MODE OF FEE
                                    PAYMENT</button>
                            </center>
                            <div className="rules-for-payment">
                                <ol>
                                    <li>Fee is payable for the full year in 3 installments using Net-banking/Debit Card or Credit Card through our school website <a href="https://dpsjodhpur.in/">www.dpsjodhpur.in</a> or Cheque / DD in favour of 'Delhi Public School Jodhpur', duly endorsed with the particulars of the students (Name, class, admission no., phone no.) on the reverse of the cheque. Fee installments are to be deposited in the month of April, July & November of the current session. Dates will be informed through fee circular. Late fee of Rs. 25.00 per day will be charged for delayed payment. Parents have to ensure that fees is deposited on or before the due date without waiting for any reminder from the school else action will be taken for recovery of outstanding fees. A student is liable to be struck off the rolls if the fees for the entire session remains outstanding without justifiable reasons. The decision of the school as to justifiability for non-payment of fees shall be final and binding.</li>
                                    <li>Any cheque returned by the bank will be treated under the category of non-payment of fees. In such cases Rs.250/- will be charged against the cheque returned.</li>
                                    <li>In case of any doubt regarding the payment of dues, parents are advised to make the payments first and ask for refund later.</li>
                                    <li>Parents should kindly keep the receipts issued by the school/bank in safe custody and produce these to the school in proof of the payments made, if required.</li>
                                    <li>Parents are required to submit an application for the refund of caution money. The caution money is refundable in full only after settlement of all dues.</li>
                                    <li>No refund of caution money is made during summer and winter vacation.</li>
                                    <li>Non CTS cheques will not be accepted.</li>
                                    <li>In case of any refund or extra charges levied by the school, parents should kindly contact the school.</li>
                                    <li>All correspondence in respect of fee bill should be taken up directly with the Accounts Departments, DPS Jodhpur.</li>
                                    <li>A clear calendar month notice in writing or month's fee in lieu of notice must be given before a pupil has to be withdrawn. However, in case of a sudden transfer of government or service personnel, one calendar months’ notice can be waived by the Principal.</li>
                                    <li>Once a child has been admitted, no claim for the refund of one time charges (other than caution money) will be entertained. However, for the other fee, rule no. 10 will apply.</li>
                                    <li>If the school fee dues (either previous/current session) of your ward is not remitted latest by 28th February of ongoing session, then this non-payment of fee may lead to any future inconvenience like withholding the examination result of ongoing session or exclusion of offline/online classes or may lead to cancellation of admission. Lapse of aforementioned time bracket as given in Rule no.1, will attract a penalty / fine / late fee charges.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default FeeStructure;
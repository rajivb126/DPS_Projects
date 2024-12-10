import Footer from "../Components/Footer";
import Header from "../Components/Header";

function AdmissionPolicy() {
    return (
        <>
            <Header />

            <section style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className="container admission-policy">
                    <div className="row mx-auto">
                        <div className="col-12 pt-4">
                            <div className="text-center">
                                <h3>Admission Process</h3>
                            </div>
                        </div>
                        <div className="col-12 pt-2">
                            <ol>
                                <li>The Admission Process in Delhi Public School Pal Jodhpur for pre-primary classes usually begins from mid-December every year. </li>
                                <li>Admission to other classes will be subject to availability of seats. For further details, parents can contact personally the school office/ Admission In-charge.</li>
                                <li>Information about the exact dates of Admissions will be given on the Official School Website (www.dpsjodhpur.in) before the Admission Process begins.</li>
                                <li>Registrations for admission in any classes will be accepted only through online process on the school website.</li>
                                <li>Successful registration of a candidate would not guarantee admission, as the number of seats available is limited.</li>
                                <li>Interaction/ Amission Test shall be conducted to complete the admission process</li>
                                <li>Further details regarding interaction/admission test will be shared with registered candidates subsequently.</li>
                                <li>The Age limit criteria for the admission will be clearly mentioned on the Instruction web page of Admission process.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default AdmissionPolicy;
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function HostelPolicy() {
    return (
        <>
            <Header />

            <section style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className='container-fluid' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontWeight: 'bold' }}>Hostel Policy</h4>
                        </div>
                    </div>
                </div>
                <div className="container hostel-policy">
                    <div className="row mx-auto">
                        <div className="col-12">
                            <h3 style={{ padding: '20px 0 15px' }}>YOUR CHILD AS A BOARDER IN DPS JODHPUR</h3>

                            <p>Delhi Public School Jodhpur is glad to receive your ward into its family. As we call our boarding- “a home away from home”, the child's overall development, his emotional and psychological needs are now our concern. The due care and attention required by the child will be provided here by the house parents residing within the hostel. Thus, the child can seek the help and guidance of the house masters whenever he feels it necessary.</p>

                            <p>The students would be housed in a comfortable fully air-cooled hostel and would be sharing his room with three of his mates. The hostel would also provide the child with recreation rooms, linen rooms, a common room and a sufficient number of toilets and bathing rooms with hot/cold water bathing facility</p>

                            <p>Healthy food habit is an important aspect in these growing years of the child. Keeping this in mind, the hostel would provide a fully balanced diet which would include a nutritious vegetarian diet cooked by catering experts in a hygienic modern kitchen. Food would be served in the main dinning hall where the meals would be supervised by teachers and house-masters.</p>

                            <p>As healthy mind resides in a healthy body thus the student would also be taught to keep himself physically fit with regular exercise and games/yoga under the supervision of specialists. This is an aspect which would also teach the student to enjoy as a team, immaterial of a win or loss and point to him the importance of team spirit. With a wide range of choice there is an opportunity for the student to be able to learn various games wherein he may try to excel in a few.</p>

                            <p>The hostel would have a resident nurse to look into the elementary health problems of the child and the facility of a sick room would be provided to the students who fall ill. A medical officer would be visiting the hostel everyday to look into the other health queries of the students. All necessary medical care would be provided as per the advice and under the supervision of the Medical Officer.</p>

                            <p>The overall aim is thus to see that the child grows up joyfully learning to handle his/her own responsibility. We are sure that your faith and confidence in the school will prove to be true when the child leaves our care and enters the world. We foresee our children to prove worthy citizens of the nation who will contribute significantly in its progress and development.</p>
                        </div>
                        <div className="col-12">
                            <h3 style={{ padding: '10px 0 15px' }}>Hostel Rules</h3>
                            <ol>
                                <li>Students are not allowed to keep/carry any electronics item like mobiles, credit cards, walkman, digital diaries etc. If such things are found in his possession, these will be confiscated.</li>
                                <li>Boarders are strictly prohibited to keep any money with them.</li>
                                <li>No eatables are allowed from home. If the parents do bring some eatables for their wards, it will be shared with all the inmates of his room.</li>
                                <li>Any change of home address must immediately be notified to the authority.</li>
                                <li>All letters to the boarders must be addressed to the house masters only. Letters written directly to the boarders will not be handed over to them.</li>
                                <li>Boarders shall not be allowed to leave the compound for any purpose except with their parents or local guardians duly recorded in the school.</li>
                                <li>In case of an emergency you can call your ward's housemaster/principal.</li>
                                <li>The parents should follow the telephone schedule given to them.</li>
                                <li>The parents are requested not to call their ward in the first 20 days of their joining the hostel.</li>
                                <li>A separate school calendar is enclosed for the parents of hostellers. Please go through it carefully and abide by it.</li>
                                <li>When to visit your ward please do not give your cell phone to other hostel students to talk to their parents.</li>
                                <li>Hostellers will follow the daily routine of the hostel and school, unless exempted on medical grounds.</li>
                                <li>Hostellers	are	not	allowed	to	stay	in	the	hostel	during	school hours/games/activity period.</li>
                                <li>Hostellers are not allowed to keep any medicines or tonics with them without the knowledge of the house master/ nurse/doctor.</li>
                                <li>Any hosteller falling ill will report to the clinic through house master without delay.</li>
                                <li>Hostellers will be allowed to go home during long breaks. The LG/Parent will collect them from the school campus. They should return to the hostel a day before the school reopens.</li>
                                <li>Examination reports will be send to parents by post.</li>
                                <li>No parent/local guardian will be allowed to hand over any thing to the hosteller directly. If anything is to be given, it should be done through the house master.</li>
                                <li>Any damage to the school property will be charged from the student responsible for the damage.</li>
                                <li>The school reserves right to rusticate a child on grounds of indiscipline.</li>
                                <li>If a child is dismissed from the hostel he will be dismissed from the school also and vice versa.</li>
                            </ol>
                            <h3 style={{ padding: '10px 0 15px' }}>FORMALITIES TO BE COMPLETED AT THE TIME OF JOINING THE HOSTEL</h3>
                            <p className="formalitiesHostel">Parents should submit the following forms at the time of admission:-</p>
                            <ol>
                                <li>Dully filled enrolment form.</li>
                                <li>Form regarding the information of parents.</li>
                                <li>An authority letter from the parent giving details of two local guardians (LG)</li>
                                <li>A health certificate regarding medical history of the child.</li>
                                <li>A letter of indemnity against any damage, sickness, accident etc caused in the course of functioning and activities in the school.</li>
                                <li>Number of photographs as mentioned below must be submitted by hostellers during admission : <br /><br />
                                    <b>Student: - 3</b> <br />
                                    <b>Parent: - 3</b> <br />
                                    <b>Local Guardian: - 3</b> <br />
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default HostelPolicy;
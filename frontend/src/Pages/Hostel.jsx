import Footer from '../Components/Footer';
import Header from '../Components/Header';
import hostel from '../images/hostel.jpg';

function Hostel() {
    return (
        <>
            <Header />

            {/* Hostel Section */}
            <section style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className="container-fluid wing px-0">
                    <h2>HOSTEL WING</h2>
                    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={hostel} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                    <p>Situated among the vast green fields and sylvan surroundings, the concrete and mortar of the hostel of
                        Delhi Public School Jodhpur speaks of innovation, novelty, activities and commitment. Every brick and
                        every leaf encourages the students to become self dependent by learning to live, by being a leader and
                        shaping his own destiny.
                        There are separate blocks for accommodating boys and girls where they are nurtured and groomed as per
                        their aptitude and talents. Each block is under the supervision of house parents with the main house
                        master in-charge.</p>

                    <h4>Boarding House :<b> “A HOME AWAY FROM HOME”</b></h4>
                    <p>The hostel of Delhi Public School, Jodhpur  was started  in the year 2007-08 in the tranquil and serene lush green surroundings. It has been designed more like cosy home housing families than traditional boarding houses and is surely a home away from home for the boarders. This hostel comprises of three residential blocks for students and one for the teaching faculties. Each boarding house has an experienced House Master/Mistress with Hostel Attendants who provides personalised care and help students nurture and groom in the best possible way. The growth in strength from 44 students to 150 students in such a small span of time speak volumes of its caring and comfortable environment apart from academic excellence.
                        Senior hostel comprises of 23 rooms and Junior Hostel comprises of 05 dormitories as per the requirement of the children of different age group.</p>

                    <h4>House Facilities</h4>
                    <p>Delhi Public Hostel provides one with numerous facilities ranging from academic help to fun filled activities, games and sports, library, audio visual aids, laundry services, gymnasium, tours and excursion etc. The common room of the hostel is the favourite place for students where they can have access to enriching movies, talent shows, and heart throbbing matches between different teams of the world. The sports room and gymnasium are the attractions for the students where they not only learn the basics of the game but also learn to groom their body and be healthy. Keeping in view the motto of “Go Green” students are provided warm water during winter season with the use of solar energy. Moreover, the hostel is based on the technique of rain water harvesting which further enables to balance the water table.</p>

                    <h4>House Activities</h4>
                    <p>Students are also imparted skills in Dance, Arts, Music, Dramatics, Debate and Quizzing to name a few. Cultural evenings are also organised each week to showcase the talents of the students in a healthy competitive environment.<br />
                        Following the motto that participating is more important than winning a game.At Delhi Public School, Jodhpur we are taught that it is far better to lose scrupulously than win unfairly. These words echo in the ears of every Dipsite. Professional coaches play a great role in honing the players’ skills.  The students are divided into four groups to develop a healthy spirit of competition.  The students are put through physical exercises and drills, besides long runs to enable them to become physically fit and mentally strong.  Early in the morning, yoga is promoted in the campus with the aim of keeping the students fit, besides helping them focus clearly and concentrate well.</p>

                    <h4>Hostel Menu</h4>
                    <p>It is rightly said “A Healthy mind dwells in a healthy body.”Food and proper nutrition are a part of healthy life style and students need to have a balanced diet for work and play. The hostel menu is prepared under the strict guide lines of a dietician. It includes rice, chapattis, pulses, vegetables, salad and sweet dishes to provide all he necessary nutrients. To rule out the monotony of the food stuffs, the menus has varieties of food for each week. Students are the part of Mess Committee who monitor the quality and give suggestions during fortnight meet of the Mess Committee.</p>

                    <h4>Dining Hall</h4>
                    <p>The dining hall is spacious, well planned and air cooled. It is a double storied building with a sitting capacity of 150 students on each floor. The kitchen is well equipped with modernized equipment. The Catering facilities of the Hostel are managed and run by the school only to ensure quality, nutrition and hygiene.</p>

                    <h4>Hostel Schedule</h4>
                    <p>To attain a healthy life style every single thing needs to be shelved into proper space. Hence, the hostellers follow a daily schedule which teaches them to be punctual in different walks of life.</p>

                    <h4>Parental Care</h4>
                    <p>The objective of Delhi Public School Hostel is to train the students’ mind for being self dependent. The House Masters/ Mistress along with their team nurture the students in a complete family environment thereby inculcating in student’s heart, values and discipline necessary for a holistic personality.  Nestled in the lush green ambience, the hostel aims at creating Life Long Learners to meet the constantly changing challenges and the needs of the world around us. Forging ahead with the target of preparing Global Citizens and Agents of social change, committed to humanistic values and democratic traditions, the hostel excels academically as well by providing a joyful, disciplined and learning environment which is being lead forward by caring House Master /Mistress and a talented pool of hostel teachers and staff</p>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default Hostel;
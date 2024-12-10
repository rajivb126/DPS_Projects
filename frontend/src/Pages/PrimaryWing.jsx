import primarywing from '../images/prbuildingnew.jpg';
import Header from "../Components/Header"
import Footer from '../Components/Footer';

function PrimaryWing() {
    return (
        <>
            <Header />

            {/* Primary Wing Section */}
            <section style={{animation:'fadeIn 1s ease-in-out'}}>
                <div className='container-fluid' style={{ background: '#002147' }}>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className="text-center text-uppercase py-3" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Primary Wing</h4>
                        </div>
                    </div>
                </div>
                <div className="container-fluid wing px-0">
                    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={primarywing} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <p>Every nook of the primary block serves as a purpose, every corner abides by a deep rooted concept. The
                        walls and the galleries are as much part of the pedagogy, so much so, that the infrastructure does no
                        longer remains just a physical structure. To foster growth and achievement by enabling students and
                        provide the support they need to reach the goals they set for themselves, DPS Jodhpur aims to offer
                        services that meet students requirements.The Junior block is ergonomically designed to suit young
                        childrens’ need. The wide corridors, broad staircase, spacious and ventilated classrooms, adequate
                        toilet and drinking water facilities on each floor are tailored according to the size and requirements.
                    </p>

                    <h4>Library</h4>
                    <p>“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.” The school
                        library is a welcoming place for reading. It encourages the love of reading and development of students
                        independent learning skills. The students from classes Nursery to III visit the library according to
                        their set timetable. The interior of the library has been designed to make it modern and student
                        friendly. The books are well arranged in the shelves which fascinate students to pick and read. There
                        are plenty of books like encyclopaedias, picture books, activity books, dictionaries, story books,
                        comics, books on literature in Hindi and English etc. The school has subscribed to various magazines and
                        periodicals for children. Books are regularly issued in the library period.</p>

                    <h4>Dance Room</h4>
                    <p>“Dance the hidden language of the soul.” Two dance rooms in the basement with wooden flooring and mirror
                        walls are well equipped with necessary technical instruments to train students in various dance forms.
                        The students enjoy both classical and western dance. They not only learn the technique but also develop
                        confidence, expressions, creativity and most important have fun. The students trained by the teachers
                        perform during assemblies, cultural programs and important events like Republic Day, Janamasthami,
                        Diwali, Sports Day etc.</p>

                    <h4>Music Room</h4>
                    <p>“Music gives wings to the mind, flight to the imagination and life to everything.” Music is given prime
                        importance in the school curriculum as it helps students relax and increases their concentration span.
                        Students love to learn songs on various themes like nature, family, patriotism etc. which very well
                        relate to the topics taught in the class.The sound proof room in the basement offers opportunity to
                        discover and develop their talents. Students are trained in vocal music. They learn various prayers,
                        songs and poems which develop language, build confidence, brings a sense of rhythm and makes their life
                        more melodious.</p>

                    <h4>Art Room</h4>
                    <p>"Bring some papers and colours along, The Pinnacle of creativity is where we belong." The block has two
                        art rooms where creativity of students is nurtured. The rooms are fully equipped for creative art work
                        and are decorated with display of students work. It is a place where children take the initial lesson in
                        creative expression. Latest techniques and methods of drawing, colouring and craft work are taught with
                        enough time to practice the same. Along with the guided instructions children are often given space and
                        freedom for creative expression.</p>

                    <h4>Infirmary</h4>
                    <p>School has a well equipped clinic with qualified nurse who takes care of the health and wellbeing of the
                        students. The school has its own ambulance and a tie up with the nearby hospitals to deal with the
                        emergency cases. Regular medical checkups and height and weight measurement are done on quarterly basis
                        to monitor the growth and development of the students and the same is discussed with the parents during
                        PTMs.</p>

                    <h4>Computer Lab</h4>
                    <p>School has a well equipped clinic with qualified nurse who takes care of the health and wellbeing of the
                        students. The school has its own ambulance and a tie up with the nearby hospitals to deal with the
                        emergency cases. Regular medical checkups and height and weight measurement are done on quarterly basis
                        to monitor the growth and development of the students and the same is discussed with the parents during
                        PTMs.</p>

                    <h4>Toy Room</h4>
                    <p>"I will be your friend and you will be mine, when we play all the time." Nothing can define Joy and ecstasy
                        more profusely than a room full of toys. It is during the free play in the room the tiny tots learn
                        their first lesson to socialise, co-operate and to overcome tiny bits of hindrances that might come
                        their way. The toy room in the pre primary section is stocked with a variety of child safe toys. The
                        room is so designed to make learning more fun and exciting. The pre primary kids love this room as it
                        has many toys and educational games. The games are conducted as a part of the planned educational
                        program.</p>

                    <h4>Smart Classrooms</h4>
                    <p>The classrooms provide environment that fosters excellence and motivates students towards better
                        performance. The classrooms are aesthetically designed and integrated with smart boards and convenient
                        desks. With technical support the skilled teachers provide guidance to each individual. The emphasis is
                        on making every classroom session interesting and innovating.</p>

                    <h4>Sports Room and Ground</h4>
                    <p>Sports is an essential ingredient of the school curriculum. Two sports rooms in the basement helps pursue
                        wide range of indoor sports activities like chess, carrom etc. whereas a ground at the back of the block
                        fosters physical fitness and encourage students to play outdoor games. The games are planned to develop
                        their gross motor skills. An annual sports meet is conducted to pursue sportsman ship at an early age.
                    </p>

                    <h4>EVS Lab</h4>
                    <p>In order to understand the concepts, one has to look beyond the books and conventional classroom
                        teaching. Effective teaching and learning of Science involves seeing, handling and manipulating real
                        objects and materials. The EVS lab brings learning to life as each student gets to explore, experiment
                        and form their own conclusions. The students observe the process, discuss and then finally understand
                        the relationship between action and reaction.</p>

                    <h4>Amphitheatre</h4>
                    <p>"Give me a spark,I will dazzle the sky. Give me a dias, I will rocket so high." Amphitheater serves as a
                        performance area for the students. It nurtures, develops and ignites the explored and unexplored talent
                        in them. It has witnessed many budding poets, dancers and enacters making confident attempts to reach
                        the acme. It is the place for conduction of the morning assembly, recitation, storytelling, talent
                        search activities and competitions which provides a platform for the children to showcase their talent.
                    </p>

                    <h4>Story Telling Area</h4>
                    <p>"The imagination and desire that shapes me.The world of stories is a place to be." The storytelling area
                        serves an excellent space to deliver the story telling sessions and the morning circle time specially
                        for the pre primary kids. Storytelling is used as a method to teach young children ethics, values and
                        cultural norms and differences. Being in the storytelling area the young minds are translated to far
                        away lands, they battle dragons, swim with mermaids and even transform themselves into exciting and
                        unusual characters.</p>

                    <h4>Activity Room</h4>
                    <p>"I will do and then I will learn can you tell me what could be more fun". The activity room serves as a
                        breeding ground for all the ideas and concepts which are provided during classroom teaching. It is the
                        presence of many Montessori equipment, customised teaching aids etc. that makes the reaffirmation of the
                        important concepts and ideas permanent in the minds of our young ones. The activity room is fully
                        stocked with puzzles, building blocks etc. It is a place where many group activities are conducted.</p>

                    <h4>Splash Pool</h4>
                    <p>"Come‘on every one lets beat the heat and have some aqua fun." As the summer approaches, one of the
                        favourite activities of the children is enjoying the amazing splash pool. There is nothing more fun for
                        the children then spending time in water with friends.To ensure safety add on to the excitement the
                        teachers too jump into the pool with their children. They clasp their little hands and lead them into
                        the wade thus help overcoming fear and build confidence. The excitement and frolic is clearly visible on
                        the faces when they splash water on each other.</p>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default PrimaryWing
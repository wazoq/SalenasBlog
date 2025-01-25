import React, { useEffect } from 'react';
import Header from '../Components/Header';
import myImage from '../assets/MentalHealth.jpg';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIosNew } from "react-icons/md";
import ReactGA from "react-ga4";



function NovBookRec() {
    useEffect(() => {
        // ReactGA.send({
        //   hitType: "pageview",
        //   page: "/my-path",
        //   title: "Let&#39;s Talk About Mental Health",
        // });
        //   window.scrollTo(0, 0); // Scrolls to the top when component mounts
      }, []);
        return (
          <div className='w-full bg-black text-white min-h-screen'>
      
            <Header />
      
            <div className="flex justify-center mr-10 ml-10">
              <div className="space-y-4 mt-10 ">
                <p className="flex justify-center text-xl text-white mb-2 mt-40">January 24</p>
                        <p className="text-center flex justify-center text-4xl md:text-6xl eb-garamond-normal custom-bronze mb-2">
                        Let&#39;s Talk About Mental Health
                        </p>

                
                <div className="max-w-[1200px] mx-auto "> {/* Adjust the max-width to match your image width */}
                  <img src={myImage} alt="" className="mx-auto w-auto h-auto" />
  
                  
                            <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                                In a world plagued by sickness, our health is of the utmost importance. My confusion arises
                                when we see physical ailments and forgo the suffering of those in silence. In many cultures,
                                mental illness is considered a taboo. Misspoken words are often said to alleviate suffering,
                                treating it as a condition that can be repelled through prayers, ignorance, or by placing undue
                                stress on the sufferer. At the same time, others say that the agony is caused by the body being
                                possessed by Jinn (Spirit). Mental illness is often hidden from society, given the distress and
                                judgment it may provoke. While progress has been made in many parts of the world, discomfort
                                and avoidance surrounding mental illness are still prevalent, with stigma heavily influencing
                                perceptions.
                            </p>

                            <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                                Mental illness is more common than many people acknowledge. A large-scale study co-led by
                                researchers from Harvard Medical School and the University of Queensland found that <a href="https://hms.harvard.edu/news/half-worlds-population-will-experience-mental-health-disorder" className="text-blue-500 underline">&quot;one out
                                    of every two people in the world will develop a mental health disorder in their lifetime.&quot;.</a>
                                The
                                results show a significant prevalence of mental health disorders worldwide. Now, of course, this
                                statistic doesn&#39;t account for those who are unable to recognize their mental health disorders due
                                to bias, cultural barriers, or stigma, nor those reluctant to seek help out of shame or fear of
                                judgment.
                            </p>


                          <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                          Why is our response to physical illness so different from the way we respond to mental illness?
The reality is that those who haven&#39;t experienced mental illness will find it harder to empathize
with those who have. Yet, this doesn&#39;t excuse the tendency to engage in unfiltered or thoughtless
remarks. For example, we wouldn&#39;t say to someone suffering from a physical illness: &#39;You have
no reason to be upset, you have a great life&#39; or &#39;Just smile more&#39;. We need to understand that
mental health struggles require the same understanding, compassion, and appropriate care as
physical illnesses—not dismissive advice.
                          </p>

                          
                          <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                          In a world where we are bound to make mistakes and overlook behaviors, we must pay attention
to those struggling in silence. A person dealing with issues will oftentimes seek out advice from
loved ones and will advocate for themselves. What about those who often have a hard time
expressing their mental struggles? Many individuals suffering from mental health suffer in
silence, often due to stigma, fear of judgment, or a lack of support. Repeatedly feeling like a
burden to others or experiencing a sense of shame when expressing their struggles, those dealing
with mental health challenges may even mask their pain, making it difficult to recognize the
signs. Oftentimes, people suffering in silence mask their distress so well that even those closest
to them might not notice any signs. Tragically, we have heard stories of individuals who have
taken their own lives, and loved ones will express disbelief saying, &quot;There were no signs; we
didn&#39;t even know. They always seemed so happy&quot;. Showing how difficult it can be to spot the
signs of someone suffering internally, it&#39;s crucial to recognize changes in behaviors or mood and
create a safe space where people feel heard about their struggles. Acknowledging the wide range
of signs that someone might be struggling mentally is important, as early awareness and support
can make a massive difference.
                          </p>


                          <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                          As the days grow shorter and the weather turns colder, many may find themselves struggling,
with mental health challenges intensifying for some. During these times, we must remind

ourselves to be patient and show compassion. Checking in with each other, fostering open
conversation, and challenging the stigma around mental illness will help create an environment
where no one feels the need to suffer in silence. Let&#39;s all strive to ensure that mental health
receives the same care and understanding as physical health -for healing begins when we hold
space for discomfort and offer support for one another.
                          </p>






                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5" leading-relaxed>
              Love
                </p>
    
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5">
                Salena 
                </p>
    
              </div>
    
            </div>
          </div>

              <li className="flex items-center justify-end mt-40 mb-20">
                  <Link to="/blog/NovBookRec" className="flex items-center text-4xl eb-garamond-normal custom-bronze mr-0 sm:mr-20 hover:text-current">November Book Recommendations

                      <MdArrowForwardIos className="ml-2 text-custom-bronze" /></Link></li>

              
    
          
    
          <Footer></Footer>
    
        </div>
      );
    }
export default NovBookRec
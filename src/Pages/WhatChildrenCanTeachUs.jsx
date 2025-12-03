import React, { useEffect } from 'react';
import Header from '../Components/Header';
import myImage from '../assets/WhatChildrenCanTeachUs.jpeg';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIosNew } from "react-icons/md";
import ReactGA from "react-ga4";

    

function NovBookRec() {
    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: "/my-path",
            title: "What Children Can Teach Us ",
        });
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);
    return (
        <div className='w-full bg-black text-white min-h-screen'>

            <Header />

            <div className="flex justify-center mr-10 ml-10">
                <div className="space-y-4 mt-10 ">
                    <p className="flex justify-center text-xl text-white mb-2 mt-40">September 20</p>
                    <p className="text-center flex justify-center text-4xl md:text-6xl eb-garamond-normal custom-bronze mb-2">
                        What Children Can Teach Us
                    </p>


                    <div className="max-w-[1200px] mx-auto "> {/* Adjust the max-width to match your image width */}
                        <img src={myImage} alt="" className="mx-auto w-auto h-auto" />


                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            As a teacher, I'm so grateful to work with children of all ages. With school back in session, I want to share some things I have learned, in the hope that we can reconnect with our inner child.
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            Children are honest and very emotionally expressive. Children will tell you the truth without you ever having to ask. As we get older, we tend to hold back our truths. We are more cautious about what we say, fearing how others may perceive us. In doing so, we sometimes forget to appreciate the people around us, or, in holding back, we inadvertently allow others to cross our boundaries. We should be more expressive with our own truths; aka tell people how you feel!
                        </p>


                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            Children require teachers to have emotional capacity. As adults, we may tend to hide our emotional outbursts, but children's emotions are often very expressive: they cry, hug, raise their voices, and laugh. When we deal with emotions, we should see them as something we all have. We should hold space for our feelings, as a being that lives within us. Like children that require our presence, so do the people around us. When children are communicating with their emotions, it is crucial to be present. As humans, we all want to be seen and understood, which is why I believe we may not always have the right words when someone feels deeply, but just being in the individual's presence goes a long way.
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            Children force you to slow down, observe the world around you, and be present. In a society where we are pulled in all directions, let’s stop for a second, smell the flowers, notice the clouds, and hear the bird singing.
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            Praising little humans makes a world of difference. Yet why do we forget to honor ourselves and the people around us? Just like kids, let us affirm each other. Trust me, it makes a massive impact.
                        </p>


                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            Two little humans are building a tower with blocks, and one accidentally pushes it over. How can we perceive the situation? We can clean up, say oops, and move on. We can learn from it and rebuild. We can blame each other for whose fault it was that the tower fell. In all this, perspective is what matters. Having a positive outlook and perspective in life will help us avoid unnecessary headaches. Children tend to move on quickly, even if it was the “end of the world” a second ago.
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            Kids pursue challenges despite the discomfort. I recall working with one child who was so scared to climb the playground ladder, but she was persistent. After a week, I noticed she was able to climb the ladder successfully. As we age, we tend to avoid discomfort and seek convenience, which can lead to a feeling of stagnation. Let’s push ourselves outside our comfort zone; real growth happens in the face of inconvenience.
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            Children love incentive learning, where we challenge them while making it entertaining and connecting it to text, applying it to real-life problems, and highlighting why something matters. We shouldn’t stop learning just because we graduated. Life requires learning, whether it's through books, language learning, or even pushing ourselves to learn a new skill. In doing so, we keep our brain muscles working, and it forces us to evolve constantly.
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            Working with children from all levels has made me appreciate the world around me even more. I hope we can take a step back to observe the world around us. Let’s reconnect with our inner child, push ourselves to be present, challenge ourselves, evolve, and be kind to one another. As life continues to unfold, let's learn from the children around us!
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

            <div className="mt-40 mb-20 flex justify-between">
                {/* Left link */}
                <Link to="/blog/When-the-Streets-of-Jember-Turn-into-a-Runway" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
                    <MdArrowBackIosNew className="ml-10 mr-2 text-custom-bronze" />
                    <span className="hidden sm:inline">When the Streets of Jember Turn into a Runway</span>
                </Link>

                {/* Right link */}
                <Link to="/blog/puerto-rico" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
                    <span className="hidden sm:inline">Puerto Rico: Tips, Tricks, and Hidden Gems</span>
                    <MdArrowForwardIos className="mr-10 ml-2 text-custom-bronze" />
                </Link>
            </div>  





            <Footer></Footer>

        </div>
    );
}
export default NovBookRec
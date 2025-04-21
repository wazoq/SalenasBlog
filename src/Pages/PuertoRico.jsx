import React, { useEffect } from 'react';
import Header from '../Components/Header';
import myImage from '../assets/PuertoRico1.jpg';
import myImage2 from '../assets/PuertoRico2.jpg';
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
          title: "Puerto Rico",
        });
          window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);
    return (
        <div className='w-full bg-black text-white min-h-screen'>

            <Header />

            <div className="flex justify-center mr-10 ml-10">
                <div className="space-y-4 mt-10 ">
                    <p className="flex justify-center text-xl text-white mb-2 mt-40">April 19</p>
                    <p className="text-center flex justify-center text-4xl md:text-6xl eb-garamond-normal custom-bronze mb-2">
                        Puerto Rico: Tips, Tricks, and Hidden Gems
                    </p>


                    <div className="max-w-[1200px] mx-auto "> {/* Adjust the max-width to match your image width */}
                        <img src={myImage} alt="" className="mx-auto w-auto h-auto" />


                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            The guide is based on personal experiences and research to help fellow travelers make the most of
                            their visit to Puerto Rico.
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            Puerto Rico, a small island in the Caribbean known for its captivating landscapes, waterfalls, and
                            the El Yunque National Tropical Rainforest. San Juan is the capital and it&#39;s filled with historical
                            sites. The island is filled with a rich history. The El Morro Fort is a huge fortress from the 16th
                            century that showcases the Spanish colonial military architecture. Old San Juan, known as El
                            Viejo San Juan, a colorful neighborhood with buildings dating back to the 16th century. It has
                            lush landscapes and is sprinkled with beautiful beaches. Puerto Rico is more than San Juan, so if
                            you visit, venture out to experience the island truly.
                        </p>

                        <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 custom-bronze">
                            Puerto Rico Tips and Tricks
                        </p>


                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            Like visiting any new country, it&#39;s important to respect locals, traditions, and culture. Immerse
                            yourself in understanding Puerto Rico by trying different foods, talking to locals, and visiting
                            historical sites. Stay in locally owned establishments and support local businesses. When tourists
                            come and stay in bigger chain resorts or buy from larger corporations, Life becomes harder for
                            locals in the long term and contributes to the island&#39;s colonization.
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            Despite many residents being able to speak English, learning a bit of Spanish will go a long way.
                            It helped me appreciate the island and get around.
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            Transportation can be a bit tricky in Puerto Rico except in San Juan, where you can easily find
                            options including Uber, buses, and taxis. Finding transportation outside of San Juan can be a bit
                            challenging. Consider renting a car if you plan to explore beyond San Juan.
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            Bring Cash! Even though many places accept cards, you&#39;ll find that many vendors prefer to be
                            paid in cash. It can be huts selling coconuts or market dealers. <span className="bold-text">USD is used in Puerto Rico.</span>
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            Local Shopping: Puerto Rico has great finds through local vendors including jewelry, leather
                            goods, spices, food, and garments. When we support local vendors, we are pouring back into the
                            hands of those who truly deserve it- the artists, makers and everyday people who work to bring
                            the island&#39;s beauty to life.
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            As a Muslim traveler, one thing to keep in mind is that halal food options are limited in Puerto
                            Rico. While halal spots are limited, there are plenty of seafood dishes and international cuisine
                            (like Asian, American, and even some Mediterranean options) that will make it easier to find
                            something that works. If you are a picky eater (ME) it will take a bit more time to find something
                            you like. It’s helpful to pack snacks in advance and check out menus beforehand.
                        </p>

                        <img src={myImage2} alt="" className="mx-auto w-auto h-auto mt-10" />

                        <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 custom-bronze">
                            Places to Visit
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            <span className="bold-text">El Yunque National Rainforest:</span> There are various ways you can visit the national rainforest.
                            You could go on a hike with a group, horseback riding, or rent an ATV (kinda like a four-

                            wheeler/dirt bike). You can also drive around the El Yunque National Rainforest with a car, you
                            can find different places to park as you get higher. Genuinely one of the prettiest places, it&#39;s so
                            high up in elevation that one can touch the clouds. There is wildlife all around you and the
                            waterfalls are a spectacular sight to see, no pictures can compare when you are in person.
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            <span className="bold-text">Luquillo Beach:</span> One of the calmest, dreamiest beaches that exists. The water is super clear and
                            it was a pretty light blue color—honestly looks unreal. The area around it has some local vendors
                            if you wanna buy snacks (bring cash). If you love calm waters, soft sand and just want to spend
                            the whole day relaxing, this is the place for you.
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            <span className="bold-text">Museo de Arte de Puerto Rico:</span> The art collection ranges from the 17th century to modern
                            pieces. The outdoor garden exhibit is stunning- peaceful, lush, and full of art and nature blended.
                            Doing a guided tour can help you understand the stories behind the piece. Or if you are feeling a
                            bit more extroverted- just ask the right attendants — who are super knowledgeable and love
                            sharing more about the pieces. If you enjoy art or are a historical enthusiast- Go to the museum!
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            Puerto Rico is a beautiful sight to witness. Being so close to the United States, a direct flight
                            from the DMV is less than five hours—making it an easy escape.  At just 100 miles long and 35
                            miles wide, it’s simple to find a corner of the island that speaks to you. San Juan may be the
                            heart, but the real magic is beyond the capital- venture out, connect with locals, and discover the
                            island&#39;s truest form. Puerto Rico is a secluded dream known for its unimaginable sights, kind-
                            hearted people, and enriching history— a diamond worth seeking.
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
                <Link to="/blog/mental-health" className="flex items-center text-4xl eb-garamond-normal custom-bronze mr-0 sm:mr-20 hover:text-current">Let's Talk About Mental Health

                    <MdArrowForwardIos className="ml-2 text-custom-bronze" /></Link></li>





            <Footer></Footer>

        </div>
    );
}
export default NovBookRec
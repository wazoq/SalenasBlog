import React, { useEffect } from "react";
import Header from "../Components/Header";
import myImage from "../assets/Jember.png";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import ReactGA from "react-ga4";

function Jember() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/blog/jember",
      title: "When the Streets of Jember Turn into a Runway",
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-white">
      <Header />

      <main className="px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Top nav / breadcrumbs */}
          <div className="flex items-center justify-between gap-4 mb-10">
            <Link
              to="/blog"
              className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              <MdArrowBackIosNew className="mr-1 text-xs" />
              Back to stories
            </Link>

            <p className="hidden sm:inline-flex items-center text-xs uppercase tracking-[0.25em] text-neutral-500">
              Travel Diary • East Java
            </p>
          </div>

          {/* Title + meta */}
          <header className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 text-center sm:text-left">
              December 1
            </p>
            <h1 className="text-center sm:text-left text-4xl md:text-5xl lg:text-6xl eb-garamond-normal custom-bronze leading-tight">
              When the Streets of Jember Turn into a Runway
            </h1>
          </header>

          {/* Article card */}
          <article className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_18px_60px_rgba(0,0,0,0.85)] overflow-hidden">
            {/* Hero image */}
            <div className="relative">
              <img
                src={myImage}
                alt="Jember Fashion Carnaval street runway"
                className="w-full h-[260px] sm:h-[360px] md:h-[420px] object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                <p className="inline-flex items-center px-3 py-1 rounded-full bg-black/50 border border-white/10 text-xs uppercase tracking-[0.2em] text-neutral-200">
                  Jember Fashion Carnaval
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="px-5 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed eb-garamond-normal text-neutral-100 first-letter:text-5xl first-letter:font-semibold first-letter:mr-3 first-letter:float-left first-letter:text-custom-bronze">
                In the heart of East Java, Indonesia, lies a small city where
                breathtaking beauty exists – Jember is its name. I had the
                fortunate opportunity to explore this vibrant area, meeting
                indigenous communities, and took away an array of unforgettable
                memories.
              </p>

              <p className="mt-6 text-lg leading-relaxed eb-garamond-normal text-neutral-200">
                One of my favorite experiences was participating in the Jember
                Fashion Carnaval (JFC). The fashion show was a breathtaking
                spectacle of art, creativity, and imagination, unlike anything I
                had ever seen before. The carnival takes place at Jember City
                Square and unfolds over three incredible days, with costumes and
                performances becoming increasingly spectacular each day.
              </p>

              <p className="mt-6 text-lg leading-relaxed eb-garamond-normal text-neutral-200">
                Each day brought about a new theme. The first day featured a pet
                carnival with a mini zoo display. Animals coexisting with
                fashion reflect the vast creativity of Indonesia. The animals
                ranged in species and sizes, including native birds, dogs, cats,
                horses, camels, snakes, and even sheep. The second day focused
                on celebrating Indonesia&apos;s rich diversity through brilliant
                performances and cultural awareness, highlighting the unique
                cultures of each region. The grand finale took place on the
                third day, displaying JFC’s best work. Bringing out some of the
                best costumes, vibrant performances, and celebration of
                creativity, combined with culture. Blending Indonesia’s cultural
                richness with global influences, examples include China, Egypt,
                and Japan. Also, the JFC’s show even included a human anatomy
                theme, which focused on evolution. Each of the costumes told a
                story of evolution, innovation, and identity, creating a
                spectacular finale that symbolized the spirit of “Evoluxion”.
              </p>

              <p className="mt-6 text-lg leading-relaxed eb-garamond-normal text-neutral-200">
                Despite the weather being a bit hot, temperatures reaching 32 °C,
                and having a downpour right as the last show ended, the show
                prevailed. The carnival brought together hundreds of young
                individuals showcasing beautifully designed costumes.
                Participants came from all walks of life, including students,
                local youth, and community members who were deeply involved in
                creating and performing their own designs. I even saw special
                talents such as Yuto Ono, a Japanese live-drawing artist who
                gave a captivating performance, and Arunica, along with the Top
                4 winners of Puteri Indonesia 2025, who proudly represented
                Indonesia at the event. The parade stretched 3.6 kilometers
                (2.24 miles) through the city streets, transforming Jember into
                a vibrant, citywide spectacle that drew thousands of
                participants and spectators alike.
              </p>

              <p className="mt-6 text-lg leading-relaxed eb-garamond-normal text-neutral-200">
                Reflecting, I realize Jember Fashion Carnaval (JFC) was one of
                the best shows I have ever witnessed. The 3 days were well
                organized, bringing various vendors, clothing (handmade batiks),
                food stalls, and various organizations coming together. To
                anyone thinking about attending JFC next year, I highly
                recommend it. Indonesia is far beyond Bali – exploring parts of
                East Java will leave you awestruck. Indonesians are some of the
                kindest and most hospitable people. The cuisine, combined with
                the fashion show, will leave you yearning to stay longer than
                the 30-day visa.
              </p>

              <hr className="mt-10 border-white/10" />

              <div className="mt-6 space-y-1">
                <p className="text-lg eb-garamond-normal text-neutral-100">
                  Thank you,
                </p>
                <p className="text-lg eb-garamond-normal text-neutral-100">
                  Love, <span className="custom-bronze">Salena Chaudhry</span>
                </p>
              </div>
            </div>
          </article>

          {/* Next article nav */}
          <nav className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Next Story
              </p>
              <Link
                to="/blog/What-Children-Can-Teach-Us"
                className="group inline-flex items-center text-2xl sm:text-3xl eb-garamond-normal custom-bronze hover:text-white transition-colors"
              >
                What Children Can Teach Us
                <MdArrowForwardIos className="ml-2 text-custom-bronze group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Jember;

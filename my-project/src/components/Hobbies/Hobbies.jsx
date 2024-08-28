import React, { useRef } from 'react';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Img1 from '.././assets/carousseltest2/img1.jpg';
import Img2 from '.././assets/carousseltest2/img2.jpg';
import Img3 from '.././assets/carousseltest2/img3.jpg';
import Img4 from '.././assets/carousseltest2/img4.jpg';
import Img5 from '.././assets/carousseltest2/img5.jpg';
import Img6 from '.././assets/carousseltest2/img6.jpg';
import Img7 from '.././assets/carousseltest2/img7.jpg';
import Img8 from '.././assets/carousseltest2/img8.png';
import Img9 from '.././assets/carousseltest2/img9.png';

const hobbiesList = [
  { id: 1, title: "gaming", img: Img6, text: "Platinum Trophies" },
  { id: 2, title: "cinema", img: Img7, text: "Horror Movies" },
  { id: 3, title: "india", img: Img1, text: "Travel in India" },
  { id: 4, title: "newyork", img: Img5, text: "Live in NYC" },
  { id: 5, title: "eldenring", img: Img9, text: " Die (too much) in Elden Ring" },
  { id: 6, title: "food", img: Img2, text: "Eat food" },
  { id: 7, title: "technomusic", img: Img3, text: "Dance like nobody's watching" },
  { id: 8, title: "deathstranding", img: Img8, text: "Uber Eat but make it scary" },
  { id: 9, title: "morefood", img: Img4, text: "Eat more food" },
];

const Hobbies = () => {
  const flickingRef = useRef(null);

  const goToPrev = () => {
    flickingRef.current.prev();
  };

  const goToNext = () => {
    flickingRef.current.next();
  };

  return (
    <div>
      <main className="bg-black text-white py-16">
        <div className="container">
          <section className="lg:max-w-[1000px] ml-auto lg:text-right">
            <div className="space-y-5 pb-10">
              <p className="text-sm opacity-70 tracking-widest transform translate-y-3">- Hobbies</p>
              <h1 className="text-2xl lg:text-3xl">More about what's in my mind.</h1>
              <p className='text-sm leading-6 opacity-90'>
                When I'm not immersed in re-coding the world, you’ll often find me savoring bao buns with my daughter during the day, sharing laughter and creating memories. As the evening sets in, I switch gears and dive into epic battles on my PS5, where I take on the dark forces with unwavering determination. It’s a balance of indulgence and adventure, where family time and gaming each have their place.
              </p>
            </div>
          </section>

          <Flicking
            circular={true}
            className="rounded-box"
            ref={flickingRef}
          >
            {hobbiesList.map((hobby) => (
              <div key={hobby.id} className="grid-panel relative group flex justify-center items-center">
                <img src={hobby.img} alt={hobby.title} className="h-96 w-96 object-cover group-hover:blur-sm transition duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/60 text-center lowercase font-medium text-4xl px-2 py-1">{hobby.text}</p>
                </div>
              </div>
            ))}
          </Flicking>

          <div className="flex justify-center mt-4">
            <button
              onClick={goToPrev}
              className="bg-gray-800 text-white p-2 rounded-full mx-2 hover:bg-gray-600"
            >
              &#9664;
            </button>
            <button
              onClick={goToNext}
              className="bg-gray-800 text-white p-2 rounded-full mx-2 hover:bg-gray-600"
            >
              &#9654;
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hobbies;

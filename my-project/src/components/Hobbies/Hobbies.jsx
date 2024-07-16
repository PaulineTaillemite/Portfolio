import React from 'react';

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
  return (
    <div>
      <main className="bg-darkcolor text-white py-16">
        <div className="container">
          <section className="lg:max-w-[500px] ml-auto lg:text-right">
            <div className="space-y-5 pb-10">
              <p className="text-sm opacity-70 tracking-widest transform translate-y-3">- Hobbies</p>
              <h1 className="text-2xl lg:text-3xl">More about what's in my mind.</h1>
            </div>
          </section>

          <div className="carousel carousel-end rounded-box">
            {hobbiesList.map((hobby) => (
              <div key={hobby.id} className="carousel-item relative group">
                <img src={hobby.img} alt={hobby.title} className="h-128 w-auto object-cover group-hover:blur-sm transition duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white uppercase font-semibold text-sm px-2 py-1">{hobby.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hobbies;
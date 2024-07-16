import React from 'react'

/* 
TEST EN DUR POUR LE CARROUSSEL */
import Img1 from '.././assets/carousseltest2/img1.jpg';
import Img2 from '.././assets/carousseltest2/img2.jpg';
import Img3 from '.././assets/carousseltest2/img3.jpg';
import Img4 from '.././assets/carousseltest2/img4.jpg';
import Img5 from '.././assets/carousseltest2/img5.jpg';
import Img6 from '.././assets/carousseltest2/img6.jpg';
import Img7 from '.././assets/carousseltest2/img7.jpg';
import Img8 from '.././assets/carousseltest2/img8.png'
import Img9 from '.././assets/carousseltest2/img9.png'

const hobbiesList=[
    {id : 1, title : "gaming", img : Img6 , text : "Platinum Trophies"},
    {id : 2, title : "cinema", img : Img7 , text : "Horror Movies"},
    {id : 3, title : "india", img : Img1 , text : "Travelling in India"},
    {id : 4, title : "newyork", img : Img5 , text : "Living in NYC"},
    {id : 5, title : "eldenring", img : Img9 , text : " Dying (too many times) in Elden Ring"},
    {id : 6, title : "food", img : Img2 , text : "Eat food"},
    {id : 7, title : "technomusic", img : Img3 , text : "Dance like nobody's watching"},
    {id : 8, title : "deathstranding", img : Img8 , text : "Uber Eat but make it scary"},
    {id : 9, title : "morefood", img : Img4 , text : "Eat MORE food"},
]





const Hobbies = () => {
    return (
        <div>
            <main className='bg-darkcolor text-white py-10'>
                <div className="container">


                    <section className='lg:max-w-[500px] ml-auto lg:text-right'>
                        <div className="space-y-5 pb-10">
                            <p className='text-sm opacity-70 tracking-widest transform translate-y-3'>- Hobbies</p>
                            <h1 className='text-2xl lg:text-3xl'>More about what's in my mind.</h1>
                        </div>
                    </section>

                    <div className="carousel carousel-end rounded-box ">

                        <div className="carousel-item relative group">
                            <img src={Img6} alt="Gaming" className="h-128 w-auto object-cover group-hover:blur-sm transition duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg px-2 py-1">Gaming</p>
                            </div>
                        </div>

                        <div className="carousel-item relative group">
                            <img src={Img7} alt="Cinema" className="h-128 w-auto object-cover group-hover:blur-sm transition duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg px-2 py-1">Cinema</p>
                            </div>
                        </div>

                        <div className="carousel-item relative group">
                            <img src={Img1} alt="India" className="h-128 w-auto object-cover group-hover:blur-sm transition duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg px-2 py-1">India</p>
                            </div>
                        </div>

                        <div className="carousel-item relative group">
                            <img src={Img5} alt="NewYork" className="h-128 w-auto object-cover group-hover:blur-sm transition duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg px-2 py-1">New York</p>
                            </div>
                        </div>

                        <div className="carousel-item relative group">
                            <img src={Img9} alt="EldenRing" className="h-128 w-auto object-cover group-hover:blur-sm transition duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg px-2 py-1">Elden Ring</p>
                            </div>
                        </div>

                        <div className="carousel-item relative group">
                            <img src={Img2} alt="Baos" className="h-128 w-auto object-cover group-hover:blur-sm transition duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg px-2 py-1">BaosZi</p>
                            </div>
                        </div>

                        <div className="carousel-item relative group">
                            <img src={Img3} alt="TechnoMusic" className="h-128 w-auto object-cover group-hover:blur-sm transition duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg px-2 py-1">Techno Music</p>
                            </div>
                        </div>

                        <div className="carousel-item relative group">
                            <img src={Img8} alt="Death Stranding" className="h-128 w-auto object-cover group-hover:blur-sm transition duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg px-2 py-1">Death Stranding</p>
                            </div>
                        </div>

                        <div className="carousel-item relative group">
                            <img src={Img4} alt="MoreBaozis" className="h-128 w-auto object-cover group-hover:blur-sm transition duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg px-2 py-1">More Baos</p>
                            </div>
                        </div>



                    </div>

                    {/*  {
            hobbiesList.map((hobby) =>{
                            return(
                                <div 
                                  key={hobby.id}
                                  className='space-y-4 px-4 items-center justify-center'
                                  >
                                  <img src={hobby.img} alt="" className='w-[170px] h-[100px]'/>
                                </div>
                                
                            );
                        })
                    } */}


                </div>
            </main>


        </div>
    )
}

export default Hobbies
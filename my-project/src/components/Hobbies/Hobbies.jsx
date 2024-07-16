import React from 'react'
import DeathStranding from '.././assets/caroussel_hobbies/deathstranding.avif';
import EldenRing from '.././assets/caroussel_hobbies/eldenring.jpg';
import Food from '.././assets/caroussel_hobbies/food.jpg';
import India from '.././assets/caroussel_hobbies/india.jpg';
import Naruto from '.././assets/caroussel_hobbies/naruto.webp';
import NewYork from '.././assets/caroussel_hobbies/newyorkcity.jpg';
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


/* ESSAYER LA MÊME CHOSE EN MAPPANT LE TABLEAY */
const hobbiesList = [
    { id: 1, title: "Elden Ring", img: EldenRing, link: "#" },
    { id: 2, title: "BaoZis", img: Food, link: "#" },
    { id: 3, title: "India", img: India, link: "#" },
    { id: 4, title: "Naruto", img: Naruto, link: "#" },
    { id: 5, title: "Death Stranding", img: DeathStranding, link: "#" },
    { id: 6, title: "NewYork", img: NewYork, link: "#" }
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

                        <div className="carousel-item">
                            <img src={Img6} alt="Gaming" className='h-128 w-auto object-cover' />
                        </div>
                        <div className="carousel-item">
                            <img src={Img7} alt="Cinema" className='h-128 w-auto object-cover' />
                        </div>
                        <div className="carousel-item">
                            <img src={Img1} alt="India" className='h-128 w-auto object-cover' />
                        </div>
                        <div className="carousel-item">
                            <img src={Img5} alt="Newyork" className='h-128 w-auto object-cover' />
                        </div>
                        <div className="carousel-item">
                            <img src={Img9} alt="EldenRing" className='h-128 w-auto object-cover' />
                        </div>
                        <div className="carousel-item">
                            <img src={Img2} alt="Food" className='h-128 w-auto object-cover' />
                        </div>
                        <div className="carousel-item">
                            <img src={Img3} alt="TechnoMusic" className='h-128 w-auto object-cover' />
                        </div>
                        <div className="carousel-item">
                            <img src={Img8} alt="DeathStranding" className='h-128 w-auto object-cover' />
                        </div>
                        <div className="carousel-item">
                            <img src={Img4} alt="Food" className='h-128 w-auto object-cover' />
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
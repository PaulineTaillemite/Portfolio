import React from 'react'
import DeathStranding from '.././assets/caroussel_hobbies/deathstranding.avif';
import EldenRing from '.././assets/caroussel_hobbies/eldenring.jpg';
import Food from '.././assets/caroussel_hobbies/food.jpg';
import India from '.././assets/caroussel_hobbies/india.jpg';
import Naruto from '.././assets/caroussel_hobbies/naruto.webp';
import NewYork from '.././assets/caroussel_hobbies/newyorkcity.jpg'

const hobbiesList = [
    {id: 1, title: "Elden Ring", img: EldenRing, link: "#"},
    {id: 2, title: "BaoZis", img: Food, link: "#"},
    {id: 3, title: "India", img: India, link: "#"},
    {id: 4, title: "Naruto", img: Naruto, link: "#"},
    {id: 5, title: "Death Stranding", img: DeathStranding, link: "#"},
    {id: 6, title: "Naruto", img: Naruto, link: "#"}
]


const Hobbies = () => {
  return (
    <div>
        <main className='bg-darkcolor text-white'>
        <div className="container"></div>
        </main>


    </div>
  )
}

export default Hobbies
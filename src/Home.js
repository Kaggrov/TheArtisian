import React from 'react'
import "./Home.css"
import img from './assets/banner.jpeg';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
       <div className='home__container'>
           <img 
           className='home__image'
           src={img}
           alt="banner"
           />

            <div className='home__row'>
                <Product 
                    id='1'
                    title="The Lean Startup"
                    price = {29.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    rating={3}
                />
                <Product
                    id='2'
                    title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB"
                    price ={399.00}
                    image="https://m.media-amazon.com/images/I/61tE7IcuLmL._SX342_.jpg"
                    rating={5}
                />
            </div>

            <div className='home__row'>
                <Product
                    id='3'
                    title="Philips Norelco Multigroomer "
                    price={20.99}
                    image="https://m.media-amazon.com/images/I/91qmPJKT87L._SY355_.jpg"
                    rating ={4}
                />
                <Product
                    id='4'
                    title="Pantene Silver Expressions"
                    price = {10.49}
                    image = "https://m.media-amazon.com/images/I/71Hts9Tr46L._SY355_.jpg"
                    rating = {4}
                />
                <Product
                    id='5'
                    title="Gaming Headset, Gaming Headphones with Microphone 7.1"
                    price = {22.99}
                    image = "https://m.media-amazon.com/images/I/71UPQIwThLL._AC_SY355_.jpg"
                    rating ={5}
                />

            </div>

            <div className='home__row'>
                <Product
                    id='6'
                    title="SAMSUNG 55-Inch Class QLED Q80A Series"
                    price={2999.00}
                    image="https://m.media-amazon.com/images/I/71ihMv1q-kL._AC_SX355_.jpg"
                    rating ={4}
                />

            </div>

        </div>

       
    </div>
  )
}

export default Home
import React from 'react'
import "./Checkout.css";
import img from './assets/ad.jpg';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const[{basket},dispatch] = useStateValue();
    // console.log(basket.image);

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img 
                className='checkout__ad'
                src={img}
                alt=''
            />
            <div>
                <h2 className='checkout__title'>
                    Your Shopping Basket
                </h2>

                {
                    basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title = {item.title}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))
                }
            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal/>
        </div>

    </div>
  )
}

export default Checkout;
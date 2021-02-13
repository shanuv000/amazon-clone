import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (<div className='home'>
        <div className="home__container">
            <img className='home_image'
                 src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB661598783_.jpg"
                 alt=""/>

            <div className="home__row">
                <Product id={89321}
                         title='Kids tablet with certified eye protection'
                         rating={3}
                         price={29.99}
                         image='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Tablets/Flexible_Desktop_CatCard_1X._SY304_CB659869742_.jpg'/>

                <Product title='McAfee Antivirus - 1 User, 3 Years (Email Delivery in 2 hours- No CD)'
                         rating={4}
                         price={699}
                         image='https://images-eu.ssl-images-amazon.com/images/I/41uCgiR4WbL._AC_SX184_.jpg'/>

            </div>

            <div className="home__row">
                <Product id={92039}
                         title='Echo Dot (3rd Gen) – Smart speaker with Alexa (Grey)'
                         rating={4}
                         price={8000}
                         image='https://images-na.ssl-images-amazon.com/images/I/61RyEv5mnNL._SX679_.jpg'/>
                <Product id={73930} title='Sony WH-1000XM4'
                         rating={4}
                         price={24990}
                         image='https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._SX522_.jpg'/>
                <Product id={62829} title='Unfinished: A Memoir'
                         rating={4}
                         price={531}
                         image='https://images-na.ssl-images-amazon.com/images/I/417FIfX3VTL._SX326_BO1,204,203,200_.jpg'/>
            </div>

            <div className="home__row">
                <Product id={51810}
                         title='All-new Fire TV Stick Lite with Alexa Voice Remote Lite | Stream HD Quality Video '
                         rating={4}
                         price={2999}
                         image='https://images-na.ssl-images-amazon.com/images/I/61ME1vElBKL._SX679_.jpg'/>
            </div>


        </div>
    </div>)
}

export default Home;
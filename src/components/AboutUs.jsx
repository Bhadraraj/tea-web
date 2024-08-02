import React from 'react'
import aboutusimg from '../images/aboutusimg2.png'
import abtimgone from '../images/abtimg1.png'
const AboutUs = () => {
    return (
        <>
            <div >
                <h2 className='abtpgimg'>ABOUT US</h2>
                <div className="row pt-2">
                    <p><b>Welcome to SereniTea Hills, where the artistry of tea meets the tranquility of nature.</b>
                        <br />
                        At SereniTea Hills, we believe that every cup of tea tells a story-a story of meticulous craftsmanship, of natural purity, and of serene moments shared. Our journey began with a passion for tea, ignited by the serene landscapes and rich cultural heritage of tea-growing regions around the world.
                        SereniTea Hills is beautifully carpeted over the Nilgiris and over time has earned a niche for itself in the tea industry. SereniTea Hills has wooed connoisseurs of tea and is eagerly sought after at auction centers -both for domestic sales and the overseas market. Direct exports to form part of the STH portfolio. <br />
                    </p>
                </div>
                <img src={aboutusimg} className='aboutusimg' alt="" />
                <div className="row py-4"> 
                    <div className="col-md-6 order-md-2 text-start">
                        <p>
                            <h4><b>Our Story</b></h4>
                            Over a period of years the company has modernized the factories which has resulted in increased tea production. Both the factories manufacture high quality High Grown Orthodox Black and Specialty Teas and Welbeck produces certified Organic and Green Teas. <br />
                            <br />
                            Our mission goes beyond delivering exceptional teas; it's about fostering moments of tranquility and mindfulness in your daily life. Whether you're seeking a comforting brew to start your morning, a refreshing iced tea for a sunny afternoon, or a soothing blend to unwind in the evening, Serenity Hills offers a curated selection to suit every palate and occasion. <br />
                            <br />
                            Rooted in sustainability and ethical sourcing, we work closely with tea growers who share our values, ensuring that each cup supports responsible farming practices and enriches the communities that cultivate our teas. <br />
                            <br />
                            Join us on a journey of discovery and delight in the world of tea. Explore our diverse range of blends, from classic favorites to innovative creations, crafted to elevate your tea experience. Embrace the serenity of each cup, and let Serenity Hills be your guide to a mindful, flavorful journey through the art of tea. <br />
                            <br />
                            Savor the moment. Embrace serenity. Welcome to Serenity Hills.
                        </p>
                    </div>
                    <div className="col-md-6 order-md-1 d-flex justify-content-center align-items-center abtimgone">
                        <img src={abtimgone} alt="" />
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <div className='py-4'>
                            <h4><b>Quality at Serenity Hills</b></h4>
                            <p>At Serenity Hills, quality is paramount in everything we do. We are dedicated to sourcing the finest tea leaves from around the world, selecting only those that meet our stringent standards for flavor, aroma, and freshness. Our teas undergo rigorous quality control processes at every stage of production, from cultivation to packaging. We prioritize sustainability and ethical sourcing practices, ensuring that each cup of Serenity Hills tea not only delights the senses but also upholds our commitment to environmental stewardship. Our goal is to provide you with teas that consistently exceed expectations, embodying the essence of purity and excellence.</p>
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h4><b>Eco-Friendly Packaging at Serenity Hills:</b></h4>
                            <p>At Serenity Hills, we are committed to sustainability and reducing our environmental footprint. Our eco-friendly packaging initiatives are an integral part of this commitment.</p>
                            <br />
                            <p>Our eco-friendly packaging initiatives reflect our dedication to preserving the environment while delivering exceptional quality teas. At Serenity Hills, every cup of tea is not only a moment of serenity but also a step towards a greener future. Join us in enjoying tea responsibly, knowing that your choice supports sustainable practices and environmental stewardship.</p>
                        </div>

                    </div>
                </div >
            </div >
        </>
    )
}

export default AboutUs
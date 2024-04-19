import React from "react";
import { assets } from "../../assets/assets";
import Product from "../Product/Product";
import "./Home.css";

function Home() {

    const data = [
        {
            id: 1,
            title: "The Psychology of Money",
            image: assets.Product1,
            price: "19.99",
            rating: 5
        },
        {
            id: 2,
            title: "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
            image: assets.Product2,
            price: "239.0",
            rating: 4
        },
        {
            id: 3,
            title: "Samsung LC49RG9ØSSUXEN 49' Curved LED Gaming Monitor",
            image: assets.Product3,
            price: "199.99",
            rating: 3
        },
        {
            id: 4,
            title: "Amazon Echo (3rd generat ion) I Smart speaker with Alexa, Charcoal Fabric",
            image: assets.Product4,
            price: "98.99",
            rating: 5
        },
        {
            id: 5,
            title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 1286B) — Silver (4th Generation)",
            image: assets.Product5,
            price: "598.99",
            rating: 4
        },
    ];

    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src={assets.home_bg} alt="" />

                <div className="home_row">
                    <Product data={data[0]} />
                    <Product data={data[1]} />
                </div>

                

                <div className="home_row">
                <Product data={data[2]} />
                <Product data={data[3]} />
                <Product data={data[4]} />
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div>

                <div className="home_row">
                <Product data={data[4]} />
                    {/* Product */}
                </div>
            </div>
        </div>
    );
}

export default Home;

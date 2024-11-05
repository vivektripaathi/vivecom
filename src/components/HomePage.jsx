import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css"
import "../styles/ProductListStyle.css";

function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data.products.slice(0, 5)));
    }, []);

    return (
        <>
            <div id="hero-container">
                <img src="https://i.ibb.co/K65NyCn/home-page.jpg" alt="home-page" border="0" />
                <h1>📈 Trending Products</h1>
            </div>

            <div id="flex-container" className="product-list-page">
                {products.length > 0 && products.map((eachProduct, index) => {
                    return (
                        <Link to={`/product/${eachProduct.id}`} id="flex-item">
                            <div id="product-head" key={index}>
                                <img src={eachProduct.thumbnail} alt={eachProduct.id + " image"} />
                                <h2>{eachProduct.title}</h2>
                            </div>
                            <div id="product-info">
                                <h2>
                                    <span id="dolar-span">$</span>
                                    {eachProduct.price}
                                </h2>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div id="explore-button-container">
                <Link to="/products">
                    <button className="explore-all-button">Explore All Products</button>
                </Link>
            </div>
        </>
    );
}

export default HomePage;

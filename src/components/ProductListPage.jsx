import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductListStyle.css";

function ProductListPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data.products));
    }, []);

    return (
        <>
            <h1 id="products-heading">🛒 HAPPY SHOPPING</h1>
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
                                {/* <PiShoppingCart id="shopping-cart"/> */}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}

export default ProductListPage;

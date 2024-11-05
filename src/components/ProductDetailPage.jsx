import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetail.css";

function ProductDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [id]);

    const handleClick = () => {
        navigate("/checkout", { state: { product } });
    };

    if (!product) return <p>Loading...</p>;

    return (
        <>
        <h1 id="details-heading">📦 PRODUCT DETAILS</h1>
        <div id="single-product-container">
            <div id="flex-item">
                <img src={product.thumbnail} alt={product.title + " image"} />
            </div>
            <div id="details" className="flex-item">
                <h2 id="brand">{product.brand}</h2>
                <h2 id="title">{product.title}</h2>
                <h2 id="description">"{product.description}"</h2>
                <span>category: {product.category}</span>

                <div id="price-container">
                    <h2 id="price">
                        <span>$</span>
                        {product.price}
                    </h2>
                </div>
                
                <button onClick={handleClick}>Buy Now</button> 

            </div>
        </div>
        </>
    );
}

export default ProductDetailPage;

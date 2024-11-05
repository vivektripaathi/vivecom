import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/CheckoutPage.css";

function CheckoutPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state?.product;

    const handlePayment = (isSuccess) => {
        navigate("/payment-result", { state: { success: isSuccess } });
    };

    if (!product) return <p>No product selected.</p>;

    return (
        <div id="checkout-page">
            <h1>🧾 Checkout</h1>
            <div id="checkout-details">
                <div id="product-info">
                    <img src={product.thumbnail} alt={product.title} id="product-image" />
                    <div id="product-summary">
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price}</p>
                        <p>Quantity: 1</p>
                        <p>Total: ${product.price}</p>
                    </div>
                </div>
                
                <div id="delivery-info">
                    <h3>Shipping Information</h3>
                    <p>Name: Cillian Murphy</p>
                    <p>Address: Watery Lane, in Small Heath, Birmingham</p>
                    <p>Estimated Delivery: 1-2 Business Days</p>
                </div>

                <div id="payment-method">
                    <h3>Payment Method</h3>
                    <label>
                        <input type="radio" name="payment" value="credit-card" /> Credit Card
                    </label>
                    <label>
                        <input type="radio" name="payment" value="paypal" /> PayPal
                    </label>
                    <label>
                        <input type="radio" name="payment" value="bank-transfer" /> Bank Transfer
                    </label>
                </div>

                <div id="checkout-buttons">
                    <button id="payment-btn" onClick={() => handlePayment(true)}>Make Payment</button>
                    <button id="back-btn" onClick={() => handlePayment(false)}>Cancel Purchase</button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;

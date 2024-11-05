import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PaymentResultPage() {
    const location = useLocation();
    const { success } = location.state || { success: false };
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products");
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
            {success ? (
                <h1 id="details-heading">🎉 Payment Successful!</h1>
            ) : (
                <h1 id="details-heading">🔴 Payment Failed!</h1>
            )}
            <button onClick={handleClick}> Explore More Products</button> 
        </div>
    );
}

export default PaymentResultPage;

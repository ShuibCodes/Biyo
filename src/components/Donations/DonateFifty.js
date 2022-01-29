import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "@components/ui/button";
const stripePromise = loadStripe(
    "pk_test_51KLQMJKuf4Hvo7riJCJe20dFYD3bvUqoMAF6C0pYLAA3oFbzAopHccdqPc6gC4cOpCaDeON7AHBtWreS7BUeDzk700BB7lgxBG"
);

const DonateFifty = () => {
    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    // Product
    const waterTruck = {
        price: "price_1KLXWxKuf4Hvo7riGXkq1Ioi",
        quantity: 1,
    };

    // Checkout Options
    const checkoutOptions = {
        mode: "payment",
        lineItems: [waterTruck],
        successUrl: `http://localhost:8000/`, // You can set custom page here
        cancelUrl: `http://localhost:8000/`, // ----------------
    };

    const redirectToCheckout = async () => {
        setLoading(true);
        const stripe = await stripePromise;
        const result = await stripe.redirectToCheckout(checkoutOptions);

        if (result.error) setStripeError(result.error.message);
        setLoading(false);
    };

    if (stripeError) alert(stripeError);

    // Return
    return (
        <div>
            <Button
                style={{ textDecoration: "none" }}
                color="gradient"
                size="small"
            >
                <button
                    style={{
                        textDecoration: "none",
                        border: "transparent",
                        fontSize: "14px",
                        color: "black",
                    }}
                    onClick={redirectToCheckout}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <p
                            style={{
                                fontSize: "17px",
                            }}
                        >
                            Connecting...
                        </p>
                    ) : (
                        <p
                            style={{
                                fontSize: "17px",
                                color: "white",
                            }}
                        >
                            Donate £50
                        </p>
                    )}
                </button>
            </Button>
        </div>
    );
};

export default DonateFifty;

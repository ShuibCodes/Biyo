import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "@components/ui/button";
const stripePromise = loadStripe(
    "pk_test_51KLQMJKuf4Hvo7riJCJe20dFYD3bvUqoMAF6C0pYLAA3oFbzAopHccdqPc6gC4cOpCaDeON7AHBtWreS7BUeDzk700BB7lgxBG"
);

const DonateTen = () => {
    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    // £10 donation

    // Product
    const waterTruck = {
        price: "price_1KLXW6Kuf4Hvo7rizxwvRxac",
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
            <Button style={{ textDecoration: "none" }} color="gradient">
                <button
                    style={{
                        textDecoration: "none",
                        border: "transparent",
                        fontSize: "18px",
                        color: "white",
                    }}
                    onClick={redirectToCheckout}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <p
                            style={{
                                fontSize: "15px",
                            }}
                        >
                            Connecting...
                        </p>
                    ) : (
                        <p
                            style={{
                                fontSize: "18px",
                                color: "white",
                            }}
                        >
                            Donate £10
                        </p>
                    )}
                </button>
            </Button>
        </div>
    );
};

export default DonateTen;

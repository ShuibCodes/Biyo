import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "@components/ui/button";
const stripePromise = loadStripe(
    "pk_live_51KMorMEfur5tTA3RkeWP4fbgy2hInS0Kb8EDSnnY5EijvbRn1AicPlQ0VWo50i574YNKLOP6Da3CvIPF6S8AcExh00Xuc7KKgN"
);

const DonateFifty = () => {
    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    // Product
    const waterTruck = {
        price: "price_1KO6MzEfur5tTA3R1WBHYsh1",
        quantity: 1,
    };

    // Checkout Options
    const checkoutOptions = {
        mode: "payment",
        lineItems: [waterTruck],
        successUrl: `https://biyo.so/Success/`, // You can set custom page here
        cancelUrl: `https://biyo.so/`, // ----------------
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
                            Donate $50
                        </p>
                    )}
                </button>
            </Button>
        </div>
    );
};

export default DonateFifty;

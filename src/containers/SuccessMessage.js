import React from "react";
import { ErroaSection } from "../containers/404-error/style";
import Button from "../components/ui/button";
import { Link } from "gatsby";
const SuccessMessage = () => {
    return (
        <ErroaSection>
            <h1>Thank you for your donation !</h1>

            <p>
                You should receive an email of payment confirmitation in the
                next few minutes
            </p>
            <Link to="/">
                <Button path="/" color="gradient">
                    Back to home page
                </Button>
            </Link>
        </ErroaSection>
    );
};

export default SuccessMessage;

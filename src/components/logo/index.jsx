import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import LiteLogo from "@assets/images/logo/logo.png";
import { HeaderLogoArea } from "./style";

const Logo = ({ className }) => {
    return (
        <HeaderLogoArea className={className}>
            <Link to="/">
                {/* <img className="logo-main" src={LiteLogo} alt="Logo" /> */}
                <h1
                    style={{
                        color: "#48CAE4",
                        fontSize: "30px",
                        fontWeight: "bold",
                        textDecoration: "none",
                    }}
                >
                    biyo
                    <span
                        style={{
                            color: "red",
                            fontSize: "60px",
                            fontWeight: "bold",
                            textDecoration: "none",
                        }}
                    >
                        .
                    </span>
                    so
                </h1>
            </Link>
        </HeaderLogoArea>
    );
};

Logo.propTypes = {
    className: PropTypes.string,
};

export default Logo;

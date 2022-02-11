/** @jsx jsx */
/* eslint-disable */
import { jsx } from "theme-ui";
import HeartIcon from "@assets/images/svg/heart.svg";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "@components/logo";
import { graphql, useStaticQuery, Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    FooterWrap,
    FooterMain,
    WidgetItem,
    AboutWidget,
    AboutWidgetText,
    WidgetTotalRaised,
    RaisedTitle,
    CopyrightText,
    TaisedAmount,
    WidgetTitle,
    WidgetGallery,
    GalleryItem,
    WidgetMenuWrap,
    NavMenu,
    NavItem,
    FooterShapeLayer,
} from "./style";

const Footer = () => {
    const footerQuery = useStaticQuery(graphql`
        query FooterQuery {
            footerJson {
                id
                quickLink {
                    path
                    text
                }
                quickLinkTwo {
                    path
                    text
                }
                gallery {
                    galleryitem {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    path
                }
                footerShapeImage {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                footerAbout
                raisedAmount
                menuTitle
                galleryTitle
            }
        }
    `);
    const {
        footerAbout,
        raisedAmount,
        menuTitle,
        galleryTitle,
        gallery,
        quickLink,
        quickLinkTwo,
        footerShapeImage,
    } = footerQuery.footerJson;
    const footerimage = getImage(footerShapeImage);
    return (
        <footer className="page-footer font-small blue pt-4">
            <hr className="clearfix w-100 d-md-none pb-0" />
            <div className="text-center">
                <div className="row">
                    <div className="">
                        <div className="">
                            <h1
                                style={{
                                    color: "#48CAE4",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    textDecoration: "none",
                                }}
                            >
                                biyo
                                <span
                                    style={{
                                        color: "red",
                                        fontSize: "55px",
                                        fontWeight: "bold",
                                        textDecoration: "none",
                                    }}
                                >
                                    .
                                </span>
                                so
                            </h1>
                        </div>

                        <p>Saving lives by providing clean water</p>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">
                    © 2022 Copyright
                </div>
                <div className="footer-copyright text-center py-3">
                    <p>
                        Designed & Developed by{" "}
                        <a
                            href="https://shuayb-codes.webflow.io/"
                            style={{ textDecoration: "none" }}
                        >
                            ShuaybCodes
                        </a>{" "}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

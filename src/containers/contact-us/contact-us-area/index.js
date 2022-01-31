import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import ContactForm from "@components/contact-from";
import { StaticImage } from "gatsby-plugin-image";
import {
    SectionArea,
    ContactColunm,
    ContactMapArea,
    ContactInfoContentArea,
    ContactInfoItem,
    ContactIcon,
    ContactInfoContent,
    ContactTitle,
} from "./style";
const ContactUsArea = () => {
    return (
        <SectionArea>
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <ContactColunm>
                            <ContactForm />

                            <ContactMapArea>
                                <ContactInfoContentArea>
                                    <ContactInfoItem>
                                        <ContactIcon>
                                            <StaticImage
                                                className="icon-img"
                                                src="../../../data/images/icons/c1.png"
                                                alt="Icon"
                                            />
                                        </ContactIcon>
                                        <ContactInfoContent>
                                            <ContactTitle>Phone</ContactTitle>
                                            <StaticImage
                                                className="icon-img"
                                                src="../../../data/images/shape/line-s1.png"
                                                alt="Image-Givest"
                                            />
                                            <a href="tel:(310) 867-4168">
                                                (310) 867-4168
                                            </a>
                                        </ContactInfoContent>
                                    </ContactInfoItem>
                                    <ContactInfoItem>
                                        <ContactIcon>
                                            <StaticImage
                                                className="icon-img"
                                                src="../../../data/images/icons/c2.png"
                                                alt="Icon"
                                            />
                                        </ContactIcon>
                                        <ContactInfoContent>
                                            <ContactTitle>Email</ContactTitle>
                                            <StaticImage
                                                className="icon-img"
                                                src="../../../data/images/shape/line-s1.png"
                                                alt="Image-Givest"
                                            />
                                            <a href="mailto:nadeefsviews@gmail.com">
                                                nadeefsviews@gmail.com
                                            </a>
                                        </ContactInfoContent>
                                    </ContactInfoItem>
                                </ContactInfoContentArea>
                            </ContactMapArea>
                        </ContactColunm>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default ContactUsArea;

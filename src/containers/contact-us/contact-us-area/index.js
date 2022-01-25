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
                                            <a href="tel://+00569876458">
                                                (00) 569 - 876 458
                                            </a>
                                            <a href="tel://+884687549786">
                                                (88) 468-7549 786
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
                                            <a href="mailto://support@gmail.com">
                                                support@gmail.com
                                            </a>
                                            <a href="mailto://example@gmail.com">
                                                example@gmail.com
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

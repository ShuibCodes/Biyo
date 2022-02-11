import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "@components/ui/button";
import {
    ContactFormArea,
    Form,
    SectionTitle,
    Subtitle,
    Title,
    SectionDec,
    FormGroup,
    Input,
    Textarea,
} from "./style";

const ContactForm = () => {
    return (
        <ContactFormArea>
            <Row>
                <Col lg={12}>
                    <SectionTitle>
                        <Subtitle>Contact Now</Subtitle>
                        <Title>Reach out to us here</Title>
                        <SectionDec>
                            Have comments, questions, or concerns? Want to help
                            us with a project? Volunteer?
                        </SectionDec>
                    </SectionTitle>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Form
                        action="https://formspree.io/f/mpzbpwnr"
                        method="POST"
                    >
                        <Row className="row-gutter-20">
                            <Col lg={12}>
                                <FormGroup htmlFor="inputs_name">
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup htmlFor="inputs_name">
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup htmlFor="inputs_name">
                                    <Input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                    <Textarea
                                        name="message"
                                        placeholder="Message"
                                    ></Textarea>
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                    <Button type="submit" color="gradient">
                                        Submit Now
                                    </Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </ContactFormArea>
    );
};

export default ContactForm;

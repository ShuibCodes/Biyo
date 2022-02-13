/** @jsx jsx */
/* eslint-disable */
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import Button from "@components/ui/button";
import { graphql, useStaticQuery, Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Tilt from "react-parallax-tilt";

import {
    SectionArea,
    LayerStyle,
    Thumb,
    AboutTextStyle,
    AboutContent,
    LlistIconStyle,
    ListLi,
    ListText,
} from "./style";

const AboutArea = () => {
    const aboutSectonQery = useStaticQuery(graphql`
        query AboutSectonQuery {
            aboutJson {
                section_title {
                    subTitle
                    title
                }
                image1 {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                image2 {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                image3 {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                image4 {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                content1
                content2
                content3
                listText1
                listText2
            }
        }
    `);
    const {
        section_title: { title, subTitle },
        image1,
        image2,
        image3,
        image4,
        content1,
        content2,
        content3,
        listText1,
        listText2,
    } = aboutSectonQery.aboutJson;

    const imageOne = getImage(image1);
    const imageTwo = getImage(image2);
    const imageThree = getImage(image3);
    const imageFour = getImage(image4);
    return (
        <SectionArea>
            <Container style={{ marginBottom: "100px" }}>
                <Row>
                    <Col lg={9}>
                        <SectionTitle
                            sx={{ mb: "30px" }}
                            showImage={false}
                            title={title}
                            subTitle={subTitle}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} xl={6}>
                        <LayerStyle>
                            <Thumb>
                                <Row className="m-0">
                                    <Col className="tilt-animation">
                                        <Tilt
                                            className=" js-tilt"
                                            scale={1.04}
                                            tiltReverse={true}
                                            tiltMaxAngleX={15}
                                            tiltMaxAngleY={15}
                                            perspective={3000}
                                            transitionSpeed={4000}
                                        >
                                            <GatsbyImage
                                                image={imageOne}
                                                className="img-two"
                                                src=""
                                                alt="Image-Givest"
                                            />
                                        </Tilt>
                                    </Col>
                                </Row>
                            </Thumb>
                        </LayerStyle>
                    </Col>
                    <Col lg={6} xl={5}>
                        <AboutContent>
                            <AboutTextStyle>{content1}</AboutTextStyle>
                            <p>
                                <strong>{content2}</strong>
                            </p>
                            <p className="mb-0">{content3}</p>
                            <LlistIconStyle>
                                <ListLi>
                                    <StaticImage
                                        className="icon-img"
                                        src="../../../data/images/icons/check-double-line.png"
                                        alt="Image-Givest"
                                    />
                                    <ListText
                                        dangerouslySetInnerHTML={{
                                            __html: listText1,
                                        }}
                                    />
                                </ListLi>
                                <ListLi className="line-center"></ListLi>
                                <ListLi>
                                    <StaticImage
                                        className="icon-img"
                                        src="../../../data/images/icons/check-double-line.png"
                                        alt="Image-Givest"
                                    />
                                    <ListText
                                        dangerouslySetInnerHTML={{
                                            __html: listText2,
                                        }}
                                    />
                                </ListLi>
                            </LlistIconStyle>
                            <Link to="/causes">
                                <Button path="/donate" color="gradient">
                                    Donate Now
                                </Button>
                            </Link>
                        </AboutContent>
                    </Col>
                </Row>
            </Container>

            <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
                <Row>
                    <Col lg={9}>
                        <SectionTitle
                            sx={{ mb: "30px" }}
                            showImage={false}
                            title="Providing Sanitation facilities "
                            subTitle="Sanitation"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} xl={5}>
                        <AboutContent>
                            <AboutTextStyle>{content1}</AboutTextStyle>
                            <p>
                                <strong>
                                    Sanitation facilities and clean living
                                    environments are crucial to maintaining a
                                    clean water ecosystem in a community. That's
                                    why we work to build these facilities where
                                    they lack the equipment and resources
                                </strong>
                            </p>
                            <p className="mb-0">
                                We ensure villages are well informed and
                                educated on santiation basics so that they will
                                soon be self-sufficent with the equipemt we
                                provide
                            </p>
                            <LlistIconStyle>
                                <ListLi>
                                    <StaticImage
                                        className="icon-img"
                                        src="../../../data/images/icons/check-double-line.png"
                                        alt="Image-Givest"
                                    />
                                    <ListText
                                        dangerouslySetInnerHTML={{
                                            __html: "Proper sanitation facilities for communities",
                                        }}
                                    />
                                </ListLi>
                                <ListLi className="line-center"></ListLi>
                                <ListLi>
                                    <div
                                        style={{
                                            position: "relative",
                                            right: "-15px",
                                        }}
                                    >
                                        <StaticImage
                                            className="icon-img"
                                            src="../../../data/images/icons/check-double-line.png"
                                            alt="Image-Givest"
                                        />
                                    </div>

                                    <ListText
                                        dangerouslySetInnerHTML={{
                                            __html: "Work with local leaders to address community needs",
                                        }}
                                    />
                                </ListLi>
                            </LlistIconStyle>
                            <Link to="causes">
                                <Button path="/donate" color="gradient">
                                    Donate Now
                                </Button>
                            </Link>
                        </AboutContent>
                    </Col>
                    <Col lg={6} xl={6}>
                        <LayerStyle>
                            <Thumb>
                                <Row className="m-0">
                                    <Col className="tilt-animation ml-5">
                                        <Tilt
                                            className=" js-tilt"
                                            scale={1.04}
                                            tiltReverse={true}
                                            tiltMaxAngleX={15}
                                            tiltMaxAngleY={15}
                                            perspective={3000}
                                            transitionSpeed={4000}
                                        >
                                            <GatsbyImage
                                                image={imageTwo}
                                                className="img-two"
                                                src=""
                                                alt="Image-Givest"
                                            />
                                        </Tilt>
                                    </Col>
                                </Row>
                            </Thumb>
                        </LayerStyle>
                    </Col>
                </Row>
            </Container>

            <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
                <Row>
                    <Col lg={9}>
                        <SectionTitle
                            sx={{ mb: "30px" }}
                            showImage={false}
                            title="Modern Rainwater Harvesting "
                            subTitle="Agriculture "
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} xl={7}>
                        <LayerStyle>
                            <Thumb>
                                <Row className="m-0">
                                    <Col sm={4} md={4} xl={4} lg={4}>
                                        <Tilt
                                            className=" js-tilt"
                                            scale={1.04}
                                            tiltReverse={true}
                                            tiltMaxAngleX={15}
                                            tiltMaxAngleY={15}
                                            perspective={3000}
                                            transitionSpeed={4000}
                                        >
                                            <GatsbyImage
                                                image={imageThree}
                                                className="img-one"
                                                alt="Image-Givest"
                                            />
                                        </Tilt>
                                    </Col>
                                    <Col
                                        sm={8}
                                        md={8}
                                        lg={12}
                                        xl={8}
                                        className="tilt-animation"
                                    >
                                        <Tilt
                                            className=" js-tilt"
                                            scale={1.04}
                                            tiltReverse={true}
                                            tiltMaxAngleX={15}
                                            tiltMaxAngleY={15}
                                            perspective={3000}
                                            transitionSpeed={4000}
                                        >
                                            <GatsbyImage
                                                image={imageFour}
                                                className="img-two"
                                                src=""
                                                alt="Image-Givest"
                                            />
                                        </Tilt>
                                    </Col>
                                </Row>
                            </Thumb>
                        </LayerStyle>
                    </Col>
                    <Col lg={6} xl={5}>
                        <AboutContent>
                            <AboutTextStyle>{content1}</AboutTextStyle>
                            <p>
                                <strong>
                                    Communities living far away from well and
                                    rivers need sustainable rainwater harvesting
                                    systems that gives them access to clean
                                    water year round
                                </strong>
                            </p>
                            <p className="mb-0">
                                Rainwater has always been used as a clean source
                                of water for drinking and agriculture but
                                communities have struggled with implementing
                                large scale, modern systems to harvest and store
                                it
                            </p>
                            <LlistIconStyle>
                                <ListLi>
                                    <StaticImage
                                        className="icon-img"
                                        src="../../../data/images/icons/check-double-line.png"
                                        alt="Image-Givest"
                                    />
                                    <ListText
                                        dangerouslySetInnerHTML={{
                                            __html: "Rainwater harvesting systems",
                                        }}
                                    />
                                </ListLi>
                                <ListLi className="line-center"></ListLi>
                                <ListLi>
                                    <div
                                        style={{
                                            position: "relative",
                                            right: "-10px",
                                        }}
                                    >
                                        <StaticImage
                                            className="icon-img"
                                            src="../../../data/images/icons/check-double-line.png"
                                            alt="Image-Givest"
                                        />
                                    </div>

                                    <ListText
                                        dangerouslySetInnerHTML={{
                                            __html: "Rainwater storage systems ",
                                        }}
                                    />
                                </ListLi>
                            </LlistIconStyle>
                            <Link to="/causes">
                                <Button path="/donate" color="gradient">
                                    Donate Now
                                </Button>
                            </Link>
                        </AboutContent>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default AboutArea;

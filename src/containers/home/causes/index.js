/** @jsx jsx */
import { jsx } from "theme-ui";
import CausesItem from "@components/causes";
import { SectionArea } from "./style";
import SectionTitle from "@components/title";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery, Link } from "gatsby";
import Button from "@components/ui/button";
import waterTruck from "../../../assets/images/new-water-truck.jpeg";
import waterReservoir from "../../../assets/images/water-reservoir.jpeg";
import waterWell from "../../../assets/images/water-well.png";
const CausesArea = () => {
    const causesAreaQuery = useStaticQuery(graphql`
        query CausesAreaQuery {
            allCausesJson {
                edges {
                    node {
                        id
                        title
                        dec
                    }
                }
            }
        }
    `);

    const causesAreaData = causesAreaQuery.allCausesJson.edges;

    return (
        <SectionArea style={{ marginBottom: "120px" }}>
            <Container>
                <Row>
                    <Col lg={8} className="m-auto">
                        <SectionTitle
                            textCenter
                            titleStyle
                            sx={{
                                mb: ["30px", "50px", "80px", "110", "123px"],
                            }}
                            title={"Donate to those most in need"}
                            subTitle={"Our Causes"}
                        />
                        <div className="text-center my-5">
                            <Link to="/causes">
                                <Button path="/donate" color="gradient">
                                    Donate Now
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={6} sm={6}>
                        <img src={waterTruck} alt="water" />
                        <CausesItem
                            title="Water trucking"
                            dec="At the end of 2021, we provided emergency water trucking to Jubaland"
                        />
                    </Col>
                    <Col lg={4} md={6} sm={6}>
                        <img src={waterReservoir} alt="water-reservoir" />
                        <CausesItem
                            title="Water reservoir"
                            dec="We are working with locals in Jubaland to identify 
areas that seasonal rivers go through that a natural 
reservoir can be built. This will hold water for 6 months. 
"
                        />
                    </Col>
                    <Col lg={4} md={6} sm={6}>
                        <img src={waterWell} alt="water" />
                        <CausesItem
                            title="Building Wells"
                            dec="We have identified an extremely water stressed community in Jubaland 
that needs a well. This project will start in 2022. 
"
                        />
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default CausesArea;

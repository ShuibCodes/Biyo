/** @jsx jsx */
import { jsx } from "theme-ui";
import CausesItem from "@components/causes";
import { SectionArea } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import waterTruck from "../../../assets/images/new-water-truck.jpeg";
import waterReservoir from "../../../assets/images/water-reservoir.jpeg";
import waterWell from "../../../assets/images/water-well.png";

const CausesAll = () => {
    const causesAreaQuery = useStaticQuery(graphql`
        query CausesPageQuery {
            allCausesJson {
                edges {
                    node {
                        id
                        title
                        dec

                        image {
                            childImageSharp {
                                gatsbyImageData(width: 580)
                            }
                        }
                    }
                }
            }
        }
    `);

    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={6}>
                        <img src={waterTruck} alt="cause-image" />
                        <CausesItem
                            title="Emergency Water Trucking - Jubaland"
                            dec="At the end of 2021, we provided emergency water trucking to Jubaland"
                        />
                    </Col>
                    <Col lg={4} md={6} sm={6}>
                        <img src={waterReservoir} alt="cause-image" />
                        <CausesItem
                            title="Modern Water reservoirs"
                            dec="We are working with locals in Jubaland to identify areas where seasonal rivers flow through so that a natural reservior can be built. This will hold fresh water for up to 6 months"
                        />
                    </Col>
                    <Col lg={4} md={6} sm={6}>
                        <img src={waterWell} alt="cause-image" />
                        <CausesItem
                            title="Well Installation"
                            dec="We have identified an extemely water deprived community in Jubaland that is in urgent need of fresh water. This project consists of Water Well installation, starting this year."
                        />
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default CausesAll;

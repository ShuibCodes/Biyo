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
                            dec="We are currently running an emergency water trucking campaign in Jubaland on GoFundMe. This will provide water to nomads and pastoralists who are effected by the drought. Any and all donations are appreciated. Please make sure to share the link with all friends and family"
                        />
                    </Col>
                    <Col lg={4} md={6} sm={6}>
                        <img src={waterReservoir} alt="cause-image" />
                        <CausesItem
                            title="Modern Water reservoirs"
                            dec="We are working with locals in Jubaland to identify areas that seasonal rivers go through that a natural reservoir can be built. This will hold water for 6 months. This project is coming in the summer of 2022, so stay tuned"
                        />
                    </Col>
                    <Col lg={4} md={6} sm={6}>
                        <img src={waterWell} alt="cause-image" />
                        <CausesItem
                            title="Well Installation"
                            dec="We have identified a community in Jubaland that lacks access to fresh water. We plan to dig a borehole for this community. This project will start in the summer of 2022"
                        />
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default CausesAll;

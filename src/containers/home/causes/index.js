/** @jsx jsx */
import { jsx } from "theme-ui";
import CausesItem from "@components/causes";
import { SectionArea } from "./style";
import SectionTitle from "@components/title";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery, Link } from "gatsby";
import Button from "@components/ui/button";
import waterTruck from "../../../assets/images/new-water-truck.jpeg";
import waterReservoir from "../../../assets/images/modern-reservoirs.jpeg";
import waterWell from "../../../assets/images/well-installation.jpeg";

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
                            dec="We are currently running an emergency water trucking campaign in Jubaland on GoFundMe. This will provide water to nomads and pastoralists who are effected by the drought. Any and all donations are appreciated. Please make sure to share the link with all friends and family"
                        />
                    </Col>
                    <Col lg={4} md={6} sm={6}>
                        <img src={waterReservoir} alt="water-reservoir" />
                        <CausesItem
                            title="Water reservoir"
                            dec="We are working with locals in Jubaland to identify areas that seasonal rivers go through that a natural reservoir can be built. This will hold water for 6 months. This project is coming in the summer of 2022, so stay tuned!"
                        />
                    </Col>
                    <Col lg={4} md={6} sm={6}>
                        <img src={waterWell} alt="water" />
                        <CausesItem
                            title="Building Wells"
                            dec="We have identified a community in Jubaland that lacks access to fresh water. We plan to dig a borehole for this community. This project will start in the summer of 2022"
                        />
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default CausesArea;

/** @jsx jsx */
import { jsx } from "theme-ui";
import CausesItem from "@components/causes";
import { SectionArea } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";

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

    const causesAreaData = causesAreaQuery.allCausesJson.edges;
    return (
        <SectionArea>
            <Container>
                <Row>
                    {causesAreaData &&
                        causesAreaData.map((causesData) => {
                            return (
                                <Col
                                    lg={4}
                                    md={6}
                                    sm={6}
                                    key={causesData.node.id}
                                >
                                    <CausesItem
                                        image={causesData.node.image}
                                        title={causesData.node.title}
                                        dec={causesData.node.dec}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </SectionArea>
    );
};

export default CausesAll;

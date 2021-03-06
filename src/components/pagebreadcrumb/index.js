import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { PageBreadcrumbWrap, PageTitleContent } from "./style";

const PageBreadcrumb = ({ crumbLabel, location, title, pageContext }) => {
    const {
        breadcrumb: { crumbs },
    } = pageContext;
    const customCrumbLabel = location.pathname.toLowerCase();
    const crumbLabelArr = customCrumbLabel.split("/");
    const label = crumbLabelArr[crumbLabelArr.length - 1];
    const labelArr = label.split("-");
    const disableLinks = [
        "/events",
        "/category",
        "/profile",
        "/date",
        "/tag",
        "/page",
        "/services",
    ];
    return (
        <PageBreadcrumbWrap>
            <Container>
                <Row>
                    <Col>
                        <PageTitleContent>
                            <Breadcrumb
                                title={title}
                                crumbs={crumbs}
                                crumbLabel={labelArr.join(" ")}
                                disableLinks={disableLinks}
                            />
                        </PageTitleContent>
                    </Col>
                </Row>
            </Container>
        </PageBreadcrumbWrap>
    );
};
PageBreadcrumb.propTypes = {
    title: PropTypes.string,
    crumbLabel: PropTypes.string,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default PageBreadcrumb;

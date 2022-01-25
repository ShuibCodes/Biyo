/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from "@components/ui/button";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    CausesItemWrap,
    Thumb,
    ContentBox,
    DonateInfo,
    InfoItem,
    Title,
    UserAdmin,
    UserAdminTitle,
    CausesFooter,
    UserAdminImg,
    InfoItemTitle,
    Amount,
} from "./style";
const CausesItem = ({
    title,
    dec,
    adminName,
    image,
    donateInfo,
    adminImage,
    slug,
}) => {
    const Thumbimage = getImage(image);
    const adminImg = getImage(adminImage);
    const donateInfoData = donateInfo;

    return (
        <CausesItemWrap>
            <Thumb>
                <GatsbyImage image={Thumbimage} alt={title} />
            </Thumb>
            <ContentBox>
                <Title>
                    <h6>{title}</h6>
                </Title>
                <p style={{ fontSize: "1.7rem" }}>{dec}</p>
            </ContentBox>
            <CausesFooter>
                {/* <UserAdmin>
                    <UserAdminTitle>
                        <Link to={`/causes/${slug}`}>
                            <UserAdminImg>
                                <GatsbyImage image={adminImg} alt="Icon" />
                            </UserAdminImg>
                            {adminName}
                        </Link>
                    </UserAdminTitle>
                </UserAdmin> */}
                <Link to="/donate">
                    <Button
                        style={{ textDecoration: "none" }}
                        path={`/donate`}
                        size="small"
                        variant="outlined"
                        color="light"
                        sx={{ color: "black", fontWeight: "400" }}
                    >
                        Donate Now{" "}
                        <i
                            style={{ textDecoration: "none" }}
                            sx={{ ml: "8px", fontSize: "12px !important" }}
                            className="flaticon-right-arrow"
                        ></i>
                    </Button>
                </Link>
            </CausesFooter>
        </CausesItemWrap>
    );
};

CausesItem.propTypes = {
    title: PropTypes.string,
    dec: PropTypes.string,
    adminName: PropTypes.string,
    image: PropTypes.object,
    donateInfo: PropTypes.array,
    adminImage: PropTypes.object,
    slug: PropTypes.string,
};

export default CausesItem;

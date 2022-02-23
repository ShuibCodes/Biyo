/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from "@components/ui/button";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import DonateFifty from "../Donations/DonateFifty";
import DonateFive from "../Donations/DonateFive";
import DonateHundred from "../Donations/DonateHundred";
import DonateTen from "../Donations/DonateTen";

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
                <p style={{ fontSize: "1.4rem" }}>{dec}</p>
            </ContentBox>
            <CausesFooter>
                {/* <Button
                    style={{ textDecoration: "none" }}
                    color="gradient"
                    size="small"
                >
                    <a
                        href="https://t.co/lkjJrw7aiZ"
                        style={{ color: "white" }}
                    >
                        Donate Now
                    </a>
                </Button> */}

                {/* <DonateFive /> */}
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

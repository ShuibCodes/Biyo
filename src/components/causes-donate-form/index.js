/* eslint-disable */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Row } from "react-bootstrap";
import Button from "../../components/ui/button";
import { StaticImage } from "gatsby-plugin-image";
import {
    DonationFormArea,
    SectionTitle,
    Subtitle,
    Title,
    AmountInfo,
    DonateAmount,
    PaymentMethodWrap,
    PaymentTitle,
    PaymentMethod,
    PaymentType,
    FormCheckBox,
    PaymentPersonalInfo,
    PersonalInfoTitle,
    FormGroup,
    ButtonWrap,
    LayerStyle,
} from "./style";

import DonateFive from "../Donations/DonateFive";
import DonateTen from "../Donations/DonateTen";
import DonateFifty from "../Donations/DonateFifty";
import DonateHundred from "../Donations/DonateHundred";

const CausesDonateForm = () => {
    return (
        <DonationFormArea>
            <SectionTitle>
                <Subtitle>Make A Donation</Subtitle>
                <Title>Donate Now</Title>
                <StaticImage
                    className="line-shape"
                    src="../../data/images/shape/line-t3.png"
                    alt="Image-Givest"
                />
            </SectionTitle>

            <AmountInfo>
                <DonateFive />

                <DonateTen />

                <DonateFifty />

                <DonateHundred />
            </AmountInfo>

            <LayerStyle>
                <StaticImage
                    className="layer-style1"
                    src="../../data/images/shape/form-shape1.png"
                    alt="Image-Givest"
                />
                <StaticImage
                    className="layer-style2"
                    src="../../data/images/shape/form-shape2.png"
                    alt="Image-Givest"
                />
            </LayerStyle>
        </DonationFormArea>
    );
};

export default CausesDonateForm;

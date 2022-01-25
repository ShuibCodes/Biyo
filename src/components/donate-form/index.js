/** @jsx jsx */
import { jsx } from "theme-ui";
import Button from "@components/ui/button";
import { DonateFormArea, DonateAmountInfo, DonateAmount } from "./style";

const DonateForm = () => {
    return (
        <DonateFormArea>
            <DonateAmountInfo>
                <DonateAmount>$20</DonateAmount>
                <DonateAmount>$50</DonateAmount>
                <DonateAmount>$200</DonateAmount>
            </DonateAmountInfo>
            <div className="btn-wrp" sx={{ display: "flex", mb: "30px" }}>
                <Button path="#!" color="gradient" sx={{ color: "#fff" }}>
                    Donate Now <i className="flaticon-right-arrow"></i>
                </Button>
            </div>
        </DonateFormArea>
    );
};

export default DonateForm;

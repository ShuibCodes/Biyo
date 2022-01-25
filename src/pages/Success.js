import * as React from "react";
import Layout from "@layout";
import SEO from "@components/seo";
import SuccessMessage from "@containers/SuccessMessage";

const Success = () => (
    <Layout>
        <SEO title="Payment Completed" pathname="/" />
        <SuccessMessage />
    </Layout>
);

export default Success;

/* eslint-disable */
import * as React from "react";

import Layout from "@layout";
import SEO from "@components/seo";
import Hero from "@containers/home/hero";
import ServiceArea from "@containers/home/services";
import AboutArea from "@containers/home/about";
import CausesArea from "@containers/home/causes";

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            <Hero />
            <ServiceArea />
            <AboutArea />
            <div style={{ backgroundColor: "#F0F0F0" }}>
                <CausesArea />
            </div>
        </Layout>
    );
};

export default IndexPage;

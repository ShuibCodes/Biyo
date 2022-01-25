/* eslint-disable */
import React from "react";
import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";
import { NavItem, NavLink } from "./style";

const PaginationLinks = () => {
    return <Pagination></Pagination>;
};

PaginationLinks.propTypes = {
    currentPage: PropTypes.number,
    numberOfPages: PropTypes.number,
};

export default PaginationLinks;

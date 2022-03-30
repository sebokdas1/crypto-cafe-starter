import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            style={{ color: match ? "#FF3333 " : "BLACK", textDecoration: match ? "underline" : "none" }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
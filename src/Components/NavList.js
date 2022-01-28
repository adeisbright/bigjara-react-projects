import { Fragment } from "react";
import { Link } from "react-router-dom";

const NavList = ({ navList, navClass }) => {
    let navigationLinks;
    if (navList.length > 0) {
        navigationLinks = navList.map((navLink, index) => (
            <Fragment key={index}>
                {navLink.to.includes("http") ? (
                    <a href={navLink.to} className={navLink.classTag}>
                        {navLink.title}
                    </a>
                ) : (
                    <Link to={navLink.to} className={navLink.classTag}>
                        {navLink.title}
                    </Link>
                )}
            </Fragment>
        ));
    }
    return navigationLinks && <nav className={navClass}>{navigationLinks}</nav>;
};

export default NavList;

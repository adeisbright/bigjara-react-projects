import { Link } from "react-router-dom";
import NavList from "./NavList";

const Header = ({ header }) => {
    return (
        <header className={header.headerClass}>
            <section className={header.containerClass}>
                <section>
                    <h1>
                        <Link to={header.homeUrl} className={header.homeClass}>
                            {header.homeName}
                        </Link>
                    </h1>
                </section>
                {header.navList.length > 0 && (
                    <NavList
                        navList={header.navList}
                        navClass={header.navClass}
                    />
                )}
            </section>
        </header>
    );
};

export default Header;

import Header from "../Components/Header";
import MenuLinks from "../constants/MenuLinks";
import { Link } from "react-router-dom";

const header = {
    headerClass: "border-line-bottom m-b-3",
    containerClass: "framer d-flex justify-between",
    homeClass: "brand-name",
    homeName: "Le Todo",
    navList: MenuLinks,
    navClass: "main-nav pad-5",
};

const LandingPage = () => {
    const todayDate = new Date();
    const currentYear = todayDate.getFullYear();

    return (
        <>
            <Header header={header} />
            <section className="hero m-b-3">
                <div className="d-flex justify-between framer">
                    <section className="fr-md-6 fr-12">
                        <h2 className="hero-title">
                            Create , Manage , and Be notified of Task
                        </h2>
                        <p>
                            TDM , our well crafted Todo Manager is the easiest
                            way to create and integrate your task with Google
                            Calender.
                        </p>
                        <Link
                            to="/signup"
                            type="button"
                            aria-label="button"
                            className="btn btn-register"
                        >
                            Get Started
                        </Link>
                    </section>
                </div>
            </section>
            <footer className="center-text relative">
                <p class="fixed-bottom">
                    &copy; TDM {currentYear}. All Rights Reserved
                </p>
            </footer>
        </>
    );
};

export default LandingPage;

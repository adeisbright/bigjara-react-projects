import { lazy, Suspense } from "react";

import { Switch, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Preloader from "./Components/Preloader";

import About from "./Pages/About";

//Import Pages
const LandingPage = lazy(() => import("./Pages/LandingPage"));
// const About = lazy(() => import("./Pages/About"));

const Routes = () => {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/">
                <ErrorBoundary>
                    <Suspense fallback={<Preloader />}>
                        <LandingPage />
                    </Suspense>
                </ErrorBoundary>
            </Route>
        </Switch>
    );
};

export default Routes;

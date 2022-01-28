import { lazy, Suspense } from "react";

import { Switch, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Preloader from "./Components/Preloader";

import About from "./Pages/About";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
//Import Pages
const LandingPage = lazy(() => import("./Pages/LandingPage"));

const Routes = () => {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/signup">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
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

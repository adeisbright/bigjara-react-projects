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
const API = lazy(() => import("./Pages/API"));
const SingleTodo = lazy(() => import("./Features/SingleTodo"));

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
            <Route path="/api">
                <ErrorBoundary>
                    <Suspense fallback={<Preloader />}>
                        <API />
                    </Suspense>
                </ErrorBoundary>
            </Route>
            <Route path="/items/*" exact>
                <ErrorBoundary>
                    <Suspense fallback={<Preloader />}>
                        <SingleTodo />
                    </Suspense>
                </ErrorBoundary>
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/" exact>
                <ErrorBoundary>
                    <Suspense fallback={<Preloader />}>
                        <LandingPage />
                    </Suspense>
                </ErrorBoundary>
            </Route>
            <Route>
                <p className="center-text">
                    Error 404 : You are on the Wrong Path
                </p>
            </Route>
        </Switch>
    );
};

export default Routes;

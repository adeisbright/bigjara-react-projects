import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LocalStorage from "./lib/StorageService";
import Routes from "./Routes";
import "./styles/index.css";
const storage = new LocalStorage(window.localStorage);

const lockedRoute = ["/dashboard"];

const App = () => {
    const [loading, setLoading] = useState(true);

    const load = () => {
        if (
            !storage.find("loginToken") &&
            lockedRoute.includes(window.location.pathname)
        ) {
            window.location.replace(
                `/login?redirect_to=${window.location.pathname}`
            );
        }
        setLoading(false);
        console.log(window.location.search);
        console.log(window.location);
    };
    useEffect(() => {
        load();
    }, []);

    return (
        !loading && (
            <Router>
                <Routes />
            </Router>
        )
    );
};

export default App;

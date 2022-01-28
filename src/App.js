import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import "./styles/index.css";

const App = () => {
    return (
        <Router>
            <Routes />
        </Router>
    );
};

export default App;

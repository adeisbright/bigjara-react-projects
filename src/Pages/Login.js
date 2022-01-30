import { useState } from "react";
import LoginForm from "../Components/LoginForm";
import FormSidebar from "../Components/FormSidebar";

import { sendData } from "../lib/FetchHelper";
import LocalStorage from "../lib/StorageService";

const storage = new LocalStorage(window.localStorage);

const sidebar = {
    classTag: "login-sidebar  fr-md-6",
    content: "Simplifying Task Management",
};

const Login = () => {
    let [email, setEmail] = useState("");
    let [pwd, setPwd] = useState("");
    let [response, setResponse] = useState("");

    let redirectTo = window.location.search;
    let redirectUrl;
    if (redirectTo) {
        let indexOfEqualTo = redirectTo.lastIndexOf("=");
        redirectUrl = redirectTo.substring(indexOfEqualTo + 1);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let isAllValid = pwd && email;

        if (isAllValid) {
            setResponse("Processing...");
            let url = `${process.env.REACT_APP_TODO_SERVER}/auth`;
            sendData(url, {
                email: email,
                password: pwd,
            })
                .then((res) => {
                    if (res.status === 200) {
                        setResponse("Login was successful");
                        // setLogin(true);
                        storage.add("loginToken", true);
                        storage.add("auth_token", res.token);
                        window.location.replace(
                            redirectUrl ? redirectUrl : "/dashboard"
                        );
                        return;
                    } else {
                        setResponse(res.message);
                    }
                })
                .catch((err) => setResponse(err.message));
        } else {
            setResponse("Fill the form correctly");
        }
    };

    return (
        <section className="d-flex">
            <LoginForm
                setEmail={setEmail}
                setPwd={setPwd}
                handleSubmit={handleSubmit}
                response={response}
            />
            <FormSidebar sidebar={sidebar} />
        </section>
    );
};

export default Login;

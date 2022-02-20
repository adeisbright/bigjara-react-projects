import { useState } from "react";
import SignupForm from "../Components/SignupForm";
import FormSidebar from "../Components/FormSidebar";
import { useHistory } from "react-router-dom";
import { sendData } from "../lib/FetchHelper";

const sidebar = {
    classTag: "login-sidebar  fr-md-6",
    content: "Simplifying Task Management",
};

const Register = () => {
    let history = useHistory();
    let [userName, setUserName] = useState("");
    let [email, setEmail] = useState("");
    let [pwd, setPwd] = useState("");
    let [response, setResponse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let isAllValid = pwd && email && userName;

        if (isAllValid) {
            setResponse("Processing...");
            sendData(process.env.REACT_APP_TODO_SERVER + "/users", {
                email: email,
                password: pwd,
                name: userName,
            })
                .then((res) => {
                    if (res.status === 200) {
                        setResponse(
                            "Registration was successful.Redirectiong to Login in 2s"
                        );
                        setTimeout(() => {
                            history.push("/login");
                        }, 2000);
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
    const handleName = (e) => {
        e.preventDefault();
        setUserName(e.target.value);
    };
    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        e.preventDefault();
        setPwd(e.target.value);
    };

    return (
        <section className="d-flex">
            <SignupForm
                handleSubmit={handleSubmit}
                handleName={handleName}
                handleEmail={handleEmail}
                handlePassword={handlePassword}
                response={response}
            />
            <FormSidebar sidebar={sidebar} />
        </section>
    );
};

export default Register;

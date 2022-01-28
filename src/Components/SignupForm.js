import { Link } from "react-router-dom";

const SignupForm = ({
    handleSubmit,
    handleName,
    handleEmail,
    handlePassword,
    response,
}) => {
    return (
        <main className="fr-md-6 main">
            <form className="login-form">
                <div className="center-text">
                    <h2>Le Todo</h2>
                    <p>Welcome back!</p>
                    <p>Please signup to create an account</p>
                </div>
                <label htmlFor="username">Username</label>
                <input
                    className="input input-border-faint"
                    type="text"
                    onChange={handleName}
                />
                <label htmlFor="email">Email</label>
                <input
                    className="input input-border-faint"
                    type="email"
                    id="email"
                    onChange={handleEmail}
                />
                <label htmlFor="password">Password</label>
                <input
                    className="input input-border-faint"
                    type="password"
                    id="pwd"
                    autoComplete="false"
                    onChange={handlePassword}
                />
                <p>{response}</p>

                <button
                    type="submit"
                    className="login bg-white m-r-1"
                    onClick={handleSubmit}
                >
                    Sign up
                </button>
                <Link to="/login" className="btn btn-register m-r-1">
                    Login
                </Link>
            </form>
        </main>
    );
};

export default SignupForm;

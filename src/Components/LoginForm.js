import { Link } from "react-router-dom";

const LoginForm = ({ handleSubmit, setEmail, setPwd, response }) => {
    return (
        <main className="fr-md-6 main">
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="center-text">
                    <h2>Le Todo</h2>
                    <p>Welcome back!</p>
                    <p>Please login/signup to your account</p>
                </div>

                <label htmlFor="email">Email</label>
                <input
                    className="input input-border-faint"
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    className="input input-border-faint"
                    type="password"
                    id="pwd"
                    autoComplete="false"
                    onChange={(e) => setPwd(e.target.value)}
                />
                <p>{response}</p>

                <button type="submit" className="btn btn-register m-r-1">
                    Login
                </button>
                <Link to="/signup" className="login bg-white">
                    Sign up
                </Link>
            </form>
        </main>
    );
};

export default LoginForm;

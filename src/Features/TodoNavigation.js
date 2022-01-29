import { Link } from "react-router-dom";
import AddTodo from "./AddTodo";
import Logout from "../Components/Logout";

const TodoNavigation = ({ setItems }) => {
    return (
        <>
            <header>
                <div className="d-flex framer justify-between wrap pad-tb-20">
                    <section>
                        <h1 className="brand-identity">
                            <a className="brand-name" href="">
                                Le Todo
                            </a>
                        </h1>
                    </section>
                    <nav className="d-small-toggle d-flex justify-between main-nav pad-5">
                        <Link
                            to="/api"
                            className="user-link m-r-1"
                            style={{ paddingTop: "10px" }}
                        >
                            API
                        </Link>
                        <Logout />
                        <AddTodo setItems={setItems} className="user-link" />
                    </nav>
                </div>
            </header>
        </>
    );
};
export default TodoNavigation;

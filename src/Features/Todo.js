import { Link } from "react-router-dom";
import DefaultImage from "../constants/DefaultImage";

const TodoRevealer = ({ toggleClick, index, n, id, removeTodo }) => {
    return (
        <>
            <span
                className="todo-tools-revealer"
                onClick={() => toggleClick(index)}
            >
                ...
            </span>
            <div
                className="todo-actions"
                style={{
                    display: index === n ? "block" : "none",
                }}
            >
                <Link to={"/items/" + id}>View</Link>
                <span
                    style={{ cursor: "pointer" }}
                    onClick={() => removeTodo(id)}
                >
                    Delete
                </span>
            </div>
        </>
    );
};

const Todo = ({ item, removeTodo, toggleClick, index, n }) => {
    return (
        <div className="relative" key={index}>
            {/* <TodoRevealer
                n={n}
                index={index}
                toggle={toggleClick}
                id={item._id}
                removeTodo={removeTodo}
            /> */}
            <>
                <span
                    className="todo-tools-revealer"
                    onClick={() => toggleClick(index)}
                >
                    ...
                </span>
                <div
                    className="todo-actions"
                    style={{
                        display: index === n ? "block" : "none",
                    }}
                >
                    <Link to={"/items/" + item._id}>View</Link>
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => removeTodo(item._id)}
                    >
                        Delete
                    </span>
                </div>
            </>

            {item.todo_avatar ? (
                <figure>
                    <img
                        src={
                            item.todo_avatar.startsWith("h")
                                ? item.todo_avatar
                                : DefaultImage
                        }
                        alt="Avatar"
                        className="w-100 card-img"
                    />
                </figure>
            ) : (
                <figure>
                    <img
                        src={DefaultImage}
                        alt="Avatar"
                        className="w-100 card-img"
                    />
                </figure>
            )}
            <div className="card-body m-b-1">
                <h3>{item.title}</h3>
                <div className="m-b-1">
                    <span style={{ marginRight: "2px" }}>
                        Begins : {new Date(item.startDate).toLocaleDateString()}
                    </span>
                    <span>
                        Ends : {new Date(item.dueDate).toLocaleDateString()}
                    </span>
                </div>

                <p>
                    {item.description.length > 50
                        ? item.description.substring(0, 50) + "..."
                        : item.description}
                </p>
            </div>
        </div>
    );
};

export default Todo;

import Todo from "./Todo";

const TodoList = ({ todos, removeTodo, toggleClick, n }) => {
    return (
        <div className="framer pad-tb-20 d-grid grid-3">
            {todos.map((item, index) => (
                <Todo
                    item={item}
                    index={index}
                    key={item._id}
                    id={item._id}
                    removeTodo={removeTodo}
                    toggleClick={toggleClick}
                    n={n}
                />
            ))}
        </div>
    );
};

export default TodoList;

import { Fragment, useState, useEffect } from "react";
import FilterTodo from "../Features/FilterTodo";
import TodoNavigation from "../Features/TodoNavigation";
import { getData, deleteResource } from "../lib/FetchHelper";
import TodoList from "../Features/TodoList";
import LocalStorage from "../lib/StorageService";

const storage = new LocalStorage(window.localStorage);

const Dashboard = () => {
    const [items, setItems] = useState([]);
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);

    let loginToken = storage.find("auth_token");
    let [n, setN] = useState(-1);

    const serverUrl = process.env.REACT_APP_TODO_SERVER;

    const toggleClick = (index) => {
        setN(index);
    };

    const fetchItems = (url, authToken) => {
        getData(url, authToken)
            .then((result) => {
                console.log(result);
                if (Array.isArray(result.data)) {
                    setItems(result.data);
                }
            })
            .catch((error) => console.error(error));
    };

    const removeTodo = (id) => {
        let loginToken = storage.find("auth_token");
        deleteResource(`${serverUrl}/items/${id}`, loginToken)
            .then((result) => {
                if (result.ok) {
                    let deleteIndex = items.findIndex(
                        (el) => String(el._id) === String(id)
                    );
                    items.splice(deleteIndex, 1);
                    setItems([...items]);
                }
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        loginToken = storage.find("auth_token");
        fetchItems(`${serverUrl}/items?page_no=1&offset=6`, loginToken);
    }, []);

    return (
        <Fragment>
            <TodoNavigation setItems={setItems} />

            {items.length > 0 ? (
                <>
                    <FilterTodo
                        setFrom={setFrom}
                        setTo={setTo}
                        from={from}
                        to={to}
                        loginToken={loginToken}
                        fetchItems={fetchItems}
                    />
                    <TodoList
                        todos={items}
                        toggleClick={toggleClick}
                        removeTodo={removeTodo}
                        n={n}
                    />
                </>
            ) : (
                <p className="framer">Loading item or no item to display yet</p>
            )}
        </Fragment>
    );
};

export default Dashboard;

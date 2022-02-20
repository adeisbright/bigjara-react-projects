import { useState } from "react";
import { sendData } from "../lib/FetchHelper";
import { selector } from "../lib/DOMHelper";
import Modal from "../Components/Modal";
import TodoForm from "./TodoForm";
import UseCalender from "../constants/UseCalender";
import LocalStorage from "../lib/StorageService";

const storage = new LocalStorage(window.localStorage);

const AddTodo = ({ setItems }) => {
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    let [startDate, setStartDate] = useState("");
    let [startTime, setStartTime] = useState("");
    let [dueDate, setDueDate] = useState("");
    let [dueTime, setDueTime] = useState("");
    let [file, setFile] = useState("");
    const [show, setShow] = useState(false);
    let [response, setResponse] = useState("");

    const serverUrl = process.env.REACT_APP_TODO_SERVER;

    const handleSubmit = (e) => {
        e.preventDefault();
        let token = storage.find("auth_token");

        let areInputsFilled =
            title &&
            description &&
            startTime &&
            startDate &&
            dueTime &&
            dueDate;

        let form = selector("#item-form");
        let formData = new FormData(form);

        if (areInputsFilled && token) {
            setResponse("Processing...");
            console.log(title);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("startDate", startDate);
            formData.append("startTime", startTime);
            formData.append("dueDate", dueDate);
            formData.append("dueTime", dueTime);
            formData.append("attachment", file);

            fetch(serverUrl + "/items", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    authorization: "Bearer" + " " + token,
                },
                body: formData,
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.status === 200) {
                        setItems((items) => items.concat([res.data]));
                    }

                    setResponse(res.message);
                    if (storage.isStorage() && UseCalender) {
                        let eventData = {
                            summary: title,
                            description: description,
                            start: {
                                date: startDate,
                                time: startTime,
                                timeZone: "GMT+1",
                            },
                            end: {
                                date: dueDate,
                                time: dueTime,
                                timeZone: "GMT+1",
                            },
                        };
                        storage.add("event", eventData);

                        if (res.ok) {
                            sendData(`${serverUrl}/events`, eventData, token)
                                .then((res) => {
                                    console.log(res);
                                    setResponse(`Event link ${res.link}`);
                                })
                                .catch((err) => setResponse(err.message));
                        } else if (res.eventUrl) {
                            window.location.replace(res.eventUrl);
                        }
                    }
                })
                .catch((err) => {
                    console.error(err);
                    setResponse(err.message);
                });
        } else {
            setResponse("Issues while adding item");
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        let files = e.target.files[0];
        setFile(files);
    };

    const showModal = (e) => {
        e.stopPropagation();
        setShow(true);
    };
    const hideModal = () => setShow(false);

    return (
        <div className="pad-tb-20">
            <button
                className="toggle-modal user-link login btn-primary"
                onClick={showModal}
            >
                Add +
            </button>
            <Modal handleClose={hideModal} show={show}>
                <TodoForm
                    handleSubmit={handleSubmit}
                    setTitle={setTitle}
                    setDescription={setDescription}
                    setDueDate={setDueDate}
                    setDueTime={setDueTime}
                    setStartDate={setStartDate}
                    setStartTime={setStartTime}
                    handleChange={handleChange}
                    response={response}
                />
            </Modal>
        </div>
    );
};

export default AddTodo;

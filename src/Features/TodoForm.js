const TodoForm = ({
    handleSubmit,
    setTitle,
    setDescription,
    setStartDate,
    setStartTime,
    setDueDate,
    setDueTime,
    handleChange,
    response,
}) => {
    return (
        <form
            method="post"
            className="todo-form"
            id="item-form"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
        >
            <div className="center-text">
                <h2>Task Manager</h2>
                <p>Add task , track task , manage task</p>
            </div>
            <label htmlFor="title">Title</label>
            {/*]
                If you are building a child component that will perform 
                a given action via its parent.
                I mean  , it is the parent that will dictate what happens 
                as regards the behaviour.
                You can just use the state update function to update the local value 
                as given below.
                onEvent={(e) => setFoo(e.target.value)}
                But if you will need to process the data provided by the 
                form component then you will have to write the behaviour within the parent and 
                use :
                onEvent={eventHandler}

                //If a user logouts , the server should revoke that particular token so it cannot be 
                used again
                
            */}
            <input
                type="text"
                className="form-input"
                required
                onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <textarea
                className="form-input"
                required
                onChange={(e) => setDescription(e.target.value)}
            />
            <div className="d-flex wrap-sm">
                <div className="fr-md-6 m-r-1" style={{ width: "100%" }}>
                    <label htmlFor="Date">Start Date</label>
                    <input
                        type="date"
                        className="form-input"
                        required
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div style={{ width: "100%" }}>
                    <label htmlFor="time">Start Time</label>
                    <input
                        type="time"
                        className="form-input"
                        required
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </div>
            </div>
            <div className="d-flex wrap-sm">
                <div className="fr-md-6 m-r-1" style={{ width: "100%" }}>
                    <label htmlFor="Date">Due Date</label>
                    <input
                        type="date"
                        className="form-input"
                        required
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <div style={{ width: "100%" }}>
                    <label htmlFor="time">Due Time</label>
                    <input
                        type="time"
                        className="form-input"
                        required
                        onChange={(e) => setDueTime(e.target.value)}
                    />
                </div>
            </div>
            <label htmlFor="time">Attach file</label>
            <input
                type="file"
                className="form-input"
                required
                onChange={handleChange}
            />
            <div className="d-flex justify-between wrap-sm">
                <div>
                    <label htmlFor="status">Status</label>
                    <select
                        style={{
                            display: "block",
                            appearance: "none",
                            outline: "0",
                            border: "1px solid #ccc",
                            padding: "5px",
                            borderRadius: "6px",
                        }}
                    >
                        <option value="c">Completed</option>
                        <option value="p">Pending</option>
                        <option value="i">In-Progress</option>
                    </select>
                </div>
                <div style={{ padding: "1.5rem" }}>
                    <button type="reset" className="btn btn-reset m-r-1">
                        Cancel
                    </button>
                    <button className="btn btn-primary" type="submit">
                        Proceed
                    </button>
                </div>
            </div>
            <p>{response}</p>
        </form>
    );
};

export default TodoForm;

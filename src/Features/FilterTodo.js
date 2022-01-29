const FilterTodo = ({ setFrom, setTo, from, to, loginToken, fetchItems }) => {
    return (
        <div className="framer pad-tb-20">
            <strong>Filter Todo by Start Date</strong>
            <div className="d-flex wrap">
                <div className="fr-md-3 m-r-1">
                    <label htmlFor="start">Start Date</label>
                    <input
                        type="date"
                        className="form-input"
                        onChange={(e) => setFrom(e.target.value)}
                    />
                </div>
                <div className="fr-md-3 m-r-1">
                    <label htmlFor="start">End Date</label>
                    <input
                        type="date"
                        className="form-input"
                        onChange={(e) => setTo(e.target.value)}
                    />
                </div>
                <div style={{ padding: "2.3rem" }}>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() =>
                            fetchItems(
                                `${process.env.REACT_APP_TODO_SERVER}/items?from=${from}&to=${to}`,
                                loginToken
                            )
                        }
                    >
                        Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterTodo;

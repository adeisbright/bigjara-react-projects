const FormSidebar = ({ sidebar }) => {
    return (
        <aside className={sidebar.classTag}>
            <p>{sidebar.content}</p>
        </aside>
    );
};

export default FormSidebar;

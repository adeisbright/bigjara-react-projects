import LocalStorage from "../lib/StorageService";
const storage = new LocalStorage(window.localStorage);

const Logout = () => {
    const handleClick = () => {
        storage.remove("loginToken");
        storage.remove("auth_token");
        window.location.replace(
            `/login?redirect_to=${window.location.pathname}`
        );
    };

    return (
        <>
            <button
                onClick={handleClick}
                className="no-border btn-logout user-link bg-white"
            >
                Sign out
            </button>
        </>
    );
};

export default Logout;

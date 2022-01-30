const Modal = ({ handleClose, show, children }) => {
    let modalClass = show ? "modal d-block" : "modal d-none";
    return (
        <section className={modalClass}>
            <section className="modal-main">
                {children}
                <button className="modal-closer" onClick={handleClose}>
                    &times;
                </button>
            </section>
        </section>
    );
};

export default Modal;

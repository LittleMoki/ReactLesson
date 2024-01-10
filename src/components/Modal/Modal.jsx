import {createPortal} from "react-dom";
import {useEffect, useRef} from "react";
import './Modal.css'

function Modal({children, open}) {
    const dialog = useRef();

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);

    return createPortal(
        <dialog ref={dialog}>
            {children}
        </dialog>,
        document.getElementById('modal')
    );
}

export default Modal;
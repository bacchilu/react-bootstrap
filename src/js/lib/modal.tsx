declare const bootstrap: any;

import React, {ReactNode} from 'react';
import {createRoot} from 'react-dom/client';

export const Modal = (() => {
    const modalDiv = document.createElement('div');
    modalDiv.setAttribute('class', 'modal fade');
    modalDiv.setAttribute('tabindex', '-1');
    modalDiv.setAttribute('aria-hidden', 'true');
    const modalDialogDiv = document.createElement('div');
    modalDialogDiv.setAttribute('class', 'modal-dialog modal-dialog-scrollable');
    modalDiv.appendChild(modalDialogDiv);
    document.body.appendChild(modalDiv);

    const root = createRoot(modalDialogDiv);

    modalDiv.addEventListener('hidden.bs.modal', () => {
        root.render(null);
    });

    const myModal = new bootstrap.Modal(modalDiv);

    const ModalContent = function ({children}) {
        React.useEffect(() => {
            myModal.show();
        }, []);

        return children;
    };

    return {
        show: (body: ReactNode) => {
            root.render(<ModalContent>{body}</ModalContent>);
        },
        hide: () => {
            myModal.hide();
        },
    };
})();

import React from 'react';
import {createRoot} from 'react-dom/client';

export const Modal = (function () {
    const modalDiv = document.createElement('div');
    modalDiv.setAttribute('class', 'modal fade');
    modalDiv.setAttribute('tabindex', '-1');
    modalDiv.setAttribute('aria-hidden', 'true');
    const modalDialogDiv = document.createElement('div');
    modalDialogDiv.setAttribute('class', 'modal-dialog modal-dialog-scrollable');
    modalDiv.appendChild(modalDialogDiv);
    document.body.appendChild(modalDiv);

    const root = createRoot(modalDialogDiv);

    modalDiv.addEventListener('hidden.bs.modal', function () {
        root.render(null);
    });

    const myModal = new bootstrap.Modal(modalDiv);

    const ModalContent = function ({children}) {
        React.useEffect(function () {
            myModal.show();
        }, []);

        return children;
    };

    return {
        show: function (body) {
            root.render(<ModalContent>{body}</ModalContent>);
        },
        hide: function () {
            myModal.hide();
        },
    };
})();

import React from 'react';
import ReactDOM from 'react-dom';

const ModalContent = function ({title, body, footer}) {
    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">{body}</div>
            {footer !== null && <div className="modal-footer">{footer}</div>}
        </div>
    );
};

export const Modal = (function () {
    const modalDiv = document.createElement('div');
    modalDiv.setAttribute('class', 'modal fade');
    modalDiv.setAttribute('tabindex', '-1');
    modalDiv.setAttribute('aria-hidden', 'true');
    const modalDialogDiv = document.createElement('div');
    modalDialogDiv.setAttribute('class', 'modal-dialog modal-dialog-scrollable');
    modalDiv.appendChild(modalDialogDiv);
    document.body.appendChild(modalDiv);

    modalDiv.addEventListener('hidden.bs.modal', function (event) {
        ReactDOM.render(null, modalDialogDiv);
    });

    return {
        render: function (title, body, footer = null) {
            ReactDOM.render(<ModalContent title={title} body={body} footer={footer} />, modalDialogDiv, function () {
                const myModal = new bootstrap.Modal(modalDiv, {backdrop: 'static'});
                myModal.show();
            });
        },
    };
})();

import React from 'react';
import ReactDOM from 'react-dom';

const ToastContent = function () {
    return (
        <>
            <div className="toast-header">
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">Hello, world! This is a toast message.</div>
        </>
    );
};

export const Toast = (function () {
    const positionDiv = document.createElement('div');
    positionDiv.setAttribute('class', 'position-fixed bottom-0 end-0 p-3');
    positionDiv.setAttribute('style', 'z-index: 11');
    const toastDiv = document.createElement('div');
    toastDiv.setAttribute('class', 'toast');
    positionDiv.appendChild(toastDiv);
    document.body.appendChild(positionDiv);

    return {
        render: function () {
            ReactDOM.render(<ToastContent />, toastDiv, function () {
                const toast = new bootstrap.Toast(toastDiv);
                toast.show();
            });
        },
    };
})();

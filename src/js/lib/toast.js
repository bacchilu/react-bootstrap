import React from 'react';
import {createRoot} from 'react-dom/client';

export const Toast = (function () {
    const positionDiv = document.createElement('div');
    positionDiv.setAttribute('class', 'toast-container position-fixed bottom-0 end-0 p-3');
    const toastDiv = document.createElement('div');
    toastDiv.setAttribute('class', 'toast');
    positionDiv.appendChild(toastDiv);
    document.body.appendChild(positionDiv);

    const root = createRoot(toastDiv);

    toastDiv.addEventListener('hidden.bs.toast', function () {
        root.render(null);
    });

    const myToast = new bootstrap.Toast(toastDiv);

    const ToastContent = function () {
        React.useEffect(function () {
            myToast.show();
        }, []);

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

    return {
        render: function () {
            root.render(<ToastContent />);
        },
    };
})();

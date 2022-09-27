import React from 'react';
import {createRoot} from 'react-dom/client';

const Header = function ({title1, title2, close}) {
    const show = !!(title1 ?? false) || !!(title2 ?? false) || !!(close ?? false);

    if (!show) return null;
    return (
        <div className="toast-header">
            <strong className="me-auto">{title1}</strong>
            <small>{title2}</small>
            {close && <button className="btn-close" data-bs-dismiss="toast" />}
        </div>
    );
};

export const ToastBody = function ({title1, title2, close, children}) {
    return (
        <>
            <Header title1={title1} title2={title2} close={close} />
            <div className="toast-body">{children}</div>
        </>
    );
};

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

    const ToastContent = function ({children}) {
        React.useEffect(function () {
            myToast.show();
        }, []);

        return children;
    };

    return {
        show: function (body) {
            root.render(<ToastContent>{body}</ToastContent>);
        },
    };
})();

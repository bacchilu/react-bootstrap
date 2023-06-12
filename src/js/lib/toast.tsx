declare const bootstrap: any;

import React, {ReactNode} from 'react';
import {createRoot} from 'react-dom/client';

const Header: React.FC<{title1?: string; title2?: string; close?: boolean}> = function ({title1, title2, close}) {
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

export const ToastBody: React.FC<{title1?: string; title2?: string; close?: boolean; children: ReactNode}> = function ({
    title1,
    title2,
    close,
    children,
}) {
    return (
        <>
            <Header title1={title1} title2={title2} close={close} />
            <div className="toast-body">{children}</div>
        </>
    );
};

export const Toast = (() => {
    const positionDiv = document.createElement('div');
    positionDiv.setAttribute('class', 'toast-container position-fixed top-0 end-0 p-3 pt-5');
    document.body.appendChild(positionDiv);

    const createToastDiv = function () {
        const toastDiv = document.createElement('div');
        toastDiv.setAttribute('class', 'toast');
        positionDiv.appendChild(toastDiv);

        const root = createRoot(toastDiv);

        toastDiv.addEventListener('hidden.bs.toast', () => {
            root.render(null);
            toastDiv.remove();
        });

        const myToast = new bootstrap.Toast(toastDiv);

        const ToastContent: React.FC<{children: ReactNode}> = function ({children}) {
            React.useEffect(function () {
                myToast.show();
            }, []);

            return children;
        };

        return {root, ToastContent};
    };

    return {
        show: (body: ReactNode) => {
            const {root, ToastContent} = createToastDiv();
            root.render(<ToastContent>{body}</ToastContent>);
        },
    };
})();

import React from 'react';
import {createRoot} from 'react-dom/client';

const d = document.createElement('div');
document.body.appendChild(d);
console.log(d);

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

import {createRoot} from 'react-dom/client';

import {Modal, Toast, ToastBody} from './lib';
// import {Modal, Toast} from '../../lib/dist/module';
import {getRandomTerzina} from './dante';

const ModalBody = function () {
    const content = getRandomTerzina().map(function (t, index) {
        return (
            <span key={index}>
                {t}
                <br />
            </span>
        );
    });

    const onClick = function () {
        Modal.hide();
    };

    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Hello Dante</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <figure className="text-end">
                    <blockquote className="blockquote">
                        <p>{content}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Inferno, <cite title="Source Title">Canto Ⅰ</cite>
                    </figcaption>
                </figure>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                </button>
                <button type="button" className="btn btn-primary" onClick={onClick}>
                    Save changes
                </button>
            </div>
        </div>
    );
};

const App = function () {
    const openModal = function () {
        Modal.show(<ModalBody />);
    };

    const showToast = function () {
        Toast.show(
            <ToastBody title1="Luca Bacchi" close={true}>
                Hello, world! This is a toast message.
            </ToastBody>
        );
    };

    return (
        <>
            <p>
                <button type="button" className="btn btn-primary btn-lg" onClick={openModal}>
                    Open Modal
                </button>
            </p>
            <p>
                <button type="button" className="btn btn-primary btn-lg" onClick={showToast}>
                    Show Toast
                </button>
            </p>
        </>
    );
};

createRoot(document.getElementById('app')).render(<App />);

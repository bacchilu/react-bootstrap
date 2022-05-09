import React from 'react';
import {createRoot} from 'react-dom/client';

import {Modal, Toast} from './lib';
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

    return (
        <figure className="text-end">
            <blockquote className="blockquote">
                <p>{content}</p>
            </blockquote>
            <figcaption className="blockquote-footer">
                Inferno, <cite title="Source Title">Canto Ⅰ</cite>
            </figcaption>
        </figure>
    );
};

const ModalFooter = function () {
    const onClick = function () {
        Modal.hide();
    };

    return (
        <>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
            </button>
            <button type="button" className="btn btn-primary" onClick={onClick}>
                Save changes
            </button>
        </>
    );
};

const App = function () {
    const openModal = function () {
        Modal.show('Hello Dante', <ModalBody />, <ModalFooter />);
    };

    const showToast = function () {
        Toast.render();
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

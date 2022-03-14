import React from 'react';
import ReactDOM from 'react-dom';

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

const App = function () {
    const openModal = function () {
        Modal.render('Hello Dante', <ModalBody />);
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

ReactDOM.render(<App />, document.getElementById('app'));

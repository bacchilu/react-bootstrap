import React from 'react';
import ReactDOM from 'react-dom';

import {Modal} from './lib';
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
    const onClick = function () {
        Modal.render('Hello Dante', <ModalBody />);
    };

    return (
        <button type="button" className="btn btn-primary btn-lg" onClick={onClick}>
            Open Modal
        </button>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));

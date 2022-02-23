import React from 'react';
import ReactDOM from 'react-dom';

import {Modal} from './modal';

const App = function (props) {
    const onClick = function () {
        Modal.render(
            'Hello Dante',
            <figure className="text-end">
                <blockquote className="blockquote">
                    <p>
                        Nel mezzo del cammin di nostra vita
                        <br />
                        mi ritrovai per una selva oscura,
                        <br />
                        ché la diritta via era smarrita.
                    </p>
                </blockquote>
                <figcaption className="blockquote-footer">anonymous Florentine</figcaption>
            </figure>
        );
    };

    return (
        <button type="button" className="btn btn-primary btn-lg" onClick={onClick}>
            Open Modal
        </button>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';

import {Modal} from './modal';

const terzine = [
    ['Nel mezzo del cammin di nostra vita', 'mi ritrovai per una selva oscura,', 'ché la diritta via era smarrita.'],
    [
        'Ahi quanto a dir qual era è cosa dura',
        'esta selva selvaggia e aspra e forte',
        'che nel pensier rinova la paura!',
    ],
    [
        'Tant’è amara che poco è più morte;',
        'ma per trattar del ben ch’i’ vi trovai,',
        'dirò de l’altre cose ch’i’ v’ ho scorte.',
    ],
];

const ModalBody = function () {
    const terzinaRandom = terzine[Math.floor(Math.random() * terzine.length)];
    const content = terzinaRandom.map(function (t, index) {
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
            <figcaption className="blockquote-footer">anonymous Florentine</figcaption>
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

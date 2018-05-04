import React from 'react';
import TransitionCSS from 'react-transition-group/CSSTransition';

import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 1000
};

const modal = (props) => {
    return (
        <TransitionCSS in={props.show} 
        timeout={animationTiming} 
        mountOnEnter unmountOnExit
        classNames={{
            enterActive: "ModalOpen",
            exitActive: "ModalClosed"
        }}
        >
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </TransitionCSS>
    );
};

export default modal;
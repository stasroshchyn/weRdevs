import React, {Component} from 'react';
import {handleClick} from '../Calendar/CalendarGrid';
import './Modal.scss';

const ModalContainer = ({month, dayNumeric, dayText, close}) => {
    return(
        <div className='modal__container'>
            <div className='modal__data'>
                <div className='modal__static'>Month</div>
                <div className='modal__dyn'>{month}</div>
            </div>
            <div className='modal__data'>
                <div className='modal__static'>Day</div>
                <div className='modal__dyn'>{dayNumeric} {dayText}</div>
            </div>
            <div onClick={close} className='modal__close'>✕</div>
        </div>
    )
}

export default ModalContainer;

    
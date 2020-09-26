import React, {Component} from 'react';
import ModalContainer from './ModalContainer';
import './Modal.scss';

const Modal = ({month, dayNumeric, dayText, close}) => {
    return (
        <div className='modal'>
            <ModalContainer month={month} dayNumeric={dayNumeric} dayText={dayText} close={close} />
        </div>   
    )     
}

export default Modal;
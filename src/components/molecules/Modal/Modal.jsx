import React from 'react';
import './Modal.scss';

const Modal = ({ isModalOpen, modalContent, modalHeader, modalFooter }) => {
    return (
        <div className={`Modal_container ${isModalOpen && 'Modal_open'}`}>
            {modalHeader && <div className='Modal_header'>{modalHeader}</div>}
            <div className='Modal_content'>{modalContent}</div>
            {modalFooter && <div className='Modal_footer'>{modalFooter}</div>}
        </div>
    );
};

export default Modal;

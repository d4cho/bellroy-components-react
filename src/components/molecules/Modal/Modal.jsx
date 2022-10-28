import React from 'react';
import './Modal.scss';

const Modal = ({
    bgColor,
    width,
    position,
    slideFrom,
    isModalOpen,
    setIsModalOpen,
    onBackdropClick,
    modalContent,
    modalHeader,
    modalFooter,
}) => {
    const getPosition = (pos) => {
        switch (pos) {
            case 'fullscreen':
                return { top: '0px', left: '0px', right: '0px', bottom: '0px' };

            case 'left':
                return { top: '0px', left: '0px', bottom: '0px' };

            case 'right':
                return { top: '0px', right: '0px', bottom: '0px' };

            case 'center':
                return {
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                };

            default:
                return { top: '0px', left: '0px', right: '0px', bottom: '0px' };
        }
    };

    const getSlideAnim = (slideFrom) => {
        switch (slideFrom) {
            case 'top':
                return '0 -100%';

            case 'right':
                return '100% 0';

            case 'bottom':
                return '0 100%';

            case 'left':
                return '-100% 0';

            default:
                return '0 100%';
        }
    };

    const handleBackdropClick = () => {
        if (onBackdropClick) {
            onBackdropClick();
        }
        setIsModalOpen(false);
    };

    return (
        <>
            <div
                className={`Modal_modal ${isModalOpen && 'Modal_open'}`}
                style={{
                    '--bgColor': bgColor ? bgColor : '#fff',
                    '--width': width ? width : '100%',
                    '--translate': getSlideAnim(slideFrom),
                    ...getPosition(position),
                }}
            >
                {modalHeader && (
                    <div className='Modal_header'>{modalHeader}</div>
                )}
                <div className='Modal_content'>{modalContent}</div>
                {modalFooter && (
                    <div className='Modal_footer'>{modalFooter}</div>
                )}
            </div>
            {isModalOpen && (
                <div className='Modal_backdrop' onClick={handleBackdropClick} />
            )}
        </>
    );
};

export default Modal;

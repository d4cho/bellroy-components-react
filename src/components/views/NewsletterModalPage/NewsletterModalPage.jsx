import React, { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import Modal from '../../molecules/Modal/Modal';
import Newsletter from '../../organisms/Newsletter/Newsletter';
import './NewsletterModalPage.scss';

const NewsletterModalPage = () => {
    const { setNewsletterEmail } = useAppContext();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='NewsletterModalPage_container'>
            <button onClick={() => setIsModalOpen(true)}>
                open newsletter modal
            </button>
            <Modal
                bgColor={'transparent'}
                width={'fit-content'}
                position={'center'}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                onBackdropClick={() => setNewsletterEmail('')}
                modalContent={
                    <Newsletter closeModal={() => setIsModalOpen(false)} />
                }
            />
        </div>
    );
};

export default NewsletterModalPage;

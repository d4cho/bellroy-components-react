import React from 'react';
import './Newsletter.scss';
import newsletterImg from '../../../assets/images/newsletter.avif';
import newsletterMobileImg from '../../../assets/images/newsletter-mobile.avif';
import { GrClose } from 'react-icons/gr';
import TextInput from '../../atoms/TextInput/TextInput';
import { useAppContext } from '../../../context/AppContext';
import { BsArrowUp } from 'react-icons/bs';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Newsletter = ({ closeModal }) => {
    const { isMobileView, newsletterEmail, setNewsletterEmail } =
        useAppContext();

    return (
        <div className='Newsletter_container'>
            <div>
                <img
                    className='Newsletter_image'
                    src={isMobileView ? newsletterMobileImg : newsletterImg}
                    alt={'newsletter-desktop'}
                />
            </div>
            <div className='Newsletter_content'>
                <GrClose
                    className='Newsletter_close'
                    size={20}
                    onClick={() => {
                        setNewsletterEmail('');
                        closeModal();
                    }}
                />
                <div className='Newsletter_eyebrow'>SAY NO TO THE FOMO</div>
                <div className='Newsletter_header'>
                    Get new releases and subscriber exclusives
                </div>
                <div className='Newsletter_input'>
                    <TextInput
                        value={newsletterEmail}
                        setValue={setNewsletterEmail}
                        placeholder={'Enter your email to register'}
                        type={'email'}
                        regex={emailRegex}
                        errorMessage={
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <BsArrowUp /> &nbsp; Invalid email address
                            </div>
                        }
                    />
                </div>
                <div className='Newsletter_legal'>
                    You are signing up to receive product updates and
                    newsletters. By signing up, you are consenting to our{' '}
                    <span>private policy</span> but you can opt out at any time.
                </div>
            </div>
        </div>
    );
};

export default Newsletter;

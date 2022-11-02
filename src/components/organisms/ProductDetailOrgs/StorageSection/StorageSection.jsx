import React from 'react';
import './StorageSection.scss';
import surprisingStorageImg from '../../../../assets/images/ClassicBackpack/SurprisingStorage/suprising-storage.avif';

const StorageSection = () => {
    return (
        <div className='StorageSection_container'>
            <div className='StorageSection_badge'>
                <div>
                    <span className='StorageSection_badge_number'>20</span>
                    <span className='StorageSection_badge_litre'>L</span>
                </div>
                <p>capacity</p>
            </div>
            <h1>SURPRISING STORAGE</h1>
            <img src={surprisingStorageImg} alt={'surprising-storage'} />
        </div>
    );
};

export default StorageSection;

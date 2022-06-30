import React from 'react';
import { faCommentAlt, faEarthAmerica, faToolbox, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg1 from '../../assets/images/bg1.png';
const BusinessWork = () => {
    return (
        <div className='bg-no-repeat object-contain object-center bg-cover max-w-fit sm: mt-20 p-10'
            style={{ backgroundImage: `url(${bg1})` }}
        >
            <h3 className='text-4xl  font-bold text-white text-center'>TRUST IS THE KEY OF BUSINESS</h3>
            <p className='text-center text-white text-lg mb-16'>Try to work for user satisfaction</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                <div className="stat bg-sky-900 rounded-lg">
                    <div><FontAwesomeIcon className='text-4xl text-white' icon={faEarthAmerica} /></div>
                    <div className="stat-value text-orange-300 my-2">17+</div>
                    <div className=" mb-2 text-xl text-info font-bold">Country</div>
                    <div className="text-white text-sm font-semibold">Jan 1st 2021 - june 1st 2022</div>
                </div>

                <div className="stat bg-sky-900 rounded-lg ">
                    <div><FontAwesomeIcon className='text-4xl text-white' icon={faToolbox} /></div>
                    <div className="stat-value text-orange-300 my-2">250K+</div>
                    <div className=" mb-2 text-xl text-info font-bold">Product Sells</div>
                    <div className="text-white text-sm font-semibold">↗︎ 350 (50%)</div>
                </div>
                <div className="stat bg-sky-900 rounded-lg">
                    <div><FontAwesomeIcon className='text-4xl text-white' icon={faUserFriends} /></div>
                    <div className="stat-value text-orange-300 my-2">434+</div>
                    <div className=" mb-2 text-xl text-info font-bold">Our Client</div>
                    <div className="text-white text-sm font-semibold">↘︎ 30 (8%)</div>

                </div>
                <div className="stat bg-sky-900 rounded-lg">
                    <div><FontAwesomeIcon className='text-4xl text-white' icon={faCommentAlt} /></div>
                    <div className="stat-value  text-orange-300 my-2">268+</div>
                    <div className=" mb-2 text-xl text-info font-bold">Feedback</div>
                    <div className="text-white text-sm font-semibold">↘︎ 55 (16%)</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessWork;
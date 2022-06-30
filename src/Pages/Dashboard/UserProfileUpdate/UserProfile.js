import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { faAddressCard, faCity, faEnvelope, faPhone, faStreetView, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { GrFacebookOption, GrGithub } from "react-icons/gr";
import useUserProfile from '../../../Hooks/useUserProfile';
import Loading from '../../Shared/Loading';
import UpdateProfile from './UpdateProfile';
const UserProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [update, setUpdate] = useState(false);
    const [userInfo, isLoading, refetch] = useUserProfile(user);

    if (isLoading || loading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <h2 className="mb-2 text-xl">My profile</h2>
            <div className="border max-w-md flex flex-col justify-center items-center rounded-lg p-10 gap-1">

                <div className="flex gap-2 mb-3">

                    <div className='w-full mx-30'>
                        <div>
                            <img
                                className="rounded-lg max-w-[100px]"
                                src={userInfo?.photo}
                                alt=""
                            />
                            {userInfo?.role && (
                                <div class="badge badge-outline m-2 hover:bg-orange-600 ">{userInfo.role}</div>
                            )}
                        </div>
                        <div className="form-control">
                            <label className=" mb-4 mt-4">
                                <span className='text-lg font-bold'><FontAwesomeIcon icon={faUser} />  Name</span>
                                <h2 className="w-2/3 text-md">{userInfo?.name}</h2>
                            </label>
                            <label className=" mb-4">
                                <span className='text-lg font-bold'><FontAwesomeIcon icon={faEnvelope} />  Email </span>
                                <h2 className="w-2/3 text-md">{userInfo?.email}</h2>
                            </label>
                            <label className=" mb-4">
                                <span className='text-lg font-bold'><FontAwesomeIcon icon={faPhone} />  Phone: </span>
                                <h2 className="w-2/3 text-md">{userInfo?.phone || 'no data found!'}</h2>
                            </label>

                            <label className=" mb-4">
                                <span className='text-lg font-bold'><FontAwesomeIcon icon={faCity} />  City</span>
                                <h2 className="w-2/3 text-md">{userInfo?.country || 'no data found!'}</h2>
                            </label>
                            <label className=" mb-4">
                                <span className='text-lg font-bold'><FontAwesomeIcon icon={faStreetView} />  Street Address:</span>
                                <h2 className="w-2/3 text-md">{userInfo?.address || 'no data found!'}</h2>
                            </label>
                            <div className='flex flex-row justify-center items-center rounded-lg p-2 gap-1'>
                                {userInfo?.facebook && (
                                    <a href={userInfo?.facebook} target="_blank">
                                        <GrFacebookOption className="text-2xl"></GrFacebookOption>
                                    </a>
                                )}
                                {userInfo?.github && (
                                    <a href={userInfo?.github} target="_blank">
                                        <GrGithub className="text-2xl"></GrGithub>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                    <label
                        onClick={() => setUpdate(true)}
                        for="update-profile"
                        className="mt-3 btn btn-xs bg-base-200 rounded-md text-black  capitalize hover:text-white"
                    >
                        Update
                    </label>
                </div>
            </div>
            {update && (
                <UpdateProfile
                    update={update}
                    setUpdate={setUpdate}
                    userInfo={userInfo}
                    refetch={refetch}
                ></UpdateProfile>
            )}
        </div>
    );
};

export default UserProfile;
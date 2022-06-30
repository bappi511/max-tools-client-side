import React, { useEffect, useState } from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import toast from "react-hot-toast";
import auth from '../../../firebase.init';

const UpdateProfile = ({ update, setUpdate, userInfo, refetch }) => {
    const [updating, setUpdating] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [facebook, setFacebook] = useState("");
    const [github, setGithub] = useState("");
    const [photo, setPhoto] = useState("");
    const [updateProfileData] = useUpdateProfile(auth);

    useEffect(() => {
        setName(userInfo?.name);
        setEmail(userInfo?.email);
        setAddress(userInfo?.address);
        setCountry(userInfo?.country);
        setPhone(userInfo?.phone);
        setFacebook(userInfo?.facebook);
        setGithub(userInfo?.github);
    }, [userInfo]);

    const imgbbKey = "cf3707c131de162658e6bb00e6d40602";
    const updateFirebaseProfile = async (name, img) => {
        await updateProfileData({ displayName: name, photoURL: img });
    };

    const handleUpdateProfile = (e, email) => {
        e.preventDefault();
        setUpdating(true);
        const uploadedImage = photo[0];
        if (uploadedImage) {
            const formData = new FormData();
            formData.append("image", uploadedImage);
            fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.success) {
                        const img = result.data.url;
                        updateFirebaseProfile(name, img);
                        const data = {
                            name: name,
                            address: address,
                            country: country,
                            phone: phone,
                            facebook: facebook,
                            github: github,
                            photo: img,
                        };
                        fetch(`https://aqueous-sierra-90066.herokuapp.com/user/${email}`, {
                            method: "PATCH",
                            headers: {
                                "content-type": "application/json",
                                authorization: `Bearer ${localStorage.getItem(
                                    "accessToken"
                                )}`,
                            },
                            body: JSON.stringify(data),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                if (data.acknowledged) {
                                    toast.success("Profile updated successfully!");
                                    setUpdating(false);
                                    setUpdate(false);
                                    refetch();
                                }
                                if (data.message) {
                                    toast.error(data.message);
                                }
                            });
                    }
                });
        } else {
            const data = {
                name: name,
                address: address,
                country: country,
                phone: phone,
                facebook: facebook,
                github: github,
            };
            fetch(`https://aqueous-sierra-90066.herokuapp.com/user/${email}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.acknowledged) {
                        toast.success("Profile updated successfully!");
                        setUpdating(false);
                        setUpdate(false);
                        refetch();
                    }
                    if (data.message) {
                        toast.error(data.message);
                    }
                });
        }
    };
    return (
        <>
            <input type="checkbox" id="update-profile" className="modal-toggle" />
            <div className="modal modal-bottom  z-50 sm:modal-middle">
                <div className="modal-box h-[450px]">
                    <h2 className="text-xl mb-5">Update Your Profile</h2>
                    <form
                        onSubmit={(e) => handleUpdateProfile(e, email)}
                        className="max-w-xl flex flex-col gap-2 text-left"
                    >
                        <label htmlFor="name">
                            Name
                            <input
                                className="input input-sm rounded-md input-bordered w-full"
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>

                        <label htmlFor="address">
                            Address
                            <input
                                className="input input-sm rounded-md input-bordered w-full"
                                id="address"
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </label>
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <label htmlFor="country">
                                    Country
                                    <input
                                        className="input input-sm rounded-md input-bordered w-full"
                                        id="country"
                                        type="text"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div className="flex-1">
                                <label htmlFor="phone">
                                    Phone
                                    <input
                                        className="input input-sm rounded-md input-bordered w-full"
                                        id="phone"
                                        type="number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                        <label htmlFor="facebook">
                            Facebook URL
                            <input
                                className="input input-sm rounded-md input-bordered w-full"
                                id="facebook"
                                type="url"
                                value={facebook}
                                onChange={(e) => setFacebook(e.target.value)}
                            />
                        </label>
                        <label htmlFor="github">
                            Github URL
                            <input
                                className="input input-sm rounded-md input-bordered w-full"
                                id="facebook"
                                type="url"
                                value={github}
                                onChange={(e) => setGithub(e.target.value)}
                            />
                        </label>
                        Profile Picture
                        <input
                            className="rounded-md w-auto"
                            id="profilePic"
                            type="file"
                            name="profilePic"
                            onChange={(e) => setPhoto(e.target.files)}
                        />
                        <input
                            type="submit"
                            value={updating ? "Updating..." : "Update"}
                            className=" btn btn-primary text-lg text-white mt-3"
                        />
                    </form>

                    <div className="modal-action">
                        <button
                            onClick={() => setUpdate(false)}
                            className="btn  text-white border-0"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateProfile;
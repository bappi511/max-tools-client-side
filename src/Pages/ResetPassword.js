import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const ResetPassword = () => {
    const [sendPasswordResetEmail, sending, error] =
        useSendPasswordResetEmail(auth);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleResetPassword = (data) => {
        const { email } = data;
        sendPasswordResetEmail(email);
        reset();
        toast.success("Password reset link sent to your email!");
    };
    return (
        <div className="pt-16 pb-14 md:pt-24  px-3">
            <div className="flex justify-center items-center">
                <div className="card w-96 border border-slate-200">
                    <div className="card-body">
                        <h2 className="card-title justify-center mb-3">
                            Reset Password
                        </h2>

                        <div>
                            <div className="mb-5">
                                <form
                                    onSubmit={handleSubmit(handleResetPassword)}
                                    className=" flex flex-col gap-2 text-left"
                                >
                                    <input
                                        {...register("email", { required: true })}
                                        className="input input-bordered w-full"
                                        type="email"
                                        placeholder="Email"
                                    />
                                    {errors.email?.type === "required" && (
                                        <p className="text-red-400 text-sm ">
                                            Email is required!
                                        </p>
                                    )}
                                    {error && (
                                        <p className="text-red-400 text-sm ">
                                            {error.message}
                                        </p>
                                    )}

                                    <input
                                        type="submit"
                                        value={sending ? "Sending..." : "Reset"}
                                        className="btn btn-primary text-lg text-white mt-3"
                                    />
                                    <p className="text-sm text-left">
                                        <Link
                                            to="/login"
                                            className="underline ml-1 text-primary"
                                        >
                                            Back to login
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
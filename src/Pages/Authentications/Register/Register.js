import React from 'react';
import logo from '../../../assets/images/logo.png';
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import useToken from '../../../Hooks/useToken';
const Register = () => {

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating] = useUpdateProfile(auth);

    const [signInWithGoogle, gUser, gLoading] =
        useSignInWithGoogle(auth);

    const navigate = useNavigate();

    const [token] = useToken(user || gUser);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    if (loading || gLoading || updating) {
        return <Loading></Loading>;
    }
    if (token) {
        navigate("/dashboard");
    }

    const handleRegister = async (data) => {
        const displayName = data.displayName
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: displayName });
        reset();
    };
    return (
        <div className='bg-slate-800'>
            <div className='flex items-center justify-center'>
                <img className='mt-12' src={logo} alt="" />
            </div>
            <div className="pt-8 md:pt-10 pb-5  px-3">
                <div className="flex justify-center items-center">
                    <div className="card w-96 border border-slate-200 bg-zinc-300">
                        <div className="card-body">
                            <h2 className="card-title justify-center mb-3">Register</h2>

                            <div>
                                <div className="mb-5">
                                    {error?.message ===
                                        "Firebase: Error (auth/email-already-in-use)." && (
                                            <p className="text-red-500 text-left mb-2">
                                                Email already in use!
                                            </p>
                                        )}
                                    <form
                                        onSubmit={handleSubmit(handleRegister)}
                                        className=" flex flex-col gap-2 text-left"
                                    >
                                        <input
                                            {...register("displayName", { required: true })}
                                            className="input input-bordered w-full "
                                            type="text"
                                            placeholder="Full name"
                                        />
                                        {errors.name?.type === "required" && (
                                            <p className="text-red-400 text-sm">
                                                Name is required!
                                            </p>
                                        )}
                                        <input
                                            {...register("email", { required: true })}
                                            className="input input-bordered w-full "
                                            type="email"
                                            placeholder="Your email"
                                        />
                                        {errors.email?.type === "required" && (
                                            <p className="text-red-400 text-sm">
                                                Email is required!
                                            </p>
                                        )}
                                        <input
                                            {...register("password", {
                                                required: true,
                                                pattern:
                                                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                            })}
                                            className="input input-bordered w-full "
                                            type="password"
                                            placeholder="Password"
                                        />
                                        {errors.password?.type === "required" && (
                                            <p className="text-red-400 text-sm">
                                                Password is required!
                                            </p>
                                        )}
                                        {errors.password?.type === "pattern" && (
                                            <p className="text-red-400">
                                                Password should have minimum eight characters,
                                                at least one uppercase, one lowercase, one
                                                number and one special character
                                            </p>
                                        )}

                                        <input
                                            type="submit"
                                            value="Register"
                                            className="btn btn-secondary text-lg text-white mt-3"
                                        />
                                        <p className="text-sm">
                                            Have an account?
                                            <Link
                                                to="/login"
                                                className="underline ml-1 text-primary"
                                            >
                                                Login here
                                            </Link>
                                        </p>
                                    </form>
                                </div>
                                <div className="flex flex-col w-full border-opacity-50">
                                    <div className="divider">OR</div>
                                    <button
                                        onClick={() => signInWithGoogle()}
                                        className="btn btn-outline"
                                    >
                                        <img className='mr-1' style={{ width: '35px', height: '35px' }} src="https://i.ibb.co/L6LzRww/Google-G-Logo-svg.png" alt="" />
                                        Continue with google
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
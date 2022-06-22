import React from 'react';
import logo from '../../../assets/images/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';
import auth from '../../../firebase.init';
const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] =
        useSignInWithGoogle(auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading || gLoading) {
        return <Loading></Loading>;
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleLogin = (data) => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password);
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
                        <div className="card-body ">
                            <h2 className="card-title justify-center mb-3">Login</h2>

                            <div>
                                <div className="mb-5">
                                    <form
                                        onSubmit={handleSubmit(handleLogin)}
                                        className=" flex flex-col gap-2 text-left"
                                    >
                                        <input
                                            {...register("email", { required: true })}
                                            className="input input-bordered w-full"
                                            type="email"
                                            placeholder="Your email"
                                        />
                                        {errors.email?.type === "required" && (
                                            <p className="text-red-400 text-sm">
                                                Email is required!
                                            </p>
                                        )}
                                        <input
                                            {...register("password", { required: true })}
                                            className="input input-bordered w-full"
                                            type="password"
                                            placeholder="Password"
                                        />
                                        {errors.password?.type === "required" && (
                                            <p className="text-red-400 text-sm ">
                                                Password is required!
                                            </p>
                                        )}
                                        <Link to="/reset-password" className=" text-sm text-left hover:text-primary">
                                            Forgot Password?
                                        </Link>

                                        <input
                                            type="submit"
                                            value="Login"
                                            className="btn btn-secondary text-lg text-white mt-3"
                                        />
                                        <p className="text-sm text-left">
                                            New to Max Tools?
                                            <Link
                                                to="/register"
                                                className="underline ml-1 text-primary"
                                            >
                                                Create Account
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
                                        <img className='mr-1' style={{ width: '35px', height: '35px' }} src="https://i.ibb.co/L6LzRww/Google-G-Logo-svg.png" alt="" /> Continue with google
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

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FaFacebookF, FaInstagram, FaRegEnvelope } from "react-icons/fa";
const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div>
            <footer style={{ backgroundColor: '#191919', color: '#cccccc' }} class="footer p-10 mt-16">
                <div className="container mx-auto" style={{ maxWidth: "1100px" }}>
                    <div className=" text-left grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div>
                            <img src={logo} alt="" />
                            <p className="mt-4">
                                There are many variations of passages of look even slightly believable.There are many variations of passages of look even slightly believable.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl mb-3 footer-title tracking-wider	">Services</h2>
                            <ul className=" flex flex-col gap-2">
                                <li>
                                    <Link
                                        to="/dashboard/my-orders"
                                        className="hover:text-white hover:translate-x-1 transition-all inline-block hover:scale-[1.1]"
                                    >
                                        Mange Orders
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/dashboard/my-profile"
                                        className="hover:text-white hover:translate-x-1 transition-all inline-block hover:scale-[1.1]"
                                    >
                                        My Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/login"
                                        className="hover:text-white hover:translate-x-1 transition-all inline-block hover:scale-[1.1]"
                                    >
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="footer-title mb-3 tracking-wide">
                                SUBSCRIBE FOR NEWSLETTER
                            </p>
                            <form action="" className="">
                                <input
                                    type="text"
                                    placeholder="Your email"
                                    className="input input-bordered text-black w-full max-w-xs bg-slate-100"
                                />
                                <input
                                    type="button"
                                    value="Subscribe"
                                    className="btn bg-sky-800 hover:bg-sky-900 mt-2"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </footer >
            <div style={{ backgroundColor: '#111111', color: '#cccccc' }}>
                <p className='text-center p-2'><small> Copyright {year} &copy; max-tools <span className='text-slate-500'>|</span> Powered by Bappi Hossain</small></p>
                <div className='flex gap-5 text-xl justify-center items-center mt-1 pb-3'>
                    <Link to="/" className="hover:text-white hover:scale-110 transition-all"><FaFacebookF></FaFacebookF></Link>
                    <Link to="/" className="hover:text-white hover:scale-110 transition-all"> <FaInstagram></FaInstagram></Link>
                    <Link to="/" className="hover:text-white hover:scale-110 transition-all"><FaRegEnvelope></FaRegEnvelope></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import { signOut } from 'firebase/auth';
import logo from '../../assets/images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { RiUser3Line } from "react-icons/ri";
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import useUserProfile from '../../Hooks/useUserProfile';

const Navbar = ({ children }) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const navigate = useNavigate();
    const [userProfile, refetch] = useUserProfile(user);

    const logOut = () => {
        signOut(auth);
        navigate("login");
    };

    const menuItems =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Product</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            {user && (
                <li tabIndex="0">
                    <span className="gap-1">
                        Dashboard
                        <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </span>
                    <ul className="p-2 bg-base-100 shadow-lg rounded-lg left-0 top-full w-auto text-md">
                        {!admin && (
                            <>
                                <li>
                                    <Link className=" text-black"
                                        to="/dashboard/my-orders"
                                    >
                                        My Orders
                                    </Link>
                                </li>
                                <li>
                                    <Link className=" text-black"
                                        to="/dashboard/add-review"
                                    >
                                        Add Review
                                    </Link>
                                </li>
                            </>
                        )}
                        {(
                            <>
                                <li>
                                    <Link className=" text-black"
                                        to="/dashboard/add-product"
                                    >
                                        Add Product
                                    </Link>
                                </li>
                                <li>
                                    <Link className=" text-black"
                                        to="/dashboard/manage-all-products"
                                    >
                                        Manage Products
                                    </Link>
                                </li>
                                <li>
                                    <Link className=" text-black"
                                        to="/dashboard/manage-all-orders"
                                    >
                                        Manage Orders
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-black"
                                        to="/dashboard/admin-user"
                                    >
                                        Admin User
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </li>
            )}
        </>;


    return (
        <div className=''>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar shadow-sm sticky top-0 z-10 bg-sky-900 text-white">
                        <div className="container mx-auto">
                            <div className="flex-none lg:hidden">
                                <label for="my-drawer-3" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>

                            <div className="flex-1 px-2 mx-2">
                                <Link to='/' >
                                    <img src={logo} alt="" />
                                </Link></div>
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal">
                                    {menuItems}
                                </ul>
                            </div>

                            <div className="flex-none  lg:flex">
                                <ul className="menu menu-horizontal">
                                    {!user ? (
                                        <Link to="/login">
                                            <div className="ring rounded-full bg-slate-700 p-3">
                                                <RiUser3Line className="text-xl w-full text-base-100"></RiUser3Line>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className="dropdown dropdown-end">
                                            <label
                                                tabIndex="0"
                                                className="btn btn-ghost btn-circle avatar"
                                            >
                                                {userProfile?.photo ? (
                                                    <div className="ring rounded-full">
                                                        <img src={userProfile?.photo} alt="user" />
                                                    </div>
                                                ) : (
                                                    <div className="ring rounded-full bg-slate-700 p-3">
                                                        <RiUser3Line className="text-xl w-full text-base-100"></RiUser3Line>
                                                    </div>
                                                )}
                                            </label>
                                            <ul
                                                tabIndex="0"
                                                className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-lg w-40"
                                            >
                                                <li>
                                                    <Link
                                                        to="/dashboard/my-profile"
                                                        className="justify-between text-md bg-white text-black "
                                                    >
                                                        My Profile
                                                    </Link>
                                                </li>

                                                <li>
                                                    <button
                                                        onClick={logOut}
                                                        className="justify-between  text-md  text-black "
                                                    >
                                                        Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </ul>
                            </div>

                        </div>
                    </div>
                    {children}
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-56 shadow-sm bg-sky-600 bg-transparent text-white">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
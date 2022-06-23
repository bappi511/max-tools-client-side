import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if (loading || adminLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="pt-8 md:pt-16  px-3 z-0">
            <div className="container mx-auto">
                <div class="drawer drawer-mobile py-5 h-auto">
                    <input
                        id="dashboard-drawer"
                        type="checkbox"
                        class="drawer-toggle"
                    />
                    <div class="drawer-content p-4 pt-0 md:pl-10 text-left">
                        <h2 className="text-3xl mb-5">My dashboard</h2>
                        <Outlet></Outlet>
                    </div>
                    <div class="hidden lg:flex" style={{ maxHeight: "100%" }}>
                        <ul class="menu p-4 overflow-y-auto w-auto bg-base-200  rounded-lg gap-1 text-lg block">
                            {!admin && (
                                <>
                                    {" "}
                                    <li>
                                        <Link
                                            className="bg-transparent"
                                            to="/dashboard/my-orders"
                                        >
                                            My Orders
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="bg-transparent"
                                            to="/dashboard/add-review"
                                        >
                                            Add A Review
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="bg-transparent"
                                            to="/dashboard/my-profile"
                                        >
                                            My Profile
                                        </Link>
                                    </li>
                                </>
                            )}
                            {admin && (
                                <div className="text-left">
                                    <li>
                                        <Link
                                            className="bg-transparent"
                                            to="/dashboard/manage-all-orders"
                                        >
                                            Manage All Orders
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="bg-transparent"
                                            to="/dashboard/add-product"
                                        >
                                            Add New Product
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="bg-transparent"
                                            to="/dashboard/manage-all-products"
                                        >
                                            Manage All Products
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="bg-transparent"
                                            to="/dashboard/make-admin"
                                        >
                                            Make Admin
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="bg-transparent"
                                            to="/dashboard/my-profile"
                                        >
                                            My Profile
                                        </Link>
                                    </li>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
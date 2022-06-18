import React from "react";
import drill from "../../assets/images/drill-machine.png";
import { Link } from "react-router-dom";
import bg from '../../assets/images/bg.png';
const Banner = () => {
    return (
        <div
            className=" bg-cover bg-bottom bg-no-repeat pb-8"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="container mx-auto" style={{ maxWidth: "1100px" }}>
                <div className="pt-5 md:pt-18 md:pb-16">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                        <img
                            src={drill}
                            className="flex-1 max-w-[250px] md:max-w-lg"
                            alt=""
                        />
                        <div className="flex-1 text-left">
                            <h1 className=" text-4xl lg:text-6xl font-extrabold text-black uppercase">
                                Modern Tool
                            </h1>
                            <h1 className=" text-2xl lg:text-2xl font-extrabold text-secondary uppercase">
                                Suprimo's Kit
                            </h1>
                            <p className="py-6 text-lg max-w-md">
                                We are a manufacturer of high quality and low coast
                                Suprimo's Kit
                                . The kits are durable, low cost and long lasting.
                            </p>
                            <Link to="/products">
                                <button className="btn rounded-lg border-0 bg-sky-800 hover:bg-sky-900 text-white">
                                    Browse Products
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

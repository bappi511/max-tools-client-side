import React from 'react';
import brand1 from '../../assets/images/brand-logos/brand1.png';
import brand2 from '../../assets/images/brand-logos/brand2.png';
import brand3 from '../../assets/images/brand-logos/brand3.png';
import brand4 from '../../assets/images/brand-logos/brand4.png';

const WorkBrand = () => {

    const brandLogos = [brand1, brand2, brand3, brand4];

    return (
        <div className="pt-24 pb-10 px-3">
            <div className="container mx-auto" style={{ maxWidth: "1100px" }}>
                <div className="mb-5">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-center ">
                        Brands We Are Working With
                    </h2>
                    <p className=" max-w-md mx-auto mt-5 mb-16">
                        We work with the top brands all over the world.
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5 justify-center">
                    {brandLogos.map((logo, index) => (
                        <div className="flex justify-center" key={index}>
                            <img
                                className=""
                                src={logo}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkBrand;
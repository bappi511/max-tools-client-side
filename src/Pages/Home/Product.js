import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const { _id, name, price, img, quantity, minimum_order } = product;
    const navigate = useNavigate();

    const handleToPurchase = (id) => {
        navigate(`/Product/${id}`);
    };
    return (
        <div className="item border-slate-100 border-2 rounded-lg">
            <div className=" relative h-48 md:h-56 bg-cover bg-no-repeat bg-center rounded-t-lg bg-[#ffffff] overflow-hidden">
                <img
                    src={img}
                    alt=""
                    className="item-thumbnail w-full h-full object-cover rounded-t-lg transition-all duration-500"
                />
                <span className="absolute top-0 right-0 text-sm bg-primary-content text-white py-1 px-2">
                    Available: <strong>{quantity}</strong>
                </span>
            </div>
            <div className="p-4  text-black rounded-b-lg text-left">
                <h3 className="text-lg md:text-lg">{name}</h3>
                <h2 className="text-xl md:text-xl py-2">${price}</h2>

                <div className="flex flex-col items-center justify-between border-t border-slate-200 pt-2 text-slate-500 text-md">
                    <h4>Minimum Order: {minimum_order}</h4>
                    <button
                        onClick={() => handleToPurchase(_id)}
                        className="bg-secondary hover:bg-secondary-focus py-2 px-5 capitalize text-white  rounded-sm mt-2 text-md font-bold"
                    >
                        PURCHASE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;

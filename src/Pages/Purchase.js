import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import Loading from "./Shared/Loading";
import { FiMinus, FiPlus } from "react-icons/fi";


const Purchase = () => {
    const [quantity, setQuantity] = useState();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { _id } = useParams();

    const {
        data: product,
        isLoading,
        refetch,
    } = useQuery("product", () =>
        fetch(`http://localhost:5000/product/${_id}`).then((res) => {
            return res.json();
        })
    );
    const [subtotal, setSubtotal] = useState();

    const minimumUnit = parseInt(product?.minimum_order);
    const availableUnit = parseInt(product?.available);
    useEffect(() => {
        setQuantity(minimumUnit);
    }, [product, minimumUnit]);
    useEffect(() => {
        setSubtotal(parseInt(product?.price) * quantity);
    }, [quantity, product?.price]);

    if (isLoading) {
        return <Loading></Loading>;
    }

    const decreaseQuantity = () => {
        if (quantity > minimumUnit) {
            setQuantity(quantity - 1);
        }
    };
    const increaseQuantity = () => {
        if (quantity < availableUnit) {
            setQuantity(quantity + 1);
        }
    };
    return (
        <div className=" pt-20 px-3">
            <div className="container mx-auto" style={{ maxWidth: "1000px" }}>
                <div className="md:flex justify-between gap-5">
                    <div className="md:w-3/6">
                        <div className="sticky top-20">
                            <div className="flex gap-5">
                                <div className=" h-36 w-36 bg-cover bg-no-repeat bg-center rounded-lg bg-base-200 bg-blend-overlay overflow-hidden">
                                    <img
                                        src={product?.img}
                                        alt=""
                                        className="item-thumbnail w-full h-full object-cover rounded-t-lg"
                                    />
                                </div>
                                <div className="text-left">
                                    <h2 className="text-2xl mb-2">{product?.name}</h2>
                                    <span className="text-xl bg-sky-700 text-white px-3 py-1 rounded-full mr-2 font-normal">
                                        ${product?.price}
                                    </span>
                                    <span>/ Per Piece</span>
                                    <h4 className="mt-5">
                                        Available: {product?.available} Piece.
                                    </h4>
                                    <h4 className=" mb-5">
                                        Minimum order quantity: {product?.minimum_order}{" "}
                                        Piece.
                                    </h4>
                                    <div className=" flex flex-col gap-2">
                                        <div className="flex items-center">
                                            <div
                                                onClick={decreaseQuantity}
                                                className="bg-sky-900 h-10 w-10 flex text-white justify-center items-center text-2xl hover:bg-sky-800 cursor-pointer border border-base-200 hover:border-base-300"
                                            >
                                                <FiMinus></FiMinus>
                                            </div>
                                            <input
                                                className="text-center focus:outline-primary/30 w-28 h-10 border"
                                                type="number"
                                                id=""
                                                min={minimumUnit}
                                                max={availableUnit}
                                                value={quantity}
                                                onChange={(e) =>
                                                    setQuantity(parseInt(e.target.value))
                                                }
                                            />
                                            <div
                                                onClick={increaseQuantity}
                                                className="bg-sky-900 h-10 w-10 flex text-white justify-center items-center text-2xl hover:bg-sky-800 cursor-pointer border border-base-200 hover:border-base-300"
                                            >
                                                <FiPlus></FiPlus>
                                            </div>
                                        </div>
                                        {errors.quantity?.type === "required" && (
                                            <p className="text-red-400 text-sm ">
                                                Please add quantity!
                                            </p>
                                        )}
                                        {quantity < minimumUnit && (
                                            <p className="text-red-400 text-sm ">
                                                Minimum order Quantity is{" "}
                                                <strong>{minimumUnit}</strong>
                                            </p>
                                        )}
                                        {quantity > availableUnit && (
                                            <p className="text-red-400 text-sm ">
                                                Available Quantity is <strong>{availableUnit}</strong>
                                            </p>
                                        )}

                                        <div>
                                            <label className="my-3 text-lg" htmlFor="">
                                                Subtotal: $
                                                <input
                                                    className="outline-0 w-24 overflow-auto"
                                                    type="text"
                                                    value={subtotal}
                                                    readOnly
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 rounded-lg my-5 text-left bg-slate-200">
                                <h2 className="text-lg">Product Details - </h2>
                                <p className="text-slate-600">{product?.details}</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-3/6">
                        <div className="border shadow-2xl shadow-slate-200 p-10 rounded-lg">
                            <form

                                className=" flex flex-col gap-2 text-left"
                            >
                                <h2 className="text-2xl mb-2">Order Form</h2>
                                <input
                                    className="input input-bordered w-full"
                                    type="text"

                                    disabled
                                />
                                <input
                                    className="input input-bordered w-full"
                                    type="text"

                                    disabled
                                />
                                <input
                                    {...register("company")}
                                    className="input input-bordered w-full"
                                    type="text"
                                    placeholder="Company (Optional)"
                                />

                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <input
                                            {...register("street", { required: true })}
                                            className="input input-bordered w-full"
                                            type="text"
                                            placeholder="Street"
                                        />
                                        {errors.street?.type === "required" && (
                                            <p className="text-red-400 text-sm mt-1">
                                                Street is required!
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <input
                                            {...register("city", { required: true })}
                                            className="input input-bordered w-full"
                                            type="text"
                                            placeholder="City"
                                        />
                                        {errors.city?.type === "required" && (
                                            <p className="text-red-400 text-sm mt-1 ">
                                                City is required!
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <input
                                    {...register("country", { required: true })}
                                    className="input input-bordered w-full"
                                    type="text"
                                    placeholder="Country"
                                />
                                {errors.country?.type === "required" && (
                                    <p className="text-red-400 text-sm ">
                                        Country is required!
                                    </p>
                                )}

                                <input
                                    {...register("phone", { required: true })}
                                    className="input input-bordered w-full"
                                    type="text"
                                    placeholder="Phone"
                                />
                                {errors.phone?.type === "required" && (
                                    <p className="text-red-400 text-sm ">
                                        Phone Number is required!
                                    </p>
                                )}


                                <input
                                    type="submit"
                                    value="Place Order"
                                    className=" btn btn-primary text-lg text-white mt-3"
                                    disabled={
                                        quantity < minimumUnit || quantity > availableUnit
                                    }
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
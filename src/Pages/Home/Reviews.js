import React from 'react';
import { useQuery } from 'react-query';
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Loading from '../Shared/Loading';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery("reviews", () =>
        fetch("http://localhost:5000/review").then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="pt-24 px-3">
            <div className="container mx-auto" style={{ maxWidth: "1100px" }}>
                <div className="mb-5">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-center ">
                        Customer Reviews
                    </h2>
                    <p className=" max-w-md mx-auto mt-5 mb-16">
                        Customers like our tools. Here are some of our clients
                        reviews.
                    </p>
                </div>
                <div className="mt-10">
                    <Swiper
                        breakpoints={{
                            250: {
                                width: 250,
                                slidesPerView: 1,
                            },
                            640: {
                                width: 640,
                                slidesPerView: 2.5,
                            },
                            1000: {
                                width: 1000,
                                slidesPerView: 3.5,
                            },
                        }}
                        slidesPerView={3.1}
                        spaceBetween={20}
                        centeredSlides={false}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                        grabCursor={true}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review._id} className="pb-10 mr-2">
                                <div className="flex justify-center flex-col items-center p-5 gap-2 border-2 border-slate-100 bg-base-100 rounded-lg">
                                    <img
                                        className=" w-16 rounded-full"
                                        src={review.img}
                                        alt=""
                                    />

                                    <div style={{ color: '#FFBC0B', fontSize: '18px' }} className=" font-light  mt-2 mb-2">
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                    </div>
                                    <h4 className="text-xl">{review.author}</h4>

                                    <blockquote className="italic text-slate-500">
                                        {review.comment}
                                    </blockquote>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
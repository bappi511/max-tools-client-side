import React from "react";
import { useQuery } from "react-query";
import Loading from "./Shared/Loading";

const Blogs = () => {
    const { data: blogs, isLoading } = useQuery("blogs", () =>
        fetch("blogs.json").then((res) => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className=" pt-20 pb-14 px-3">
            <div className="container mx-auto" style={{ maxWidth: "1000px" }}>
                <div className="blogs">
                    {blogs.map((blog) => (
                        <div key={blog.id} tabIndex="0" className="collapse mb-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                {blog.question}
                            </div>
                            <div className="collapse-content">
                                <p>{blog.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;

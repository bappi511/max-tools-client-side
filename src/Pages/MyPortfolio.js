import React from "react";
import { useQuery } from "react-query";
import Loading from "./Shared/Loading";

const MyPortfolio = () => {
    const { data: projects, isLoading } = useQuery("projects", () =>
        fetch("projects.json").then((res) => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className=" pt-20 pb-14 px-3">
            <div className="container mx-auto" style={{ maxWidth: "1000px" }}>
                <div className="text-left">
                    <h2 className="text-3xl">Bappi Hossain</h2>
                    <p>MERN Stack Developer</p>
                    <p>bappyhossani018@gmail.com</p>
                    <p className="text-lg mt-5">
                        <strong>Education</strong>: Diploma In Civil Technology (Graduated-2017) - Polytechnic Institute
                    </p>
                    <p className="text-lg">
                        <strong>List of technologies I use</strong>: Tailwind CSS,daysyui,
                        Javascript, React JS, Node JS,jwt,stripe, Firebase, Mongo DB
                    </p>
                    <h2 className="text-2xl mt-5 mb-2">Recent Projects:</h2>
                    <div className="flex flex-col md:flex-row gap-5">
                        {projects.map(project => <div key={project.id} className="p-4 shadow rounded-lg flex-1 border">
                            <img src={project.thumbnail} alt="" />
                            <h2 className="text-xl font-semibold mt-2">{project.name}</h2>
                            <p className="text-slate-500 mt-2 mb-2">{project.details}</p>
                            <p className="font-semibold">{project.technologies}</p>
                            <a className="text-white bg-sky-600 p-2 rounded-md mt-5 inline-block" href={project.live} target="_blank" rel="noopener noreferrer">Visit website</a>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;

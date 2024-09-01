import { useState } from "react";
import red from "../assets/red.svg";
import green from "../assets/green.svg";
import yellow from "../assets/yellow.svg";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants.js";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      yearlyPrice: 199,
      description:
        " This education plan focuses on improving learning through interactive methods, personalized support, and digital tools to enhance student engagement and outcomes.",
      green: green,
      yellow: yellow,
      red: red,
    },
    {
      name: "Advance",
      monthlyPrice: 39,
      yearlyPrice: 399,
      description:
        "The advance plan aims to deepen knowledge and skills through specialized courses innovative projects and mentorship driving expertise and professional growth",
      green: green,
      yellow: yellow,
      red: red,
    },
    {
      name: "Premium",
      monthlyPrice: 59,
      yearlyPrice: 599,
      description:
        "The premium plan offers personalized, in-depth learning with expert mentorship, exclusive resources, and advanced courses for maximum skill development.",
      green: green,
      yellow: yellow,
      red: red,
    },
  ];

  //   const tooglePrice = () => {
  //     setIsYearly(!isYearly);
  //   };

  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto py-10" id="pricing">
      <div className="text-center">
        <h1 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h1>
        <p className="text-tartinary md:w-1/3 mx-auto px-4">
          Here are all our plans, designed to cater to a variety of needs and
          goals. Explore these options to find the one that best fits your
          requirements and aspirations.
        </p>

        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full">
              <div
                className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${
                  isYearly ? "bg-primary ml-8" : "bg-slate-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            hidden
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>

      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto"
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
          >
            <h2 className="text-3xl font-bold text-center text-primary">
              {pkg.name}
            </h2>
            <p className="text-tartinary text-center my-5">{pkg.description}</p>
            <p className="mt-6 text-center text-secondary text-4xl font-bold">
              {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}{" "}
              <span className="text-base text-tartinary font-medium">
                {isYearly ? "/year" : "/month"}
              </span>
            </p>
            <ul>
              <li className="flex gap-2  items-center ">
                <img src={green} alt="" className="w-4 h-4" />
                Videos of Lessons
              </li>
              <li className="flex gap-2  items-center ">
                <img src={green} alt="" className="w-4 h-4" />
                Homework check
              </li>
              <li className="flex gap-2  items-center ">
                <img
                  src={pkg.name === "Start" ? yellow : green}
                  alt=""
                  className="w-4 h-4"
                />
                Additional practical task
              </li>
              <li className="flex gap-2  items-center ">
                <img
                  src={
                    pkg.name === "Start"
                      ? red
                      : pkg.name === "Advance"
                      ? yellow
                      : green
                  }
                  alt=""
                  className="w-4 h-4"
                />
                Monthly conferences
              </li>
              <li className="flex gap-2  items-center ">
                <img
                  src={
                    pkg.name === "Start"
                      ? red
                      : pkg.name === "Advance"
                      ? yellow
                      : green
                  }
                  alt=""
                  className="w-4 h-4"
                />
                Presonal advice from teachers
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="btnPrimary">Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

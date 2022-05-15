import React, { useContext } from "react";
import { NavMenuContext } from "../context/nav-menu-context";
import vu_img from "../logo/vu.png";
import uos_img from "../logo/uos.png";
import gcu_img from "../logo/gcu.jpg";
import cgs_img from "../logo/cgs.jpg";

const EducationPage = () => {
  const { mode } = useContext(NavMenuContext);
  return (
    <section id="education" className="flex flex-col items-center">
      <h1
        className={`text-4xl sm:text-5xl py-8 font-semibold text-center ${
          mode === "dark"
            ? "text-dark-mode-heading-text"
            : "text-white-mode-heading-text"
        }`}
      >
        Education
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-y-16 sm:grid-cols-2 gap-16 md:grid-cols-3 md:gap-x-16 md:gap-y-16 ">
        <div className="shadow-md rounded-md">
          <img className="mx-auto w-28 h-28 rounded-full object-cover" src={vu_img} alt="vu" />
          <div className="text-gray-500 text-center pt-2 px-2 text-sm md:text-xl font-semibold">
            ASSOCIATE DEGREE IN COMPUTER SCIENCE
          </div>
          <div className="text-sm md:text-xl text-center text-gray-500 pt-2 font-semibold">VU</div>
          <div className="text-sm text-center text-gray-500 pt-2 pb-2 font-semibold">12/12/21</div>
        </div>
        <div className="shadow-md rounded-md">
          <img className="mx-auto w-28 h-28 rounded-full object-cover" src={uos_img} alt="vu" />
          <div className="text-gray-500 text-center pt-2 px-2 text-sm md:text-xl font-semibold">
            Bachelors
          </div>
          <div className="text-sm md:text-xl text-center text-gray-500 pt-2 font-semibold">University Of Sargodha</div>
          <div className="text-sm text-center text-gray-500 pt-2 pb-2 font-semibold">13/11/2020</div>
        </div>
        <div className="shadow-md rounded-md">
          <img className="mx-auto w-28 h-28 rounded-full object-cover" src={gcu_img} alt="vu" />
          <div className="text-gray-500 text-center pt-2 px-2 text-sm md:text-xl font-semibold">
            FSC Pre Engineering
          </div>
          <div className="text-sm md:text-xl text-center text-gray-500 pt-2 font-semibold">GCU</div>
          <div className="text-sm text-center text-gray-500 pt-2 pb-2 font-semibold">15/12/2018</div>
        </div>
        <div className="shadow-md rounded-md">
          <img className="mx-auto w-28 h-28 rounded-full object-cover" src={cgs_img} alt="vu" />
          <div className="text-gray-500 text-center pt-2 px-2 text-sm md:text-xl font-semibold">
            Matric
          </div>
          <div className="text-sm md:text-xl text-center text-gray-500 pt-2 font-semibold">Connoieseur Grammar School</div>
          <div className="text-sm text-center text-gray-500 pt-2 pb-2 font-semibold">20/06/2016</div>
        </div>
      </div>
    </section>
  );
};
export default EducationPage;

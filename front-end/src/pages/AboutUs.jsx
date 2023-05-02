import React from "react";
import OurMission from "../components/pages/aboutus/OurMission";
const AboutUs = () => {
  return (
    <div className="mt-24">
      <div className="flex gap-x-8 mt-[5rem]">
        <div className="flex-1 relative mt-[4rem] text-[40px] ">
          <h1 className=" font-bold">
            {" "}
            <span className="text-[45px] text-transparent bg-clip-text  bg-gradient-to-l from-emerald-700 to-green-500">
              {" "}
              Discover Your Sound: <br />
            </span>{" "}
            Learn More About Our Music Platform and Team
          </h1>
          <h5 className="text-xl mt-4  font-medium text-gray-200 ">
            Our About Us page is dedicated to giving you a behind-the-scenes
            look at our music platform and the people who make it possible. From
            our passion for music to our dedication to providing the best user
            experience.
          </h5>
        </div>
        <div className="flex-1 ">
          <img className=" rounded-xl" src={"/about.jpg"} />
        </div>
      </div>
      <OurMission />
    </div>
  );
};

export default AboutUs;

import React from "react";

const OurTeam = () => {
  return (
    <div className="my-32">
      <h1 className="text-4xl font-bold">Our Team</h1>
      <div className="grid grid-cols-4 mt-16">
        {TEAM.map((props, i) => {
          return (
            <div className="flex flex-col items-center gap-5" key={i}>
              <img
                className=" rounded-full object-cover h-[8rem] w-[8rem] "
                src={props.pic}
              />
              <p className=" font-medium text-lg">{props.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const TEAM = [
  {
    name: "Anas Ben Daira",
    pic: "/team/anas.jpg",
  },
  {
    name: "Mohamed Amine Tebini",
    pic: "/team/hama.jpg",
  },
  {
    name: "Leith Ben Hassen",
    pic: "/team/leith.jpg",
  },
  {
    name: "Mehdi Bhk",
    pic: "/team/bhk.jpg",
  },
];
export default OurTeam;

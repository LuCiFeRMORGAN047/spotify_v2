import React from "react";

const OurValues = () => {
  return (
    <div className="mt-32">
      <h1 className="text-4xl font-bold">Our Values</h1>
      <h5 className="w-[70%] font-medium text-xl mt-6">
        We believe in fostering a culture of innovation, inclusivity, and
        excellence. Our team is passionate about music and committed to
        providing the best possible experience for our users. We value:
      </h5>
      <div className="grid grid-cols-3 gap-4 gap-y-5 mt-16">
        {values.map((props, i) => {
          return (
            <div
              key={i}
              className=" bg-neutral-900 hover:bg-neutral-800 rounded-lg flex overflow-hidden cursor-pointer"
            >
              <span className="w-full max-w-[4px] bg-gradient-to-b from-emerald-700 to-green-500" />

              <div className="flex flex-col p-4">
                <h1 className="font-semibold text-lg mt-2 ">{props.title}</h1>
                <p className=" mt-3 text-neutral-200 font-medium">
                  {props.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const values = [
  {
    title: "Music Discovery",
    content:
      "We believe in the power of music to broaden horizons and connect people from diverse backgrounds. We strive to create a platform that celebrates musical diversity and provides a wide range of choices for users.",
  },
  {
    title: "User Experience",
    content:
      "We believe in putting the user first. We are dedicated to providing a seamless and personalized experience that makes it easy for users to find, play, and share music.",
  },
  {
    title: "Creativity",
    content:
      "We believe in empowering artists and creators to express themselves and share their work with the world. We are committed to providing tools and resources to help them reach new audiences and achieve their creative goals.",
  },
  {
    title: "Inclusivity",
    content:
      "We believe in creating a platform that is accessible to everyone. We are committed to fostering a diverse and inclusive community that celebrates differences and promotes understanding.",
  },
  {
    title: "Integrity",
    content:
      "We believe in doing the right thing, even when no one is watching. We are committed to transparency, honesty, and ethical business practices in everything we do.",
  },
  {
    title: "Community",
    content:
      "We believe in the power of music to bring people together. We are committed to building a vibrant community of music lovers and creators who share their passion for music with one another. We strive to create a platform that fosters connection, collaboration, and mutual support.",
  },
];
export default OurValues;

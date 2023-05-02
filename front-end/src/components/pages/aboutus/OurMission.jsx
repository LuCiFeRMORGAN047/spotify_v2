import {
  FiUsers,
  FiDollarSign,
  FiDownloadCloud,
  FiHeadphones,
} from "react-icons/fi";
import OurValues from "./OurValues";
import OurTeam from "./OurTeam";
const OurMission = () => {
  return (
    <div className="mt-32">
      <h1 className="text-4xl font-bold">Our Mission</h1>
      <div className="grid grid-cols-[70%_30%] mt-6 gap-4">
        <div
          className="mb-auto flex flex-col
                gap-y-4
                 text-xl
                  font-medium
                   self-center
             "
        >
          <h1>
            At{" "}
            <span className=" font-bold text-transparent bg-clip-text  bg-gradient-to-l from-emerald-700 to-green-500">
              Spotify
            </span>
            , we believe that music has the power to connect people, inspire
            creativity, and bring joy to everyday life. Our mission is to create
            a platform that empowers music lovers to discover, share, and enjoy
            music like never before.
          </h1>
          <h1>
            We are dedicated to providing a seamless and personalized experience
            that makes it easy for users to explore new artists, genres, and
            playlists, while also providing tools for artists and creators to
            share their work with the world
          </h1>
          <h1>
            Whether you're a music aficionado or a casual listener, our mission
            is to help you find the perfect soundtrack for every moment
          </h1>
        </div>
        <div className="flex-[1]">
          <Statistic />
        </div>
      </div>
      <img
        className=" object-cover mt-20 rounded-xl h-[512px] w-full"
        src="/about2.jpg"
      />
      <OurValues />
      <OurTeam />
    </div>
  );
};

export default OurMission;
const Statistic = () => {
  return (
    <div className="ml-auto grid grid-cols-2 gap-y-16">
      {STATS.map(({ label, value, Icon }, i) => (
        <div className="flex flex-col items-center" key={i}>
          <Icon size={48} className="text-emerald-500" />
          <span className="text-2xl font-semibold mt-2">{value}</span>
          <span className="text-neutral-200">{label}</span>
        </div>
      ))}
    </div>
  );
};

const STATS = [
  { label: "Users", value: "1.8M", Icon: FiUsers },
  { label: "Downloads", value: "1.3M", Icon: FiDownloadCloud },
  { label: "Earnings", value: "114M", Icon: FiDollarSign },
  { label: "Monthly Listeners", value: "1.3M", Icon: FiHeadphones },
];

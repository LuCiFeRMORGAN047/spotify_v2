import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="pt-36 -mt-16 px-16 -mx-16 relative">
      <div>
        <img
          src="/hero.jpg"
          alt="hero"
          className="absolute -z-20 top-0 left-0 w-full h-[640px] object-cover"
        />
        <div className="absolute -z-10 top-0 left-0 w-full h-[640px] inset-0 bg-gradient-to-b from-transparent to-neutral-950 " />
      </div>
      <div className="text-center max-w-4xl mx-auto">
        <h2 className=" text-7xl font-bold  text-transparent bg-clip-text  bg-gradient-to-l from-emerald-600 to-green-500">
          Your Music, Your Way!
        </h2>
        <h2 className="text-2xl mt-4 font-semibold text-white">
          Escape into your own world of music with our curated playlists and
          personalized recommendations.
        </h2>
      </div>
      <div className="flex items-center justify-center gap-8 mt-10 mx-auto">
        <Link
          to={"/services"}
          className="text-lg text-white font-medium bg-gradient-to-bl hover:bg-green-500 from-emerald-700 to-green-500 px-5 py-2 rounded-full transition-all active:scale-[0.98]"
        >
          Join now
        </Link>
        <Link
          to={"/about-us"}
          className="flex gap-1 items-center transition-all active:scale-[0.98]"
        >
          Learn more <FiArrowRight />
        </Link>
      </div>
    </div>
  );
}

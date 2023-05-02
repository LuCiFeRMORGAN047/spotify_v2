import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <div
      style={{
        backgroundImage: "url(/services.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="max-w-7xl mx-auto relative mt-40 px-10 py-48 rounded-xl bg-gradient-to-tr from-emerald-700 to-green-500 flex flex-col justify-between items-center"
    >
      <h2 className="font-bold text-5xl">
        Start Your Spotify Subscription Today
      </h2>
      <h3 className="font-semibold text-3xl mt-2">
        Enjoy ad-free music streaming and more.
      </h3>
      <Link
        to="/services"
        className="bg-white mt-8 text-neutral-800 rounded-lg px-4 py-3 font-semibold transition-all active:scale-[0.98]"
      >
        Unlock the Music
      </Link>
    </div>
  );
}

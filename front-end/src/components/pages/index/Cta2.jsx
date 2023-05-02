import { Link } from "react-router-dom";

export default function Cta2() {
  return (
    <div className="max-w-7xl mx-auto relative mt-40 p-10 rounded-xl bg-gradient-to-tr from-purple-700 to-pink-600 flex justify-between items-center">
      <div>
        <h2 className="font-bold text-3xl">Reach Out to Us</h2>
        <h3 className="font-semibold text-xl mt-2">
          We value your feedback and are always happy to hear from our users
        </h3>
      </div>
      <Link
        to={"/contact-us"}
        className="bg-white text-neutral-800 rounded-lg px-4 py-3 font-semibold transition-all active:scale-[0.98]"
      >
        Contact Us
      </Link>
      <img
        src="/cta.png"
        alt="cta"
        className="absolute right-[25%] -top-10 w-28 transition-transform bounce "
      />
    </div>
  );
}

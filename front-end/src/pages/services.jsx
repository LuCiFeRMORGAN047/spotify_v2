import { FiCheck } from "react-icons/fi";

export default function Services() {
  return (
    <div className="text-center mt-24">
      <h1 className="text-5xl font-bold">The Ultimate Listening Experience</h1>
      <h2 className="text-2xl mt-4 max-w-3xl mx-auto font-medium text-neutral-100">
        Treat yourself to the ultimate music listening experience with our
        premium plans at unbeatable prices.
      </h2>

      <div className="mt-16 grid lg:grid-cols-3 grid-cols-1 max-w-7xl mx-auto justify-between gap-8">
        {CARDS.map((props, i) => (
          <Card key={i} {...props} />
        ))}
      </div>
    </div>
  );
}

function Card({ title, description, features, price, isPrimary = false }) {
  return (
    <div className="border border-neutral-700 p-4 rounded-xl flex flex-col">
      <h3 className="font-semibold text-3xl mt-6">{title}</h3>
      <h4 className=" text-lg mt-1 text-neutral-300 mx-1">{description}</h4>
      <h4 className="font-bold text-4xl mt-4 ">
        ${price}{" "}
        <span className="font-normal text-neutral-300 text-base">/month</span>{" "}
      </h4>
      <div className="flex flex-col gap-3 mt-6 mb-8 text-start">
        {features.map((feature, i) => (
          <span className="flex gap-2 items-center" key={i}>
            <FiCheck size={20} className="text-emerald-500" />
            {feature}
          </span>
        ))}
      </div>
      <button
        className={`${
          isPrimary
            ? "bg-gradient-to-l from-emerald-700 to-green-500"
            : "bg-white text-neutral-950"
        } py-3 w-full rounded-lg font-semibold mt-auto transition-all active:scale-[0.99]`}
      >
        Get started
      </button>
    </div>
  );
}

const CARDS = [
  {
    title: "Starter",
    description: "The perfect plan for occasional music listeners",
    features: [
      "Access to a limited library of songs",
      "Ad-supported listening experience",
      "Limited skips per hour",
      "No offline playback",
      "Standard audio quality",
    ],
    price: "3,99",
  },
  {
    title: "Standard",
    description: "The most popular plan for music lovers",
    features: [
      "Access to a larger library of songs",
      "Ad-free listening experience",
      "Unlimited skips",
      "Offline playback on mobile devices",
      "High-quality audio streaming",
    ],
    price: "7,99",
    isPrimary: true,
  },
  {
    title: "Premium",
    description:
      "Treat yourself to the ultimate listening experience with our premium plan",
    features: [
      "Access to the entire music library",
      "Ad-free listening experience",
      "Unlimited skips and replays",
      "Offline playback on all devices",
      "High-fidelity audio streaming",
      "Access to live events and concerts",
    ],
    price: "9,99",
  },
];

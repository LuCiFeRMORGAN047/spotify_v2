import { Disclosure, Transition } from "@headlessui/react";
import { FiChevronUp } from "react-icons/fi";

export default function Faq() {
  return (
    <div className="mt-40 text-center">
      <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
      <h2 className="font-medium text-2xl text-neutral-100 mt-2 max-w-5xl mx-auto">
        Find answers to commonly asked questions about Spotify.
      </h2>
      <div className="flex gap-8 mt-24 items-center">
        <div className="text-start flex flex-col max-w-2xl items-start shrink-0">
          {FAQ.map(({ question, answer }, i) => (
            <Disclosure key={i}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-8  text-2xl font-semibold w-full flex justify-between  border-t border-t-neutral-700">
                    <span>{question}</span>{" "}
                    <FiChevronUp
                      size={24}
                      className={`${!open ? "rotate-180 transform" : ""} `}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="text-gray-100 pb-8 -mt-4 text-lg">
                      {answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
        <div>
          <img src="/faq.jpg" alt="faq" className="rounded-xl object-cover" />
        </div>
      </div>
    </div>
  );
}

const FAQ = [
  {
    question: "What is Spotify?",
    answer:
      "Spotify is a music streaming service that offers a vast library of songs, personalized recommendations, high-quality streaming, and more. With Spotify, you can listen to your favorite music anytime, anywhere.",
  },
  {
    question: "How much does Spotify cost?",
    answer:
      "We offer three different subscription tiers: Basic, Premium, and Ultimate. The Basic tier is free, while the Premium and Ultimate tiers offer additional features and benefits at a monthly or yearly cost. Check out our Pricing page for more information.",
  },
  {
    question: "Can I use Spotify on multiple devices?",
    answer:
      "Yes, you can use Spotify on multiple devices, including desktop, mobile, and smart speakers. Simply log in to your account on each device to access your music library and playlists.",
  },
  {
    question: "Can I download songs for offline listening?",
    answer:
      "Yes, with a Premium or Ultimate subscription, you can download songs and playlists for offline listening. This feature is not available with the Basic subscription.",
  },
  {
    question: "How does Spotify recommend new music?",
    answer:
      "We use a combination of algorithms and user data to recommend new songs, artists, and playlists based on your listening history and preferences. The more you use Spotify, the better our recommendations become.",
  },
  {
    question: "Is Spotify available in my country?",
    answer:
      "Spotify is currently available in [list of countries where the service is available]. We are constantly expanding our reach, so check back regularly for updates.",
  },
  {
    question: "How can I cancel my Spotify subscription?",
    answer:
      "You can cancel your Spotify subscription at any time by logging into your account and following the cancellation process. If you have any issues, please contact our customer support team for assistance.",
  },
  {
    question: "Can I share my Spotify account with others?",
    answer:
      "We do not recommend sharing your Spotify account with others, as it may violate our terms of service. However, we do offer family plans that allow multiple users to share a single account. Check out our Pricing page for more information.",
  },
];

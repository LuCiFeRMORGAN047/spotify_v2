import { FiFacebook, FiInstagram, FiYoutube, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mx-auto max-w-[1920px]">
      <div className="mx-16 px-8 rounded-xl bg-neutral-900 py-8 mb-12">
        <div className="flex gap-24 justify-between">
          <div className="max-w-md">
            <Link
              to={"/"}
              className="font-bold text-xl text-transparent bg-clip-text  bg-gradient-to-l from-emerald-700 to-green-500"
            >
              Spotify
            </Link>
            <p className="mt-2 ">
              Escape into your own world of music with our curated playlists and
              personalized recommendations.
            </p>
            <div className="flex gap-6 mt-8">
              <FiFacebook
                size={20}
                className="cursor-pointer text-neutral-400"
              />
              <FiInstagram
                size={20}
                className="cursor-pointer text-neutral-400"
              />
              <FiTwitter
                size={20}
                className="cursor-pointer text-neutral-400"
              />
              <FiYoutube
                size={20}
                className="cursor-pointer text-neutral-400"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-16">
            {LINKS.map(({ links, title }, i) => (
              <div key={i}>
                <h3 className="font-semibold text-lg">{title}</h3>
                <ul className="flex flex-col gap-2 mt-3">
                  {links.map((link, i) => (
                    <Link key={i} href="#">
                      <li className="text-neutral-400 font-medium">{link}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const LINKS = [
  {
    title: "Solutions",
    links: ["Marketing", "Analytics", "Commerce", "Insights"],
  },
  {
    title: "Support",
    links: ["Pricing", "Documentation", "Guides", "API Status"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "Legal",
    links: ["Claim", "Privacy", "Terms"],
  },
];
